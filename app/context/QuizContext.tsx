import { createContext, useState } from "react";

export const QuizContext = createContext<QuizContextType>({
  globalLoading: false,
  setGlobalLoading: () => {},
});

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [globalLoading, setGlobalLoading] = useState(false);

  return (
    <QuizContext.Provider value={{ globalLoading, setGlobalLoading }}>
      {children}
    </QuizContext.Provider>
  );
};
