"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GoogleAdsConversion() {
  useEffect(() => {
    // Google Ads Conversion Event für "Termin vereinbaren"
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17557359184/umEfCMmTnqAbENCUgLRB",
        value: 1.0,
        currency: "EUR",
      });
    }
  }, []);

  return null;
}
