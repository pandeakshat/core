// src/components/blog/BlogView.tsx
import { useState } from "react"
import { BlogCard } from "./BlogCard"
import { BlogGrid } from "./BlogGrid"

// 1. Define the shape of a Blog Post
export interface BlogPostProp {
  id: string
  title: string
  summary: string
  cover?: string
  date: string
  tags: string[]
  readTime: string
  medium?: string
}

interface BlogViewProps {
  blogs: BlogPostProp[] // <--- Receive data here
}

export default function BlogView({ blogs }: BlogViewProps) {
  // 2. Extract unique tags dynamically from the passed data
  const allTags = Array.from(new Set(blogs.flatMap((b) => b.tags || [])))
  const [selectedTag, setSelectedTag] = useState("All")

  const filteredBlogs =
    selectedTag === "All"
      ? blogs
      : blogs.filter((b) => b.tags?.includes(selectedTag))

  return (
    <div className="w-full py-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">Blog Articles</h1>

      {/* Tag Filter */}
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

      {/* Grid */}
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
            href={`/blog/${b.id}`} // Uses the slug as ID
          />
        ))}
      </BlogGrid>
    </div>
  )
}