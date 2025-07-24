# Comprehensive Moodie Deployment Test Script
# This script tests the entire deployment pipeline including Docker build, YAML validation, and deployment verification

param(
    [switch]$SkipDockerBuild,
    [switch]$SkipMinikubeStart,
    [switch]$CleanupAfter
)

$ErrorActionPreference = "Stop"

Write-Host "=== Moodie Deployment Test Script ===" -ForegroundColor Cyan
Write-Host "Testing Docker build, YAML validation, and Kubernetes deployment" -ForegroundColor White

# Function to check if a command exists
function Test-Command($cmdname) {
    return [bool](Get-Command -Name $cmdname -ErrorAction SilentlyContinue)
}

# Function to wait for deployment
function Wait-ForDeployment($deploymentName, $timeout = 300) {
    Write-Host "Waiting for deployment $deploymentName to be ready..." -ForegroundColor Yellow
    $result = kubectl wait --for=condition=available --timeout=${timeout}s deployment/$deploymentName
    if ($LASTEXITCODE -ne 0) {
        throw "Deployment $deploymentName failed to become ready within $timeout seconds"
    }
    Write-Host "✓ Deployment $deploymentName is ready" -ForegroundColor Green
}

# Function to test endpoint
function Test-Endpoint($url, $expectedStatus = 200) {
    try {
        $response = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 10
        if ($response.StatusCode -eq $expectedStatus) {
            Write-Host "✓ Endpoint $url is responding correctly (Status: $($response.StatusCode))" -ForegroundColor Green
            return $true
        } else {
            Write-Host "✗ Endpoint $url returned unexpected status: $($response.StatusCode)" -ForegroundColor Red
            return $false
        }
    } catch {
        Write-Host "✗ Failed to reach endpoint $url : $($_.Exception.Message)" -ForegroundColor Red
        return $false
    }
}

try {
    # Step 1: Check prerequisites
    Write-Host "`n=== Step 1: Checking Prerequisites ===" -ForegroundColor Cyan
    
    $requiredCommands = @("docker", "kubectl", "minikube")
    foreach ($cmd in $requiredCommands) {
        if (Test-Command $cmd) {
            Write-Host "✓ $cmd is available" -ForegroundColor Green
        } else {
            throw "$cmd is not available. Please install it first."
        }
    }

    # Step 2: Docker Build Test
    if (-not $SkipDockerBuild) {
        Write-Host "`n=== Step 2: Testing Docker Build ===" -ForegroundColor Cyan
        
        Write-Host "Building Docker image..." -ForegroundColor Yellow
        docker build -t moodie:latest . --quiet
        if ($LASTEXITCODE -ne 0) {
            throw "Docker build failed"
        }
        Write-Host "✓ Docker image built successfully" -ForegroundColor Green
        
        # Test container run
        Write-Host "Testing container startup..." -ForegroundColor Yellow
        $containerId = docker run --rm -d -p 5001:5000 --name moodie-test moodie:latest
        if ($LASTEXITCODE -ne 0) {
            throw "Failed to start container"
        }
        
        Start-Sleep -Seconds 5
        
        # Test health endpoint
        $testResult = Test-Endpoint "http://localhost:5001/metrics"
        
        # Cleanup test container
        docker stop moodie-test | Out-Null
        
        if ($testResult) {
            Write-Host "✓ Container test passed" -ForegroundColor Green
        } else {
            throw "Container test failed"
        }
    } else {
        Write-Host "`n=== Step 2: Skipping Docker Build ===" -ForegroundColor Yellow
    }

    # Step 3: YAML Validation
    Write-Host "`n=== Step 3: Validating YAML Files ===" -ForegroundColor Cyan
    
    $yamlFiles = @(
        "Deployement/prometheus-configmap.yml",
        "Deployement/deployment.yaml", 
        "Deployement/prometheus.yml"
    )
    
    foreach ($file in $yamlFiles) {
        Write-Host "Validating $file..." -ForegroundColor Yellow
        kubectl apply --dry-run=client -f $file | Out-Null
        if ($LASTEXITCODE -ne 0) {
            throw "YAML validation failed for $file"
        }
        Write-Host "✓ $file is valid" -ForegroundColor Green
    }

    # Step 4: Minikube Setup
    if (-not $SkipMinikubeStart) {
        Write-Host "`n=== Step 4: Setting up Minikube ===" -ForegroundColor Cyan
        
        $minikubeStatus = minikube status 2>$null
        if ($LASTEXITCODE -ne 0) {
            Write-Host "Starting Minikube..." -ForegroundColor Yellow
            minikube start --driver=docker --memory=4096 --cpus=2
            if ($LASTEXITCODE -ne 0) {
                throw "Failed to start Minikube"
            }
        }
        Write-Host "✓ Minikube is running" -ForegroundColor Green
        
        # Load Docker image into Minikube
        Write-Host "Loading Docker image into Minikube..." -ForegroundColor Yellow
        minikube image load moodie:latest
        if ($LASTEXITCODE -ne 0) {
            throw "Failed to load Docker image into Minikube"
        }
        Write-Host "✓ Docker image loaded into Minikube" -ForegroundColor Green
    } else {
        Write-Host "`n=== Step 4: Skipping Minikube Start ===" -ForegroundColor Yellow
    }

    # Step 5: Kubernetes Deployment
    Write-Host "`n=== Step 5: Testing Kubernetes Deployment ===" -ForegroundColor Cyan
    
    Push-Location "Deployement"
    try {
        # Deploy ConfigMap
        Write-Host "Deploying Prometheus ConfigMap..." -ForegroundColor Yellow
        kubectl apply -f prometheus-configmap.yml
        if ($LASTEXITCODE -ne 0) {
            throw "Failed to deploy ConfigMap"
        }
        
        # Deploy application
        Write-Host "Deploying Moodie Backend..." -ForegroundColor Yellow
        kubectl apply -f deployment.yaml
        if ($LASTEXITCODE -ne 0) {
            throw "Failed to deploy Moodie Backend"
        }
        
        # Deploy Prometheus
        Write-Host "Deploying Prometheus..." -ForegroundColor Yellow
        kubectl apply -f prometheus.yml
        if ($LASTEXITCODE -ne 0) {
            throw "Failed to deploy Prometheus"
        }
        
        # Wait for deployments
        Wait-ForDeployment "moodie-backend-deployment"
        Wait-ForDeployment "prometheus-deployment"
        
        # Check pod status
        Write-Host "`nPod Status:" -ForegroundColor Yellow
        kubectl get pods
        
        # Check service status
        Write-Host "`nService Status:" -ForegroundColor Yellow
        kubectl get services
        
        Write-Host "✓ All deployments are ready" -ForegroundColor Green
        
    } finally {
        Pop-Location
    }

    # Step 6: Cleanup (if requested)
    if ($CleanupAfter) {
        Write-Host "`n=== Step 6: Cleaning Up ===" -ForegroundColor Cyan
        
        Push-Location "Deployement"
        try {
            kubectl delete -f deployment.yaml --ignore-not-found=true
            kubectl delete -f prometheus.yml --ignore-not-found=true
            kubectl delete -f prometheus-configmap.yml --ignore-not-found=true
            Write-Host "✓ Cleanup completed" -ForegroundColor Green
        } finally {
            Pop-Location
        }
    }

    Write-Host "`n=== All Tests Passed! ===" -ForegroundColor Green
    Write-Host "The Moodie application has been successfully tested and deployed." -ForegroundColor White
    
    if (-not $CleanupAfter) {
        Write-Host "`nTo access the services:" -ForegroundColor Yellow
        Write-Host "- Moodie Backend: kubectl port-forward service/moodie-backend-service 8080:80" -ForegroundColor Cyan
        Write-Host "- Prometheus: kubectl port-forward service/prometheus-service 9090:9090" -ForegroundColor Cyan
        Write-Host "`nTo cleanup: ./test-deployment.ps1 -CleanupAfter" -ForegroundColor Yellow
    }

} catch {
    Write-Host "`n=== Test Failed ===" -ForegroundColor Red
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}
