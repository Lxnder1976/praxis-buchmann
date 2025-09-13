import Image from "next/image";
import Link from "next/link";
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-12 md:auto-rows-fr">
          {/* Health Check */}
          <FadeIn direction="up" delay={100} duration={600}>
            <div className="relative h-full">
              <Link href="/leistungen/health-check" className="block">
                <div className="w-12 h-12 mx-auto relative -mb-6 z-10 perle-pulse hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <Image
                    src="/Perle_burgund.png"
                    alt="Burgundy Perle"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
              </Link>
              <div className="service-card bg-new-cream p-8 pt-12 rounded-3xl text-center h-full flex flex-col">
                <h3 className="text-2xl font-medium text-burgundy mb-2">Health Check</h3>
                <p className="text-sm text-burgundy uppercase tracking-wider mb-4">
                  GANZHEITLICHE ANALYSE<br />
                  FÜR EINEN KLAREN ÜBERBLICK
                </p>
                <p className="body-text flex-1 mb-6">
                  Mit moderner Diagnostik (BIA, EKG, HRV), einer ausführlichen Anamnese und einer umfangreichen Vitalparameter-Analyse entsteht ein persönliches Gesundheitsprofil.So können mögliche Risiken frühzeitig sichtbar werden und es entsteht eine fundierte Grundlage für ein individuelles Therapiekonzept.
                </p>
                <div className="text-center">
                  <Link 
                    href="/leistungen/health-check" 
                    className="inline-block bg-burgundy text-white px-12 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300"
                  >
                    Mehr Informationen
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
          
          {/* Labordiagnostik */}
          <FadeIn direction="up" delay={200} duration={600}>
            <div className="relative h-full">
              <Link href="/leistungen/labordiagnostik" className="block">
                <div className="w-12 h-12 mx-auto relative -mb-6 z-10 hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <Image
                    src="/Perle_gold.png"
                    alt="Gold Perle"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
              </Link>
              <div className="service-card bg-new-cream p-8 pt-12 rounded-3xl text-center h-full flex flex-col">
                <h3 className="text-2xl font-medium text-burgundy mb-2">Labordiagnostik</h3>
                <p className="text-sm text-burgundy uppercase tracking-wider mb-4">
                  FUNDIERTE WERTE.<br />
                  KLARE ENTSCHEIDUNGEN.
                </p>
                <p className="body-text flex-1 mb-6">
                  Ob umfassendes Profil oder gezielte Nährstoffanalysen: Ihre Laborwerte liefern wichtige Hinweise für eine individuelle Einschätzung und können als Grundlage für eine passende Betreuung dienen.
                Durch die Auswahl spezifischer Parameter können Zusammenhänge sichtbar werden und individuelle Schwerpunkte berücksichtigt werden.  
                </p>
                <div className="text-center">
                  <Link 
                    href="/leistungen/labordiagnostik" 
                    className="inline-block bg-burgundy text-white px-12 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300"
                  >
                    Mehr Informationen
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
          
          {/* Nährstofftherapie */}
          <FadeIn direction="up" delay={150} duration={600}>
            <div className="relative h-full">
              <Link href="/leistungen/naehrstofftherapie" className="block">
                <div className="w-12 h-12 mx-auto relative -mb-6 z-10 hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <Image
                    src="/Perle_gold.png"
                    alt="Gold Perle"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
              </Link>
              <div className="service-card bg-new-cream p-8 pt-12 rounded-3xl text-center h-full flex flex-col">
                <h3 className="text-2xl font-medium text-burgundy mb-2">Nährstofftherapie</h3>
                <p className="text-sm text-burgundy uppercase tracking-wider mb-4">
                  GEZIELTE ENERGIE<br />
                  VON INNEN.
                </p>
                <p className="body-text flex-1 mb-6">
                  Individuelle Nährstoffkonzepte auf Basis von Laborwerten und Ihren persönlichen Bedürfnissen.
                Die Therapie kann dabei unterstützen, fehlende Reserven auszugleichen und das innere Gleichgewicht zu fördern.
                Sie kann zudem einen positiven Einfluss auf Energie, Immunsystem und Regeneration haben.
                </p>
                <div className="text-center">
                  <Link 
                    href="/leistungen/naehrstofftherapie" 
                    className="inline-block bg-burgundy text-white px-12 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300"
                  >
                    Mehr Informationen
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
          
          {/* Craniosakrale Osteopathie */}
          <FadeIn direction="up" delay={250} duration={600}>
            <div className="relative h-full">
              <Link href="/leistungen/craniosacrale-osteopathie" className="block">
                <div className="w-12 h-12 mx-auto relative -mb-6 z-10 hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <Image
                    src="/Perle_burgund.png"
                    alt="Burgundy Perle"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
              </Link>
              <div className="service-card bg-new-cream p-8 pt-12 rounded-3xl text-center h-full flex flex-col">
                <h3 className="text-2xl font-medium text-burgundy mb-2">Craniosakrale Osteopathie</h3>
                <p className="text-sm text-burgundy uppercase tracking-wider mb-4">
                  BLOCKADEN LÖSEN.<br />
                  BALANCE FINDEN.
                </p>
                <p className="body-text flex-1 mb-6">
                  Sanfte manuelle Techniken können dazu beitragen, Beweglichkeit zu unterstützen und das innere Gleichgewicht zu fördern.
                Sie können hilfreich sein, um Funktionsstörungen positiv zu beeinflussen, Schmerzen zu lindern und die natürlichen Regenerationsprozesse des Körpers zu unterstützen.
                </p>
                <div className="text-center">
                  <Link 
                    href="/leistungen/craniosacrale-osteopathie" 
                    className="inline-block bg-burgundy text-white px-12 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300"
                  >
                    Mehr Informationen
                  </Link>
                </div>
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
