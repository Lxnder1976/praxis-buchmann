"use client";

import { useState, useEffect } from "react";

export default function StickyBookingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Button erst nach 300px Scroll anzeigen
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile: Volle Breite unten */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white to-transparent md:hidden z-40">
        <a
          href="https://www.appointmed.com/booking/2399598-alexandra-buchmann"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-burgundy block w-full text-center py-4 text-lg shadow-lg"
          aria-label="Termin buchen (öffnet in neuem Fenster)"
        >
          TERMIN BUCHEN
        </a>
      </div>

      {/* Desktop: Button rechts unten */}
      <div className="fixed bottom-6 right-6 hidden md:block z-40">
        <a
          href="https://www.appointmed.com/booking/2399598-alexandra-buchmann"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-burgundy inline-block py-4 px-8 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          aria-label="Termin buchen (öffnet in neuem Fenster)"
        >
          TERMIN BUCHEN
        </a>
      </div>
    </>
  );
}
