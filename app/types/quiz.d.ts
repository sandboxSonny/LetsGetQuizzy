export interface QuizContextType {
  globalLoading: boolean;
  setGlobalLoading: Dispatch<SetStateAction<boolean>>;
  view: ViewType;
  setView: Dispatch<SetStateAction<ViewType>>;
}

export type ViewType = "welcome" | "about" | "contact";
