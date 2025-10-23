# AI.work Development Startup Script

Write-Host "🚀 Starting AI.work Development Environment..." -ForegroundColor Green

# Check if Node.js is installed
if (!(Get-Command "node" -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Node.js is not installed. Please install Node.js first." -ForegroundColor Red
    exit 1
}

Write-Host "📦 Installing dependencies if needed..." -ForegroundColor Yellow
if (!(Test-Path "node_modules")) {
    npm install
}

if (!(Test-Path "backend/node_modules")) {
    Set-Location backend
    npm install
    Set-Location ..
}

Write-Host "🔧 Building backend..." -ForegroundColor Yellow
Set-Location backend
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Backend build failed!" -ForegroundColor Red
    Set-Location ..
    exit 1
}

Write-Host "🚀 Starting backend server..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD'; npm run dev"

Set-Location ..

Write-Host "🌐 Starting frontend server..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD'; npm run dev"

Write-Host "✅ Development environment started!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Your application will be available at:" -ForegroundColor Cyan
Write-Host "   Frontend: http://localhost:8084 (or next available port)" -ForegroundColor White
Write-Host "   Backend:  http://localhost:3001" -ForegroundColor White
Write-Host "   Health:   http://localhost:3001/health" -ForegroundColor White
Write-Host ""
Write-Host "🎯 Available Pages:" -ForegroundColor Cyan
Write-Host "   • Home:         /" -ForegroundColor White
Write-Host "   • Solutions:    /solutions" -ForegroundColor White
Write-Host "   • About:        /about" -ForegroundColor White
Write-Host "   • Careers:      /careers" -ForegroundColor White
Write-Host "   • Blog:         /blog" -ForegroundColor White
Write-Host "   • Book Demo:    /book-demo" -ForegroundColor White
Write-Host "   • Request Access: /request-access" -ForegroundColor White
Write-Host ""
Write-Host "📋 Features Working:" -ForegroundColor Cyan
Write-Host "   ✅ Form validation with Zod" -ForegroundColor White
Write-Host "   ✅ API integration" -ForegroundColor White
Write-Host "   ✅ MongoDB database" -ForegroundColor White
Write-Host "   ✅ JWT authentication" -ForegroundColor White
Write-Host "   ✅ Responsive design" -ForegroundColor White
Write-Host "   ✅ Toast notifications" -ForegroundColor White
Write-Host ""
Write-Host "🎉 Ready for development!" -ForegroundColor Green