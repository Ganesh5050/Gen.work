import express, { Request, Response } from 'express';
import { asyncHandler } from '../middleware/errorHandler';
import { getSupabase } from '../config/database';
import { logger } from '../config/logger';
import { sendAccessRequestNotification, sendAccessRequestConfirmation } from '../services/emailService';

const router = express.Router();

router.post('/', asyncHandler(async (req: Request, res: Response) => {
  const { fullName, email, company, companySize, primaryUseCase } = req.body;

  const supabase = getSupabase();

  // Check for existing request from same email
  const { data: existingRequest } = await supabase
    .from('access_requests')
    .select('*')
    .eq('email', email)
    .in('status', ['pending', 'approved', 'contacted'])
    .single();
  
  if (existingRequest) {
    res.status(409).json({
      success: false,
      message: 'You already have a pending access request. We will contact you soon.',
    });
    return;
  }

  // Insert new access request
  const { data: accessRequest, error } = await supabase
    .from('access_requests')
    .insert([{
      full_name: fullName,
      email,
      company,
      company_size: companySize,
      primary_use_case: primaryUseCase,
      status: 'pending'
    }])
    .select()
    .single();

  if (error) {
    logger.error('Failed to create access request:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit access request. Please try again.',
    });
    return;
  }

  logger.info(`New access request from: ${email} at ${company}`);

  // Send email notifications
  await Promise.all([
    sendAccessRequestNotification({ fullName, email, company, companySize, primaryUseCase }),
    sendAccessRequestConfirmation(email, fullName),
  ]);

  res.status(201).json({
    success: true,
    message: 'Access request submitted successfully! We typically respond within 1-2 business days.',
    id: accessRequest.id,
  });
}));

// Get all access requests (admin only)
router.get('/', asyncHandler(async (req: Request, res: Response) => {
  const { status, limit = 50, page = 1 } = req.query;
  
  const supabase = getSupabase();
  
  let query = supabase
    .from('access_requests')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range((Number(page) - 1) * Number(limit), Number(page) * Number(limit) - 1);

  if (status) {
    query = query.eq('status', status);
  }

  const { data: requests, count, error } = await query;

  if (error) {
    logger.error('Failed to fetch access requests:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch access requests.',
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

// Update access request status (admin only)
router.patch('/:id', asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status || !['pending', 'approved', 'contacted', 'rejected'].includes(status)) {
    res.status(400).json({
      success: false,
      message: 'Invalid status value',
    });
    return;
  }

  const supabase = getSupabase();

  const { data, error } = await supabase
    .from('access_requests')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    logger.error(`Failed to update access request ${id}:`, error);
    res.status(500).json({
      success: false,
      message: 'Failed to update access request',
    });
    return;
  }

  logger.info(`Access request ${id} status updated to: ${status}`);

  res.json({
    success: true,
    message: 'Access request updated successfully',
    data,
  });
}));

export default router;