# gen.work - Setup Instructions

## 🚀 Complete Setup Guide

This guide will help you set up the full-fledged working gen.work platform with backend and frontend connected.

---

## Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Supabase account** (free tier is fine)

---

## Step 1: Supabase Database Setup

### 1.1 Create Tables

1. Go to your Supabase dashboard: https://supabase.com/dashboard
2. Select your project: **AI.DO** (xbcwznogyeuszhfadfpq)
3. Click on **SQL Editor** in the left sidebar
4. Copy the entire contents of `backend/supabase-schema.sql`
5. Paste into the SQL Editor and click **Run**

This will create:
- `demo_requests` table
- `access_requests` table
- Indexes for performance
- Row Level Security (RLS) policies

### 1.2 Verify Tables Created

1. Click **Table Editor** in the left sidebar
2. You should see:
   - ✅ demo_requests
   - ✅ access_requests

---

## Step 2: Backend Setup

### 2.1 Install Dependencies

```bash
cd backend
npm install
```

### 2.2 Environment Variables

Your `backend/.env` file should already have:

```env
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:8081

# Supabase Credentials
SUPABASE_URL=https://xbcwznogyeuszhfadfpq.supabase.co
SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhiY3d6bm9neWV1c3poZmFkZnBxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MTExMTk1OSwiZXhwIjoyMDc2Njg3OTU5fQ.vZbxepY1MFgkiY5czqwb7Wgzn4pZS3NP84H7ogdMqAg
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhiY3d6bm9neWV1c3poZmFkZnBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExMTE5NTksImV4cCI6MjA3NjY4Nzk1OX0.IjE7o6mePVmOtF0bo1NVOrSaHdJSVMt1mvWCpSY8BJI
```

### 2.3 Start Backend Server

```bash
npm run dev
```

You should see:
```
Server is running on port 3001
Health check available at http://localhost:3001/health
Connected to Supabase successfully
```

---

## Step 3: Frontend Setup

### 3.1 Install Dependencies

```bash
cd ..  # Back to root
npm install
```

### 3.2 Environment Variables

Your `.env` file should already have:

```env
VITE_API_URL=http://localhost:3001/api
```

### 3.3 Start Frontend Server

```bash
npm run dev
```

You should see:
```
VITE ready in X ms
Local: http://localhost:8081/
```

---

## Step 4: Verify Everything Works

### 4.1 Test Backend API

Open your browser and visit:
- http://localhost:3001/health
  
You should see:
```json
{
  "status": "OK",
  "timestamp": "...",
  "uptime": ...
}
```

### 4.2 Test Supabase Connection

Visit:
- http://localhost:3001/api/supabase/test

You should see:
```json
{
  "success": true,
  "configured": true,
  "message": "Supabase is CONFIGURED and READY! ✅",
  "project": "AI.DO",
  ...
}
```

### 4.3 Test Full Stack

1. Visit: http://localhost:8081
2. Click **"Request Access"** button in navbar
3. Fill out the form with test data
4. Submit the form

**Expected Result:**
- ✅ Success toast message appears
- ✅ Form resets
- ✅ Data saved in Supabase

### 4.4 Verify Data in Supabase

1. Go to Supabase dashboard
2. Click **Table Editor**
3. Select `access_requests` table
4. You should see your test submission!

---

## Step 5: Test Book Demo Form

1. Visit: http://localhost:8081/book-demo
2. Fill out the form
3. Submit

**Expected Result:**
- ✅ Success toast
- ✅ Data appears in `demo_requests` table in Supabase

---

## 🎉 Congratulations!

Your full-fledged gen.work platform is now running with:

✅ **Frontend** - React app on http://localhost:8081  
✅ **Backend** - Express API on http://localhost:3001  
✅ **Database** - Supabase PostgreSQL  
✅ **Working Forms** - Book Demo & Request Access  
✅ **Real Data Persistence** - All submissions saved to database

---

## Available API Endpoints

### Public Endpoints
- `POST /api/demo-requests` - Submit demo request
- `POST /api/access-requests` - Submit access request
- `GET /health` - Health check

### Admin Endpoints (coming soon)
- `GET /api/demo-requests` - List all demo requests
- `GET /api/access-requests` - List all access requests

---

## Running Both Servers Together

Use the convenient script:

```bash
npm run dev:full
```

This runs both frontend and backend concurrently!

---

## Troubleshooting

### Backend won't start
- Check `backend/.env` has correct Supabase credentials
- Ensure port 3001 is not in use
- Run `cd backend && npm install`

### Frontend can't connect to backend
- Verify backend is running on port 3001
- Check `.env` has `VITE_API_URL=http://localhost:3001/api`
- Clear browser cache and reload

### Forms not submitting
- Open browser console (F12) to see errors
- Check network tab for failed requests
- Verify Supabase tables were created correctly

### Database errors
- Run the `supabase-schema.sql` in Supabase SQL Editor
- Check RLS policies are enabled
- Verify service key is correct in `backend/.env`

---

## Next Steps

Now that everything is working, you can:

1. **Customize Forms** - Edit `src/pages/BookDemo.tsx` and `RequestAccess.tsx`
2. **Add Authentication** - Implement user login/signup
3. **Build Admin Dashboard** - View all submissions
4. **Deploy to Production** - Deploy to Vercel + Railway/Heroku

---

## Support

Having issues? Check:
- Backend logs: Terminal where `cd backend && npm run dev` is running
- Frontend logs: Browser console (F12)
- Supabase logs: Dashboard > Logs

Happy coding! 🚀

