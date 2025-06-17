#!/bin/bash

# Exit on error
set -e

echo "Installing dependencies..."
npm install

echo "Building project..."
npm run build

echo "Deploying to Firebase..."
firebase deploy
