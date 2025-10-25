import * as React from "react"
import { cn } from "@/lib/utils"

export function BentoGrid({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "grid w-full max-w-6xl mx-auto gap-4 sm:gap-5 lg:gap-6",
        // 1 column mobile, 24 columns desktop for fine control
        "grid-cols-1 lg:[grid-template-columns:repeat(24,minmax(0,1fr))]",
        // uniform smaller height unit per row tick
        "[grid-auto-rows:minmax(80px,auto)] lg:[grid-auto-rows:minmax(30px,auto)]",
        "grid-flow-dense",
        className
      )}
    >
      {children}
    </div>
  )
}
