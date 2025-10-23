# Backend Environment Variables

This document lists all required and optional environment variables for the backend server.

## Required Variables

### Server Configuration
```env
PORT=3001
NODE_ENV=development
```

### Supabase Configuration
```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-supabase-anon-key
```
- Get these from your Supabase project dashboard
- Go to Settings > API > Project URL and Project API keys

### JWT Configuration
```env
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d
```
- Use a strong, random secret key for production
- JWT_EXPIRES_IN can be '1d', '7d', '30d', etc.

### Email Configuration (SMTP)
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-specific-password
ADMIN_EMAIL=admin@gen.work
FROM_EMAIL=noreply@gen.work
```

**For Gmail:**
1. Enable 2-factor authentication on your Google account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the generated password as SMTP_PASS

**For other providers:**
- Use their SMTP settings (host, port, secure flag)

## Optional Variables

### OpenAI Configuration (for AI features)
```env
OPENAI_API_KEY=sk-your-openai-api-key
```
- Get API key from: https://platform.openai.com/api-keys
- AI routes will return mock responses if not configured
- Required only if you want real AI functionality

### Security (with defaults)
```env
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```
- RATE_LIMIT_WINDOW_MS: Time window in milliseconds (default: 15 minutes)
- RATE_LIMIT_MAX_REQUESTS: Max requests per IP per window (default: 100)

### Logging (with defaults)
```env
LOG_LEVEL=info
LOG_FILE=logs/app.log
```
- LOG_LEVEL options: error, warn, info, debug
- LOG_FILE: Path to log file (relative to backend directory)

## Example .env File

Create a `.env` file in the `backend` directory with these contents:

```env
# Server
PORT=3001
NODE_ENV=development

# Supabase
SUPABASE_URL=https://xxxxxxxxxxx.supabase.co
SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxx

# JWT
JWT_SECRET=super-secret-change-me-in-production
JWT_EXPIRES_IN=7d

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=notifications@yourcompany.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=admin@gen.work
FROM_EMAIL=noreply@gen.work

# OpenAI (optional)
OPENAI_API_KEY=sk-your-key-here
```

## Testing Configuration

To test if environment variables are loaded correctly:

```bash
curl http://localhost:3001/health
```

Should return:
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 123.456
}
```

## Troubleshooting

### Environment variables not loading
- Ensure `.env` file is in the `backend` directory
- Check that dotenv is configured correctly in `server.ts`
- Restart the server after changing environment variables

### Email not sending
- Verify SMTP credentials
- Check if your email provider allows SMTP access
- For Gmail, ensure "Less secure app access" is enabled OR use App Passwords

### Supabase connection fails
- Verify SUPABASE_URL and SUPABASE_KEY are correct
- Check Supabase project status
- Ensure database tables are created (run schema SQL files)

### OpenAI API errors
- Verify API key is valid
- Check OpenAI account has credits
- API will gracefully fall back to mock responses if not configured

