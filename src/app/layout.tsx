import type { Metadata } from "next";
import { Krub, Playfair_Display } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import AsyncCSS from "@/components/AsyncCSS";

const krub = Krub({
  variable: "--font-krub",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alexandra Buchmann - Osteopathie und funktionelle Medizin Wentorf",
  description: "Praxis Alexandra Buchmann - Osteopathie und funktionelle Medizin in Wentorf. Ganzheitliche Behandlung für Ihre Gesundheit. Termin online buchen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <GoogleAnalytics />
      <body
        className={`${krub.variable} ${playfairDisplay.variable} antialiased`}
      >
        <AsyncCSS />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
