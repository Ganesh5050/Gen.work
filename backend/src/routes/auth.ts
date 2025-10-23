import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { asyncHandler } from '../middleware/errorHandler';
import { getSupabase } from '../config/database';
import { logger } from '../config/logger';

const router = express.Router();

const generateToken = (userId: string, email: string, role: string): string => {
  return jwt.sign(
    { userId, email, role },
    process.env.JWT_SECRET || 'gen-work-secret-key-2024',
    { expiresIn: '7d' }
  );
};

// Admin Login
router.post('/login', asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      success: false,
      message: 'Email and password are required',
    });
    return;
  }

  const supabase = getSupabase();

  // Find user by email
  const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email.toLowerCase())
    .single();

  if (error || !user) {
    logger.warn(`Failed login attempt for: ${email}`);
    res.status(401).json({
      success: false,
      message: 'Invalid email or password',
    });
    return;
  }

  // Verify password
  const isValidPassword = await bcrypt.compare(password, user.password_hash);

  if (!isValidPassword) {
    logger.warn(`Invalid password for: ${email}`);
    res.status(401).json({
      success: false,
      message: 'Invalid email or password',
    });
    return;
  }

  if (!user.is_active) {
    res.status(401).json({
      success: false,
      message: 'Account has been deactivated',
    });
    return;
  }

  // Update last login
  await supabase
    .from('users')
    .update({ last_login: new Date().toISOString() })
    .eq('id', user.id);

  const token = generateToken(user.id, user.email, user.role);

  logger.info(`User logged in: ${email} (${user.role})`);

  res.json({
    success: true,
    message: 'Login successful',
    token,
    user: {
      id: user.id,
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
      role: user.role,
    },
  });
}));

// Register new user (admin only in production)
router.post('/register', asyncHandler(async (req: Request, res: Response) => {
  const { email, password, firstName, lastName, role = 'user' } = req.body;

  if (!email || !password) {
    res.status(400).json({
      success: false,
      message: 'Email and password are required',
    });
    return;
  }

  const supabase = getSupabase();

  // Check if user exists
  const { data: existingUser } = await supabase
    .from('users')
    .select('id')
    .eq('email', email.toLowerCase())
    .single();

  if (existingUser) {
    res.status(409).json({
      success: false,
      message: 'User already exists with this email',
    });
    return;
  }

  // Hash password
  const passwordHash = await bcrypt.hash(password, 10);

  // Create user
  const { data: newUser, error } = await supabase
    .from('users')
    .insert({
      email: email.toLowerCase(),
      password_hash: passwordHash,
      first_name: firstName || '',
      last_name: lastName || '',
      role: role,
    })
    .select()
    .single();

  if (error || !newUser) {
    logger.error('Failed to create user:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create user',
    });
    return;
  }

  const token = generateToken(newUser.id, newUser.email, newUser.role);

  logger.info(`New user registered: ${email}`);

  res.status(201).json({
    success: true,
    message: 'User registered successfully',
    token,
    user: {
      id: newUser.id,
      email: newUser.email,
      firstName: newUser.first_name,
      lastName: newUser.last_name,
      role: newUser.role,
    },
  });
}));

// Verify token
router.get('/verify', asyncHandler(async (req: Request, res: Response) => {
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    res.status(401).json({
      success: false,
      message: 'No token provided',
    });
    return;
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || 'gen-work-secret-key-2024'
    ) as { userId: string; email: string; role: string };

    const supabase = getSupabase();

    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', decoded.userId)
      .single();

    if (error || !user || !user.is_active) {
      res.status(401).json({
        success: false,
        message: 'Invalid token',
      });
      return;
    }

    res.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Invalid token',
    });
  }
}));

export default router;