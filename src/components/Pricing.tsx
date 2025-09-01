import Image from "next/image";

export default function Pricing() {
  return (
    <section id="kosten" className="bg-white section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bild links */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/beratung.jpg"
                alt="Beratungsgespräch in der Praxis"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Text rechts */}
          <div className="space-y-8">
            <h2 className="heading-secondary text-3xl lg:text-4xl text-burgundy">
              Ablauf und Kosten
            </h2>
            
            <p className="body-text text-lg">
              Eine Beratung beginnt immer mit einem ausführlichen Gespräch über Ihre Beschwerden, Ihre Krankengeschichte und Ihre Ziele. Je nach Bedarf folgen dann gezielte Untersuchungen und die Besprechung eines individuellen Behandlungsplans.
            </p>
            
            {/* Preistabelle */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-burgundy mb-4">Behandlungskosten</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="body-text">Erstberatung (60 Min.)</span>
                  <span className="font-medium">120,00 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="body-text">Folgebehandlung (45 Min.)</span>
                  <span className="font-medium">90,00 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="body-text">Osteopathie (60 Min.)</span>
                  <span className="font-medium">120,00 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="body-text">Health Check</span>
                  <span className="font-medium">180,00 €</span>
                </div>
              </div>
              
              <p className="body-text text-sm mt-4">
                *Alle Preise verstehen sich als Selbstzahlerleistungen. Eine Kostenerstattung durch die Krankenversicherung ist je nach Tarif möglich.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
