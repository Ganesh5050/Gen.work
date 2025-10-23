import express, { Request, Response } from 'express';
import { asyncHandler } from '../middleware/errorHandler';
import { getSupabase } from '../config/database';
import { logger } from '../config/logger';
import { sendDemoRequestNotification, sendDemoRequestConfirmation } from '../services/emailService';

const router = express.Router();

// Submit demo request
router.post('/', asyncHandler(async (req: Request, res: Response) => {
  const { firstName, lastName, email, company, jobTitle, department, needs } = req.body;

  const supabase = getSupabase();

  // Check for existing request from same email
  const { data: existingRequest } = await supabase
    .from('demo_requests')
    .select('*')
    .eq('email', email)
    .in('status', ['pending', 'contacted', 'scheduled'])
    .single();
  
  if (existingRequest) {
    res.status(409).json({
      success: false,
      message: 'You already have a pending demo request. We will contact you soon.',
    });
    return;
  }

  // Insert new demo request
  const { data: demoRequest, error } = await supabase
    .from('demo_requests')
    .insert([{
      first_name: firstName,
      last_name: lastName,
      email,
      company,
      job_title: jobTitle,
      department,
      needs,
      status: 'pending'
    }])
    .select()
    .single();

  if (error) {
    logger.error('Failed to create demo request:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit demo request. Please try again.',
    });
    return;
  }

  logger.info(`New demo request from: ${email} at ${company}`);

  // Send email notifications
  await Promise.all([
    sendDemoRequestNotification({ firstName, lastName, email, company, jobTitle, department, needs }),
    sendDemoRequestConfirmation(email, firstName),
  ]);

  res.status(201).json({
    success: true,
    message: 'Demo request submitted successfully! We will contact you within 1-2 business days.',
    id: demoRequest.id,
  });
}));

// Get all demo requests (admin only - would need auth middleware)
router.get('/', asyncHandler(async (req: Request, res: Response) => {
  const { status, limit = 50, page = 1 } = req.query;
  
  const supabase = getSupabase();
  
  let query = supabase
    .from('demo_requests')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range((Number(page) - 1) * Number(limit), Number(page) * Number(limit) - 1);

  if (status) {
    query = query.eq('status', status);
  }

  const { data: requests, count, error } = await query;

  if (error) {
    logger.error('Failed to fetch demo requests:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch demo requests.',
    });
    return;
  }

  res.json({
    success: true,
    data: requests || [],
    pagination: {
      page: Number(page),
      limit: Number(limit),
      total: count || 0,
      pages: Math.ceil((count || 0) / Number(limit)),
    },
  });
}));

// Update demo request status (admin only)
router.patch('/:id', asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status || !['pending', 'contacted', 'scheduled', 'completed', 'cancelled'].includes(status)) {
    res.status(400).json({
      success: false,
      message: 'Invalid status value',
    });
    return;
  }

  const supabase = getSupabase();

  const { data, error } = await supabase
    .from('demo_requests')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    logger.error(`Failed to update demo request ${id}:`, error);
    res.status(500).json({
      success: false,
      message: 'Failed to update demo request',
    });
    return;
  }

  logger.info(`Demo request ${id} status updated to: ${status}`);

  res.json({
    success: true,
    message: 'Demo request updated successfully',
    data,
  });
}));

export default router;