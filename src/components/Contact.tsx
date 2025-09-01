export default function Contact() {
  return (
    <section className="bg-contact section-padding">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="heading-secondary text-3xl lg:text-4xl text-white mb-8">
          Haben Sie Interesse?
        </h2>
        
        <p className="text-white text-lg mb-12 leading-relaxed">
          Gerne bespreche ich mit Ihnen in einem unverbindlichen Gespräch, wie ich Sie auf Ihrem Weg zu mehr Gesundheit und Lebensqualität unterstützen kann. Rufen Sie mich an, schreiben Sie mir eine E-Mail oder buchen Sie direkt einen Termin online.
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
            className="btn-outline-burgundy"
          >
            WHATSAPP
          </a>
          <a 
            href="#"
            className="btn-outline-burgundy"
          >
            TERMIN BUCHEN
          </a>
        </div>
      </div>
    </section>
  );
}
