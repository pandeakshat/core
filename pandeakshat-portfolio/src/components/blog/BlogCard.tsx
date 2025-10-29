import * as React from "react"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"

interface BlogCardProps {
  title: string
  summary?: string
  cover?: string
  date?: string
  tags?: string[]
  readTime?: string
  medium?: string
  href?: string
  className?: string
}

export function BlogCard({
  title,
  summary,
  cover,
  date,
  tags,
  readTime,
  medium,
  href,
  className,
}: BlogCardProps) {
  return (
    <a
      href={href || "#"}
      className={cn(
        "group flex flex-col rounded-2xl overflow-hidden border border-border bg-card/70 backdrop-blur-sm shadow-soft transition-all hover:-translate-y-[2px] hover:shadow-md",
        className
      )}
    >
      {cover && (
        <div className="h-48 w-full overflow-hidden">
          <img
            src={cover}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-col flex-1 justify-between p-5">
        <div>
          <h3 className="text-lg font-semibold leading-tight mb-1">{title}</h3>
          <p className="text-sm text-foreground/70 mb-2">{summary}</p>
          <div className="flex flex-wrap gap-2 text-xs text-foreground/60 mb-2">
            {tags?.map((tag) => (
              <span key={tag} className="px-2 py-0.5 border border-border rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto text-xs text-foreground/50 flex justify-between items-center">
          <span>{date}</span>
          <span>{readTime}</span>
        </div>

        {medium && (
          <a
            href={medium}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-xs font-medium flex items-center gap-1 text-primary hover:underline"
          >
            Read on Medium <ArrowUpRight size={12} />
          </a>
        )}
      </div>
    </a>
  )
}
