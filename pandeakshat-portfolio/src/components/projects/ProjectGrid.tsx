import * as React from "react"
import { cn } from "@/lib/utils"

export function ProjectGrid({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "grid w-full max-w-6xl mx-auto gap-5 sm:gap-6",
        "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {children}
    </div>
  )
}
