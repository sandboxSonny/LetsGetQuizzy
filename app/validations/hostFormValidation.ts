import { z } from "zod";

export const hostFormValidation = z.object({
  name: z.string().min(1, "Name is required"),
  roomName: z.string().min(1, "Room name is required"),
});
