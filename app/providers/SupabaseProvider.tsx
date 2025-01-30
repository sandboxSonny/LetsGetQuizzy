import { useLoaderData } from "@remix-run/react";
import { createBrowserClient } from "@supabase/ssr";
import { createContext, ReactNode } from "react";
import { loader } from "~/root";

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
