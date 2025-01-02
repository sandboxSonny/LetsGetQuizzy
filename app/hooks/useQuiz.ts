import { useContext } from "react";
import { QuizContext } from "~/context";

export const useQuiz = () => {
  return useContext(QuizContext);
};
