#!/bin/bash

echo "🚀 Starting AI.work deployment..."

# Check if required files exist
if [ ! -f ".env" ]; then
    echo "❌ .env file not found. Please copy from .env.example and configure."
    exit 1
fi

if [ ! -f "backend/.env" ]; then
    echo "❌ backend/.env file not found. Please copy from backend/.env.example and configure."
    exit 1
fi

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
npm install

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend && npm install && cd ..

# Build frontend
echo "🔨 Building frontend..."
npm run build

# Build backend
echo "🔨 Building backend..."
cd backend && npm run build && cd ..

# Start with Docker Compose
echo "🐳 Starting services with Docker Compose..."
docker-compose up -d

# Wait for services to start
echo "⏳ Waiting for services to start..."
sleep 10

# Health check
echo "🏥 Checking service health..."
curl -f http://localhost:3001/health || echo "❌ Backend health check failed"
curl -f http://localhost:8081 || echo "❌ Frontend health check failed"

echo "✅ Deployment complete!"
echo "🌐 Frontend: http://localhost:8081"
echo "🔧 Backend API: http://localhost:3001/api"
echo "📊 MongoDB: localhost:27017"