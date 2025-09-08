import Image from "next/image";

export default function About() {
  return (
    <section id="ueber-mich" className="bg-new-cream section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bild links */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              {/* Background shape */}
              <div className="absolute inset-0 bg-light-coral rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
              
              {/* Responsive Portrait with WebP */}
              <picture>
                {/* Mobile WebP */}
                <source 
                  srcSet="/portrait_alexandra_mobile.webp" 
                  type="image/webp" 
                  media="(max-width: 640px)" 
                />
                {/* Desktop WebP */}
                <source 
                  srcSet="/portrait_alexandra.webp" 
                  type="image/webp" 
                  media="(min-width: 641px)" 
                />
                {/* PNG Fallback */}
                <Image
                  src="/portrait_alexandra.png"
                  alt="Alexandra Buchmann"
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover rounded-3xl"
                />
              </picture>
            </div>
          </div>
          
          {/* Text rechts */}
          <div className="space-y-6 text-center">
            <h2 className="heading-secondary text-3xl lg:text-4xl text-burgundy">
              Über mich
            </h2>
            
            <div className="space-y-6">
              <p className="body-text text-lg">
                Mein Name ist Alexandra Buchmann. In meiner Praxis verbinde ich Heilpraktik, Osteopathie und meine Erfahrung aus der Labormedizin zu einem ganzheitlichen Konzept im Sinne der funktionellen Medizin. Dabei ist es mir ein Herzensanliegen, den Menschen in seiner Gesamtheit zu sehen mit all seinen Bedürfnissen und seiner persönlichen Geschichte.
              </p>
              
              <p className="body-text text-lg">
                Meine Arbeit ist geprägt von Achtsamkeit, Freude und einem offenen Blick für das, was Sie wirklich brauchen. Ich nehme mir die Zeit, genau hinzuschauen, mögliche Zusammenhänge zu verstehen und gemeinsam mit Ihnen Wege zu finden, die Ihr Wohlbefinden fördern und Ihre Gesundheit bestmöglich unterstützen.
              </p>
            </div>
            
            <a href="#kontakt" className="btn-burgundy inline-block">
              KONTAKT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
