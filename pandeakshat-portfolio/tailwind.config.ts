import { defineConfig } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

export default defineConfig({
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    colors: {
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      border: "hsl(var(--border))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    borderRadius: {
      DEFAULT: "0.5rem",
      xl: "1rem",
      "2xl": "1.5rem",
    },
    boxShadow: {
      soft: "0 10px 30px rgba(0,0,0,0.08)",
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
})
