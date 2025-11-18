import { motion } from "framer-motion";
import { LinkCard } from "./LinkCard";

interface LinksViewProps {
  title: string;
  subtitle?: string;
  links: {
    title: string;
    subtitle?: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>; // ✅ Match LinkCard
  }[];
}

export default function LinksView({ title, subtitle, links }: LinksViewProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 px-4">
      <motion.header
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-semibold">{title}</h1>
        {subtitle && (
          <p className="text-foreground/60 mt-2 max-w-md">{subtitle}</p>
        )}
      </motion.header>

      <nav className="flex flex-col gap-4 items-center w-full">
        {links.map((link, i) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="w-full max-w-md"
          >
            <LinkCard {...link} />
          </motion.div>
        ))}
      </nav>
    </div>
  );
}