# Moodie Deployment Guide

This document describes the improved Docker and Kubernetes deployment setup for the Moodie application.

## 🚀 What's New

### Docker Improvements
- **Updated to Node.js 20**: Upgraded from EOL Node.js 14 to the latest LTS version
- **Multi-stage build optimization**: Separate stages for Python dependencies, Node.js dependencies, and production
- **Security enhancements**: Non-root user execution, minimal attack surface
- **Better layer caching**: Optimized for faster rebuilds
- **Health checks**: Built-in Docker health monitoring
- **Smaller image size**: Optimized production image (~279MB)

### Kubernetes Improvements
- **Enhanced probes**: Added startup, liveness, and readiness probes with proper timeouts
- **Resource optimization**: Reduced memory and CPU requests/limits for better efficiency
- **Local development support**: ImagePullPolicy set to Never for local testing
- **Better monitoring**: Improved Prometheus integration

### Testing & Automation
- **Comprehensive test script**: `test-deployment.ps1` automates the entire pipeline
- **YAML validation**: Automated validation of all Kubernetes manifests
- **End-to-end testing**: From Docker build to deployment verification

## 📋 Prerequisites

- Docker Desktop
- kubectl
- Minikube
- PowerShell (Windows) or PowerShell Core (cross-platform)

## 🛠️ Quick Start

### Option 1: Automated Testing (Recommended)
```powershell
# Run the comprehensive test script
./test-deployment.ps1

# Or with options:
./test-deployment.ps1 -SkipDockerBuild -SkipMinikubeStart -CleanupAfter
```

### Option 2: Manual Steps

#### 1. Build Docker Image
```bash
docker build -t moodie:latest .
```

#### 2. Test Docker Container
```bash
# Run container
docker run --rm -d -p 5000:5000 --name moodie-test moodie:latest

# Test health endpoint
curl http://localhost:5000/metrics

# Stop container
docker stop moodie-test
```

#### 3. Start Minikube
```powershell
# Use the provided script
powershell -ExecutionPolicy Bypass -File Deployement/scripts/start-minikube.ps1

# Or manually
minikube start --driver=docker --memory=4096 --cpus=2
minikube addons enable metrics-server
minikube addons enable dashboard
```

#### 4. Load Image into Minikube
```bash
minikube image load moodie:latest
```

#### 5. Deploy to Kubernetes
```bash
cd Deployement

# Deploy ConfigMap
kubectl apply -f prometheus-configmap.yml

# Deploy application
kubectl apply -f deployment.yaml

# Deploy Prometheus
kubectl apply -f prometheus.yml

# Wait for deployments
kubectl wait --for=condition=available --timeout=300s deployment/moodie-backend-deployment
kubectl wait --for=condition=available --timeout=300s deployment/prometheus-deployment
```

#### 6. Access Services
```bash
# Port forward to access services
kubectl port-forward service/moodie-backend-service 8080:80
kubectl port-forward service/prometheus-service 9090:9090

# Or get Minikube URLs (requires keeping terminal open)
minikube service moodie-backend-service --url
minikube service prometheus-service --url
```

## 📊 Monitoring & Health Checks

### Application Health
- **Health endpoint**: `http://localhost:8080/metrics`
- **Prometheus metrics**: Available at the same endpoint
- **Docker health check**: Automatic container health monitoring

### Kubernetes Probes
- **Startup probe**: Ensures application starts within 30 seconds
- **Liveness probe**: Monitors application health every 10 seconds
- **Readiness probe**: Checks if application is ready to serve traffic

## 🧹 Cleanup

### Using the test script:
```powershell
./test-deployment.ps1 -CleanupAfter
```

### Manual cleanup:
```bash
cd Deployement
kubectl delete -f deployment.yaml
kubectl delete -f prometheus.yml
kubectl delete -f prometheus-configmap.yml
```

### Stop Minikube:
```bash
minikube stop
minikube delete  # Complete removal
```

## 📁 File Structure

```
├── Dockerfile                     # Improved multi-stage Docker build
├── package.json                   # Updated with correct start script and engines
├── test-deployment.ps1            # Comprehensive test script
├── DEPLOYMENT_README.md           # This file
└── Deployement/
    ├── deployment.yaml            # Updated Kubernetes deployment
    ├── prometheus.yml             # Prometheus deployment
    ├── prometheus-configmap.yml   # Prometheus configuration
    └── scripts/
        ├── start-minikube.ps1     # Minikube startup script
        ├── deploy.ps1             # Deployment script
        ├── check-status.ps1       # Status checking script
        └── cleanup.ps1            # Cleanup script
```

## 🔧 Configuration

### Environment Variables
- `NODE_ENV`: Set to "production" in Kubernetes deployment
- `VIRTUAL_ENV`: Python virtual environment path (automatically set)
- `PATH`: Updated to include Python virtual environment

### Resource Limits
- **Memory**: 128Mi request, 256Mi limit
- **CPU**: 100m request, 250m limit
- **Replicas**: 2 for high availability

## 🐛 Troubleshooting

### Common Issues

1. **Docker build fails**
   - Ensure Docker Desktop is running
   - Check internet connectivity for package downloads

2. **Minikube won't start**
   - Ensure Docker Desktop is running
   - Try: `minikube delete && minikube start`

3. **Pods not starting**
   - Check logs: `kubectl logs -l app=moodie-backend`
   - Verify image was loaded: `minikube image ls | grep moodie`

4. **Services not accessible**
   - Use port-forwarding instead of minikube service URLs
   - Check service status: `kubectl get services`

### Useful Commands
```bash
# Check pod status
kubectl get pods

# View logs
kubectl logs -l app=moodie-backend

# Describe deployment
kubectl describe deployment moodie-backend-deployment

# Check events
kubectl get events --sort-by=.metadata.creationTimestamp
```

## 🎯 Next Steps

1. **CI/CD Integration**: Integrate the test script into your CI/CD pipeline
2. **Production Deployment**: Adapt for production Kubernetes clusters
3. **Monitoring**: Set up Grafana dashboards for Prometheus metrics
4. **Security**: Implement network policies and RBAC
5. **Scaling**: Configure horizontal pod autoscaling

## 📝 Notes

- The Docker image uses a non-root user for security
- All YAML files have been validated with `kubectl --dry-run`
- The test script provides comprehensive validation of the entire pipeline
- Resource limits are optimized for development; adjust for production workloads
