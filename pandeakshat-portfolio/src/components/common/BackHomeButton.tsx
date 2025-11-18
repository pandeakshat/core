import * as React from "react";
import { Home } from "lucide-react";
import { motion } from "framer-motion";

interface BackHomeButtonProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export default function BackHomeButton({
  position = "bottom-right",
}: BackHomeButtonProps) {
  const positionClasses = {
    "top-left": "top-5 left-5",
    "top-right": "top-5 right-5",
    "bottom-left": "bottom-5 left-5",
    "bottom-right": "bottom-5 right-5",
  }[position];

  return (
    <motion.a
      href="/"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`fixed ${positionClasses} z-50 flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/80 backdrop-blur-sm shadow-soft hover:bg-accent/10 transition`}
    >
      <Home className="w-4 h-4 text-primary" />
      <span className="text-sm font-medium">Home</span>
    </motion.a>
  );
}