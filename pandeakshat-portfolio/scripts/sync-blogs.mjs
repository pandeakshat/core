import fs from "fs"
import path from "path"
import matter from "gray-matter"

const BLOG_DIR = "./src/content/blog"
const OUT_FILE = "./src/data/blogs.ts"

// Get all markdown files
const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"))

const blogs = files.map((file) => {
  const filePath = path.join(BLOG_DIR, file)
  const slug = path.basename(file, ".md") // ✅ Generate slug automatically
  const content = fs.readFileSync(filePath, "utf8")
  const { data } = matter(content)

  // Merge frontmatter + slug
  return {
    id: slug,
    title: data.title || slug,
    summary: data.summary || "",
    date: data.date || "",
    tags: data.tags || [],
    cover: data.cover || "",
    readTime: data.readTime || "",
    medium: data.medium || "",
  }
})

// Write blogs.ts file
fs.writeFileSync(
  OUT_FILE,
  `const blogs = ${JSON.stringify(blogs, null, 2)};\n\nexport default blogs;\n`
)

console.log(`✅ Synced ${blogs.length} blogs → ${OUT_FILE}`)
