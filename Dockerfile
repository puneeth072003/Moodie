# Build stage for Python dependencies
FROM python:3.11-alpine AS python-builder

# Install Python dependencies
RUN python -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir praw vaderSentiment

# Build stage for Node.js
FROM node:20-alpine AS node-builder

WORKDIR /app

# Copy package files first for better layer caching
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Production stage
FROM node:20-alpine AS production

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S moodie -u 1001

# Install Python runtime
RUN apk add --no-cache python3 py3-pip

WORKDIR /app

# Copy Python virtual environment from python-builder
COPY --from=python-builder /opt/venv /opt/venv

# Copy Node.js dependencies from node-builder
COPY --from=node-builder /app/node_modules ./node_modules

# Copy application code
COPY --chown=moodie:nodejs . .

# Set environment variables
ENV NODE_ENV=production
ENV VIRTUAL_ENV=/opt/venv
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

# Switch to non-root user
USER moodie

# Expose port
EXPOSE 5000

# Add health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:5000/metrics', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

# Start the application
CMD ["node", "app.js"]