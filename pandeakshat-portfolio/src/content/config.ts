import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
    tags: z.array(z.string()).optional(),
    cover: z.string().optional(),
    readTime: z.string().optional(),
    medium: z.string().optional(),
  }),
});

export const collections = { blog };
