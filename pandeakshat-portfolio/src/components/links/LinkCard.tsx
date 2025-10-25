import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import * as Icons from "lucide-react"

interface LinkCardProps {
  title: string
  subtitle?: string
  href: string
  icon?: string
}

export function LinkCard({ title, subtitle, href, icon }: LinkCardProps) {
  const IconComponent = icon && (Icons as any)[icon]

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "flex items-center justify-between w-full sm:w-[500px] px-5 py-4 rounded-2xl",
        "border border-border bg-card/70 backdrop-blur-sm shadow-soft",
        "hover:bg-accent/10 transition-all"
      )}
    >
      <div className="flex items-center gap-3">
        {IconComponent && (
          <IconComponent className="text-primary w-4 h-4 shrink-0" />
        )}
        <div>
          <h3 className="font-medium">{title}</h3>
          {subtitle && (
            <p className="text-xs text-foreground/60 mt-[1px]">{subtitle}</p>
          )}
        </div>
      </div>

      <div className="text-foreground/50 text-sm">↗</div>
    </motion.a>
  )
}
