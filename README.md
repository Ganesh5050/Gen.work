# gen.work - Next Generation AI Workforce Platform

A production-ready platform for autonomous AI workers designed for enterprise operations teams including IT, HR, Procurement, Legal, and more.

## What's Built & Working

### Core Features
- **Admin Dashboard**: Full authentication system with request management
- **Working Forms**: Book Demo and Request Access forms saving to database
- **Pricing Page**: 3-tier pricing with annual/monthly toggle & feature comparison
- **AI Workers Showcase**: 6 pre-trained AI Workers with metrics and capabilities
- **Modern UI**: Interactive backgrounds, smooth animations, responsive design
- **Real Database**: Supabase PostgreSQL with RLS, indexes, and proper schemas
- **Secure API**: JWT auth, bcrypt passwords, rate limiting, CORS, Helmet
- **Full CRUD**: Tasks, Workspaces, Users with complete API endpoints
- **AI Integration**: OpenAI-powered AI Workers for all departments
- **Email Notifications**: Automated emails for all form submissions
- **SEO Optimized**: Meta tags, Open Graph, Twitter cards on all pages
- **Analytics**: Google Analytics 4 integration with event tracking
- **Live Chat**: Crisp chat widget for customer support

### Live Pages
1. Home - Hero with animated background
2. Solutions - Department-specific solutions (pixel-perfect clone)
3. Pricing - Complete pricing tiers
4. AI Workers - Pre-trained workers showcase
5. Features - Product capabilities
6. About - Company information
7. Careers - Job listings
8. Blog - Blog listings + individual posts
9. Book Demo - Working form with email notifications
10. Request Access - Working form with email notifications
11. Admin Login - Secure authentication
12. Admin Dashboard - Manage all requests
13. Trust Center - Security & compliance information

### Backend API Routes (Full CRUD)
- **Authentication**: `/api/auth` - Login, register, verify token
- **Demo Requests**: `/api/demo-requests` - Submit, view, update status
- **Access Requests**: `/api/access-requests` - Submit, view, update status
- **Tasks**: `/api/tasks` - Full CRUD + bulk operations
- **Workspaces**: `/api/workspaces` - Full CRUD + member management
- **Users**: `/api/user` - Profile, password change, user tasks/workspaces
- **AI Workers**: `/api/ai` - Execute tasks, chat, workflow suggestions
- **Setup**: `/api/setup` - One-time admin creation

## 🛠️ Tech Stack

### Frontend
- React 18 + TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- shadcn/ui component library
- React Hook Form + Zod for forms
- React Router for navigation
- TanStack Query for API state management

### Backend
- Node.js + Express + TypeScript
- Supabase PostgreSQL with Row Level Security
- JWT authentication with bcrypt
- Winston logging
- Rate limiting & security middleware (Helmet, CORS)
- Nodemailer for email notifications
- OpenAI integration for AI Workers
- Complete REST API with full CRUD operations

### DevOps
- Docker & Docker Compose
- ESLint + TypeScript for code quality
- Production deployment scripts
- Health checks and monitoring

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+ and npm
- Supabase account (free tier works!)
- Docker (optional, for containerized deployment)

### Development Setup

1. **Clone and setup the project:**
```bash
git clone <your-repo-url>
cd pixel-perfect-aiwork-main
npm run setup  # Installs both frontend and backend dependencies
```

2. **Configure environment variables:**
```bash
# Create .env in root with:
VITE_API_URL=http://localhost:3001/api

# backend/.env already configured with Supabase credentials
# No changes needed if using existing Supabase project
```

3. **Start development servers:**
```bash
# Start both frontend and backend simultaneously
npm run dev:full

# Or start them separately:
npm run dev          # Frontend only (port 8081)
npm run dev:backend  # Backend only (port 3001)
```

4. **Set up database:**
```bash
# Follow the comprehensive guide:
# 1. Read: backend/DATABASE_SETUP.md
# 2. Run SQL files in Supabase SQL Editor (in order):
#    - backend/supabase-users-schema.sql
#    - backend/supabase-schema-clean.sql
#    - backend/supabase-tasks-schema.sql
#    - backend/supabase-workspaces-schema.sql
# 3. Create first admin user via API
```

5. **Configure environment variables:**
```bash
# See backend/ENV_VARIABLES.md for complete guide
# Required: SUPABASE_URL, SUPABASE_KEY, JWT_SECRET, SMTP credentials
# Optional: OPENAI_API_KEY (for AI features), GA_MEASUREMENT_ID, CRISP_WEBSITE_ID
```

6. **Access the application:**
- Frontend: http://localhost:8081
- Backend API: http://localhost:3001/api
- API Health Check: http://localhost:3001/health
- API Documentation: See `backend/API_DOCUMENTATION.md`

## 🐳 Production Deployment

### Using Docker Compose (Recommended)

1. **Configure production environment:**
```bash
cp .env.example .env
cp backend/.env.example backend/.env
# Update with production values
```

2. **Deploy with Docker:**
```bash
# Make deploy script executable (Linux/Mac)
chmod +x deploy.sh
./deploy.sh

# Or manually:
docker-compose up -d
```

3. **Verify deployment:**
```bash
# Check service status
docker-compose ps

# View logs
docker-compose logs -f
```

### Manual Deployment

```bash
# Install dependencies
npm run setup

# Build applications
npm run build:full

# Start backend
cd backend && npm start
```

## 📁 Project Structure

```
.
├── src/                    # Frontend source code
│   ├── components/         # Reusable React components
│   ├── pages/             # Page components
│   ├── lib/               # Utilities and API client
│   └── hooks/             # Custom React hooks
├── backend/               # Backend application
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── models/        # MongoDB models
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Express middleware
│   │   ├── services/      # Business logic
│   │   └── config/        # Configuration files
│   └── package.json
├── docker-compose.yml     # Container orchestration
├── Dockerfile.frontend    # Frontend container config
└── deploy.sh             # Production deployment script
```

## 🔧 Available Scripts

### Frontend
```bash
npm run dev              # Start dev server
npm run build            # Build for production
npm run lint             # Run ESLint
npm run preview          # Preview production build
```

### Backend
```bash
npm run dev:backend      # Start backend dev server
npm run build:backend    # Build backend
npm run lint:backend     # Lint backend code
```

### Full Stack
```bash
npm run setup            # Install all dependencies
npm run dev:full         # Start both servers
npm run build:full       # Build both applications
npm run start:prod       # Start production containers
npm run stop:prod        # Stop production containers
```

## 🔐 Environment Variables

### Frontend (.env)
```bash
VITE_API_URL=http://localhost:3001/api
VITE_APP_NAME=AI.work
VITE_APP_VERSION=1.0.0
```

### Backend (backend/.env)
```bash
# Server
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:8081

# Supabase
SUPABASE_URL=https://xbcwznogyeuszhfadfpq.supabase.co
SUPABASE_SERVICE_KEY=your-service-key-here
SUPABASE_ANON_KEY=your-anon-key-here
```

## 📊 API Documentation

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Admin login (returns JWT token)
- `GET /api/auth/verify` - Verify JWT token

### Demo Requests
- `POST /api/demo-requests` - Submit demo request
- `GET /api/demo-requests` - Get all demo requests (admin)
- `PATCH /api/demo-requests/:id` - Update request status (admin)

### Access Requests
- `POST /api/access-requests` - Submit access request
- `GET /api/access-requests` - Get all access requests (admin)
- `PATCH /api/access-requests/:id` - Update request status (admin)

### Setup
- `POST /api/setup/create-admin` - Create first admin user (one-time)

### System
- `GET /health` - Health check
- `GET /api/supabase/test` - Test Supabase connection

## 🧪 Testing

```bash
# Run frontend tests
npm test

# Run backend tests
cd backend && npm test

# Run tests in watch mode
npm run test:watch
```

## 🚀 Production Checklist

- [x] Environment variables configured
- [x] Supabase database connected
- [x] Database tables created (demo_requests, access_requests)
- [x] Frontend forms working
- [x] Backend API routes working
- [ ] JWT authentication implemented
- [ ] Domain configured with HTTPS
- [x] Rate limiting configured
- [x] Logging configured
- [x] Health checks working
- [ ] Backup strategy implemented

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📚 Documentation

- **SETUP_INSTRUCTIONS.md** - Complete setup guide with step-by-step instructions
- **backend/supabase-schema.sql** - Database schema for Supabase

## 🆘 Support

For support, email support@gen.work or open an issue in this repository.

---

**Built with ❤️ using modern web technologies**
