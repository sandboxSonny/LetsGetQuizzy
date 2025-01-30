import { useLoaderData } from "@remix-run/react";
import { createBrowserClient } from "@supabase/ssr";
import { createContext, ReactNode } from "react";

export async function loader() {
  return {
    env: {
      SUPABASE_URL: process.env.SUPABASE_URL!,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY!,
    },
  };
}

export const SupabaseContext = createContext({});

export const SupabaseProvider = ({ children }: { children: ReactNode }) => {
  const { env } = useLoaderData<typeof loader>();
  const supabase = createBrowserClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY);

  return (
    <SupabaseContext.Provider value={supabase}>
      {children}
    </SupabaseContext.Provider>
  );
};
