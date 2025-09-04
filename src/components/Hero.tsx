import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="bg-new-cream pt-8 pb-20 md:pt-12 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bild links */}
          <FadeIn direction="left" mobileDirection="none" duration={800}>
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
          </FadeIn>
          
          {/* Text rechts */}
          <div className="space-y-6 text-center">
            <FadeIn direction="right" mobileDirection="up" delay={200} duration={800}>
              <h1 className="heading-primary text-4xl lg:text-5xl text-burgundy">
                Für mehr<br />
                Gesundheit und<br />
                Lebensqualität
              </h1>
            </FadeIn>
            
            <FadeIn direction="right" mobileDirection="up" delay={400} duration={800}>
              <p className="body-text text-lg">
                Es ist mir eine Freude, Sie in meiner Praxis für funktionelle Medizin und Osteopathie in Wentorf bei Hamburg zu begrüßen.
              </p>
            </FadeIn>
            
            <FadeIn direction="up" mobileDirection="up" delay={600} duration={800}>
              <a 
                href="https://www.appointmed.com/booking/2399598-alexandra-buchmann"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-burgundy inline-block"
                aria-label="Termin buchen (öffnet in neuem Fenster)"
              >
                TERMIN BUCHEN
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
      
      
    </section>
  );
}
