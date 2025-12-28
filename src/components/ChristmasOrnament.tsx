"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";
import { isChristmasSeason } from "@/utils/christmas";

export default function ChristmasOrnament() {
  const [isChristmas, setIsChristmas] = useState(false);

  useEffect(() => {
    setIsChristmas(isChristmasSeason());
  }, []);

  // Nur während der Weihnachtszeit anzeigen (1. - 26. Dezember)
  if (!isChristmas) return null;

  return (
    <FadeIn direction="down" mobileDirection="down" delay={0} duration={800}>
      <div className="flex justify-center -mb-4">
        <Image
          src="/christbaumkugel.webp"
          alt="Weihnachtskugel"
          width={120}
          height={160}
          className="h-32 w-auto"
        />
      </div>
    </FadeIn>
  );
}
