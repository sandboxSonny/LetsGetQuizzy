import type { MetaFunction } from "@remix-run/node";
import { lazy, Suspense } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Let's Get Quizzy" },
    { name: "description", content: "The fun trivia game" },
  ];
};

const Play = lazy(() =>
  import("~/views").then((module) => ({ default: module.Play }))
);

const LoadingPage = lazy(() =>
  import("~/views").then((module) => ({ default: module.LoadingPage }))
);

export default function Index() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Play />
    </Suspense>
  );
}
