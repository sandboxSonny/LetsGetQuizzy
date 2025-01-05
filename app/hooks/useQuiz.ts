import { useContext } from "react";
import { QuizContext } from "~/providers";

export const useQuiz = () => {
  return useContext(QuizContext);
};
