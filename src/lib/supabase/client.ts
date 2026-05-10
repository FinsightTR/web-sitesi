import { createBrowserClient } from "@supabase/ssr";

export function getSupabaseClientConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return null;
  }

  return { url, anonKey };
}

export function createClient() {
  const config = getSupabaseClientConfig();

  if (!config) {
    return null;
  }

  return createBrowserClient(config.url, config.anonKey);
}

export const isSupabaseClientConfigured = Boolean(getSupabaseClientConfig());
