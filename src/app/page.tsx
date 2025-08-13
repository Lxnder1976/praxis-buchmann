export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Praxis Dr. Buchmann</h1>
              <p className="text-gray-600">Ihre Gesundheit in besten Händen</p>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-900 hover:text-blue-600 transition-colors">Start</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Leistungen</a>
              <a href="#team" className="text-gray-700 hover:text-blue-600 transition-colors">Team</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontakt</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Willkommen in der Praxis Dr. Buchmann
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Wir bieten Ihnen eine umfassende medizinische Betreuung mit modernster Ausstattung 
            und einem erfahrenen Team. Ihre Gesundheit steht bei uns an erster Stelle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Termin buchen
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Mehr erfahren
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Unsere Leistungen
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Allgemeinmedizin</h4>
              <p className="text-gray-600">
                Umfassende medizinische Betreuung für die ganze Familie mit modernster Diagnostik.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Vorsorgeuntersuchungen</h4>
              <p className="text-gray-600">
                Regelmäßige Check-ups und Präventionsmaßnahmen für Ihre langfristige Gesundheit.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Notfallversorgung</h4>
              <p className="text-gray-600">
                Schnelle und kompetente Hilfe in medizinischen Notfällen während der Sprechzeiten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Kontakt & Sprechzeiten
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Kontaktinformationen</h4>
              <div className="space-y-3">
                <p className="text-gray-600">
                  <strong>Adresse:</strong><br />
                  Musterstraße 123<br />
                  12345 Musterstadt
                </p>
                <p className="text-gray-600">
                  <strong>Telefon:</strong> +49 (0) 123 456789
                </p>
                <p className="text-gray-600">
                  <strong>E-Mail:</strong> info@praxis-buchmann.de
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Sprechzeiten</h4>
              <div className="space-y-2 text-gray-600">
                <p><strong>Montag - Freitag:</strong> 8:00 - 18:00 Uhr</p>
                <p><strong>Samstag:</strong> 9:00 - 12:00 Uhr</p>
                <p><strong>Sonntag:</strong> Geschlossen</p>
                <p className="mt-4 text-sm text-blue-600">
                  Termine nach Vereinbarung auch außerhalb der Sprechzeiten möglich.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-lg font-semibold mb-4">Praxis Dr. Buchmann</h5>
              <p className="text-gray-400">
                Ihre vertrauensvolle Hausarztpraxis im Herzen der Stadt.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Schnelllinks</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Leistungen</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">Team</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Rechtliches</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/impressum" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Praxis Dr. Buchmann. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
