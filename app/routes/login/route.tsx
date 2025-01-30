import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { lazy, Suspense } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Let's Get Quizzy" },
    { name: "description", content: "The fun trivia game" },
  ];
};

const Login = lazy(() =>
  import("~/views").then((module) => ({ default: module.Login }))
);

const LoadingPage = lazy(() =>
  import("~/views").then((module) => ({ default: module.LoadingPage }))
);

export default function Index() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Login />
    </Suspense>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  // const form = await request.formData();
  console.log(request);

  return { ok: true };
}
