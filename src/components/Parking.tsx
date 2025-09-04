export default function Parking() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="heading-secondary text-2xl lg:text-3xl text-burgundy mb-6">
          Anfahrt & Parken
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Anfahrt */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-burgundy">Anfahrt</h3>
            <div className="body-text text-left">
              <p className="mb-2">
                <strong>Zwischen den Toren 3</strong><br />
                21465 Wentorf<br />
                2. Stock (Zugang barrierefrei)
              </p>
              <p className="text-sm text-gray-600">
                Die Praxis ist bequem mit dem Auto oder öffentlichen Verkehrsmitteln erreichbar.
              </p>
            </div>
          </div>
          
          {/* Parkplätze */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-burgundy">Parkplätze</h3>
            <div className="body-text text-left">
              <p className="mb-2">
                Kostenfreie Parkplätze stehen Ihnen zur Verfügung.
              </p>
              <p className="text-sm">
                Sie können gerne die Parkplätze der{" "}
                <a 
                  href="https://www.praxissommerfeld.de/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-burgundy hover:text-coral underline transition-colors"
                >
                  Praxis Sommerfeld
                </a>{" "}
                mitnutzen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
