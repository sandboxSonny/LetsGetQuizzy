import { createContext, useState } from "react";
import {
  AdminViewType,
  QuizContextType,
  QuizType,
  ViewType,
} from "~/types/quiz";

export const QuizContext = createContext<QuizContextType>({
  globalLoading: false,
  setGlobalLoading: () => {},
  view: "welcome",
  setView: () => {},
  adminView: "login",
  setAdminView: () => {},
  journal: ["welcome"],
  setJournal: () => {},
  adminJournal: ["login"],
  setAdminJournal: () => {},
  quiz: {},
  setQuiz: () => {},
});

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [globalLoading, setGlobalLoading] = useState(false);
  const [view, setView] = useState<ViewType>("welcome");
  const [adminView, setAdminView] = useState<AdminViewType>("login");
  const [journal, setJournal] = useState<ViewType[]>(["welcome"]);
  const [adminJournal, setAdminJournal] = useState<AdminViewType[]>(["login"]);
  const [quiz, setQuiz] = useState<QuizType>({});

  const changeView = (newView: ViewType) => {
    setGlobalLoading(true);
    setTimeout(() => {
      setView(newView);
      setJournal((previousState) => [...previousState, newView]);
    }, 500);
  };

  const changeAdminView = (newView: AdminViewType) => {
    setGlobalLoading(true);
    setTimeout(() => {
      setAdminView(newView);
      setAdminJournal((previousState) => [...previousState, newView]);
    }, 500);
  };

  return (
    <QuizContext.Provider
      value={{
        globalLoading,
        setGlobalLoading,
        view,
        setView: changeView,
        adminView,
        setAdminView: changeAdminView,
        journal,
        setJournal,
        adminJournal,
        setAdminJournal,
        quiz,
        setQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
