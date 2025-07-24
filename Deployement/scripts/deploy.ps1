#!/usr/bin/env powershell

Write-Host "Deploying Moodie Backend to Minikube..." -ForegroundColor Green

# Apply ConfigMap first
Write-Host "Creating Prometheus ConfigMap..." -ForegroundColor Yellow
kubectl apply -f prometheus-configmap.yml

# Deploy the backend application
Write-Host "Deploying Moodie Backend..." -ForegroundColor Yellow
kubectl apply -f deployment.yaml

# Deploy Prometheus
Write-Host "Deploying Prometheus..." -ForegroundColor Yellow
kubectl apply -f prometheus.yml

# Wait for deployments to be ready
Write-Host "Waiting for deployments to be ready..." -ForegroundColor Yellow
kubectl wait --for=condition=available --timeout=300s deployment/moodie-backend-deployment
kubectl wait --for=condition=available --timeout=300s deployment/prometheus-deployment

# Get service URLs
Write-Host "Getting service information..." -ForegroundColor Yellow
$moodieUrl = minikube service moodie-backend-service --url
$prometheusUrl = minikube service prometheus-service --url
Write-Host "Moodie Backend URL: $moodieUrl" -ForegroundColor Cyan
Write-Host "Prometheus URL: $prometheusUrl" -ForegroundColor Cyan

# Show pod status
Write-Host "Pod status:" -ForegroundColor Yellow
kubectl get pods -l app=moodie-backend
kubectl get pods -l app=prometheus

Write-Host "Deployment complete!" -ForegroundColor Green