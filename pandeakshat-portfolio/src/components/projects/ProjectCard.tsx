import * as React from "react"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  subtitle?: string
  image?: string
  href?: string // Detail page (e.g., /projects/[id])
  projectDemo?: string // Live demo / interactive app
  repo?: string // GitHub repository
  className?: string
  children?: React.ReactNode
}

export function ProjectCard({
  title,
  subtitle,
  image,
  href,
  projectDemo,
  repo,
  className,
  children,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border border-border bg-card/70 backdrop-blur-sm shadow-soft overflow-hidden",
        "transition-all hover:-translate-y-[2px] hover:shadow-md",
        "group"
      )}
    >
      {/* ─── Entire Card Clickable Overlay ─── */}
      {href && (
        <a
          href={href}
          className="absolute inset-0 z-10"
          aria-label={`View details for ${title}`}
        />
      )}

      {/* ─── Image Preview ─── */}
      {image && (
        <div className="w-full h-40 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
          />
        </div>
      )}

      {/* ─── Content ─── */}
      <div className="relative z-20 flex-1 flex flex-col justify-between p-5">
        <div>
          <h3 className="text-lg font-semibold leading-snug">{title}</h3>
          {subtitle && (
            <p className="text-sm text-foreground/60 mb-2">{subtitle}</p>
          )}
          <div className="text-sm text-foreground/70">{children}</div>
        </div>

        {/* ─── Divider + Buttons ─── */}
        <div className="mt-4 border-t border-border pt-3 text-center">
          <p className="text-xs text-foreground/50 uppercase tracking-wide mb-2">
            View
          </p>
          <div className="flex justify-center gap-3">
            {projectDemo && (
              <a
                href={projectDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="z-30 px-3 py-1 text-xs border border-border rounded-full hover:bg-accent/10 transition"
                onClick={(e) => e.stopPropagation()}
              >
                Project
              </a>
            )}
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="z-30 px-3 py-1 text-xs border border-border rounded-full hover:bg-accent/10 transition"
                onClick={(e) => e.stopPropagation()}
              >
                Repository
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
