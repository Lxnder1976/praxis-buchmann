"use client";

import { useMemo, useState, useEffect } from "react";
import { isChristmasSeason } from "@/utils/christmas";

interface Snowflake {
  id: number;
  marginLeft: string;
  size: number;
  brightness: number;
  duration: number;
  delay: number;
}

export default function SnowEffect() {
  const [mounted, setMounted] = useState(false);
  const [isChristmas, setIsChristmas] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsChristmas(isChristmasSeason());
  }, []);

  const snowflakes = useMemo(() => {
    if (!mounted) return [];
    
    const flakes: Snowflake[] = [];
    const count = 80; // Anzahl der Schneeflocken

    for (let i = 0; i < count; i++) {
      const size = Math.random() * 10 + 2; // 2-12px
      const duration = Math.random() * 20 + 10; // 10-30s
      const delay = Math.random() * 10; // 0-10s
      const brightness = Math.random() * 10 + 90; // 90-100%

      flakes.push({
        id: i,
        marginLeft: `${(100 / count) * i}%`,
        size,
        brightness,
        duration,
        delay,
      });
    }
    return flakes;
  }, [mounted]);

  // Nur während der Weihnachtszeit anzeigen (1. - 26. Dezember)
  if (!mounted || !isChristmas) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute rounded-full"
          style={{
            left: flake.marginLeft,
            top: "-20px",
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            background: `hsla(0, 0%, ${flake.brightness}%, 0.8)`,
            boxShadow: `0 0 10px 5px hsla(0, 0%, ${flake.brightness}%, 0.4)`,
            animation: `snowfall ${flake.duration}s ${flake.delay}s infinite`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes snowfall {
          0% {
            transform: scale(0) translateX(0);
            opacity: 0;
          }
          2% {
            transform: scale(1) translateX(0);
            opacity: 1;
            top: -20px;
          }
          100% {
            transform: scale(0) translateX(20px);
            opacity: 0;
            top: 100vh;
          }
        }
      `}</style>
    </div>
  );
}
