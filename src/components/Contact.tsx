export default function Contact() {
  return (
    <section className="bg-contact section-padding">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="heading-secondary text-3xl lg:text-4xl text-burgundy mb-8">
          Kommen Sie vorbei!
        </h2>
        
        <p className="text-burgundy text-lg mb-12 leading-relaxed">
          Gerne bespreche ich mit Ihnen in einem unverbindlichen Gespräch, wie ich Sie auf Ihrem Weg zu mehr Gesundheit und Lebensqualität unterstützen kann. Rufen Sie mich an, schreiben Sie mich gerne persönlich an oder buchen Sie direkt einen Termin online.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="mailto:alexandra@praxis-buchmann.info"
            className="btn-outline-burgundy"
          >
            E-MAIL
          </a>
          <a 
            href="tel:+4940607763460"
            className="btn-outline-burgundy"
          >
            ANRUFEN
          </a>
          <a 
            href="https://wa.me/4940607763460"
            className="btn-outline-burgundy flex items-center justify-center gap-2 group"
          >
            <svg className="w-5 h-5 fill-burgundy group-hover:fill-[#25D366] transition-colors duration-200" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            WHATSAPP
          </a>
          <a 
            href="#"
            className="btn-outline-burgundy"
          >
            TERMIN BUCHEN
          </a>
        </div>
        
        {/* Anfahrt & Parking Information */}
        <div className="mt-16 pt-8 border-t border-burgundy/20">
          <h3 className="heading-secondary text-2xl text-burgundy mb-8">
            Anfahrt & Parken
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Anfahrt */}
            <div className="space-y-4 text-center">
              <h4 className="text-lg font-medium text-burgundy">Anfahrt</h4>
              <div className="body-text text-center">
                <p className="mb-2">
                  <strong>Zwischen den Toren 3</strong><br />
                  21465 Wentorf<br />
                  2. Stock (Zugang barrierefrei)
                </p>
                <p className="text-sm text-burgundy/80">
                  Die Praxis ist bequem mit dem Auto oder öffentlichen Verkehrsmitteln erreichbar.
                </p>
              </div>
            </div>
            
            {/* Parkplätze */}
            <div className="space-y-4 text-center">
              <h4 className="text-lg font-medium text-burgundy">Parkplätze</h4>
              <div className="body-text text-center">
                <p className="mb-2">
                  Kostenfreie Parkplätze stehen Ihnen zur Verfügung.
                </p>
                <p className="text-sm text-burgundy/80">
                  Sie können gerne die Parkplätze der{" "}
                  <a 
                    href="https://www.praxissommerfeld.de/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-burgundy hover:text-coral underline transition-colors font-medium"
                  >
                    Praxis Sommerfeld
                  </a>{" "}
                  mitnutzen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
