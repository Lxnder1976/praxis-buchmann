"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";
import { getSeasonalOrnament, type SeasonalOrnament as SeasonalOrnamentType } from "@/utils/seasons";

export default function SeasonalOrnament() {
  const [ornament, setOrnament] = useState<SeasonalOrnamentType>(null);

  useEffect(() => {
    setOrnament(getSeasonalOrnament());
  }, []);

  // Nichts anzeigen wenn keine Saison aktiv
  if (!ornament) return null;

  // Konfiguration je nach Saison
  const config = {
    christmas: {
      src: "/christbaumkugel.webp",
      alt: "Weihnachtskugel",
      className: "h-32 w-auto",
    },
    newyear: {
      src: "/hufeisen.webp",
      alt: "Hufeisen für Glück im neuen Jahr",
      className: "h-28 w-auto",
    },
    easter: {
      src: "/ostern.webp",
      alt: "Frohe Ostern",
      className: "h-32 w-auto",
    },
  };

  const { src, alt, className } = config[ornament];

  return (
    <FadeIn direction="down" mobileDirection="down" delay={0} duration={800}>
      <div className="flex justify-center -mb-4">
        <Image
          src={src}
          alt={alt}
          width={120}
          height={160}
          className={className}
        />
      </div>
    </FadeIn>
  );
}
