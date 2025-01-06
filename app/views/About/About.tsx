import { PageWrapper, RevealText } from "~/components";
import { useQuiz } from "~/hooks";

export const About = () => {
  const { setView } = useQuiz();

  return (
    <PageWrapper>
      <h1 className="text-5xl font-bold">
        Want to learn <RevealText text="more?" />
      </h1>
      <p>To get started you can either host or join a game</p>
      <div className="grid md:grid-cols-2 gap-2">
        <div className="text-left flex flex-col gap-4 bg-base-100 p-4 rounded-lg">
          <h2 className="text-2xl font-bold">Host a game?</h2>
          <button className="btn btn-secondary" onClick={() => setView("host")}>
            Get Started
          </button>
        </div>
        <div className="text-left flex flex-col gap-4 bg-base-100 p-4 rounded-lg">
          <h2 className="text-2xl font-bold">Join a game?</h2>
          <button className="btn btn-primary" onClick={() => setView("join")}>
            Get Started
          </button>
        </div>
      </div>
    </PageWrapper>
  );
};
