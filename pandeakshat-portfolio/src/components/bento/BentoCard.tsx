import { cn } from "@/lib/utils"

export function BentoCard({
  title,
  subtitle,
  icon,
  children,
  className,
  href,
  colSpan = 3,
  rowSpan = 1,
}: {
  title: string
  subtitle?: string
  icon?: React.ReactNode
  children?: React.ReactNode
  className?: string
  href?: string
  colSpan?: number
  rowSpan?: number
}) {
  const Comp = href ? "a" : "div"

  return (
    <Comp
      href={href}
      className={cn(
        "relative flex flex-col justify-between rounded-2xl border border-border bg-card/70 backdrop-blur-sm shadow-soft p-5",
        "transition-all hover:-translate-y-[2px] hover:shadow-md overflow-hidden break-words",
        "col-span-full lg:col-span-auto", // ✅ full width on mobile
        href && "hover:bg-foreground/5 cursor-pointer",
        className
      )}

      
    >
      <div className="flex items-start gap-3 mb-2">
        {icon && <div className="text-primary flex-shrink-0 ">{icon}</div>}
        <div>
          <h3 className="text-base font-semibold tracking-tight leading-snug">{title}</h3>
          {subtitle && (
            <p className="text-sm text-foreground/60 leading-snug">{subtitle}</p>
          )}
                
        {children && <div className="mt-2 text-sm leading-relaxed">{children}</div>}

        </div>
      </div>

    </Comp>
  )
}
