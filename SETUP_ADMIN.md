# Admin Dashboard Setup

## Step 1: Run the Users Table SQL

Go to Supabase SQL Editor:
https://supabase.com/dashboard/project/xbcwznogyeuszhfadfpq/sql/new

Paste and run this SQL:

```sql
-- Create users table for admin authentication
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'user' CHECK (role IN ('user', 'admin', 'super_admin')),
  is_active BOOLEAN DEFAULT true,
  last_login TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Service role access
CREATE POLICY "Allow service role all operations on users" ON users
  FOR ALL USING (true);
```

## Step 2: Create Your First Admin User

Make a POST request to create your first admin user:

**Method:** POST
**URL:** `http://localhost:3001/api/setup/create-admin`

**Body (JSON):**
```json
{
  "email": "admin@gen.work",
  "password": "your-secure-password-here",
  "firstName": "Admin",
  "lastName": "User",
  "secretKey": "gen-work-setup-2024"
}
```

**Using curl:**
```bash
curl -X POST http://localhost:3001/api/setup/create-admin \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@gen.work",
    "password": "your-secure-password-here",
    "firstName": "Admin",
    "lastName": "User",
    "secretKey": "gen-work-setup-2024"
  }'
```

**Using PowerShell:**
```powershell
$body = @{
    email = "admin@gen.work"
    password = "your-secure-password-here"
    firstName = "Admin"
    lastName = "User"
    secretKey = "gen-work-setup-2024"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3001/api/setup/create-admin" -Method POST -Body $body -ContentType "application/json"
```

## Step 3: Login to Admin Dashboard

1. Go to: `http://localhost:8080/admin/login`
2. Enter your email and password
3. You'll be redirected to the dashboard!

## Features

- View all demo requests
- View all access requests
- Update request statuses
- Filter by status
- Real-time data from Supabase

## Important Security Notes

- DISABLE the `/api/setup/create-admin` route in production
- Change the secretKey in `backend/src/routes/setup.ts`
- Use strong passwords
- Enable 2FA in production
- Use environment variables for secrets

---

Happy managing!

