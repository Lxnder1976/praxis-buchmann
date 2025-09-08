import Image from 'next/image';

interface ServiceBenefitsProps {
  benefits: string[];
  heroImage: string;
  title: string;
}

export default function ServiceBenefits({ benefits, heroImage, title }: ServiceBenefitsProps) {
  return (
    <section className="relative">
      {/* Top narrow row - cream background */}
      <div className="bg-cream h-16 md:h-20"></div>
      
      {/* Main content area */}
      <div className="relative">
        {/* Mobile Layout (bis sm) - Bild direkt über Rosa ohne Padding, eckig */}
        <div className="sm:hidden">
          {/* Mobile Image - eckig, ohne Padding, volle Breite */}
          <div className="bg-white">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={heroImage}
                alt={title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>
          
          {/* Mobile Benefits */}
          <div className="bg-contact p-12 min-h-[600px]">
            <p className="body-text !text-white text-base mb-8">
              Viele Patient:innen berichten nach der Behandlung von mehr innerer Ruhe, besserem Schlaf und einer deutlichen Reduktion von Schmerzen oder Anspannung.
            </p>
            <h3 className="body-text !text-white text-base font-bold mb-6 uppercase tracking-wider">
              TYPISCHE EINSATZBEREICHE SIND:
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="body-text !text-white text-base leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tablet Layout (sm bis lg) - Bild volle Breite ohne Rundungen */}
        <div className="hidden sm:block lg:hidden">
          {/* Image ohne Padding, volle Breite */}
          <div className="bg-white relative">
            <div className="relative w-full aspect-[4/3] z-30">
              <Image
                src={heroImage}
                alt={title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            {/* Invisible extension für symmetrische Überlappung */}
            <div className="h-20"></div>
          </div>
          
          {/* Benefits */}
          <div className="bg-contact p-12 md:p-16 min-h-[600px] -mt-28 pt-32 relative z-10">
            <p className="body-text !text-white text-lg mb-10">
              Viele Patient:innen berichten nach der Behandlung von mehr innerer Ruhe, besserem Schlaf und einer deutlichen Reduktion von Schmerzen oder Anspannung.
            </p>
            <h3 className="body-text !text-white text-lg font-bold mb-8 uppercase tracking-wider">
              TYPISCHE EINSATZBEREICHE SIND:
            </h3>
            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="body-text !text-white text-lg leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout (ab lg) - Two Columns */}
        <div className="hidden lg:grid lg:grid-cols-2 relative min-h-[700px]">
          {/* Left column - white background with overlapping image */}
          <div className="bg-white relative z-10">
            <div className="p-8 lg:p-12 pr-0 flex justify-end h-full">
              <div className="relative w-full h-[55rem] -mt-24 -mb-24 -mr-12 lg:-mr-16 xl:-mr-20 z-30">
                <Image
                  src={heroImage}
                  alt={title}
                  fill
                  className="object-cover rounded-3xl shadow-lg"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
          
          {/* Right column - contact background with benefits */}
          <div className="bg-contact p-12 lg:p-20 xl:p-24 relative z-0 min-h-[700px]">
            <div className="flex flex-col justify-center h-full pl-8 lg:pl-12">
              <p className="body-text !text-white text-lg mb-10">
                Viele Patient:innen berichten nach der Behandlung von mehr innerer Ruhe, besserem Schlaf und einer deutlichen Reduktion von Schmerzen oder Anspannung.
              </p>
              <h3 className="body-text !text-white text-lg font-bold mb-8 uppercase tracking-wider">
                TYPISCHE EINSATZBEREICHE SIND:
              </h3>
              <div className="space-y-5">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p className="body-text !text-white text-lg leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom narrow row - cream background */}
      <div className="bg-cream h-16 md:h-20"></div>
    </section>
  );
}
