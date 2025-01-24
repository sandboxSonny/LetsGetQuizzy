import type { MetaFunction } from "@remix-run/node";
import { lazy, Suspense } from "react";
import { useQuiz } from "~/hooks";

export const meta: MetaFunction = () => {
  return [
    { title: "Let's Get Quizzy" },
    { name: "description", content: "The fun trivia game" },
  ];
};

const Login = lazy(() =>
  import("~/views").then((module) => ({ default: module.Login }))
);

const Register = lazy(() =>
  import("~/views").then((module) => ({ default: module.Register }))
);

const LoadingPage = lazy(() =>
  import("~/views").then((module) => ({ default: module.LoadingPage }))
);

export default function Index() {
  const { adminView } = useQuiz();

  const renderView = () => {
    switch (adminView) {
      case "login":
        return <Login />;
      case "register":
        return <Register />;
    }
  };

  return <Suspense fallback={<LoadingPage />}>{renderView()}</Suspense>;
}
