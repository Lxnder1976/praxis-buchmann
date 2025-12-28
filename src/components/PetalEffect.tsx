"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { isEasterSeason } from "@/utils/seasons";

interface Petal {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
  swayDuration: number;
  rotationStart: number;
  opacity: number;
}

export default function PetalEffect() {
  const [mounted, setMounted] = useState(false);
  const [isEaster, setIsEaster] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsEaster(isEasterSeason());
  }, []);

  const petals = useMemo(() => {
    if (!mounted) return [];

    const items: Petal[] = [];
    const count = 40; // Anzahl der Blütenblätter

    for (let i = 0; i < count; i++) {
      const size = Math.random() * 12 + 8; // 8-20px
      const duration = Math.random() * 10 + 12; // 12-22s Fallzeit
      const delay = Math.random() * 15; // 0-15s Verzögerung
      const swayDuration = Math.random() * 3 + 2; // 2-5s Schwankung
      const rotationStart = Math.random() * 360;
      const opacity = Math.random() * 0.4 + 0.6; // 0.6-1.0

      items.push({
        id: i,
        left: `${(100 / count) * i + Math.random() * 5}%`,
        size,
        duration,
        delay,
        swayDuration,
        rotationStart,
        opacity,
      });
    }
    return items;
  }, [mounted]);

  // Nur während der Osterzeit anzeigen
  if (!mounted || !isEaster) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute"
          style={{
            left: petal.left,
            top: "-30px",
            opacity: petal.opacity,
            animation: `petalFall ${petal.duration}s ${petal.delay}s infinite linear`,
          }}
        >
          <div
            style={{
              width: `${petal.size}px`,
              height: `${petal.size}px`,
              animation: `petalSway ${petal.swayDuration}s ${petal.delay}s infinite ease-in-out`,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                transform: `rotate(${petal.rotationStart}deg)`,
                animation: `petalRotate ${petal.swayDuration * 2}s ${petal.delay}s infinite linear`,
              }}
            >
              <Image
                src="/bluetenblatt.webp"
                alt=""
                width={petal.size}
                height={petal.size}
                className="w-full h-full object-contain"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      ))}
      <style jsx>{`
        @keyframes petalFall {
          0% {
            top: -30px;
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 100vh;
            opacity: 0;
          }
        }
        @keyframes petalSway {
          0%, 100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(25px);
          }
          75% {
            transform: translateX(-25px);
          }
        }
        @keyframes petalRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
