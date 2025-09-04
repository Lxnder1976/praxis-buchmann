"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add('shadow-md');
        } else {
          navbar.classList.remove('shadow-md');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="bg-new-cream sticky top-0 z-50 transition-shadow duration-300 h-[140px] md:h-[100px]" id="navbar">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full" role="navigation" aria-label="Hauptnavigation">
        <div className="grid grid-cols-3 items-center h-full">
          {/* Alexandra Buchmann Logo links - nur auf Desktop */}
          <div className="hidden md:flex justify-start">
            <Link href="/" className="hover:opacity-80 transition-opacity" aria-label="Zur Startseite">
              <Image
                src="/alexandra_buchmann_logo.png"
                alt="Alexandra Buchmann Logo"
                width={220}
                height={50}
                className="h-12 w-auto object-contain cursor-pointer"
              />
            </Link>
          </div>
          
          {/* Leerer Platz auf Mobile */}
          <div className="md:hidden"></div>
          
          {/* Zentrales Logo - Responsive */}
          <div className="flex justify-center">
            <Link href="/" className="hover:opacity-80 transition-opacity" aria-label="Zur Startseite">
              {/* Desktop: Rundes Logo */}
              {/* Desktop Logo */}
              <picture className="hidden md:block">
                <source srcSet="/logo.webp" type="image/webp" />
                <Image
                  src="/logo.png"
                  alt="Logo Praxis Buchmann"
                  width={72}
                  height={72}
                  className="w-18 h-18 object-contain cursor-pointer"
                />
              </picture>
              
              {/* Mobile Logo - WebP with PNG fallback */}
              <picture className="block md:hidden">
                <source srcSet="/Alexandra_Buchmann_Logo_RGB.webp" type="image/webp" />
                <Image
                  src="/Alexandra_Buchmann_Logo_RGB.png"
                  alt="Alexandra Buchmann Logo"
                  width={540}
                  height={180}
                  className="w-72 h-auto object-contain cursor-pointer max-w-none"
                />
              </picture>
            </Link>
          </div>
          
                    {/* Navigation rechts */}
          <div className="hidden xl:flex justify-end items-center space-x-6 whitespace-nowrap pr-0 -mr-8">
            <a href="#funktionelle-medizin" className="text-xs text-burgundy hover:text-coral transition-colors whitespace-nowrap">FUNKTIONELLE MEDIZIN</a>
            <a href="#leistungen" className="text-xs text-burgundy hover:text-coral transition-colors whitespace-nowrap">LEISTUNGEN</a>
            <a href="#ueber-mich" className="text-xs text-burgundy hover:text-coral transition-colors whitespace-nowrap">ÜBER MICH</a>
            <a href="#preise" className="text-xs text-burgundy hover:text-coral transition-colors whitespace-nowrap">PREISE</a>
            <a href="#kontakt" className="text-xs text-burgundy hover:text-coral transition-colors whitespace-nowrap">KONTAKT</a>
            <div className="w-5 h-5 text-coral ml-4">
              <svg fill="currentColor" viewBox="0 0 24 24" aria-label="Pinterest Profil besuchen">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.404-5.965 1.404-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.74-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex justify-end">
            <button 
              className="text-burgundy"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Menü schließen" : "Hauptmenü öffnen"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          id="mobile-menu"
          className={`xl:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-new-cream border-t border-burgundy/20 shadow-lg animate-slideDown`}
          role="navigation"
          aria-label="Mobile Navigation"
        >
          <div className="px-4 py-4 space-y-4">
            <a 
              href="#funktionelle-medizin" 
              className="block text-burgundy hover:text-coral transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FUNKTIONELLE MEDIZIN
            </a>
            <a 
              href="#leistungen" 
              className="block text-burgundy hover:text-coral transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              LEISTUNGEN
            </a>
            <a 
              href="#ueber-mich" 
              className="block text-burgundy hover:text-coral transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              ÜBER MICH
            </a>
            <a 
              href="#preise" 
              className="block text-burgundy hover:text-coral transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              PREISE
            </a>
            <a 
              href="#kontakt" 
              className="block text-burgundy hover:text-coral transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              KONTAKT
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
