import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-new-cream section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bild links */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              {/* Desktop Image - WebP with PNG fallback */}
              <picture className="hidden sm:block">
                <source srcSet="/hero_alexandra.webp" type="image/webp" />
                <Image
                  src="/hero_alexandra.png"
                  alt="Alexandra Buchmann bei der Osteopathie-Behandlung"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                  priority
                  fetchPriority="high"
                />
              </picture>
              
              {/* Mobile Image - WebP with PNG fallback */}
              <picture className="block sm:hidden">
                <source srcSet="/hero_alexandra_mobile.webp" type="image/webp" />
                <Image
                  src="/hero_alexandra_mobile.png"
                  alt="Alexandra Buchmann bei der Osteopathie-Behandlung"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  fetchPriority="high"
                />
              </picture>
            </div>
          </div>
          
          {/* Text rechts */}
          <div className="space-y-6 text-center">
            <h1 className="heading-primary text-4xl lg:text-5xl text-burgundy">
              Für mehr<br />
              Gesundheit und<br />
              Lebensqualität
            </h1>
            <p className="body-text text-lg">
              Es ist mir eine Freude, Sie in meiner Praxis für funktionelle Medizin und Osteopathie in Wentorf bei Hamburg zu begrüßen.
            </p>
            <a 
              href="https://www.appointmed.com/booking/2399598-alexandra-buchmann"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-burgundy inline-block"
            >
              TERMIN BUCHEN
            </a>
          </div>
        </div>
      </div>
      
      
    </section>
  );
}
