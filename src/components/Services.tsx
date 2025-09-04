import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Services() {
  return (
    <section id="leistungen" className="bg-contact section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" duration={800}>
          <h2 className="heading-secondary text-4xl lg:text-5xl text-burgundy text-center mb-12">
            Leistungen
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-12 md:grid-rows-2">
          {/* Health Check */}
          <FadeIn direction="up" delay={100} duration={600}>
            <div className="relative">
              <div className="w-12 h-12 mx-auto relative -mb-6 z-10">
                <Image
                  src="/Perle_burgund.png"
                  alt="Burgundy Perle"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="service-card bg-new-cream p-8 pt-12 rounded-3xl text-center h-full flex flex-col">
                <h3 className="text-2xl font-medium text-burgundy mb-2">Health Check</h3>
                <p className="text-sm text-burgundy uppercase tracking-wider mb-4">
                  GANZHEITLICHE ANALYSE<br />
                  FÜR EINEN KLAREN ÜBERBLICK
                </p>
                <p className="body-text flex-1">
                  Mit moderner Diagnostik (BIA, EKG, HRV), ausführlicher Anamnese und einer umfangreichen Vitalparameter-Analyse entsteht ein persönliches Gesundheitsprofil. So lassen sich Risiken frühzeitig erkennen und die Basis für ein individuelles Therapiekonzept schaffen.
                </p>
              </div>
            </div>
          </FadeIn>
          
          {/* Labordiagnostik */}
          <FadeIn direction="up" delay={200} duration={600}>
            <div className="relative">
              <div className="w-12 h-12 mx-auto relative -mb-6 z-10">
                <Image
                  src="/Perle_gold.png"
                  alt="Gold Perle"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="service-card bg-new-cream p-8 pt-12 rounded-3xl text-center h-full flex flex-col">
                <h3 className="text-2xl font-medium text-burgundy mb-2">Labordiagnostik</h3>
                <p className="text-sm text-burgundy uppercase tracking-wider mb-4">
                  FUNDIERTE WERTE.<br />
                  KLARE ENTSCHEIDUNGEN.
                </p>
                <p className="body-text flex-1">
                  Ob umfassendes Profil oder gezielte Nährstoffanalysen: Ihre Laborwerte bilden die Grundlage für eine präzise Behandlung und machen Fortschritte sichtbar. Durch die Auswahl spezifischer Parameter lassen sich Zusammenhänge erkennen und individuelle Schwerpunkte gezielt berücksichtigen.
                </p>
              </div>
            </div>
          </FadeIn>
          
          {/* Nährstofftherapie */}
          <FadeIn direction="up" delay={150} duration={600}>
            <div className="relative">
              <div className="w-12 h-12 mx-auto relative -mb-6 z-10">
                <Image
                  src="/Perle_gold.png"
                  alt="Gold Perle"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="service-card bg-new-cream p-8 pt-12 rounded-3xl text-center h-full flex flex-col">
                <h3 className="text-2xl font-medium text-burgundy mb-2">Nährstofftherapie</h3>
                <p className="text-sm text-burgundy uppercase tracking-wider mb-4">
                  GEZIELTE ENERGIE<br />
                  VON INNEN.
                </p>
                <p className="body-text flex-1">
                  Individuelle Nährstoffkonzepte – auf Basis von Laborwerten und Ihren Bedürfnissen. Ziel ist es, fehlende Reserven aufzufüllen, die Speicher wieder ins Gleichgewicht zu bringen und so Energie, Immunsystem und Regeneration nachhaltig zu stärken.
                </p>
              </div>
            </div>
          </FadeIn>
          
          {/* Kraniosakrale Osteopathie */}
          <FadeIn direction="up" delay={250} duration={600}>
            <div className="relative">
              <div className="w-12 h-12 mx-auto relative -mb-6 z-10">
                <Image
                  src="/Perle_burgund.png"
                  alt="Burgundy Perle"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="service-card bg-new-cream p-8 pt-12 rounded-3xl text-center h-full flex flex-col">
                <h3 className="text-2xl font-medium text-burgundy mb-2">Kraniosakrale Osteopathie</h3>
                <p className="text-sm text-burgundy uppercase tracking-wider mb-4">
                  BLOCKADEN LÖSEN.<br />
                  BALANCE FINDEN.
                </p>
                <p className="body-text flex-1">
                  Sanfte manuelle Techniken stellen Beweglichkeit und Gleichgewicht wieder her. Ziel ist es, Funktionsstörungen zu beseitigen, Schmerzen zu lindern und die natürlichen Heilungsprozesse des Körpers zu fördern.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* Dekorative rosa Linie */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full text-coral">
          <path d="M 0,0 Q 100,100 200,0" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </div>
    </section>
  );
}
