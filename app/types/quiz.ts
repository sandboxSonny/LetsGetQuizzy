import { Dispatch, SetStateAction } from "react";

export interface QuizContextType {
  globalLoading: boolean;
  setGlobalLoading: Dispatch<SetStateAction<boolean>>;
  view: ViewType;
  setView: (newView: ViewType) => void;
  journal: ViewType[];
  setJournal: Dispatch<SetStateAction<ViewType[]>>;
}

export type ViewType = "welcome" | "about" | "join" | "host" | "waiting-room";

export type AnimationType = "close-side" | "close-top" | "swipe";
