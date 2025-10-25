import * as React from "react"
import { cn } from "@/lib/utils"

export function KnowledgeGrid({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "grid w-full max-w-6xl mx-auto gap-5 sm:gap-6 mt-8",
        "grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 auto-rows-[minmax(180px,auto)]",
        className
      )}
    >
      {children}
    </div>
  )
}
