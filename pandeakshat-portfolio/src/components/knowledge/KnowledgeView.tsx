// KnowledgeHub.tsx
import { useState, useMemo } from "react"
import { KnowledgeGrid } from "./KnowledgeGrid"
import { KnowledgeCard } from "./KnowledgeCard"
import { motion, AnimatePresence } from "framer-motion"
import BackHomeButton from "@/components/common/BackHomeButton"

// Purely external resources - no personal tracking
const knowledgeSections = [
  {
    id: "data-science",
    title: "Data Science & Analytics",
    subtitle: "Core technical skills - curated learning paths",
    resources: [
      { name: "LeetCode SQL 50", link: "https://leetcode.com/study-plan/sql-50/", type: "Practice" },
      { name: "SQLBolt - Interactive SQL Tutorial", link: "https://sqlbolt.com/", type: "Interactive" },
      { name: "Mode Analytics SQL Tutorial", link: "https://mode.com/sql-tutorial/", type: "Interactive" },
      { name: "Pandas Documentation", link: "https://pandas.pydata.org/docs/", type: "Docs" },
      { name: "Scikit-Learn Tutorials", link: "https://scikit-learn.org/stable/tutorial/index.html", type: "Course" },
      { name: "Kaggle Micro-Courses", link: "https://www.kaggle.com/learn", type: "Course" },
    ]
  },
  {
    id: "mlops-deployment",
    title: "MLOps & Deployment",
    subtitle: "From notebook to production",
    resources: [
      { name: "Docker for Data Science", link: "https://www.datacamp.com/tutorial/docker-data-science", type: "Tutorial" },
      { name: "Streamlit Documentation", link: "https://docs.streamlit.io/", type: "Docs" },
      { name: "FastAPI Tutorial", link: "https://fastapi.tiangolo.com/tutorial/", type: "Docs" },
      { name: "GitHub Actions CI/CD", link: "https://docs.github.com/en/actions", type: "Docs" },
      { name: "AWS Free Tier Guide", link: "https://aws.amazon.com/free/", type: "Resource" },
      { name: "GCP Free Tier", link: "https://cloud.google.com/free/docs/gcp-free-tier", type: "Resource" },
    ]
  },
  {
    id: "adhd-focus",
    title: "ADHD & Focus Systems",
    subtitle: "Tools and frameworks for neurodivergent productivity",
    resources: [
      { name: "Atomic Habits by James Clear", link: "https://jamesclear.com/atomic-habits", type: "Book" },
      { name: "The First 20 Hours by Josh Kaufman", link: "https://www.amazon.com/First-20-Hours-Learn-Anything/dp/1591846242", type: "Book" },
      { name: "Focusmate - Body Doubling", link: "https://www.focusmate.com/", type: "Tool" },
      { name: "Forest App - Pomodoro Timer", link: "https://www.forestapp.cc/", type: "Tool" },
    ]
  },
  {
    id: "tools-software",
    title: "Tools & Software",
    subtitle: "Essential software for data work and writing",
    resources: [
      { name: "Obsidian - Local-First Notes", link: "https://obsidian.md/", type: "Tool" },
      { name: "Notion - All-in-One Workspace", link: "https://www.notion.so/", type: "Tool" },
      { name: "DBeaver - SQL Client", link: "https://dbeaver.io/", type: "Tool" },
      { name: "VS Code - Code Editor", link: "https://code.visualstudio.com/", type: "Tool" },
      { name: "Thorium Reader - EPUB Reader", link: "https://www.edrlab.org/software/thorium-reader/", type: "Tool" },
    ]
  },
  {
    id: "web-frameworks",
    title: "Web Frameworks & UI",
    subtitle: "For portfolio and documentation",
    resources: [
      { name: "Astro.js - Static Site Generator", link: "https://astro.build/", type: "Framework" },
      { name: "Next.js - React Framework", link: "https://nextjs.org/", type: "Framework" },
      { name: "Tailwind CSS - Utility-First CSS", link: "https://tailwindcss.com/", type: "Framework" },
      { name: "Streamlit - Data Apps", link: "https://streamlit.io/", type: "Framework" },
      { name: "Framer Motion - Animations", link: "https://www.framer.com/motion/", type: "Library" },
    ]
  },
  {
    id: "writing-publishing",
    title: "Writing & Publishing",
    subtitle: "For The Refinement Letter and professional content",
    resources: [
      { name: "Grammarly - Writing Assistant", link: "https://www.grammarly.com/", type: "Tool" },
      { name: "Hemingway Editor - Clarity Checker", link: "https://hemingwayapp.com/", type: "Tool" },
      { name: "Medium - Publishing Platform", link: "https://medium.com/", type: "Platform" },
      { name: "Substack - Newsletter Platform", link: "https://substack.com/", type: "Platform" },
      { name: "Canva - Design Tool", link: "https://www.canva.com/", type: "Tool" },
    ]
  },
  {
    id: "misc-resources",
    title: "Miscellaneous & Community",
    subtitle: "Where to ask questions and find help",
    resources: [
      { name: "Stack Overflow - Q&A", link: "https://stackoverflow.com/", type: "Community" },
      { name: "Reddit r/datascience", link: "https://www.reddit.com/r/datascience/", type: "Community" },
      { name: "Kaggle Competitions", link: "https://www.kaggle.com/competitions", type: "Practice" },
      { name: "GitHub Student Developer Pack", link: "https://education.github.com/pack", type: "Benefits" },
      { name: "Excalidraw - Diagram Tool", link: "https://excalidraw.com/", type: "Tool" },
    ]
  }
]

export default function KnowledgeView() {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const allTags = useMemo(() => {
    const tags = new Set<string>()
    knowledgeSections.forEach(section =>
      section.resources.forEach(res => {
        tags.add(res.type)
      })
    )
    return Array.from(tags).sort()
  }, [])

  const filteredSections = useMemo(() => {
    if (!activeTag) return knowledgeSections
    return knowledgeSections.map(section => ({
      ...section,
      resources: section.resources.filter(r => r.type === activeTag)
    })).filter(section => section.resources.length > 0)
  }, [activeTag])

  return (
    <div className="relative pb-20">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-3xl mx-auto mt-10"
      >
        <h1 className="text-3xl font-semibold">Knowledge Hub</h1>
        <p className="text-foreground/60 mt-2">
          A curated collection of tools, resources, and research materials for data science and systems thinking.
        </p>
        <p className="text-sm text-foreground/50 mt-1">
          Filter by category to find what you need.
        </p>
      </motion.div>

      {/* FILTER BAR */}
      <div className="flex flex-wrap justify-center gap-2 mt-6">
        <button
          onClick={() => setActiveTag(null)}
          className={`px-3 py-1 text-xs rounded-full border transition-all ${
            activeTag === null
              ? "bg-primary text-primary-foreground border-primary"
              : "border-border hover:bg-accent/10"
          }`}
        >
          All
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-3 py-1 text-xs rounded-full border transition-all ${
              activeTag === tag
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border hover:bg-accent/10"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* GRID */}
      <KnowledgeGrid>
        {/* Overview */}

        {/* Dynamic Sections */}
        <AnimatePresence mode="wait">
          {filteredSections.map(section => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-6 col-span-full"
            >
              <KnowledgeCard
                title={section.title}
                subtitle={section.subtitle}
                scrollable
              >
                <ul className="space-y-2">
                  {section.resources.map((res, idx) => (
                    <li key={idx} className="flex justify-between items-center border-b border-border/40 pb-1">
                      <a
                        href={res.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition"
                      >
                        {res.name}
                      </a>
                      <span className="text-xs text-foreground/50">
                        {res.type}
                      </span>
                    </li>
                  ))}
                </ul>
              </KnowledgeCard>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Footer */}
        <KnowledgeCard
          title="Contribute"
          subtitle="Found a better resource?"
          className="col-span-full bg-gradient-to-r from-accent/10 to-card/70 text-center"
        >
          <p className="text-sm text-foreground/80">
            Open an issue on GitHub or DM me on LinkedIn with suggestions.
          </p>
        </KnowledgeCard>
      </KnowledgeGrid>

    </div>
  )
}