import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termin bestätigt - Alexandra Buchmann',
  robots: {
    index: false,
    follow: false,
  },
};

export default function TerminBestaetigt() {
  return (
    <div className="min-h-screen bg-new-cream">
      {/* Simple Header ohne Navigation */}
      <header className="bg-new-cream py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
            <Image
              src="/Alexandra_Buchmann_Logo_RGB.png"
              alt="Alexandra Buchmann Logo"
              width={360}
              height={120}
              className="h-28 w-auto object-contain max-w-full"
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-8 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-burgundy rounded-full flex items-center justify-center mx-auto">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h1 className="heading-primary text-4xl lg:text-5xl text-burgundy mb-6">
            Vielen Dank!
          </h1>
          
          <h2 className="heading-secondary text-2xl lg:text-3xl text-burgundy mb-8">
            Ihr Termin wurde erfolgreich gebucht
          </h2>

          {/* Confirmation Text */}
          <div className="space-y-6 mb-12 max-w-2xl mx-auto">
            <p className="body-text text-lg text-burgundy">
              Sie erhalten in Kürze eine Bestätigungs-E-Mail mit allen wichtigen Informationen zu Ihrem Termin.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-burgundy/5 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-medium text-burgundy mb-4">Haben Sie Fragen?</h3>
            <p className="body-text text-burgundy mb-6">
              Bei Fragen oder Änderungswünschen erreichen Sie mich gerne:
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+4940607763460"
                className="btn-outline-burgundy"
              >
                040 607 763 460
              </a>
              <a 
                href="mailto:alexandra@praxis-buchmann.info"
                className="btn-outline-burgundy"
              >
                E-MAIL SCHREIBEN
              </a>
              <a 
                href="https://wa.me/4940607763460"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-burgundy flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.690z"/>
                </svg>
                WHATSAPP
              </a>
            </div>
          </div>

          {/* Back to Website */}
          <div className="space-y-4">
            <Link 
              href="/"
              className="btn-burgundy inline-block"
            >
              ZUR STARTSEITE
            </Link>
            
            <p className="body-text text-sm text-burgundy/70">
              Oder entdecken Sie mehr über meine Leistungen und Behandlungsmethoden.
            </p>
          </div>

        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-burgundy/5 py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="body-text text-burgundy font-medium">
            <strong>Alexandra Buchmann</strong> Praxis für funktionelle Medizin und Osteopathie
          </p>
          <p className="body-text text-burgundy/70 text-sm mt-2">
            Zwischen den Toren 3 • 21465 Wentorf • 2. Stock (Zugang barrierefrei)
          </p>
        </div>
      </footer>
    </div>
  );
}
