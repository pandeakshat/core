import * as React from "react"
import { ProjectGrid } from "@/components/projects/ProjectGrid"
import { ProjectCard } from "@/components/projects/ProjectCard"

// Define the Data Shape
export interface ProjectProp {
  title: string
  summary: string
  slug: string
  repoUrl?: string
  demoUrl?: string
  image?: string
}

interface ProjectsViewProps {
  projects: ProjectProp[]
}

export default function ProjectsView({ projects }: ProjectsViewProps) {
  return (
    <div className="relative w-full py-10">
      <h1 className="text-2xl font-bold text-center mb-8">Projects</h1>
      <ProjectGrid>
        {projects.map((p) => (
          <ProjectCard
            key={p.slug}
            title={p.title}
            subtitle={p.summary}
            href={`/projects/${p.slug}`}
            repo={p.repoUrl}
            demoUrl={p.demoUrl}
            image={p.image} 
          />
        ))}
      </ProjectGrid>
    </div>
  )
}