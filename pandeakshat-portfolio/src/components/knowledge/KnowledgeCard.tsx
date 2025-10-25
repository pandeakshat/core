import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useInViewAnimation } from "@/hooks/useInViewAnimation"

interface KnowledgeCardProps {
  title: string
  subtitle?: string
  children?: React.ReactNode
  scrollable?: boolean
  className?: string
}

export function KnowledgeCard({
  title,
  subtitle,
  children,
  scrollable = false,
  className,
}: KnowledgeCardProps) {
  const [ref, controls] = useInViewAnimation()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "flex flex-col rounded-2xl border border-border bg-card/70 backdrop-blur-sm shadow-soft p-6",
        "transition-all hover:shadow-md",
        scrollable ? "max-h-[400px] overflow-y-auto" : "",
        className
      )}
    >
      <div className="mb-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        {subtitle && <p className="text-sm text-foreground/60">{subtitle}</p>}
      </div>
      <div className="text-sm text-foreground/80 space-y-2">{children}</div>
    </motion.div>
  )
}
