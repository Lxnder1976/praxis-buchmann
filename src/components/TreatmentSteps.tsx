import Image from 'next/image';

interface TreatmentStep {
  title: string;
  description: string;
  color: 'burgundy' | 'coral';
}

interface TreatmentStepsProps {
  steps: TreatmentStep[];
}

export default function TreatmentSteps({ steps }: TreatmentStepsProps) {
  // Array der Perlen-Bilder für die Rotation
  const pearlImages = [
    '/Perle_burgund.png',
    '/Perle_rosa.png', 
    '/Perle_gold.png'
  ];

  return (
    <section className="bg-white section-padding">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-3xl lg:text-4xl text-burgundy mb-4">
            So verläuft Ihre Behandlung:
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="bg-new-cream p-8 px-16 rounded-3xl text-center relative">
                {/* Perle auf der oberen Kante */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 z-10">
                  <Image
                    src={pearlImages[index % 3]}
                    alt="Perle"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <h3 className="body-text text-xl font-bold text-burgundy mb-3 mt-4">
                  {step.title}
                </h3>
                
                <p 
                  className="body-text text-burgundy leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: step.description }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
