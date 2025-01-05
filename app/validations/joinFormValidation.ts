import { z } from "zod";

export const joinFormValidation = z.object({
  id: z
    .string()
    .min(6, "To few characters IDs should be 6")
    .max(6, "To many characters IDs should be 6"),
});
