import express, { Request, Response } from 'express';
import { asyncHandler } from '../middleware/errorHandler';
import { getSupabase } from '../config/database';
import { logger } from '../config/logger';
import bcrypt from 'bcryptjs';

const router = express.Router();

// Get user profile
router.get('/profile', asyncHandler(async (req: Request, res: Response) => {
  const { user_id } = req.query;
  
  if (!user_id) {
    res.status(400).json({
      success: false,
      message: 'user_id is required',
    });
    return;
  }
  
  const supabase = getSupabase();
  
  const { data: user, error } = await supabase
    .from('users')
    .select('id, email, first_name, last_name, role, created_at, updated_at')
    .eq('id', user_id)
    .single();
  
  if (error || !user) {
    res.status(404).json({
      success: false,
      message: 'User not found',
    });
    return;
  }
  
  res.json({
    success: true,
    data: user,
  });
}));

// Update user profile
router.patch('/profile', asyncHandler(async (req: Request, res: Response) => {
  const { user_id, first_name, last_name, email } = req.body;
  
  if (!user_id) {
    res.status(400).json({
      success: false,
      message: 'user_id is required',
    });
    return;
  }
  
  const supabase = getSupabase();
  
  const updateData: any = {
    updated_at: new Date().toISOString(),
  };
  
  if (first_name !== undefined) updateData.first_name = first_name;
  if (last_name !== undefined) updateData.last_name = last_name;
  if (email !== undefined) updateData.email = email;
  
  const { data: user, error } = await supabase
    .from('users')
    .update(updateData)
    .eq('id', user_id)
    .select('id, email, first_name, last_name, role, created_at, updated_at')
    .single();
  
  if (error) {
    if (error.code === '23505') {
      res.status(409).json({
        success: false,
        message: 'Email already exists',
      });
      return;
    }
    
    logger.error(`Failed to update user profile ${user_id}:`, error);
    res.status(500).json({
      success: false,
      message: 'Failed to update profile',
    });
    return;
  }
  
  logger.info(`User profile updated: ${user_id}`);
  
  res.json({
    success: true,
    message: 'Profile updated successfully',
    data: user,
  });
}));

// Change password
router.post('/change-password', asyncHandler(async (req: Request, res: Response) => {
  const { user_id, current_password, new_password } = req.body;
  
  if (!user_id || !current_password || !new_password) {
    res.status(400).json({
      success: false,
      message: 'user_id, current_password, and new_password are required',
    });
    return;
  }
  
  if (new_password.length < 8) {
    res.status(400).json({
      success: false,
      message: 'New password must be at least 8 characters',
    });
    return;
  }
  
  const supabase = getSupabase();
  
  // Get user with password
  const { data: user, error: fetchError } = await supabase
    .from('users')
    .select('id, password')
    .eq('id', user_id)
    .single();
  
  if (fetchError || !user) {
    res.status(404).json({
      success: false,
      message: 'User not found',
    });
    return;
  }
  
  // Verify current password
  const isPasswordValid = await bcrypt.compare(current_password, user.password);
  
  if (!isPasswordValid) {
    res.status(401).json({
      success: false,
      message: 'Current password is incorrect',
    });
    return;
  }
  
  // Hash new password
  const hashedPassword = await bcrypt.hash(new_password, 10);
  
  // Update password
  const { error: updateError } = await supabase
    .from('users')
    .update({
      password: hashedPassword,
      updated_at: new Date().toISOString(),
    })
    .eq('id', user_id);
  
  if (updateError) {
    logger.error(`Failed to change password for user ${user_id}:`, updateError);
    res.status(500).json({
      success: false,
      message: 'Failed to change password',
    });
    return;
  }
  
  logger.info(`Password changed for user: ${user_id}`);
  
  res.json({
    success: true,
    message: 'Password changed successfully',
  });
}));

// Get user's workspaces
router.get('/workspaces', asyncHandler(async (req: Request, res: Response) => {
  const { user_id } = req.query;
  
  if (!user_id) {
    res.status(400).json({
      success: false,
      message: 'user_id is required',
    });
    return;
  }
  
  const supabase = getSupabase();
  
  // Get workspaces where user is owner or member
  const { data: workspaces, error } = await supabase
    .from('workspaces')
    .select(`
      *,
      owner:users!workspaces_owner_id_fkey(id, email, first_name, last_name),
      member_role:workspace_members!inner(role)
    `)
    .eq('workspace_members.user_id', user_id)
    .order('created_at', { ascending: false });
  
  if (error) {
    logger.error(`Failed to fetch workspaces for user ${user_id}:`, error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch workspaces',
    });
    return;
  }
  
  res.json({
    success: true,
    data: workspaces || [],
  });
}));

// Get user's tasks
router.get('/tasks', asyncHandler(async (req: Request, res: Response) => {
  const { user_id, status, limit = 50, page = 1 } = req.query;
  
  if (!user_id) {
    res.status(400).json({
      success: false,
      message: 'user_id is required',
    });
    return;
  }
  
  const supabase = getSupabase();
  
  let query = supabase
    .from('tasks')
    .select('*, workspace:workspaces(id, name)', { count: 'exact' })
    .or(`assigned_to.eq.${user_id},created_by.eq.${user_id}`)
    .order('created_at', { ascending: false })
    .range((Number(page) - 1) * Number(limit), Number(page) * Number(limit) - 1);
  
  if (status) {
    query = query.eq('status', status);
  }
  
  const { data: tasks, count, error } = await query;
  
  if (error) {
    logger.error(`Failed to fetch tasks for user ${user_id}:`, error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch tasks',
    });
    return;
  }
  
  res.json({
    success: true,
    data: tasks || [],
    pagination: {
      page: Number(page),
      limit: Number(limit),
      total: count || 0,
      pages: Math.ceil((count || 0) / Number(limit)),
    },
  });
}));

// Get all users (admin only)
router.get('/all', asyncHandler(async (req: Request, res: Response) => {
  const { limit = 50, page = 1, role } = req.query;
  
  const supabase = getSupabase();
  
  let query = supabase
    .from('users')
    .select('id, email, first_name, last_name, role, created_at', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range((Number(page) - 1) * Number(limit), Number(page) * Number(limit) - 1);
  
  if (role) {
    query = query.eq('role', role);
  }
  
  const { data: users, count, error } = await query;
  
  if (error) {
    logger.error('Failed to fetch users:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch users',
    });
    return;
  }
  
  res.json({
    success: true,
    data: users || [],
    pagination: {
      page: Number(page),
      limit: Number(limit),
      total: count || 0,
      pages: Math.ceil((count || 0) / Number(limit)),
    },
  });
}));

export default router;
