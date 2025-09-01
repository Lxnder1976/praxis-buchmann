"use client";

export interface CookieSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

export class CookieManager {
  private static STORAGE_KEY = 'cookieConsent';

  // Cookie-Einstellungen abrufen
  static getConsent(): CookieSettings | null {
    if (typeof window === 'undefined') return null;
    
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }

  // Prüfen ob eine bestimmte Kategorie erlaubt ist
  static isAllowed(category: keyof Omit<CookieSettings, 'timestamp'>): boolean {
    const consent = this.getConsent();
    if (!consent) return false;
    return consent[category];
  }

  // Google Analytics laden (nur wenn erlaubt)
  static loadGoogleAnalytics(measurementId: string) {
    if (!this.isAllowed('analytics')) return;

    // Google Analytics Script laden
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // gtag initialisieren
    window.gtag = window.gtag || function(...args: any[]) {
      (window.gtag.q = window.gtag.q || []).push(args);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      page_title: document.title,
      page_location: window.location.href
    });
  }

  // Facebook Pixel laden (nur wenn erlaubt)
  static loadFacebookPixel(pixelId: string) {
    if (!this.isAllowed('marketing')) return;

    // Facebook Pixel Code hier einsetzen
    console.log('Facebook Pixel würde geladen werden:', pixelId);
  }

  // Alle Scripts laden basierend auf Einstellungen
  static loadAllowedScripts() {
    const consent = this.getConsent();
    if (!consent) return;

    // Hier können Sie zukünftig Ihre Tracking-IDs einsetzen:
    // if (consent.analytics) {
    //   this.loadGoogleAnalytics('GA_MEASUREMENT_ID');
    // }
    // if (consent.marketing) {
    //   this.loadFacebookPixel('FB_PIXEL_ID');
    // }
  }

  // Event für Consent-Änderungen
  static onConsentChange(callback: (consent: CookieSettings) => void) {
    if (typeof window === 'undefined') return;

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === this.STORAGE_KEY && e.newValue) {
        try {
          const newConsent = JSON.parse(e.newValue);
          callback(newConsent);
        } catch {}
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }
}

// TypeScript Deklaration für gtag
declare global {
  interface Window {
    gtag: {
      (...args: any[]): void;
      q?: any[];
    };
  }
}
