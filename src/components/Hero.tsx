import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-new-cream section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bild links */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
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
          <div className="space-y-6 text-center">
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
      
      
    </section>
  );
}
