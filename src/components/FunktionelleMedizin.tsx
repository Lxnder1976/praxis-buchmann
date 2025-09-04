export default function FunktionelleMedizin() {
  return (
    <section id="funktionelle-medizin" className="relative">
      
      {/* Desktop Version - mit absolut positionierter Box */}
      <div className="hidden md:block">
        {/* Oberer Bereich - 100px Creme Hintergrund */}
        <div className="bg-new-cream h-32 relative"></div>
        
        {/* Unterer Bereich - Grauer Hintergrund mit Limetten rechtsbündig */}
        <div 
          className="relative min-h-[500px] bg-right bg-no-repeat bg-contain"
          style={{
            backgroundColor: '#f8f8f8',
            backgroundImage: `url('/limetten.webp'), url('/limetten.png')`
          }}
        ></div>
        
        {/* Weiße Content-Box - absolut positioniert über beide Bereiche */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-4 z-20">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mx-auto max-w-4xl text-center">
            <h2 className="heading-secondary text-3xl lg:text-4xl text-burgundy mb-8">
              Funktionelle Medizin
            </h2>
            
            <div className="space-y-6">
              <p className="body-text text-lg leading-relaxed">
                Die funktionelle Medizin stellt die Ursachen in den Mittelpunkt – und betrachtet den Menschen mit einem ganzheitlichen Blick auf Körper, Geist und Lebensstil.
              </p>
              
              <p className="body-text text-lg leading-relaxed">
                Ziel ist es, die tatsächlichen Auslöser von Beschwerden zu finden, anstatt nur deren Folgen zu behandeln. Dabei spielen Faktoren wie Ernährung, Stoffwechsel, Hormone, Darmgesundheit, das Immunsystem und der Lebensstil eine wichtige Rolle.
              </p>
              
              <p className="body-text text-lg leading-relaxed">
                Die funktionelle Medizin eignet sich besonders bei komplexen oder wiederkehrenden Beschwerden wie Erschöpfung, Infektanfälligkeit, Stoffwechselstörungen oder hormonellen Dysbalancen – ebenso, wenn es darum geht, die Gesundheit langfristig zu erhalten und durch Longevity-Konzepte Gesundheit und Lebensqualität bis ins hohe Alter zu bewahren.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version - normaler Text ohne Box */}
      <div className="block md:hidden bg-white section-padding">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="heading-secondary text-3xl text-burgundy mb-8">
            Funktionelle Medizin
          </h2>
          
          <div className="space-y-6">
            <p className="body-text text-lg leading-relaxed">
              Die funktionelle Medizin stellt die Ursachen in den Mittelpunkt – und betrachtet den Menschen mit einem ganzheitlichen Blick auf Körper, Geist und Lebensstil.
            </p>
            
            <p className="body-text text-lg leading-relaxed">
              Ziel ist es, die tatsächlichen Auslöser von Beschwerden zu finden, anstatt nur deren Folgen zu behandeln. Dabei spielen Faktoren wie Ernährung, Stoffwechsel, Hormone, Darmgesundheit, das Immunsystem und der Lebensstil eine wichtige Rolle.
            </p>
            
            <p className="body-text text-lg leading-relaxed">
              Die funktionelle Medizin eignet sich besonders bei komplexen oder wiederkehrenden Beschwerden wie Erschöpfung, Infektanfälligkeit, Stoffwechselstörungen oder hormonellen Dysbalancen – ebenso, wenn es darum geht, die Gesundheit langfristig zu erhalten und durch Longevity-Konzepte Gesundheit und Lebensqualität bis ins hohe Alter zu bewahren.
            </p>
          </div>
        </div>
      </div>
      
    </section>
  );
}
