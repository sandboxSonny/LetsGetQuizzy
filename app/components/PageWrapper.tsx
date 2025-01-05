import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { views } from "~/consts";
import { useQuiz } from "~/hooks";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const { view, setView } = useQuiz();

  const handleBack = () => {
    const previousStep = views.indexOf(view);
    setView(views[previousStep - 1]);
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
