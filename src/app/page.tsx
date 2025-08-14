import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4" style={{backgroundColor: '#c46b67'}}>
      <div className="text-center">
        <h1 className="text-white text-3xl md:text-5xl font-light mb-8 leading-relaxed">
          Alexandra Buchmann
        </h1>
        <div className="relative mb-8">
          <Image
            src="/logo-praxis-buchmann.png"
            alt="Praxis Alexandra Buchmann Logo"
            width={400}
            height={300}
            className="mx-auto max-w-full h-auto"
            priority
          />
        </div>
        <h2 className="text-white text-xl md:text-3xl font-light max-w-4xl leading-relaxed mb-12">
          Praxis für Osteopathie und funktionelle Medizin in Wentorf
        </h2>
        
        {/* Kontakt Button */}
        <div className="mt-8">
          <a 
            href="mailto:alexandra@praxis-buchmann.info"
            className="inline-flex items-center bg-white text-gray-800 px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            <svg 
              className="w-5 h-5 mr-3" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
              />
            </svg>
            E-Mail
          </a>
        </div>
      </div>
    </div>
  );
}
