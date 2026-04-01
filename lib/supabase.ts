import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

/** Check if Supabase is configured */
export function isSupabaseConfigured(): boolean {
  return Boolean(supabaseUrl && supabaseAnonKey && supabaseUrl !== 'your_supabase_project_url');
}

/** Browser client (lazy-init, uses anon key, respects RLS) */
let _supabase: SupabaseClient | null = null;
export function getSupabase(): SupabaseClient {
  if (!_supabase) {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase not configured');
    }
    _supabase = createClient(supabaseUrl, supabaseAnonKey);
  }
  return _supabase;
}

/** Alias for backward compat */
export const supabase = {
  from: (table: string) => getSupabase().from(table),
};

/** Server client (uses service role, bypasses RLS) */
export function getServiceClient(): SupabaseClient {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase not configured');
  }
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? '';
  return createClient(supabaseUrl, serviceKey);
}
