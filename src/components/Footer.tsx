"use client";

import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [currentSlide, setCurrentSlide] = useState(2); // Start mit dem mittleren Bild (Index 2)
  
  const images = [
    { src: "/01praxis.jpg", alt: "Die Praxis" },
    { src: "/02gesundheit.jpg", alt: "Gesundheit" },
    { src: "/03alexandra_buchmann_ich_freue_mich.jpg", alt: "Ich freue mich auf Sie" },
    { src: "/04meine_leistungen.jpg", alt: "Meine Leistungen" },
    { src: "/05beratung_alexandra_buchmann.jpg", alt: "Beratung" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <footer id="kontakt" className="bg-new-cream section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop: 5 Bilder nebeneinander */}
        <div className="hidden md:flex justify-center mb-12">
          <div className="flex">
            {images.map((image, index) => (
              <div key={index} className="relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={224}
                  height={300}
                  className="w-56 h-72 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Slideshow */}
        <div className="block md:hidden mb-12">
          <div className="relative max-w-sm mx-auto">
            {/* Slideshow Container */}
            <div className="relative overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-300 ease-in-out touch-pan-x"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                onTouchStart={(e) => {
                  const touch = e.touches[0];
                  e.currentTarget.setAttribute('data-touch-start-x', touch.clientX.toString());
                  e.currentTarget.setAttribute('data-touch-start-y', touch.clientY.toString());
                }}
                onTouchMove={(e) => {
                  const touchStartX = parseFloat(e.currentTarget.getAttribute('data-touch-start-x') || '0');
                  const touchStartY = parseFloat(e.currentTarget.getAttribute('data-touch-start-y') || '0');
                  const touchCurrentX = e.touches[0].clientX;
                  const touchCurrentY = e.touches[0].clientY;
                  
                  const deltaX = Math.abs(touchCurrentX - touchStartX);
                  const deltaY = Math.abs(touchCurrentY - touchStartY);
                  
                  // Nur horizontale Bewegung verhindern, vertikale durchlassen
                  if (deltaX > deltaY && deltaX > 10) {
                    e.preventDefault(); // Verhindert Scrollen nur bei horizontaler Bewegung
                  }
                }}
                onTouchEnd={(e) => {
                  const touchStartX = parseFloat(e.currentTarget.getAttribute('data-touch-start-x') || '0');
                  const touchStartY = parseFloat(e.currentTarget.getAttribute('data-touch-start-y') || '0');
                  const touchEndX = e.changedTouches[0].clientX;
                  const touchEndY = e.changedTouches[0].clientY;
                  
                  const deltaX = touchStartX - touchEndX;
                  const deltaY = Math.abs(touchStartY - touchEndY);
                  
                  // Nur als Swipe behandeln wenn horizontale Bewegung dominiert
                  if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > deltaY) {
                    if (deltaX > 0) {
                      nextSlide(); // Swipe left = next
                    } else {
                      prevSlide(); // Swipe right = previous
                    }
                  }
                }}
              >
                {images.map((image, index) => (
                  <div key={index} className="min-w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={320}
                      height={400}
                      className="w-full h-auto object-contain bg-white rounded-lg"
                    />
                  </div>
                ))}
              </div>
              
              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-burgundy rounded-full p-2 shadow-lg transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-burgundy rounded-full p-2 shadow-lg transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Indicator Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide 
                      ? 'bg-burgundy scale-110 shadow-lg' 
                      : 'bg-burgundy/60 hover:bg-burgundy/80 border border-burgundy/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Kontaktinformationen - zentriert in einer Zeile */}
        <div className="text-center mb-8">
          <p className="body-text text-burgundy">
            <strong>Alexandra Buchmann</strong> • <strong>Praxis für funktionelle Medizin und Osteopathie</strong>
          </p>
          <p className="body-text text-text-gray mt-2">
            Zwischen den Toren 3 • 21465 Wentorf • 2. Stock (Zugang barrierefrei) • 040 607 763 460 • alexandra@praxis-buchmann.info
          </p>
        </div>
        
        {/* Footer Navigation */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-text-gray">
            <a href="#" className="hover:text-burgundy">Home</a>
            <span>|</span>
            <a href="#funktionelle-medizin" className="hover:text-burgundy">Funktionelle Medizin</a>
            <span>|</span>
            <a href="#leistungen" className="hover:text-burgundy">Leistungen</a>
            <span>|</span>
            <a href="#ueber-mich" className="hover:text-burgundy">Über Mich</a>
            <span>|</span>
            <a href="#kosten" className="hover:text-burgundy">Kosten</a>
            <span>|</span>
            <a href="#kontakt" className="hover:text-burgundy">Kontakt</a>
            <span>|</span>
            <a href="/impressum" className="hover:text-burgundy">Impressum</a>
            <span>|</span>
            <a href="/datenschutz" className="hover:text-burgundy">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

