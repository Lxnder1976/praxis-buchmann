"use client";

import { useEffect } from "react";

export default function GoogleAdsConversion() {
  useEffect(() => {
    // Google Ads Conversion Event für "Termin vereinbaren"
    if (typeof window !== "undefined" && (window as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as { gtag: (...args: unknown[]) => void }).gtag("event", "conversion", {
        send_to: "AW-17557359184/umEfCMmTnqAbENCUgLRB",
        value: 1.0,
        currency: "EUR",
      });
    }
  }, []);

  return null;
}
