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

const Setup = lazy(() =>
  import("~/views").then((module) => ({ default: module.Setup }))
);

const WaitingRoom = lazy(() =>
  import("~/views").then((module) => ({ default: module.WaitingRoom }))
);

const Play = lazy(() =>
  import("~/views").then((module) => ({ default: module.Play }))
);

const LoadingPage = lazy(() =>
  import("~/views").then((module) => ({ default: module.LoadingPage }))
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
      case "setup":
        return <Setup />;
      case "waiting-room":
        return <WaitingRoom />;
      case "play":
        return <Play />;
      default:
        return <Welcome />;
    }
  };

  return <Suspense fallback={<LoadingPage />}>{renderView()}</Suspense>;
}
