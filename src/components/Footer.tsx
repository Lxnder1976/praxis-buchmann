"use client";

import Image from "next/image";
import Link from "next/link";
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
        
        {/* Verbandsmitgliedschaften */}
        <div className="text-center mb-12">
          <h3 className="heading-secondary text-2xl text-burgundy mb-8">Mitglied im</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
            {/* Europäische Gesellschaft Funktionelle Medizin */}
            <a 
              href="https://egfm.eu/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:opacity-80 transition-opacity"
            >
              <div className="mb-4">
                <Image
                  src="/egfm_logo.png"
                  alt="EGFM Logo"
                  width={120}
                  height={80}
                  className="w-auto h-20 object-contain"
                />
              </div>
              <p className="text-sm text-burgundy font-medium text-center leading-tight hover:text-coral transition-colors">
                Europäische Gesellschaft<br />Funktionelle Medizin e.V.
              </p>
            </a>
            
            {/* Verband Freier Osteopathen */}
            <a 
              href="https://www.vfo.de/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:opacity-80 transition-opacity"
            >
              <div className="mb-4">
                <Image
                  src="/logo-verband-freier-osteopathen.webp"
                  alt="VFO Logo"
                  width={120}
                  height={80}
                  className="w-auto h-20 object-contain"
                />
              </div>
              <p className="text-sm text-burgundy font-medium text-center leading-tight hover:text-coral transition-colors">
                Verband Freier<br />Osteopathen e.V.
              </p>
            </a>
          </div>
        </div>
        
        {/* Kontaktinformationen - zentriert in einer Zeile */}
        <div className="text-center mb-8">
          <p className="body-text text-burgundy">
            <strong>Alexandra Buchmann</strong> • <strong>Heilpraktikerin und Osteopathin</strong> • <strong>Praxis für Osteopathie und funktionelle Medizin</strong>
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
            <a href="/agb" className="hover:text-burgundy">AGB</a>
            <span>|</span>
            <Link href="/blog" className="hover:text-burgundy flex items-center gap-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
              Blog
            </Link>
            <span>|</span>
            <a href="https://wa.me/4940607763460" target="_blank" rel="noopener noreferrer" className="hover:text-burgundy flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp
            </a>
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

