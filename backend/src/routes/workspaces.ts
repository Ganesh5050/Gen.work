import express, { Request, Response } from 'express';
import { asyncHandler } from '../middleware/errorHandler';
import { getSupabase } from '../config/database';
import { logger } from '../config/logger';

const router = express.Router();

// Get all workspaces for current user
router.get('/', asyncHandler(async (req: Request, res: Response) => {
  const { limit = 50, page = 1 } = req.query;
  
  const supabase = getSupabase();
  
  // Get workspaces where user is owner or member
  const { data: workspaces, count, error } = await supabase
    .from('workspaces')
    .select(`
      *,
      owner:users!workspaces_owner_id_fkey(id, email, first_name, last_name),
      members:workspace_members(count)
    `, { count: 'exact' })
    .order('created_at', { ascending: false })
    .range((Number(page) - 1) * Number(limit), Number(page) * Number(limit) - 1);
  
  if (error) {
    logger.error('Failed to fetch workspaces:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch workspaces',
    });
    return;
  }
  
  res.json({
    success: true,
    data: workspaces || [],
    pagination: {
      page: Number(page),
      limit: Number(limit),
      total: count || 0,
      pages: Math.ceil((count || 0) / Number(limit)),
    },
  });
}));

// Get single workspace by ID
router.get('/:id', asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  
  const supabase = getSupabase();
  
  const { data: workspace, error } = await supabase
    .from('workspaces')
    .select(`
      *,
      owner:users!workspaces_owner_id_fkey(id, email, first_name, last_name),
      members:workspace_members(
        id,
        role,
        joined_at,
        user:users(id, email, first_name, last_name)
      )
    `)
    .eq('id', id)
    .single();
  
  if (error || !workspace) {
    res.status(404).json({
      success: false,
      message: 'Workspace not found',
    });
    return;
  }
  
  res.json({
    success: true,
    data: workspace,
  });
}));

// Create new workspace
router.post('/', asyncHandler(async (req: Request, res: Response) => {
  const { name, description, slug, owner_id, settings } = req.body;
  
  if (!name || !owner_id) {
    res.status(400).json({
      success: false,
      message: 'Name and owner_id are required',
    });
    return;
  }
  
  const supabase = getSupabase();
  
  // Generate slug if not provided
  const workspaceSlug = slug || name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  
  const workspaceData = {
    name,
    description: description || null,
    slug: workspaceSlug,
    owner_id,
    settings: settings || {},
  };
  
  const { data: workspace, error } = await supabase
    .from('workspaces')
    .insert(workspaceData)
    .select()
    .single();
  
  if (error) {
    if (error.code === '23505') {
      // Unique constraint violation (slug already exists)
      res.status(409).json({
        success: false,
        message: 'A workspace with this slug already exists',
      });
      return;
    }
    
    logger.error('Failed to create workspace:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create workspace',
    });
    return;
  }
  
  logger.info(`Workspace created: ${workspace.id} - ${workspace.name}`);
  
  res.status(201).json({
    success: true,
    message: 'Workspace created successfully',
    data: workspace,
  });
}));

// Update workspace
router.patch('/:id', asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description, slug, settings, is_active } = req.body;
  
  const supabase = getSupabase();
  
  const updateData: any = {
    updated_at: new Date().toISOString(),
  };
  
  if (name !== undefined) updateData.name = name;
  if (description !== undefined) updateData.description = description;
  if (slug !== undefined) updateData.slug = slug;
  if (settings !== undefined) updateData.settings = settings;
  if (is_active !== undefined) updateData.is_active = is_active;
  
  const { data: workspace, error } = await supabase
    .from('workspaces')
    .update(updateData)
    .eq('id', id)
    .select()
    .single();
  
  if (error) {
    if (error.code === '23505') {
      res.status(409).json({
        success: false,
        message: 'A workspace with this slug already exists',
      });
      return;
    }
    
    logger.error(`Failed to update workspace ${id}:`, error);
    res.status(500).json({
      success: false,
      message: 'Failed to update workspace',
    });
    return;
  }
  
  logger.info(`Workspace updated: ${id}`);
  
  res.json({
    success: true,
    message: 'Workspace updated successfully',
    data: workspace,
  });
}));

// Delete workspace
router.delete('/:id', asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  
  const supabase = getSupabase();
  
  const { error } = await supabase
    .from('workspaces')
    .delete()
    .eq('id', id);
  
  if (error) {
    logger.error(`Failed to delete workspace ${id}:`, error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete workspace',
    });
    return;
  }
  
  logger.info(`Workspace deleted: ${id}`);
  
  res.json({
    success: true,
    message: 'Workspace deleted successfully',
  });
}));

// Add member to workspace
router.post('/:id/members', asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { user_id, role = 'member' } = req.body;
  
  if (!user_id) {
    res.status(400).json({
      success: false,
      message: 'user_id is required',
    });
    return;
  }
  
  const supabase = getSupabase();
  
  const memberData = {
    workspace_id: id,
    user_id,
    role,
  };
  
  const { data: member, error } = await supabase
    .from('workspace_members')
    .insert(memberData)
    .select('*, user:users(id, email, first_name, last_name)')
    .single();
  
  if (error) {
    if (error.code === '23505') {
      res.status(409).json({
        success: false,
        message: 'User is already a member of this workspace',
      });
      return;
    }
    
    logger.error(`Failed to add member to workspace ${id}:`, error);
    res.status(500).json({
      success: false,
      message: 'Failed to add member',
    });
    return;
  }
  
  logger.info(`Member added to workspace ${id}: ${user_id}`);
  
  res.status(201).json({
    success: true,
    message: 'Member added successfully',
    data: member,
  });
}));

// Update member role
router.patch('/:id/members/:member_id', asyncHandler(async (req: Request, res: Response) => {
  const { member_id } = req.params;
  const { role } = req.body;
  
  if (!role) {
    res.status(400).json({
      success: false,
      message: 'role is required',
    });
    return;
  }
  
  const supabase = getSupabase();
  
  const { data: member, error } = await supabase
    .from('workspace_members')
    .update({ role })
    .eq('id', member_id)
    .select('*, user:users(id, email, first_name, last_name)')
    .single();
  
  if (error) {
    logger.error(`Failed to update member ${member_id}:`, error);
    res.status(500).json({
      success: false,
      message: 'Failed to update member role',
    });
    return;
  }
  
  logger.info(`Member role updated: ${member_id} to ${role}`);
  
  res.json({
    success: true,
    message: 'Member role updated successfully',
    data: member,
  });
}));

// Remove member from workspace
router.delete('/:id/members/:member_id', asyncHandler(async (req: Request, res: Response) => {
  const { member_id } = req.params;
  
  const supabase = getSupabase();
  
  const { error } = await supabase
    .from('workspace_members')
    .delete()
    .eq('id', member_id);
  
  if (error) {
    logger.error(`Failed to remove member ${member_id}:`, error);
    res.status(500).json({
      success: false,
      message: 'Failed to remove member',
    });
    return;
  }
  
  logger.info(`Member removed: ${member_id}`);
  
  res.json({
    success: true,
    message: 'Member removed successfully',
  });
}));

export default router;
