import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useInViewAnimation } from "@/hooks/useInViewAnimation"

interface ResumeCardProps {
  title: string
  subtitle?: string
  children?: React.ReactNode
  className?: string
}

export function ResumeCard({ title, subtitle, children, className }: ResumeCardProps) {
  const [ref, controls] = useInViewAnimation()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "flex flex-col rounded-2xl border border-border bg-card/70 backdrop-blur-sm shadow-soft p-6",
        "transition-all hover:shadow-md",
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
