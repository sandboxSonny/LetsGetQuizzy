import { useContext } from "react";
import { SupabaseContext } from "~/providers";

export const useQuiz = () => {
  return useContext(SupabaseContext);
};
