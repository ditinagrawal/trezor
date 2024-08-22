import { z } from "zod";

export const VaultSchema = z.object({
  userId: z.string(),
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(30, "Name must be at most 30 characters"),
  message: z.string().max(300, "Message must be at most 300 characters"),
  mediaURL: z.string(),
  unlockDate: z.date(),
  createdAt: z.date(),
  status: z.string(),
});
