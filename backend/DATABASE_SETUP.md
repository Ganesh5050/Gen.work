# Database Setup Guide

Complete guide to setting up all database tables in Supabase for gen.work backend.

## Prerequisites

1. Supabase account and project created
2. Access to Supabase SQL Editor
3. Note your Supabase project URL and API keys

## Setup Order

Run these SQL files in order in your Supabase SQL Editor:

### 1. Users Table
Run: `supabase-users-schema.sql`

Creates:
- `users` table for authentication
- Admin and user roles
- Password hashing support

**After running, create your first admin:**
```bash
curl -X POST http://localhost:3001/api/setup/create-admin \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@gen.work",
    "password": "SecurePassword123!",
    "firstName": "Admin",
    "lastName": "User",
    "secretKey": "your-secret-setup-key"
  }'
```

### 2. Demo & Access Requests
Run: `supabase-schema-clean.sql`

Creates:
- `demo_requests` table
- `access_requests` table
- Row Level Security policies

**Test with:**
```bash
curl -X POST http://localhost:3001/api/demo-requests \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "company": "Test Corp"
  }'
```

### 3. Tasks Table
Run: `supabase-tasks-schema.sql`

Creates:
- `tasks` table with full CRUD support
- Status tracking (pending, in_progress, completed, cancelled)
- Priority levels (low, medium, high, urgent)
- Task assignment and workspace linking

**Features:**
- ✅ Assigned to users
- ✅ Linked to workspaces
- ✅ Due date tracking
- ✅ Metadata storage (JSON)
- ✅ Auto-update timestamps
- ✅ Row Level Security

**API Endpoints:**
```bash
# Create task
POST /api/tasks

# Get all tasks
GET /api/tasks?status=pending&priority=high

# Get single task
GET /api/tasks/:id

# Update task
PATCH /api/tasks/:id

# Delete task
DELETE /api/tasks/:id

# Bulk update
PATCH /api/tasks/bulk/update
```

### 4. Workspaces Table
Run: `supabase-workspaces-schema.sql`

Creates:
- `workspaces` table
- `workspace_members` table for team collaboration
- Role-based access (owner, admin, member, viewer)

**Features:**
- ✅ Multi-user workspaces
- ✅ Role-based permissions
- ✅ Automatic owner assignment
- ✅ Member management
- ✅ Custom settings (JSON)
- ✅ Row Level Security

**API Endpoints:**
```bash
# Create workspace
POST /api/workspaces

# Get all workspaces
GET /api/workspaces

# Get single workspace
GET /api/workspaces/:id

# Update workspace
PATCH /api/workspaces/:id

# Delete workspace
DELETE /api/workspaces/:id

# Add member
POST /api/workspaces/:id/members

# Update member role
PATCH /api/workspaces/:id/members/:member_id

# Remove member
DELETE /api/workspaces/:id/members/:member_id
```

## Database Schema Overview

```
┌─────────────────┐
│     users       │
│  - id (PK)      │
│  - email        │
│  - password     │
│  - role         │
└────────┬────────┘
         │
         ├─────────────────────┐
         │                     │
┌────────▼────────┐   ┌────────▼────────────┐
│  demo_requests  │   │  access_requests    │
│  - id (PK)      │   │  - id (PK)          │
│  - first_name   │   │  - full_name        │
│  - email        │   │  - email            │
│  - company      │   │  - company          │
│  - status       │   │  - status           │
└─────────────────┘   └─────────────────────┘

┌─────────────────┐
│   workspaces    │
│  - id (PK)      │
│  - name         │
│  - owner_id (FK)│───┐
│  - slug         │   │
└────────┬────────┘   │
         │            │
         │    ┌───────▼──────────┐
         │    │  workspace_      │
         ├────┤   members        │
         │    │  - workspace_id  │
         │    │  - user_id (FK)  │
         │    │  - role          │
         │    └──────────────────┘
         │
┌────────▼────────┐
│     tasks       │
│  - id (PK)      │
│  - title        │
│  - status       │
│  - priority     │
│  - assigned_to  │───┐
│  - workspace_id │   │
│  - created_by   │───┤
└─────────────────┘   │
                      │
         ┌────────────┘
         │
    (References users table)
```

## Verification

### Check Tables Created
In Supabase SQL Editor:
```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public';
```

Expected tables:
- users
- demo_requests
- access_requests
- tasks
- workspaces
- workspace_members

### Check Row Level Security
```sql
SELECT tablename, policyname 
FROM pg_policies 
WHERE schemaname = 'public';
```

Should show multiple policies for each table.

### Test Data Insertion
```sql
-- Test users
SELECT COUNT(*) FROM users;

-- Test demo requests
SELECT COUNT(*) FROM demo_requests;

-- Test tasks
SELECT COUNT(*) FROM tasks;

-- Test workspaces
SELECT COUNT(*) FROM workspaces;
```

## Common Issues

### Issue: "relation does not exist"
**Solution:** Table not created yet. Run the corresponding schema SQL file.

### Issue: "permission denied for table"
**Solution:** Row Level Security blocking access. Either:
1. Use service_role key in backend (not anon key)
2. Verify RLS policies are created correctly

### Issue: "duplicate key value violates unique constraint"
**Solution:** Trying to insert duplicate email/slug. Use different values.

### Issue: Foreign key constraint violation
**Solution:** Referenced user/workspace doesn't exist. Create parent record first.

## Backup & Restore

### Backup
```bash
# From Supabase dashboard: Database > Backups
# Or use pg_dump
pg_dump -h db.xxx.supabase.co -U postgres -d postgres > backup.sql
```

### Restore
```bash
psql -h db.xxx.supabase.co -U postgres -d postgres < backup.sql
```

## Production Considerations

1. **Indexes**: All foreign keys are indexed automatically
2. **RLS**: Enabled on all tables - verify policies before production
3. **Backups**: Enable Point-in-Time Recovery in Supabase
4. **Monitoring**: Use Supabase logs to monitor queries
5. **Scaling**: Consider table partitioning for large datasets

## Next Steps

After database setup:
1. ✅ Configure environment variables (see `ENV_VARIABLES.md`)
2. ✅ Create first admin user
3. ✅ Test all API endpoints
4. ✅ Configure email notifications
5. ✅ (Optional) Add OpenAI API key for AI features

## Support

If you encounter issues:
1. Check Supabase logs in dashboard
2. Verify environment variables are set
3. Review backend server logs
4. Check this documentation
5. Refer to Supabase documentation: https://supabase.com/docs

