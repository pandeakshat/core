import { useEffect, useRef } from "react"
import { useAnimationControls } from "framer-motion"

export function useInViewAnimation(): [React.RefObject<HTMLDivElement>, ReturnType<typeof useAnimationControls>] {
  const controls = useAnimationControls()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 })
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [controls])

  return [ref, controls]
}
