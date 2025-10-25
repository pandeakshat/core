import * as React from "react"
import { cn } from "@/lib/utils"

interface BlogCardProps {
  title: string
  summary: string
  cover?: string
  date?: string
  readTime?: string
  href: string
  className?: string
}

export default function BlogCard({
  title,
  summary,
  cover,
  date,
  readTime,
  href,
  className,
}: BlogCardProps) {
  return (
    <a
      href={href}
      className={cn(
        "flex flex-col sm:flex-row w-full items-stretch rounded-2xl border border-border bg-card/70 backdrop-blur-sm shadow-soft overflow-hidden transition-all hover:-translate-y-[2px] hover:shadow-md",
        className
      )}
    >
      {/* ─── Left: Image ─── */}
      {cover && (
        <div className="w-full sm:w-1/3 h-48 sm:h-auto overflow-hidden">
          <img
            src={cover}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.05]"
          />
        </div>
      )}

      {/* ─── Right: Content ─── */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-foreground/70 mb-3">{summary}</p>
        </div>

        <div className="border-t border-border pt-3 text-xs text-foreground/50 flex justify-between">
          <span>{date}</span>
          <span>{readTime}</span>
        </div>
      </div>
    </a>
  )
}
