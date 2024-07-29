# Build stage
FROM node:14-alpine AS build

WORKDIR /moodie

# Install Python 3 and necessary packages
RUN apk add --no-cache python3 py3-pip python3-dev build-base

COPY package*.json ./
RUN npm install

# Install Python dependencies
RUN python3 -m venv /opt/venv && \
    /opt/venv/bin/pip install --no-cache-dir praw vaderSentiment

COPY . .

# Runtime stage
FROM node:14-alpine

WORKDIR /moodie

# Copy over the Node.js and Python installations from the build stage
COPY --from=build /moodie /moodie
COPY --from=build /opt/venv /opt/venv

# Set environment variables
ENV VIRTUAL_ENV=/opt/venv
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

# Make sure Python and pip are available
RUN apk add --no-cache python3 py3-pip && \
    ln -sf /opt/venv/bin/python3 /usr/local/bin/python3 && \
    ln -sf /opt/venv/bin/pip /usr/local/bin/pip

EXPOSE 5000

CMD ["npm", "start"]