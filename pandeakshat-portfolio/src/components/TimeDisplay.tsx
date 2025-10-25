import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function TimeDisplay() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const formatted = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

  return (
    <div className="flex items-center gap-2 text-sm text-foreground/80 mt-2">
      {/* Blinking light */}
      <motion.div
        className="w-2 h-2 rounded-full bg-green-500"
        animate={{ opacity: [1, 0.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        key={formatted}
        initial={{ opacity: 0, y: 2 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {formatted}
      </motion.span>
    </div>
  )
}
