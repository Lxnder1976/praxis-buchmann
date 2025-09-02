import type { Metadata } from "next";
import { Geist, Geist_Mono, Krub, Gupter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const krub = Krub({
  variable: "--font-krub",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const gupter = Gupter({
  variable: "--font-gupter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${krub.variable} ${gupter.variable} antialiased`}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
