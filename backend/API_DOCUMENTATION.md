# API Documentation - gen.work Backend

Complete API reference for all backend endpoints.

Base URL: `http://localhost:3001/api`

---

## Table of Contents

1. [Authentication](#authentication)
2. [Demo Requests](#demo-requests)
3. [Access Requests](#access-requests)
4. [Tasks](#tasks)
5. [Workspaces](#workspaces)
6. [Users](#users)
7. [AI Workers](#ai-workers)
8. [Setup](#setup)

---

## Authentication

### Login
```http
POST /api/auth/login
```

**Body:**
```json
{
  "email": "admin@gen.work",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "uuid",
    "email": "admin@gen.work",
    "firstName": "Admin",
    "lastName": "User",
    "role": "admin"
  }
}
```

### Register
```http
POST /api/auth/register
```

**Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe"
}
```

### Verify Token
```http
GET /api/auth/verify
```

**Headers:**
```
Authorization: Bearer <token>
```

---

## Demo Requests

### Submit Demo Request
```http
POST /api/demo-requests
```

**Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@company.com",
  "company": "Acme Corp",
  "jobTitle": "CTO",
  "department": "Engineering",
  "needs": "Looking to automate IT operations"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Demo request submitted successfully!",
  "id": "uuid"
}
```

**Emails sent:**
- ✅ Confirmation to user
- ✅ Notification to admin

### Get All Demo Requests (Admin)
```http
GET /api/demo-requests?status=pending&limit=50&page=1
```

**Query Parameters:**
- `status`: Filter by status (pending, contacted, scheduled, completed, cancelled)
- `limit`: Results per page (default: 50)
- `page`: Page number (default: 1)

### Update Demo Request Status
```http
PATCH /api/demo-requests/:id
```

**Body:**
```json
{
  "status": "contacted"
}
```

---

## Access Requests

### Submit Access Request
```http
POST /api/access-requests
```

**Body:**
```json
{
  "fullName": "Jane Smith",
  "email": "jane@company.com",
  "company": "Tech Innovations",
  "companySize": "50-200",
  "primaryUseCase": "IT automation"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Access request submitted successfully!",
  "id": "uuid"
}
```

**Emails sent:**
- ✅ Confirmation to user
- ✅ Notification to admin

### Get All Access Requests (Admin)
```http
GET /api/access-requests?status=pending&limit=50&page=1
```

### Update Access Request Status
```http
PATCH /api/access-requests/:id
```

**Body:**
```json
{
  "status": "approved"
}
```

---

## Tasks

### Create Task
```http
POST /api/tasks
```

**Body:**
```json
{
  "title": "Setup new employee workstation",
  "description": "Install software and configure access",
  "status": "pending",
  "priority": "high",
  "assigned_to": "user-uuid",
  "workspace_id": "workspace-uuid",
  "due_date": "2024-12-31T23:59:59Z",
  "created_by": "creator-uuid",
  "metadata": {
    "tags": ["onboarding", "it"],
    "estimated_hours": 2
  }
}
```

**Status options:** `pending`, `in_progress`, `completed`, `cancelled`
**Priority options:** `low`, `medium`, `high`, `urgent`

**Response:**
```json
{
  "success": true,
  "message": "Task created successfully",
  "data": { /* task object */ }
}
```

### Get All Tasks
```http
GET /api/tasks?status=pending&priority=high&assigned_to=uuid&workspace_id=uuid&limit=50&page=1
```

**Query Parameters:**
- `status`: Filter by status
- `priority`: Filter by priority
- `assigned_to`: Filter by assigned user
- `workspace_id`: Filter by workspace
- `limit`: Results per page
- `page`: Page number

### Get Single Task
```http
GET /api/tasks/:id
```

### Update Task
```http
PATCH /api/tasks/:id
```

**Body (all fields optional):**
```json
{
  "title": "Updated title",
  "description": "Updated description",
  "status": "in_progress",
  "priority": "urgent",
  "assigned_to": "new-user-uuid",
  "due_date": "2024-12-31T23:59:59Z",
  "metadata": { /* updated metadata */ }
}
```

### Delete Task
```http
DELETE /api/tasks/:id
```

### Bulk Update Tasks
```http
PATCH /api/tasks/bulk/update
```

**Body:**
```json
{
  "task_ids": ["uuid1", "uuid2", "uuid3"],
  "updates": {
    "status": "completed",
    "priority": "low"
  }
}
```

---

## Workspaces

### Create Workspace
```http
POST /api/workspaces
```

**Body:**
```json
{
  "name": "Engineering Team",
  "description": "Workspace for engineering department",
  "slug": "engineering-team",
  "owner_id": "user-uuid",
  "settings": {
    "theme": "dark",
    "notifications": true
  }
}
```

**Response:**
```json
{
  "success": true,
  "message": "Workspace created successfully",
  "data": { /* workspace object */ }
}
```

### Get All Workspaces
```http
GET /api/workspaces?limit=50&page=1
```

### Get Single Workspace
```http
GET /api/workspaces/:id
```

**Response includes:**
- Workspace details
- Owner information
- All members with roles

### Update Workspace
```http
PATCH /api/workspaces/:id
```

**Body (all fields optional):**
```json
{
  "name": "Updated Name",
  "description": "Updated description",
  "slug": "new-slug",
  "is_active": true,
  "settings": { /* updated settings */ }
}
```

### Delete Workspace
```http
DELETE /api/workspaces/:id
```

**Note:** Also deletes all workspace members (cascade)

### Add Member to Workspace
```http
POST /api/workspaces/:id/members
```

**Body:**
```json
{
  "user_id": "user-uuid",
  "role": "admin"
}
```

**Role options:** `owner`, `admin`, `member`, `viewer`

### Update Member Role
```http
PATCH /api/workspaces/:id/members/:member_id
```

**Body:**
```json
{
  "role": "member"
}
```

### Remove Member
```http
DELETE /api/workspaces/:id/members/:member_id
```

---

## Users

### Get User Profile
```http
GET /api/user/profile?user_id=uuid
```

### Update User Profile
```http
PATCH /api/user/profile
```

**Body:**
```json
{
  "user_id": "uuid",
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com"
}
```

### Change Password
```http
POST /api/user/change-password
```

**Body:**
```json
{
  "user_id": "uuid",
  "current_password": "oldPassword123",
  "new_password": "newPassword456"
}
```

### Get User's Workspaces
```http
GET /api/user/workspaces?user_id=uuid
```

### Get User's Tasks
```http
GET /api/user/tasks?user_id=uuid&status=pending&limit=50&page=1
```

### Get All Users (Admin)
```http
GET /api/user/all?role=user&limit=50&page=1
```

**Query Parameters:**
- `role`: Filter by role (admin, user)
- `limit`: Results per page
- `page`: Page number

---

## AI Workers

### Execute AI Task
```http
POST /api/ai/execute
```

**Body:**
```json
{
  "prompt": "How do I provision access for a new employee?",
  "department": "it",
  "context": "Employee starting Monday, needs Slack, GitHub, and AWS access",
  "temperature": 0.7,
  "max_tokens": 500
}
```

**Department options:** `it`, `hr`, `procurement`, `legal`, `finance`, `general`

**Response:**
```json
{
  "success": true,
  "result": "To provision access for a new employee...",
  "taskId": "chatcmpl-xxx",
  "department": "it",
  "usage": {
    "prompt_tokens": 50,
    "completion_tokens": 200,
    "total_tokens": 250
  },
  "model": "gpt-4"
}
```

**Note:** Returns mock response if OpenAI API key not configured.

### Chat with AI (Multi-turn)
```http
POST /api/ai/chat
```

**Body:**
```json
{
  "messages": [
    { "role": "user", "content": "How do I onboard a new employee?" },
    { "role": "assistant", "content": "Here are the steps..." },
    { "role": "user", "content": "What about remote employees?" }
  ],
  "department": "hr",
  "temperature": 0.7,
  "max_tokens": 500
}
```

### Get Available AI Models
```http
GET /api/ai/models
```

**Response:**
```json
{
  "success": true,
  "models": [
    {
      "id": "gpt-4",
      "created": 1687882410,
      "owned_by": "openai"
    }
  ]
}
```

### Get Department Information
```http
GET /api/ai/departments
```

**Response:**
```json
{
  "success": true,
  "departments": [
    {
      "id": "it",
      "name": "IT Operations",
      "description": "Access provisioning, asset management...",
      "capabilities": [
        "Access provisioning",
        "Asset management",
        "Ticket resolution"
      ]
    }
  ]
}
```

### Generate Workflow Suggestion
```http
POST /api/ai/suggest-workflow
```

**Body:**
```json
{
  "process_description": "We manually onboard 50 new employees per month",
  "department": "hr"
}
```

**Response:**
```json
{
  "success": true,
  "suggestion": "Detailed automation plan...",
  "department": "hr"
}
```

---

## Setup

### Create Admin User (One-time setup)
```http
POST /api/setup/create-admin
```

**Body:**
```json
{
  "email": "admin@gen.work",
  "password": "SecurePassword123!",
  "firstName": "Admin",
  "lastName": "User",
  "secretKey": "your-setup-secret-key"
}
```

**Note:** Set `SETUP_SECRET_KEY` in environment variables for security.

---

## Error Responses

All endpoints return consistent error format:

```json
{
  "success": false,
  "message": "Error description"
}
```

### Common HTTP Status Codes

- `200 OK` - Success
- `201 Created` - Resource created
- `400 Bad Request` - Invalid input
- `401 Unauthorized` - Authentication required
- `403 Forbidden` - Insufficient permissions
- `404 Not Found` - Resource not found
- `409 Conflict` - Duplicate resource
- `429 Too Many Requests` - Rate limit exceeded
- `500 Internal Server Error` - Server error

---

## Rate Limiting

- **Window:** 15 minutes
- **Max Requests:** 100 per IP
- **Headers:**
  - `X-RateLimit-Limit`: Max requests allowed
  - `X-RateLimit-Remaining`: Remaining requests
  - `X-RateLimit-Reset`: Reset timestamp

---

## Authentication

Most endpoints require JWT authentication. Include token in header:

```http
Authorization: Bearer <token>
```

Get token from `/api/auth/login` endpoint.

---

## Pagination

Paginated endpoints return:

```json
{
  "success": true,
  "data": [ /* results */ ],
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 250,
    "pages": 5
  }
}
```

---

## Testing

### Using cURL

```bash
# Login
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@gen.work","password":"password"}'

# Create task with auth
curl -X POST http://localhost:3001/api/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{"title":"Test Task","status":"pending","priority":"medium"}'
```

### Using Postman

1. Import this documentation as OpenAPI spec
2. Set base URL: `http://localhost:3001/api`
3. Add Bearer token authentication
4. Test all endpoints

---

## WebSocket Support

Coming soon:
- Real-time task updates
- Live notifications
- Collaborative workspace features

---

## Support

For issues or questions:
1. Check logs: `backend/logs/app.log`
2. Review environment variables: `backend/ENV_VARIABLES.md`
3. Database setup: `backend/DATABASE_SETUP.md`
4. GitHub Issues: [Report a bug](https://github.com/yourorg/gen-work/issues)

