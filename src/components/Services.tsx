export default function Services() {
  return (
    <section id="leistungen" className="bg-burgundy section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-secondary text-3xl lg:text-4xl text-white text-center mb-16">
          Leistungen
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Health Check */}
          <div className="service-card bg-white p-8 rounded-lg">
            <div className="w-12 h-12 bg-coral rounded-full mb-6"></div>
            <h3 className="text-xl font-medium text-burgundy mb-2">Health Check</h3>
            <p className="text-sm text-burgundy uppercase tracking-wider mb-4">
              GANZHEITLICHE ANALYSE<br />
              FÜR EINEN KLAREN ÜBERBLICK
            </p>
            <p className="body-text">
              Mit moderner Diagnostik (BIA, EKG, HRV), ausführlicher Anamnese und einer umfangreichen Vitalparameter-Analyse entsteht ein persönliches Gesundheitsprofil. So lassen sich Risiken frühzeitig erkennen und die Basis für ein individuelles Therapiekonzept schaffen.
            </p>
          </div>
          
          {/* Labordiagnostik */}
          <div className="service-card bg-white p-8 rounded-lg">
            <div className="w-12 h-12 bg-yellow-700 rounded-full mb-6"></div>
            <h3 className="text-xl font-medium text-burgundy mb-2">Labordiagnostik</h3>
            <p className="text-sm text-burgundy uppercase tracking-wider mb-4">
              FUNDIERTE WERTE.<br />
              KLARE ENTSCHEIDUNGEN.
            </p>
            <p className="body-text">
              Ob umfassendes Profil oder gezielte Nährstoffanalysen: Ihre Laborwerte bilden die Grundlage für eine präzise Behandlung und machen Fortschritte sichtbar. Durch die Auswahl spezifischer Parameter lassen sich Zusammenhänge erkennen und individuelle Schwerpunkte gezielt berücksichtigen.
            </p>
          </div>
          
          {/* Nährstofftherapie */}
          <div className="service-card bg-white p-8 rounded-lg">
            <div className="w-12 h-12 bg-burgundy rounded-full mb-6"></div>
            <h3 className="text-xl font-medium text-burgundy mb-2">Nährstofftherapie</h3>
            <p className="text-sm text-burgundy uppercase tracking-wider mb-4">
              GEZIELTE ENERGIE<br />
              VON INNEN.
            </p>
            <p className="body-text">
              Individuelle Nährstoffkonzepte – auf Basis von Laborwerten und Ihren Bedürfnissen. Ziel ist es, fehlende Reserven aufzufüllen, die Speicher wieder ins Gleichgewicht zu bringen und so Energie, Immunsystem und Regeneration nachhaltig zu stärken.
            </p>
          </div>
          
          {/* Kraniosakrale Osteopathie */}
          <div className="service-card bg-white p-8 rounded-lg">
            <div className="w-12 h-12 bg-coral rounded-full mb-6"></div>
            <h3 className="text-xl font-medium text-burgundy mb-2">Kraniosakrale Osteopathie</h3>
            <p className="text-sm text-burgundy uppercase tracking-wider mb-4">
              BLOCKADEN LÖSEN.<br />
              BALANCE FINDEN.
            </p>
            <p className="body-text">
              Sanfte manuelle Techniken stellen Beweglichkeit und Gleichgewicht wieder her. Ziel ist es, Funktionsstörungen zu beseitigen, Schmerzen zu lindern und die natürlichen Heilungsprozesse des Körpers zu fördern.
            </p>
          </div>
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
