import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import {
  createServerClient,
  parseCookieHeader,
  serializeCookieHeader,
} from "@supabase/ssr";
import { lazy, Suspense } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Let's Get Quizzy" },
    { name: "description", content: "The fun trivia game" },
  ];
};

const Register = lazy(() =>
  import("~/views").then((module) => ({ default: module.Register }))
);

const LoadingPage = lazy(() =>
  import("~/views").then((module) => ({ default: module.LoadingPage }))
);

export default function Index() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Register />
    </Suspense>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const headers = new Headers();
  const form = await request.formData();
  const supabase = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return parseCookieHeader(request.headers.get("Cookie") ?? "");
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            headers.append(
              "Set-Cookie",
              serializeCookieHeader(name, value, options)
            )
          );
        },
      },
    }
  );

  const data = {
    email: form.get("email") as string,
    password: form.get("password") as string,
  };
  if (data.email && data.password) supabase.auth.signUp(data);

  return new Response("...", {
    headers,
  });
}
