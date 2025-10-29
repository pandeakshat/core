import { useState } from "react"
import blogs from "@/data/blogs"
import { BlogCard } from "./BlogCard"
import { BlogGrid } from "./BlogGrid"

export default function BlogView() {
  const allTags = Array.from(new Set(blogs.flatMap((b) => b.tags || [])))
  const [selectedTag, setSelectedTag] = useState("All")

  const filteredBlogs =
    selectedTag === "All"
      ? blogs
      : blogs.filter((b) => b.tags?.includes(selectedTag))

  return (
    <div className="w-full py-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">Blog Articles</h1>

      {/* ─── Tag Filter ─── */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {["All", ...allTags].map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 rounded-full border text-sm transition ${
              selectedTag === tag
                ? "bg-accent/20 border-accent text-foreground"
                : "border-border text-foreground/70 hover:bg-accent/10"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* ─── Blog Cards ─── */}
      <BlogGrid>
        {filteredBlogs.map((b) => (
          <BlogCard
            key={b.id}
            title={b.title}
            summary={b.summary}
            cover={b.cover}
            date={b.date}
            tags={b.tags}
            readTime={b.readTime}
            medium={b.medium}
            href={`/blog/${b.id}`}
          />
        ))}
      </BlogGrid>
    </div>
  )
}
