"use client";

import { useState, useEffect } from "react";
import { Fireworks } from "@fireworks-js/react";
import { isFireworksSeason } from "@/utils/christmas";

export default function FireworksEffect() {
  const [mounted, setMounted] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    setMounted(true);
    setShowFireworks(isFireworksSeason());
  }, []);

  // Nur während der Feuerwerkszeit anzeigen (31. Dez - 2. Jan)
  if (!mounted || !showFireworks) return null;

  return (
    <Fireworks
      options={{
        rocketsPoint: {
          min: 0,
          max: 100,
        },
        hue: {
          min: 0,
          max: 360,
        },
        delay: {
          min: 15,
          max: 30,
        },
        decay: {
          min: 0.015,
          max: 0.03,
        },
        brightness: {
          min: 50,
          max: 80,
        },
        lineWidth: {
          explosion: {
            min: 1,
            max: 3,
          },
          trace: {
            min: 0.5,
            max: 1,
          },
        },
        acceleration: 1.02,
        friction: 0.97,
        gravity: 1.5,
        particles: 80,
        traceLength: 3,
        traceSpeed: 10,
        explosion: 5,
        intensity: 15,
        flickering: 30,
        opacity: 0.5,
        autoresize: true,
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 50,
      }}
    />
  );
}
