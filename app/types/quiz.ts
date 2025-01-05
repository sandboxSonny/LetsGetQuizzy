import { Dispatch, SetStateAction } from "react";

export interface QuizContextType {
  globalLoading: boolean;
  setGlobalLoading: Dispatch<SetStateAction<boolean>>;
  view: ViewType;
  setView: (newView: ViewType) => void;
}

export type ViewType = "welcome" | "about" | "join" | "host";

export type AnimationType = "close-side" | "close-top" | "swipe";
