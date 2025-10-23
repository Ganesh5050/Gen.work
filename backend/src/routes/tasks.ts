import express, { Request, Response } from 'express';
import { asyncHandler } from '../middleware/errorHandler';
import { getSupabase } from '../config/database';
import { logger } from '../config/logger';

const router = express.Router();

// Get all tasks (with filters)
router.get('/', asyncHandler(async (req: Request, res: Response) => {
  const { status, priority, assigned_to, workspace_id, limit = 50, page = 1 } = req.query;
  
  const supabase = getSupabase();
  
  let query = supabase
    .from('tasks')
    .select('*, assigned_user:users!tasks_assigned_to_fkey(id, email, first_name, last_name)', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range((Number(page) - 1) * Number(limit), Number(page) * Number(limit) - 1);
  
  if (status) {
    query = query.eq('status', status);
  }
  
  if (priority) {
    query = query.eq('priority', priority);
  }
  
  if (assigned_to) {
    query = query.eq('assigned_to', assigned_to);
  }
  
  if (workspace_id) {
    query = query.eq('workspace_id', workspace_id);
  }
  
  const { data: tasks, count, error } = await query;
  
  if (error) {
    logger.error('Failed to fetch tasks:', error);
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

// Get single task by ID
router.get('/:id', asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  
  const supabase = getSupabase();
  
  const { data: task, error } = await supabase
    .from('tasks')
    .select('*, assigned_user:users!tasks_assigned_to_fkey(id, email, first_name, last_name), creator:users!tasks_created_by_fkey(id, email, first_name, last_name)')
    .eq('id', id)
    .single();
  
  if (error || !task) {
    res.status(404).json({
      success: false,
      message: 'Task not found',
    });
    return;
  }
  
  res.json({
    success: true,
    data: task,
  });
}));

// Create new task
router.post('/', asyncHandler(async (req: Request, res: Response) => {
  const { title, description, status, priority, assigned_to, workspace_id, due_date, created_by, metadata } = req.body;
  
  if (!title) {
    res.status(400).json({
      success: false,
      message: 'Title is required',
    });
    return;
  }
  
  const supabase = getSupabase();
  
  const taskData: any = {
    title,
    description: description || null,
    status: status || 'pending',
    priority: priority || 'medium',
    assigned_to: assigned_to || null,
    workspace_id: workspace_id || null,
    due_date: due_date || null,
    created_by: created_by || null,
    metadata: metadata || {},
  };
  
  const { data: task, error } = await supabase
    .from('tasks')
    .insert(taskData)
    .select()
    .single();
  
  if (error) {
    logger.error('Failed to create task:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create task',
    });
    return;
  }
  
  logger.info(`Task created: ${task.id} - ${task.title}`);
  
  res.status(201).json({
    success: true,
    message: 'Task created successfully',
    data: task,
  });
}));

// Update task
router.patch('/:id', asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, status, priority, assigned_to, workspace_id, due_date, metadata } = req.body;
  
  const supabase = getSupabase();
  
  const updateData: any = {
    updated_at: new Date().toISOString(),
  };
  
  if (title !== undefined) updateData.title = title;
  if (description !== undefined) updateData.description = description;
  if (status !== undefined) {
    updateData.status = status;
    if (status === 'completed') {
      updateData.completed_at = new Date().toISOString();
    }
  }
  if (priority !== undefined) updateData.priority = priority;
  if (assigned_to !== undefined) updateData.assigned_to = assigned_to;
  if (workspace_id !== undefined) updateData.workspace_id = workspace_id;
  if (due_date !== undefined) updateData.due_date = due_date;
  if (metadata !== undefined) updateData.metadata = metadata;
  
  const { data: task, error } = await supabase
    .from('tasks')
    .update(updateData)
    .eq('id', id)
    .select()
    .single();
  
  if (error) {
    logger.error(`Failed to update task ${id}:`, error);
    res.status(500).json({
      success: false,
      message: 'Failed to update task',
    });
    return;
  }
  
  logger.info(`Task updated: ${id}`);
  
  res.json({
    success: true,
    message: 'Task updated successfully',
    data: task,
  });
}));

// Delete task
router.delete('/:id', asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  
  const supabase = getSupabase();
  
  const { error } = await supabase
    .from('tasks')
    .delete()
    .eq('id', id);
  
  if (error) {
    logger.error(`Failed to delete task ${id}:`, error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete task',
    });
    return;
  }
  
  logger.info(`Task deleted: ${id}`);
  
  res.json({
    success: true,
    message: 'Task deleted successfully',
  });
}));

// Bulk update tasks
router.patch('/bulk/update', asyncHandler(async (req: Request, res: Response) => {
  const { task_ids, updates } = req.body;
  
  if (!task_ids || !Array.isArray(task_ids) || task_ids.length === 0) {
    res.status(400).json({
      success: false,
      message: 'task_ids array is required',
    });
    return;
  }
  
  const supabase = getSupabase();
  
  const updateData: any = {
    updated_at: new Date().toISOString(),
    ...updates,
  };
  
  const { data: tasks, error } = await supabase
    .from('tasks')
    .update(updateData)
    .in('id', task_ids)
    .select();
  
  if (error) {
    logger.error('Failed to bulk update tasks:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to bulk update tasks',
    });
    return;
  }
  
  logger.info(`Bulk updated ${tasks?.length || 0} tasks`);
  
  res.json({
    success: true,
    message: `${tasks?.length || 0} tasks updated successfully`,
    data: tasks,
  });
}));

export default router;
