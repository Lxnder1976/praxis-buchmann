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
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-text-gray">
            <a href="/impressum" className="hover:text-burgundy">Impressum</a>
            <span>|</span>
            <a href="/datenschutz" className="hover:text-burgundy">Datenschutz</a>
            <span>|</span>
            <a href="https://instagram.com/praxis.buchmann" target="_blank" rel="noopener noreferrer" className="hover:text-burgundy flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

