# Simple Moodie Deployment Test Script

Write-Host "=== Moodie Deployment Test ===" -ForegroundColor Cyan

# Test 1: Check prerequisites
Write-Host "`n1. Checking Prerequisites..." -ForegroundColor Yellow
$commands = @("docker", "kubectl", "minikube")
foreach ($cmd in $commands) {
    if (Get-Command $cmd -ErrorAction SilentlyContinue) {
        Write-Host "✓ $cmd is available" -ForegroundColor Green
    } else {
        Write-Host "✗ $cmd is not available" -ForegroundColor Red
    }
}

# Test 2: Validate YAML files
Write-Host "`n2. Validating YAML files..." -ForegroundColor Yellow
$yamlFiles = @(
    "Deployement/prometheus-configmap.yml",
    "Deployement/deployment.yaml", 
    "Deployement/prometheus.yml"
)

foreach ($file in $yamlFiles) {
    Write-Host "Validating $file..." -ForegroundColor White
    $result = kubectl apply --dry-run=client -f $file 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ $file is valid" -ForegroundColor Green
    } else {
        Write-Host "✗ $file validation failed" -ForegroundColor Red
        Write-Host $result -ForegroundColor Red
    }
}

# Test 3: Check current deployment status
Write-Host "`n3. Checking current deployment status..." -ForegroundColor Yellow
kubectl get deployments 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Kubernetes cluster is accessible" -ForegroundColor Green
    kubectl get pods
    kubectl get services
} else {
    Write-Host "✗ Cannot access Kubernetes cluster" -ForegroundColor Red
}

Write-Host "`n=== Test Complete ===" -ForegroundColor Cyan
