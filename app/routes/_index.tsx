import type { MetaFunction } from "@remix-run/node";
import { RevealText } from "~/components";
import { useQuiz } from "~/hooks";

export const meta: MetaFunction = () => {
  return [
    { title: "Let's Get Quizzy" },
    { name: "description", content: "The fun trivia game" },
  ];
};

export default function Index() {
  const { setGlobalLoading } = useQuiz();

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-left md:text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Let&apos;s Get <RevealText text="Quizzy" />
          </h1>
          <p className="py-6">
            Let&apos;s Get Quizzy is a web application for having... a bit of
            fun. Want to get started?
          </p>
          <button
            className="btn btn-primary"
            onClick={() => setGlobalLoading(true)}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
