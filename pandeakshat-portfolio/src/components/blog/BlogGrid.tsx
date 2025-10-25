import * as React from "react"
import { cn } from "@/lib/utils"

export default function BlogGrid({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 w-full max-w-5xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  )
}
