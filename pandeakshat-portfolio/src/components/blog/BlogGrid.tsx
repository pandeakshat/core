import * as React from "react"
import { cn } from "@/lib/utils"

export function BlogGrid({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "grid gap-6 w-full max-w-6xl mx-auto",
        "sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  )
}
