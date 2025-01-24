import { SupabaseClient } from "@supabase/supabase-js";
import { Dispatch, SetStateAction } from "react";
import { Database } from "./database";

export interface QuizContextType {
  globalLoading: boolean;
  setGlobalLoading: Dispatch<SetStateAction<boolean>>;
  view: ViewType;
  setView: (newView: ViewType) => void;
  adminView: AdminViewType;
  setAdminView: (newView: AdminViewType) => void;
  journal: ViewType[];
  setJournal: Dispatch<SetStateAction<ViewType[]>>;
  adminJournal: AdminViewType[];
  setAdminJournal: Dispatch<SetStateAction<AdminViewType[]>>;
  quiz: QuizType;
  setQuiz: Dispatch<SetStateAction<QuizType>>;
  client: SupabaseClient<Database> | undefined;
}

export type QuizType = {
  name?: string;
  roomName?: string;
  categories?: string[];
};

export type ViewType =
  | "welcome"
  | "about"
  | "join"
  | "host"
  | "setup"
  | "waiting-room"
  | "play"
  | "login";

export type AdminViewType = "login" | "register";

export type AnimationType = "close-side" | "close-top" | "swipe";

export type TriviaCategory = {
  id: number;
  name: string;
};

export type TriviaCategories = {
  trivia_categories: TriviaCategory[];
};
