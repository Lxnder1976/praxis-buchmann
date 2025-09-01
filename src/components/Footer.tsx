import Image from "next/image";

export default function Footer() {
  return (
    <footer id="kontakt" className="bg-new-cream section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Praxis-Galerie - 5 Bilder ohne Abstand, zentriert */}
        <div className="flex justify-center mb-12">
          <div className="flex">
            <div className="relative overflow-hidden hidden md:block">
              <Image
                src="/01praxis.jpg"
                alt="Die Praxis"
                width={224}
                height={300}
                className="w-56 h-72 object-cover"
              />
            </div>
            <div className="relative overflow-hidden">
              <Image
                src="/02gesundheit.jpg"
                alt="Gesundheit"
                width={224}
                height={300}
                className="w-56 h-72 object-cover"
              />
            </div>
            <div className="relative overflow-hidden">
              <Image
                src="/03alexandra_buchmann_ich_freue_mich.jpg"
                alt="Ich freue mich auf Sie"
                width={224}
                height={300}
                className="w-56 h-72 object-cover"
              />
            </div>
            <div className="relative overflow-hidden">
              <Image
                src="/04meine_leistungen.jpg"
                alt="Meine Leistungen"
                width={224}
                height={300}
                className="w-56 h-72 object-cover"
              />
            </div>
            <div className="relative overflow-hidden hidden md:block">
              <Image
                src="/05beratung_alexandra_buchmann.jpg"
                alt="Beratung"
                width={224}
                height={300}
                className="w-56 h-72 object-cover"
              />
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
          <div className="flex flex-wrap justify-center gap-4 text-sm text-text-gray">
            <a href="#" className="hover:text-burgundy">Home</a>
            <span>|</span>
            <a href="#funktionelle-medizin" className="hover:text-burgundy">Funktionelle Medizin</a>
            <span>|</span>
            <a href="#leistungen" className="hover:text-burgundy">Leistungen</a>
            <span>|</span>
            <a href="#ueber-mich" className="hover:text-burgundy">Über Mich</a>
            <span>|</span>
            <a href="#kosten" className="hover:text-burgundy">Kosten</a>
            <span>|</span>
            <a href="#kontakt" className="hover:text-burgundy">Kontakt</a>
            <span>|</span>
            <a href="#" className="hover:text-burgundy">Impressum</a>
            <span>|</span>
            <a href="#" className="hover:text-burgundy">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

