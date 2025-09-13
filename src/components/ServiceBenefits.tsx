import Image from 'next/image';

interface ServiceBenefitsProps {
  benefits: string[];
  heroImage: string;
  title: string;
  benefitsIntro: string;
}

export default function ServiceBenefits({ benefits, heroImage, title, benefitsIntro }: ServiceBenefitsProps) {
  return (
    <section className="relative">
      {/* Top narrow row - cream background */}
      <div className="bg-cream h-16 md:h-20"></div>
      
      {/* Main content area */}
      <div className="relative">
        {/* Mobile Layout (bis sm) - Bild direkt über Rosa ohne Padding, eckig */}
        <div className="sm:hidden">
          {/* Mobile Image - eckig, ohne Padding, volle Breite */}
          <div className="bg-white relative">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={heroImage}
                alt={title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              {/* Linie Overlay für Mobile */}
              <div className="absolute -bottom-3 -left-3 z-10" style={{ width: '100%', height: '100%' }}>
                <Image
                  src="/linie_oben.webp"
                  alt="Dekorative Linie"
                  fill
                  className="object-contain object-bottom-left"
                />
              </div>
            </div>
          </div>
          
          {/* Mobile Benefits */}
          <div className="bg-contact p-12 min-h-[480px]">
            <p 
              className="body-text !text-white text-base mb-8"
              dangerouslySetInnerHTML={{ __html: benefitsIntro }}
            />
            <h3 className="body-text !text-white text-base font-bold mb-6 uppercase tracking-wider">
              TYPISCHE EINSATZBEREICHE SIND:
            </h3>
            <div className="space-y-3">
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

        {/* Tablet Layout (sm bis xl) - Wie Mobile: Bild über Text, volle Breite */}
        <div className="hidden sm:block xl:hidden">
          {/* Image - eckig, ohne Padding, volle Breite */}
          <div className="bg-white relative">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={heroImage}
                alt={title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              {/* Linie Overlay für Tablet */}
              <div className="absolute -bottom-3 -left-3 z-10" style={{ width: '100%', height: '100%' }}>
                <Image
                  src="/linie_oben.webp"
                  alt="Dekorative Linie"
                  fill
                  className="object-contain object-bottom-left"
                />
              </div>
            </div>
          </div>
          
          {/* Benefits */}
          <div className="bg-contact p-12 md:p-16 min-h-[480px]">
            <p 
              className="body-text !text-white text-lg mb-10"
              dangerouslySetInnerHTML={{ __html: benefitsIntro }}
            />
            <h3 className="body-text !text-white text-lg font-bold mb-8 uppercase tracking-wider">
              TYPISCHE EINSATZBEREICHE SIND:
            </h3>
            <div className="space-y-4">
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

        {/* Desktop Layout (ab xl) - Two Columns */}
        <div className="hidden xl:grid xl:grid-cols-2 relative">
          {/* Left column - white background with overlapping image */}
          <div className="bg-white relative z-10">
            <div className="p-8 xl:p-12 pr-0 flex justify-end h-full">
              {/* Image positioned to match the height of the right column */}
              <div className="absolute inset-y-0 right-0 w-full -my-10 -mr-12 xl:-mr-16 2xl:-mr-20 z-30">
                <Image
                  src={heroImage}
                  alt={title}
                  fill
                  className="object-cover rounded-3xl shadow-lg"
                  sizes="50vw"
                />
                {/* Linie Overlay für Desktop */}
                <div className="absolute -bottom-8 -left-10 z-40" style={{ width: '100%', height: '100%' }}>
                  <Image
                    src="/linie_oben.webp"
                    alt="Dekorative Linie"
                    fill
                    className="object-contain object-bottom-left"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - contact background with benefits */}
          <div className="bg-contact p-12 xl:p-20 2xl:p-24 relative z-0">
            <div className="flex flex-col justify-center min-h-[480px] pl-8 xl:pl-12">
              <p 
                className="body-text !text-white text-lg mb-10"
                dangerouslySetInnerHTML={{ __html: benefitsIntro }}
              />
              <h3 className="body-text !text-white text-lg font-bold mb-8 uppercase tracking-wider">
                TYPISCHE EINSATZBEREICHE SIND:
              </h3>
              <div className="space-y-4">
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
      
      {/* Bottom narrow row - white background */}
      <div className="bg-white h-16 md:h-20"></div>
    </section>
  );
}
