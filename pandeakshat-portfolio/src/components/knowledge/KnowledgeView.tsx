import { useState, useMemo } from "react"
import { KnowledgeGrid } from "./KnowledgeGrid"
import { KnowledgeCard } from "./KnowledgeCard"
import { knowledgeSections } from "@/data/knowledge"
import BackHomeButton from "@/components/common/BackHomeButton"
import { motion, AnimatePresence } from "framer-motion"

export default function KnowledgeView() {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  // Collect all tags from all resources
  const allTags = useMemo(() => {
    const tags = new Set<string>()
    knowledgeSections.forEach(section =>
      section.resources.forEach(res =>
        res.tags?.forEach(tag => tags.add(tag))
      )
    )
    return Array.from(tags).sort()
  }, [])

  // Filter logic
  const filteredSections = useMemo(() => {
    if (!activeTag) return knowledgeSections
    return knowledgeSections.map(section => ({
      ...section,
      resources: section.resources.filter(r => r.tags?.includes(activeTag))
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
          A curated collection of AI, data science, and development insights — continuously evolving.
        </p>
      </motion.div>

        {/* FILTER BAR */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
        {/* "All" Option */}
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

        {/* Dynamic Tag Buttons */}
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
        <KnowledgeCard
          title="Overview"
          subtitle="About this Hub"
          className="col-span-full bg-gradient-to-br from-primary/10 to-accent/5"
        >
          <p>
            This hub is a growing library of tools, resources, and research materials I’ve used or recommend. 
            Use the tags above to filter by topic — AI, Web, ML, LLMs, and more.
          </p>
        </KnowledgeCard>

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
                        href={res.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition"
                      >
                        {res.name}
                      </a>
                      <span className="text-xs text-foreground/50">
                        {res.progress ? res.progress : res.type}
                      </span>
                    </li>
                  ))}
                </ul>
              </KnowledgeCard>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Footer / Quote */}
        <KnowledgeCard
          title="Reflection"
          subtitle="Personal Motto"
          className="col-span-full bg-gradient-to-r from-accent/10 to-card/70 text-center"
        >
          <p className="text-lg italic text-foreground/80">
            “Knowledge compounds when shared — creation is the highest form of learning.”
          </p>
        </KnowledgeCard>
      </KnowledgeGrid>

      <BackHomeButton client:load position="bottom-right" />
    </div>
  )
}
