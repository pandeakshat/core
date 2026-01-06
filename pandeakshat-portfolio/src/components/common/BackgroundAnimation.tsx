"use client";

import { useEffect, useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function BackgroundAnimation() {
  const [mounted, setMounted] = useState(false);

  // Only render the component after the browser has mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  const initParticles = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // Return null (or a simple placeholder) on the server to prevent the crash
  if (!mounted) {
    return <div className="fixed inset-0 -z-[1] bg-transparent" />;
  }

  return (
    <div className="fixed inset-0 w-screen h-screen -z-[1] pointer-events-none">
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
  );
}