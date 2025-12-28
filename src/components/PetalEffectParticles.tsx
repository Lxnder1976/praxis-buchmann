"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import { isEasterSeason } from "@/utils/seasons";

export default function PetalEffectParticles() {
  const [init, setInit] = useState(false);
  const [isEaster, setIsEaster] = useState(false);

  useEffect(() => {
    setIsEaster(isEasterSeason());
    
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: 50,
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 35,
          density: {
            enable: true,
          },
        },
        color: {
          value: ["#FFB7C5", "#FFD1DC", "#FFF0F5", "#FFC0CB", "#F8C8DC"],
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: { min: 0.5, max: 0.8 },
        },
        size: {
          value: { min: 6, max: 14 },
        },
        move: {
          enable: true,
          direction: "bottom",
          speed: { min: 0.5, max: 1.5 },
          straight: false,
          outModes: {
            default: "out",
          },
        },
        wobble: {
          enable: true,
          distance: 20,
          speed: { min: 2, max: 5 },
        },
      },
      interactivity: {
        events: {
          onClick: {
            enable: false,
          },
          onHover: {
            enable: false,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  // Nur während der Osterzeit anzeigen
  if (!init || !isEaster) return null;

  return (
    <Particles
      id="tsparticles-petals"
      options={options}
      className="pointer-events-none"
    />
  );
}
