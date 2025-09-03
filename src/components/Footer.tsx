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
    // Für Tablet: maximal bis Position 2 (zeigt Bilder 3,4,5)
    // Für Mobile: alle 5 Bilder durchgehen
    const maxSlides = window.innerWidth >= 768 && window.innerWidth < 1024 ? 2 : images.length - 1;
    setCurrentSlide((prev) => (prev + 1) % (maxSlides + 1));
  };

  const prevSlide = () => {
    const maxSlides = window.innerWidth >= 768 && window.innerWidth < 1024 ? 2 : images.length - 1;
    setCurrentSlide((prev) => (prev - 1 + maxSlides + 1) % (maxSlides + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <footer id="kontakt" className="bg-new-cream section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop: 5 Bilder nebeneinander */}
        <div className="hidden lg:flex justify-center mb-12">
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

        {/* Tablet: 3 Bilder Slideshow */}
        <div className="hidden md:block lg:hidden mb-12">
          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * (100/3)}%)` }}
              >
                {images.map((image, index) => (
                  <div key={index} className="w-1/3 flex-shrink-0 px-2">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={280}
                      height={350}
                      className="w-full h-auto object-contain bg-white rounded-lg"
                    />
                  </div>
                ))}
              </div>
              
              {/* Navigation Buttons für Tablet */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-burgundy rounded-full p-3 shadow-lg transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-burgundy rounded-full p-3 shadow-lg transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Indicator Dots für Tablet */}
            <div className="flex justify-center mt-4 space-x-2">
              {[0, 1, 2].map((index) => (
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

        {/* Mobile: Slideshow */}
        <div className="block md:hidden mb-12">
          <div className="relative max-w-sm mx-auto">
            {/* Slideshow Container */}
            <div className="relative overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
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

