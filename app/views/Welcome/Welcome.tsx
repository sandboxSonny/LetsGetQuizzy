import { PageWrapper, RevealText } from "~/components";
import { useQuiz } from "~/hooks";

export const Welcome = () => {
  const { setView } = useQuiz();

  return (
    <PageWrapper login={true}>
      <h1 className="text-5xl font-bold">
        Let&apos;s Get <RevealText text="Quizzy" />
      </h1>
      <p>
        Let&apos;s Get Quizzy is a web application for having... a bit of fun.
        Want to get started?
      </p>
      <button className="btn btn-primary" onClick={() => setView("about")}>
        Get Started
      </button>
    </PageWrapper>
  );
};
