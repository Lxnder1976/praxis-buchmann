import Image from "next/image";

export default function Pricing() {
  return (
    <section id="preise" className="bg-new-cream section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text links */}
          <div className="space-y-8 text-center">
            <h2 className="heading-secondary text-3xl lg:text-4xl text-burgundy">
              Ablauf und Preise
            </h2>
            
            <p className="body-text text-lg">
              Eine Beratung beginnt immer mit einem ausführlichen Gespräch über Ihre Beschwerden, Ihre Krankengeschichte und Ihre Ziele. Je nach Bedarf folgen dann gezielte Untersuchungen und die Besprechung eines individuellen Behandlungsplans.
            </p>
            
            {/* Preistabelle */}
            <div className="bg-white p-6 rounded-3xl">
              <h3 className="text-xl font-medium text-burgundy mb-4">Behandlungspreise</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="body-text text-left">
                    Craniosakrale Osteopathie <span className="hidden md:inline">(60 Min.)</span>
                  </span>
                  <span className="font-medium whitespace-nowrap">120,00&nbsp;€</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="body-text text-left">
                    Health Check <span className="hidden md:inline">(Anamnese, BIA, EKG/HRV, Vitalparameter)</span>
                  </span>
                  <span className="font-medium whitespace-nowrap">280,00&nbsp;€</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="body-text text-left">Health Check + Labordiagnostik</span>
                  <span className="font-medium whitespace-nowrap">350,00&nbsp;€</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="body-text text-left">Nährstofftherapie + Labordiagnostik</span>
                  <span className="font-medium whitespace-nowrap">250,00&nbsp;€</span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="body-text text-left">
                    Nährstoffinfusionen 
                  </span>
                  <span className="font-medium whitespace-nowrap">ab 65,00&nbsp;€</span>
                </div>
              </div>
              
              <p className="body-text text-xs mt-4 text-gray-600">
                *Alle Preise verstehen sich als Selbstzahlerleistungen. Eine Kostenerstattung durch die Krankenversicherung ist je nach Tarif möglich.
              </p>
            </div>
          </div>
          
          {/* Bild rechts */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              {/* Responsive Beratung Image with WebP */}
              <picture>
                {/* Mobile WebP (smaller size for mobile) */}
                <source 
                  srcSet="/beratung_alexandra_mobile.webp" 
                  type="image/webp" 
                  media="(max-width: 640px)" 
                />
                {/* Desktop WebP */}
                <source 
                  srcSet="/beratung_alexandra.webp" 
                  type="image/webp" 
                  media="(min-width: 641px)" 
                />
                {/* PNG Fallback */}
                <Image
                  src="/beratung_alexandra.png"
                  alt="Beratungsgespräch in der Praxis"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
