"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function BackgroundAnimation() {
  const [enabled, setEnabled] = useState(true);
  const [mode, setMode] = useState<"gradient" | "mesh">("mesh");
  const [ready, setReady] = useState(false);

  // ✅ Wrap localStorage access in try-catch for SSR safety
  useEffect(() => {
    try {
      const storedEnabled = localStorage.getItem("backgroundAnimation");
      const storedMode = localStorage.getItem("backgroundMode");
      if (storedEnabled) setEnabled(storedEnabled === "true");
      if (storedMode === "gradient" || storedMode === "mesh") {
        setMode(storedMode);
      }
    } catch (e) {
      // localStorage not available in some environments
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("backgroundAnimation", String(enabled));
      localStorage.setItem("backgroundMode", mode);
    } catch (e) {
      // Ignore storage errors
    }
  }, [enabled, mode]);

  const initParticles = async (engine: any) => {
    try {
      await loadSlim(engine);
    } catch (e) {
      console.error("Failed to load particles:", e);
    }
  };

  // ✅ Return null earlier if not enabled, but AFTER hooks
  if (!ready) {
    return (
      <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-background to-muted" />
    );
  }

  return (
    <>
      {/* Controls */}
      <div className="fixed bottom-4 right-4 z-[9999] flex flex-col gap-1">
        <button
          onClick={() => setEnabled(!enabled)}
          className="bg-card/80 border border-border px-3 py-1.5 text-xs rounded-lg hover:bg-accent/10 transition"
        >
          {enabled ? "✦ Background: On" : "✦ Background: Off"}
        </button>

        {enabled && (
          <button
            onClick={() => setMode(mode === "gradient" ? "mesh" : "gradient")}
            className="bg-card/80 border border-border px-3 py-1.5 text-xs rounded-lg hover:bg-accent/10 transition"
          >
            Mode: {mode === "gradient" ? "Gradient" : "Data Mesh"}
          </button>
        )}
      </div>

      {/* Gradient */}
      {enabled && mode === "gradient" && (
        <motion.div
          className="fixed inset-0 z-[-1] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/25 via-purple-400/25 to-pink-400/25 animate-gradient" />
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full blur-3xl opacity-30"
              style={{
                background:
                  i % 2 === 0
                    ? "radial-gradient(circle, rgba(120,180,255,0.4), transparent 70%)"
                    : "radial-gradient(circle, rgba(255,140,200,0.35), transparent 70%)",
                width: `${Math.random() * 500 + 400}px`,
                height: `${Math.random() * 500 + 400}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{ x: [0, 60, 0], y: [0, -40, 0], rotate: [0, 360] }}
              transition={{
                duration: 25 + Math.random() * 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Mesh */}
      {enabled && mode === "mesh" && (
        <div className="fixed inset-0 w-screen h-screen z-[-1] pointer-events-none">
          <Particles
            id="tsparticles"
            init={initParticles}
            options={{
              fullScreen: { enable: false },
              detectRetina: true,
              fpsLimit: 60,
              background: { color: { value: "transparent" } },
              interactivity: {
                events: {
                  onHover: { enable: true, mode: "attract" },
                  resize: true,
                },
                modes: {
                  attract: { distance: 200, duration: 0.4, factor: 0.8 },
                },
              },
              particles: {
                number: { value: 120, density: { enable: true, area: 1000 } },
                color: { value: "#60a5fa" },
                links: {
                  enable: true,
                  color: "#60a5fa",
                  distance: 150,
                  opacity: 0.45,
                  width: 1.4,
                },
                move: {
                  enable: true,
                  speed: 0.6,
                  outModes: { default: "out" },
                },
                opacity: { value: 0.6 },
                size: { value: 1.8 },
              },
            }}
          />
        </div>
      )}
    </>
  );
}