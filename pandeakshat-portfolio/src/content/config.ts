import { defineCollection, z } from "astro:content"

// Blog collection — existing setup
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
})

// Featured content — for /projects/featured and /blog/featured
const featured = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.string().optional(),
    tags: z.array(z.string()).optional(),
    cover: z.string().optional(),
    readTime: z.string().optional(),
    repo: z.string().optional(),
    demo: z.string().optional(),
  }),
})

export const collections = { blog, featured }
