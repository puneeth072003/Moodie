#!/bin/bash

echo "Cleaning up Moodie deployment..."

# Delete deployments
kubectl delete deployment moodie-backend-deployment
kubectl delete deployment prometheus-deployment

# Delete services
kubectl delete service moodie-backend-service
kubectl delete service prometheus-service

# Delete ConfigMap
kubectl delete configmap prometheus-config

echo "Cleanup complete!"