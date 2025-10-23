import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { asyncHandler } from '../middleware/errorHandler';
import { getSupabase } from '../config/database';
import { logger } from '../config/logger';

const router = express.Router();

// One-time setup route to create first admin user
// DISABLE THIS IN PRODUCTION or add a secret key
router.post('/create-admin', asyncHandler(async (req: Request, res: Response) => {
  const { email, password, firstName, lastName, secretKey } = req.body;

  // Simple protection - require a secret key
  if (secretKey !== 'gen-work-setup-2024') {
    res.status(403).json({
      success: false,
      message: 'Invalid secret key',
    });
    return;
  }

  if (!email || !password) {
    res.status(400).json({
      success: false,
      message: 'Email and password are required',
    });
    return;
  }

  const supabase = getSupabase();

  // Check if any admin exists
  const { data: existingAdmin } = await supabase
    .from('users')
    .select('id')
    .eq('role', 'admin')
    .limit(1);

  if (existingAdmin && existingAdmin.length > 0) {
    res.status(409).json({
      success: false,
      message: 'Admin user already exists',
    });
    return;
  }

  // Hash password
  const passwordHash = await bcrypt.hash(password, 10);

  // Create admin user
  const { data: newAdmin, error } = await supabase
    .from('users')
    .insert({
      email: email.toLowerCase(),
      password_hash: passwordHash,
      first_name: firstName || 'Admin',
      last_name: lastName || 'User',
      role: 'admin',
      is_active: true,
    })
    .select()
    .single();

  if (error || !newAdmin) {
    logger.error('Failed to create admin user:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create admin user',
    });
    return;
  }

  logger.info(`Admin user created: ${email}`);

  res.status(201).json({
    success: true,
    message: 'Admin user created successfully! You can now login.',
    user: {
      id: newAdmin.id,
      email: newAdmin.email,
      role: newAdmin.role,
    },
  });
}));

export default router;

