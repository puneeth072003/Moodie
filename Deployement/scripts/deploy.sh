#!/bin/bash

echo "Deploying Moodie Backend to Minikube..."

# Apply ConfigMap first
echo "Creating Prometheus ConfigMap..."
kubectl apply -f prometheus-configmap.yml

# Deploy the backend application
echo "Deploying Moodie Backend..."
kubectl apply -f deployment.yaml

# Deploy Prometheus
echo "Deploying Prometheus..."
kubectl apply -f prometheus.yml

# Wait for deployments to be ready
echo "Waiting for deployments to be ready..."
kubectl wait --for=condition=available --timeout=300s deployment/moodie-backend-deployment
kubectl wait --for=condition=available --timeout=300s deployment/prometheus-deployment

# Get service URLs
echo "Getting service information..."
echo "Moodie Backend URL: $(minikube service moodie-backend-service --url)"
echo "Prometheus URL: $(minikube service prometheus-service --url)"

# Show pod status
echo "Pod status:"
kubectl get pods -l app=moodie-backend
kubectl get pods -l app=prometheus

echo "Deployment complete!"