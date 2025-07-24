#!/usr/bin/env powershell

Write-Host "Cleaning up Moodie deployment..." -ForegroundColor Red

# Delete deployments
Write-Host "Deleting deployments..." -ForegroundColor Yellow
kubectl delete deployment moodie-backend-deployment
kubectl delete deployment prometheus-deployment

# Delete services
Write-Host "Deleting services..." -ForegroundColor Yellow
kubectl delete service moodie-backend-service
kubectl delete service prometheus-service

# Delete ConfigMap
Write-Host "Deleting ConfigMap..." -ForegroundColor Yellow
kubectl delete configmap prometheus-config

Write-Host "Cleanup complete!" -ForegroundColor Green