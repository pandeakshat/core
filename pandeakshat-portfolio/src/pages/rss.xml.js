import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  // get all markdown files in "blog" collection
  const posts = await getCollection("blog");

  // only include published + valid posts
  const publishedPosts = posts.filter(
    (p) =>
      p.data &&
      p.data.published === true &&
      p.data.title &&
      p.data.date
  );

  // build the RSS feed
  return rss({
    title: "Akshat Pande — Blog",
    description: "AI, Data Science & Productivity Articles",
    site: context.site ?? "https://pandeakshat.com",
    items: publishedPosts.map((post) => ({
      link: `/blog/${post.slug}/`,
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description:
        post.data.summary ||
        "Read the full article on pandeakshat.com.",
    })),
    customData: `<language>en</language>`,
  });
}
