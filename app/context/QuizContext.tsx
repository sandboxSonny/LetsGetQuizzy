import { createContext, useState } from "react";
import { QuizContextType, ViewType } from "~/types/quiz";

export const QuizContext = createContext<QuizContextType>({
  globalLoading: false,
  setGlobalLoading: () => {},
  view: "welcome",
  setView: () => {},
});

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [globalLoading, setGlobalLoading] = useState(false);
  const [view, setView] = useState<ViewType>("welcome");

  const changeView = (newView: ViewType) => {
    setGlobalLoading(true);
    setTimeout(() => {
      setView(newView);
    }, 500);
  };

  return (
    <QuizContext.Provider
      value={{ globalLoading, setGlobalLoading, view, setView: changeView }}
    >
      {children}
    </QuizContext.Provider>
  );
};
