import * as React from "react"
import { cn } from "@/lib/utils"
import ReactMarkdown from "react-markdown" // 1. Import this

interface ProjectCardProps {
  title: string
  subtitle?: string
  href?: string
  repo?: string
  className?: string
}

export function ProjectCard({
  title,
  subtitle,
  href,
  repo,
  className,
}: ProjectCardProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => href && (window.location.href = href)}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && href)
          window.location.href = href
      }}
      className={cn(
        "flex flex-col rounded-2xl border border-border bg-card/70 backdrop-blur-sm shadow-soft overflow-hidden",
        "transition-all hover:-translate-y-[2px] hover:shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/40",
        className
      )}
    >
      <div className="flex-1 flex flex-col justify-between p-5">
        <div>
          <h3 className="text-lg font-semibold leading-snug mb-1">{title}</h3>
          
          {/* 2. THE UPDATED SECTION */}
          {subtitle && (
            <div className="text-sm text-foreground/60 mb-3 prose prose-sm max-w-none">
              <ReactMarkdown
                components={{
                  // Override 'p' to avoid nested paragraph warnings and keep layout tight
                  p: ({ children }) => <span className="block">{children}</span>,
                  
                  // Make '**text**' stand out: Darker color + Bold
                  strong: ({ children }) => (
                    <span className="font-bold text-foreground opacity-100">
                      {children}
                    </span>
                  ),
                }}
              >
                {subtitle}
              </ReactMarkdown>
            </div>
          )}
          {/* END UPDATED SECTION */}

        </div>

        <div className="mt-auto border-t border-border pt-3 text-center">
          <p className="text-xs text-foreground/50 uppercase tracking-wide mb-2">
            View
          </p>
          <div className="flex justify-center gap-3">
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="px-3 py-1 text-xs border border-border rounded-full hover:bg-accent/10 transition"
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