import { ProjectGrid } from "@/components/projects/ProjectGrid"
import { ProjectCard } from "@/components/projects/ProjectCard"
import projects from "@/data/projects.json"
import { deployments } from "@/data/deployments" // <--- 1. Import map

export default function ProjectsView() {
  return (
    <div className="relative w-full py-10">
      <h1 className="text-2xl font-bold text-center mb-8">Projects</h1>
      <ProjectGrid>
        {projects.map((p) => (
          <ProjectCard
            key={p.name}
            title={p.name.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
            subtitle={p.summary}
            href={`/projects/${p.name}`}
            repo={p.url}
            demoUrl={deployments[p.name]} // <--- 2. Pass the manual link
          />
        ))}
      </ProjectGrid>
    </div>
  )
}