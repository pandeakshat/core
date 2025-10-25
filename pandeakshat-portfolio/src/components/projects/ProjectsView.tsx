import { motion } from "framer-motion"
import { BentoGrid } from "./ProjectGrid"
import { ProjectCard } from "./ProjectCard"
import projects from "@/data/projects"
import { BentoCard } from "../bento/BentoCard"

export default function ProjectsView() {
  return (
    <motion.div
      key="grid"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <BentoGrid>
        {projects.map((p) => (
        <ProjectCard
        key={p.id}
        title={p.title}
        subtitle={p.stack.join(", ")}
        image={`/images/projects/${p.id}.jpg`}
        href={`/projects/${p.id}`} // Detail page
        projectDemo={p.demo} // Live app/demo link
        repo={p.repo} // GitHub
        className="lg:col-span-3 lg:row-span-2"
        >
        <p className="text-sm text-foreground/70 mb-2">{p.summary}</p>
        <p className="text-xs text-foreground/60">Status: {p.status}</p>
        </ProjectCard>


        ))}
      </BentoGrid>
    </motion.div>
  )
}
