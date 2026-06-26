import { z } from 'zod';

export const newsSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
  videoUrl: z.string().url().optional().or(z.literal('')),
  authorId: z.string().uuid()
});