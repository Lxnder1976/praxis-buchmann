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
                Mein Name ist Alexandra Buchmann, und als Heilpraktikerin ist es meine Leidenschaft, Menschen wie Sie auf ihrem Weg zu mehr Gesundheit und Lebensqualität zu begleiten. Mit meiner Erfahrung aus der Laboranalytik, meiner Ausbildung zur Heilpraktikerin und meiner mehrjährigen Expertise in der Osteopathie habe ich gelernt, den Körper als Ganzes zu betrachten.
              </p>
              
              <p className="body-text text-lg">
                Deshalb steht bei mir immer der Mensch im Mittelpunkt – mit all seinen individuellen Bedürfnissen und seiner einzigartigen Geschichte. Ich nehme mir die Zeit, die Ursachen Ihrer Beschwerden zu ergründen und ein ganz auf Sie zugeschnittenes Behandlungskonzept zu entwickeln. So schaffen wir gemeinsam eine Lösung, die nicht nur Symptome lindert, sondern Ihre Gesundheit nachhaltig stärkt.
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
