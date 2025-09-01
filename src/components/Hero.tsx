import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-new-cream section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bild links */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/hero.jpg"
                alt="Alexandra Buchmann bei der Osteopathie-Behandlung"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Text rechts */}
          <div className="space-y-6">
            <h1 className="heading-primary text-4xl lg:text-5xl text-burgundy">
              Für mehr<br />
              Gesundheit und<br />
              Lebensqualität
            </h1>
            <p className="body-text text-lg">
              Es ist mir eine Freude, Sie in meiner Praxis für funktionelle Medizin und Osteopathie in Wentorf bei Hamburg zu begrüßen.
            </p>
            <button className="btn-burgundy">
              MEHR ERFAHREN
            </button>
          </div>
        </div>
      </div>
      
      {/* Dekorative rosa Linie */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full text-coral">
          <path d="M 0,200 Q 100,100 200,200" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </div>
    </section>
  );
}
