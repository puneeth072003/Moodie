#!/usr/bin/env powershell

Write-Host "Checking Moodie deployment status..." -ForegroundColor Green

# Check deployments
Write-Host "`nDeployments:" -ForegroundColor Yellow
kubectl get deployments

# Check services
Write-Host "`nServices:" -ForegroundColor Yellow
kubectl get services

# Check pods
Write-Host "`nPods:" -ForegroundColor Yellow
kubectl get pods

# Check service URLs
Write-Host "`nService URLs:" -ForegroundColor Yellow
try {
    $moodieUrl = minikube service moodie-backend-service --url
    $prometheusUrl = minikube service prometheus-service --url
    Write-Host "Moodie Backend: $moodieUrl" -ForegroundColor Cyan
    Write-Host "Prometheus: $prometheusUrl" -ForegroundColor Cyan
} catch {
    Write-Host "Services not ready yet or minikube not running" -ForegroundColor Red
}