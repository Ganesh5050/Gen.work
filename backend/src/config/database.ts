import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { logger } from './logger';

// Hardcoded credentials (temporary fix - .env not loading properly)
const SUPABASE_URL = 'https://xbcwznogyeuszhfadfpq.supabase.co';
const SUPABASE_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhiY3d6bm9neWV1c3poZmFkZnBxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MTExMTk1OSwiZXhwIjoyMDc2Njg3OTU5fQ.vZbxepY1MFgkiY5czqwb7Wgzn4pZS3NP84H7ogdMqAg';

let supabase: SupabaseClient | null = null;

export const connectDatabase = async (): Promise<void> => {
  try {
    if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
      throw new Error('Supabase credentials are missing. Please set SUPABASE_URL and SUPABASE_SERVICE_KEY in .env');
    }

    supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, {
      auth: {
        autoRefreshToken: true,
        persistSession: false
      }
    });

    logger.info('Connected to Supabase successfully');
  } catch (error) {
    logger.error('Failed to connect to Supabase:', error);
    throw error;
  }
};

export const getSupabase = (): SupabaseClient => {
  if (!supabase) {
    throw new Error('Supabase client not initialized. Call connectDatabase() first.');
  }
  return supabase;
};

export const disconnectDatabase = async (): Promise<void> => {
  try {
    // Supabase doesn't require explicit disconnection
    supabase = null;
    logger.info('Disconnected from Supabase');
  } catch (error) {
    logger.error('Error disconnecting from Supabase:', error);
    throw error;
  }
};