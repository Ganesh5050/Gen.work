# Deployment Guide

## 🚀 Frontend Deployment (Vercel)

### One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Ganesh5050/Gen.work)

### Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Environment Variables (Vercel)
Set these in Vercel Dashboard → Settings → Environment Variables:

- `VITE_API_URL` - Your backend API URL (e.g., `https://api.gen.work`)
- `VITE_CRISP_WEBSITE_ID` - Crisp chat widget ID (optional)
- `VITE_GA_MEASUREMENT_ID` - Google Analytics ID (optional)

---

## 🔧 Backend Deployment

### Option 1: Railway
1. Go to [Railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select `Ganesh5050/Gen.work`
4. Set root directory to `backend`
5. Add environment variables:
   ```
   SUPABASE_URL=your-supabase-url
   SUPABASE_SERVICE_KEY=your-service-key
   JWT_SECRET=your-jwt-secret
   PORT=3001
   NODE_ENV=production
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email
   EMAIL_PASSWORD=your-app-password
   OPENAI_API_KEY=your-openai-key
   ```

### Option 2: Render
1. Go to [Render.com](https://render.com)
2. New → Web Service
3. Connect GitHub repository
4. Build Command: `cd backend && npm install && npm run build`
5. Start Command: `cd backend && npm start`
6. Add environment variables (same as above)

### Option 3: Docker
```bash
# Build backend image
docker build -f backend/Dockerfile -t gen-work-backend ./backend

# Run container
docker run -p 3001:3001 \
  -e SUPABASE_URL=your-url \
  -e SUPABASE_SERVICE_KEY=your-key \
  -e JWT_SECRET=your-secret \
  gen-work-backend
```

---

## 🗄️ Database Setup (Supabase)

1. **Create Supabase Project**
   - Go to [Supabase.io](https://supabase.com)
   - Create new project
   - Copy the URL and service key

2. **Run SQL Schemas**
   Execute these files in Supabase SQL Editor:
   ```
   backend/supabase-schema-clean.sql
   backend/supabase-users-schema.sql
   backend/supabase-tasks-schema.sql
   backend/supabase-workspaces-schema.sql
   ```

3. **Create Admin User**
   ```bash
   curl -X POST https://your-api.com/api/setup/create-admin \
     -H "Content-Type: application/json" \
     -d '{
       "email": "admin@gen.work",
       "password": "your-secure-password",
       "name": "Admin",
       "secretKey": "your-secret-key"
     }'
   ```

---

## 🔐 Security Checklist

- [ ] Add `.env` files to `.gitignore` (already done)
- [ ] Set strong JWT_SECRET (min 32 characters)
- [ ] Enable Supabase Row Level Security (RLS)
- [ ] Configure CORS for production domain
- [ ] Set up SSL/TLS certificates
- [ ] Enable rate limiting
- [ ] Review and set production environment variables
- [ ] Set up monitoring and logging

---

## 📊 Post-Deployment

### Frontend URL
Your Vercel deployment will be available at:
- Production: `https://gen-work.vercel.app` (or custom domain)
- Preview: Automatic for each PR

### Backend URL
Update frontend `.env` with your backend URL:
```env
VITE_API_URL=https://your-backend-api.railway.app
```

### Testing
```bash
# Test frontend
curl https://gen-work.vercel.app

# Test backend
curl https://your-backend-api.railway.app/api/health
```

---

## 🔄 CI/CD Pipeline

GitHub Actions automatically:
- ✅ Builds frontend on every push
- ✅ Builds backend on every push
- ✅ Runs linting checks
- ✅ Creates build artifacts

Vercel automatically:
- ✅ Deploys main branch to production
- ✅ Creates preview deployments for PRs
- ✅ Runs build checks

---

## 🆘 Troubleshooting

### Frontend not connecting to backend
- Check `VITE_API_URL` in Vercel environment variables
- Verify CORS settings in `backend/src/server.ts`

### Database connection failed
- Verify Supabase credentials
- Check if RLS policies are set correctly
- Ensure service key (not anon key) is used

### Email not sending
- Verify SMTP credentials
- Check email provider allows less secure apps
- Use app-specific password for Gmail

### Build failing
- Check Node.js version (should be 18+)
- Clear `node_modules` and reinstall
- Check for environment variable issues

---

## 📞 Support

For deployment issues, check:
- [Vercel Docs](https://vercel.com/docs)
- [Railway Docs](https://docs.railway.app)
- [Supabase Docs](https://supabase.com/docs)
- GitHub Issues: https://github.com/Ganesh5050/Gen.work/issues

