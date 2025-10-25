import BlogGrid from "./BlogGrid"
import BlogCard from "./BlogCard"
import blogs from "@/data/blogs"

export default function BlogView() {
  return (
    <BlogGrid>
      {blogs.map((b) => (
        <BlogCard
          key={b.id}
          title={b.title}
          summary={b.summary}
          cover={b.cover}
          date={b.date}
          readTime={b.readTime}
          href={`/blog/${b.id}`}
        />
      ))}
    </BlogGrid>
  )
}
