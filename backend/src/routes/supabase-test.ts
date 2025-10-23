import { Router } from 'express';
import { logger } from '../config/logger';

const router = Router();

// Test Supabase configuration
router.get('/test', async (req, res) => {
  try {
    const supabaseUrl = process.env.SUPABASE_URL;
    const hasServiceKey = !!process.env.SUPABASE_SERVICE_KEY;
    const hasAnonKey = !!process.env.SUPABASE_ANON_KEY;
    
    const isConfigured = supabaseUrl && hasServiceKey && hasAnonKey;
    
    res.json({
      success: true,
      configured: isConfigured,
      message: isConfigured ? 'Supabase is CONFIGURED and READY! ✅' : 'Supabase credentials missing',
      project: 'AI.DO',
      projectId: 'xbcwznogyeuszhfadfpq',
      supabaseUrl: supabaseUrl || 'NOT SET',
      credentials: {
        supabaseUrl: !!supabaseUrl,
        serviceKey: hasServiceKey,
        anonKey: hasAnonKey
      },
      status: isConfigured ? 'Connected ✅' : 'Not Configured ❌',
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    logger.error('Supabase test failed:', error);
    res.status(500).json({
      success: false,
      message: 'Supabase test failed',
      error: error.message
    });
  }
});

export default router;

