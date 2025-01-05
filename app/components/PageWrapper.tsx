import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { useQuiz } from "~/hooks";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const { view, setView, journal, setJournal } = useQuiz();

  const handleBack = () => {
    const updatedJournal = journal;
    updatedJournal.pop();

    setView(updatedJournal[updatedJournal.length - 1]);
    setJournal((previousState) => previousState.splice(-1));
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-left md:text-center">
        <div className="max-w-md">
          {view != "welcome" && (
            <button
              className="btn btn-sm btn-link mb-4"
              onClick={() => handleBack()}
            >
              <ChevronLeftIcon />
              Back
            </button>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};
