import { motion } from "framer-motion"
import { LinkCard } from "./LinkCard"

interface LinksViewProps {
  title: string
  subtitle?: string
  links: {
    title: string
    subtitle?: string
    href: string
    icon?: React.ReactNode
  }[]
}

export default function LinksView({ title, subtitle, links }: LinksViewProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-semibold">{title}</h1>
        {subtitle && (
          <p className="text-foreground/60 mt-2 max-w-md">{subtitle}</p>
        )}
      </motion.div>

      <div className="flex flex-col gap-4 items-center">
        {links.map((link, i) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
          >
            <LinkCard {...link} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
