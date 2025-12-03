import type { Metadata } from "next";
import { Krub, Playfair_Display } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import AsyncCSS from "@/components/AsyncCSS";
import SnowEffect from "@/components/SnowEffect";

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
  description: "Heilpraktikerin Alexandra Buchmann in Wentorf bei Hamburg: Craniosakrale Osteopathie, funktionelle Medizin, Labordiagnostik und Nährstofftherapie. Jetzt Termin buchen!",
  metadataBase: new URL('https://www.praxis-buchmann.info'),
  verification: {
    other: {
      'msvalidate.01': '62860B48CC31A6BE68F6EC71DF7958E3',
    },
  },
  openGraph: {
    title: "Alexandra Buchmann - Osteopathie und funktionelle Medizin",
    description: "Heilpraktikerin Alexandra Buchmann verbindet Labormedizin mit einem ganzheitlichen Ansatz: funktionelle Medizin, craniosakrale Osteopathie und personalisierte Nährstofftherapie.",
    url: 'https://www.praxis-buchmann.info',
    siteName: 'Praxis Alexandra Buchmann',
    images: [
      {
        url: '/logo.webp',
        width: 800,
        height: 600,
        alt: 'Praxis Alexandra Buchmann Logo',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Alexandra Buchmann - Osteopathie und funktionelle Medizin",
    description: "Heilpraktikerin Alexandra Buchmann verbindet Labormedizin mit einem ganzheitlichen Ansatz für mehr Gesundheit und Lebensqualität.",
    images: ['/logo.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-56ZJD6VD');`
        }} />
        {/* End Google Tag Manager */}
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* JSON-LD Schema für SEO und KI-Agenten */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["MedicalClinic", "LocalBusiness"],
            "@id": "https://praxis-buchmann.info/#praxis",
            "name": "Praxis Buchmann – Funktionelle Medizin & Osteopathie",
            "url": "https://praxis-buchmann.info/",
            "image": "https://praxis-buchmann.info/portrait_alexandra.webp",
            "logo": "https://praxis-buchmann.info/Alexandra_Buchmann_Logo_RGB.webp",
            "description": "Heilpraktikerin Alexandra Buchmann verbindet Labormedizin mit einem ganzheitlichen Ansatz: funktionelle Medizin, craniosakrale Osteopathie und personalisierte Nährstofftherapie – für mehr Gesundheit, Energie und Lebensqualität in Wentorf bei Hamburg.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Zwischen den Toren 3",
              "postalCode": "21465",
              "addressLocality": "Wentorf bei Hamburg",
              "addressCountry": "DE"
            },
            "hasMap": "https://www.google.com/maps?q=Zwischen+den+Toren+3,+21465+Wentorf+bei+Hamburg",
            "sameAs": [
              "https://instagram.com/praxis.buchmann",
              "https://maps.app.goo.gl/nxrBhYu8VYjhgpLb8"
            ],
            "areaServed": ["Wentorf bei Hamburg", "Reinbek", "Hamburg-Bergedorf", "Börnsen", "Geesthacht", "Glinde", "Aumühle"],
            "priceRange": "120€-280€",
            "knowsAbout": [
              "Funktionelle Medizin",
              "Osteopathie",
              "Craniosakrale Osteopathie",
              "Nährstofftherapie",
              "Labordiagnostik",
              "Health Check",
              "HRV-Analyse",
              "EKG"
            ],
            "potentialAction": {
              "@type": "ReserveAction",
              "target": "https://www.appointmed.com/booking/2399598-alexandra-buchmann",
              "name": "Termin buchen"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Leistungen",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Health Check – Ganzheitliche Analyse",
                    "description": "Mit moderner Diagnostik (BIA, EKG, HRV), ausführlicher Anamnese und einer umfangreichen Vitalparameter-Analyse entsteht ein persönliches Gesundheitsprofil. Risiken früh erkennen, Grundlage für ein individuelles Therapiekonzept."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Labordiagnostik",
                    "description": "Fundierte Werte für klare Entscheidungen: von umfassenden Profilen bis zu gezielten Nährstoffanalysen. Laborwerte bilden die Basis einer präzisen Behandlung und machen Fortschritte sichtbar."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Nährstofftherapie",
                    "description": "Individuelle Nährstoffkonzepte auf Basis von Laborwerten und Bedarf – Speicher ins Gleichgewicht bringen, Energie, Immunsystem und Regeneration nachhaltig stärken."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Craniosakrale Osteopathie",
                    "description": "Sanfte manuelle Techniken lösen Blockaden und fördern Balance. Ziel: Funktionsstörungen beseitigen, Schmerzen lindern und natürliche Heilungsprozesse aktivieren."
                  }
                }
              ]
            }
          })}
        </script>
      </head>
      <GoogleAnalytics />
      <body
        className={`${krub.variable} ${playfairDisplay.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-56ZJD6VD"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        {/* Skip Link für Barrierefreiheit */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-burgundy text-white px-4 py-2 rounded z-50"
        >
          Zum Hauptinhalt springen
        </a>
        
        <AsyncCSS />
        <SnowEffect />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
