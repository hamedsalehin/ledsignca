import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Supabase credentials missing. Check your environment variables.");
}

const mockSupabase = {
  auth: {
    getSession: async () => ({ data: { session: null }, error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    signUp: async () => ({ data: { user: null }, error: new Error("Supabase not configured") }),
    signInWithPassword: async () => ({ data: { user: null }, error: new Error("Supabase not configured") }),
    signOut: async () => {},
  },
  storage: {
    from: () => ({
      upload: async () => ({ data: null, error: new Error("Supabase not configured") }),
      getPublicUrl: () => ({ data: { publicUrl: "" } }),
    }),
  },
} as any;

export const supabase: SupabaseClient = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : mockSupabase;


