import { createContext, useState } from "react";
import { QuizContextType, QuizType, ViewType } from "~/types/quiz";

export const QuizContext = createContext<QuizContextType>({
  globalLoading: false,
  setGlobalLoading: () => {},
  view: "welcome",
  setView: () => {},
  journal: ["welcome"],
  setJournal: () => {},
  quiz: {},
  setQuiz: () => {},
});

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [globalLoading, setGlobalLoading] = useState(false);
  const [view, setView] = useState<ViewType>("welcome");
  const [journal, setJournal] = useState<ViewType[]>(["welcome"]);
  const [quiz, setQuiz] = useState<QuizType>({});

  const changeView = (newView: ViewType) => {
    setGlobalLoading(true);
    setTimeout(() => {
      setView(newView);
      setJournal((previousState) => [...previousState, newView]);
    }, 500);
  };

  return (
    <QuizContext.Provider
      value={{
        globalLoading,
        setGlobalLoading,
        view,
        setView: changeView,
        journal,
        setJournal,
        quiz,
        setQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
