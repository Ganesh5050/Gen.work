import { DemoRequestFormData, AccessRequestFormData, AuthFormData, SignupFormData } from './validations';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

class APIError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'APIError';
  }
}

async function makeRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  const token = localStorage.getItem('token');
  
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new APIError(
        response.status,
        errorData.message || `HTTP ${response.status}: ${response.statusText}`
      );
    }

    return response.json();
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    throw new APIError(500, 'Network error occurred');
  }
}

export const api = {
  // Auth endpoints
  login: (data: AuthFormData) =>
    makeRequest<{ token: string; user: Record<string, unknown> }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  signup: (data: SignupFormData) =>
    makeRequest<{ token: string; user: Record<string, unknown> }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  // Demo request
  submitDemoRequest: (data: DemoRequestFormData) =>
    makeRequest<{ message: string; id: string }>('/demo-requests', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  // Access request
  submitAccessRequest: (data: AccessRequestFormData) =>
    makeRequest<{ message: string; id: string }>('/access-requests', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  // AI Worker endpoints
  executeAITask: (prompt: string, department: string) =>
    makeRequest<{ result: string; taskId: string }>('/ai/execute', {
      method: 'POST',
      body: JSON.stringify({ prompt, department }),
    }),

  // User profile
  getProfile: () => makeRequest<Record<string, unknown>>('/user/profile'),

  // Tasks
  getTasks: () => makeRequest<Record<string, unknown>[]>('/tasks'),
  
  createTask: (taskData: Record<string, unknown>) =>
    makeRequest<Record<string, unknown>>('/tasks', {
      method: 'POST',
      body: JSON.stringify(taskData),
    }),

  deleteTask: (taskId: string) =>
    makeRequest<{ message: string }>(`/tasks/${taskId}`, {
      method: 'DELETE',
    }),

  // Workspaces
  getWorkspaces: () => makeRequest<Record<string, unknown>[]>('/workspaces'),
  
  createWorkspace: (workspaceData: Record<string, unknown>) =>
    makeRequest<Record<string, unknown>>('/workspaces', {
      method: 'POST',
      body: JSON.stringify(workspaceData),
    }),
};

// Generic API client for admin dashboard
export const apiClient = {
  get: <T = any>(endpoint: string) => makeRequest<T>(endpoint),
  
  post: <T = any>(endpoint: string, data?: any) =>
    makeRequest<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  
  patch: <T = any>(endpoint: string, data?: any) =>
    makeRequest<T>(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }),
  
  delete: <T = any>(endpoint: string) =>
    makeRequest<T>(endpoint, {
      method: 'DELETE',
    }),
};

export { APIError };