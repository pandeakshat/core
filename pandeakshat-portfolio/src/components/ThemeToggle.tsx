import * as React from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [isDark, setIsDark] = React.useState<boolean>(false)

  // Initialize theme from localStorage (persisted between sessions)
  React.useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const root = document.documentElement

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      root.classList.add("dark")
      setIsDark(true)
    } else {
      root.classList.remove("dark")
      setIsDark(false)
    }
  }, [])

  // Toggle theme + persist choice
  const toggleTheme = () => {
    const root = document.documentElement
    const newTheme = isDark ? "light" : "dark"

    root.classList.toggle("dark", newTheme === "dark")
    localStorage.setItem("theme", newTheme)
    setIsDark(!isDark)
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-foreground/5 transition-colors"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
