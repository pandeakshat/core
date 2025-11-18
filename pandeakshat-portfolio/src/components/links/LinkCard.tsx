import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  Store,
  PenTool,
  Globe,
  Linkedin,
  Twitter,
  Youtube,
  Github,
  ExternalLink,
} from "lucide-react";

// ✅ Explicit map for tree-shaking and safety
const ICON_MAP = {
  Briefcase,
  Store,
  PenTool,
  Globe,
  Linkedin,
  Twitter,
  Github,
  Youtube,
} as const;

interface LinkCardProps {
  title: string;
  subtitle?: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>; // ✅ Type-safe icon names
}

export function LinkCard({ title, subtitle, href, icon }: LinkCardProps) {
  const IconComponent = icon ? ICON_MAP[icon] : null;

  // ✅ Warn if icon is missing
  if (!IconComponent && icon) {
    console.warn(`Icon "${icon}" not found in LinkCard for "${title}"`);
  }

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
        "hover:bg-accent/10 transition-colors" // ✅ Optimized transition
      )}
    >
      <div className="flex items-center gap-3">
        {IconComponent && (
          <IconComponent className="text-primary w-5 h-5 shrink-0" />
        )}
        <div>
          <h3 className="font-medium">{title}</h3>
          {subtitle && (
            <p className="text-xs text-foreground/60 mt-[1px]">{subtitle}</p>
          )}
        </div>
      </div>

      <ExternalLink className="w-4 h-4 text-foreground/50" />
    </motion.a>
  );
}