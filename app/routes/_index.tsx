import type { MetaFunction } from "@remix-run/node";
import { lazy, Suspense } from "react";
import { useQuiz } from "~/hooks";

export const meta: MetaFunction = () => {
  return [
    { title: "Let's Get Quizzy" },
    { name: "description", content: "The fun trivia game" },
  ];
};

const Welcome = lazy(() =>
  import("~/views").then((module) => ({ default: module.Welcome }))
);

const About = lazy(() =>
  import("~/views").then((module) => ({ default: module.About }))
);

const Join = lazy(() =>
  import("~/views").then((module) => ({ default: module.Join }))
);

const Host = lazy(() =>
  import("~/views").then((module) => ({ default: module.Host }))
);

export default function Index() {
  const { view } = useQuiz();

  const renderView = () => {
    switch (view) {
      case "welcome":
        return <Welcome />;
      case "about":
        return <About />;
      case "join":
        return <Join />;
      case "host":
        return <Host />;
      default:
        return <Welcome />;
    }
  };

  return <Suspense fallback={<div>Loading...</div>}>{renderView()}</Suspense>;
}
