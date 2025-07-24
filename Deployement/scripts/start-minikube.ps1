#!/usr/bin/env powershell

Write-Host "Starting Minikube..." -ForegroundColor Green

# Start minikube with recommended settings
minikube start --driver=docker --memory=4096 --cpus=2

# Enable required addons
Write-Host "Enabling addons..." -ForegroundColor Yellow
minikube addons enable metrics-server
minikube addons enable dashboard

# Check status
Write-Host "Minikube status:" -ForegroundColor Yellow
minikube status

Write-Host "Minikube is ready!" -ForegroundColor Green