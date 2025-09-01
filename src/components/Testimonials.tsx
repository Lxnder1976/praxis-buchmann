export default function Testimonials() {
  return (
    <section className="bg-burgundy section-padding">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-16">
          {/* Erstes Testimonial */}
          <blockquote className="text-white">
            <p className="text-lg lg:text-xl mb-6 leading-relaxed">
              Alexandra Buchmann ist absolut verlässlich in der Zusammenarbeit und arbeitet sehr genau und einfühlsam. Sie hat tolle Fachkenntnisse und ein großes Herz bei ihrer Arbeit.
            </p>
            <cite className="text-sm text-gray-300 uppercase tracking-wider">
              – MAX MUSTERMANN
            </cite>
          </blockquote>
          
          {/* Zweites Testimonial */}
          <blockquote className="text-white">
            <p className="text-lg lg:text-xl mb-6 leading-relaxed">
              Es muss nicht immer alles so kompliziert sein! Alexandra Buchmann hat ein tolles Gespür dafür, genau zu erkennen worauf es ankommt und gemeinsam einen Weg zu gehen.
            </p>
            <cite className="text-sm text-gray-300 uppercase tracking-wider">
              – PETRA PUSTERMANN
            </cite>
          </blockquote>
        </div>
      </div>
      
      {/* Dekorative Linien */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full text-coral">
          <path d="M 0,100 Q 100,0 200,100" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full text-coral">
          <path d="M 0,100 Q 100,200 200,100" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </div>
    </section>
  );
}
