import { z } from "zod";

export const setupFormValidation = z.object({
  categories: z.array(z.string()).refine((val) => val.length > 0, {
    message: "At least one category must be selected",
  }),
});
