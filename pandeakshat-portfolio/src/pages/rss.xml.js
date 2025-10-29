import rss from "@astrojs/rss"
import { getCollection } from "astro:content"

export async function GET(context) {
  const posts = await getCollection("blog")

  return rss({
    title: "Akshat Pande — Blog",
    description: "AI, Data Science & Productivity Articles",
    site: context.site ?? "https://pandeakshat.com", // fallback if site missing
    items: posts.map((post) => ({
      link: `/blog/${post.slug}/`,
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description: post.data.summary,
    })),
    customData: `<language>en</language>`,
  })
}
