import Header from "@/components/Header";
import Link from "next/link";

export const metadata = {
  title: "Impressum - Alexandra Buchmann Praxis",
  description: "Impressum der Praxis Alexandra Buchmann für funktionelle Medizin und Osteopathie in Wentorf bei Hamburg.",
};

export default function Impressum() {
  return (
    <>
      <Header />
      <main className="bg-new-cream min-h-screen pt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Zurück Link */}
          <div className="mb-8">
            <Link 
              href="/" 
              className="text-burgundy hover:text-coral transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Zurück zur Startseite
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="heading-primary text-4xl text-burgundy mb-8">Impressum</h1>
            
            <div className="space-y-8 body-text">
              <section>
                <h2 className="text-2xl font-semibold text-burgundy mb-4">Angaben gemäß § 5 TMG</h2>
                <div className="space-y-2">
                  <p><strong>Alexandra Buchmann</strong></p>
                  <p>Praxis für funktionelle Medizin und Osteopathie</p>
                  <p>Zwischen den Toren 3</p>
                  <p>21465 Wentorf bei Hamburg</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-burgundy mb-4">Kontakt</h2>
                <div className="space-y-2">
                  <p><strong>Telefon:</strong> 040 607 763 460</p>
                  <p><strong>E-Mail:</strong> alexandra@praxis-buchmann.info</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-burgundy mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
                <div className="space-y-2">
                  <p><strong>Berufsbezeichnung:</strong> Heilpraktikerin</p>
                  <p><strong>Zuständige Kammer:</strong> Gesundheitsamt Hamburg</p>
                  <p><strong>Verliehen durch:</strong> Bundesrepublik Deutschland</p>
                  <p><strong>Es gelten folgende berufsrechtliche Regelungen:</strong></p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Heilpraktikergesetz (HeilprG)</li>
                    <li>Durchführungsverordnung zum Heilpraktikergesetz (HeilprGDV)</li>
                  </ul>
                  <p>Regelungen einsehbar unter: <a href="https://www.gesetze-im-internet.de" className="text-burgundy hover:text-coral underline">www.gesetze-im-internet.de</a></p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-burgundy mb-4">Redaktionell verantwortlich</h2>
                <p>Alexandra Buchmann (Anschrift wie oben)</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-burgundy mb-4">EU-Streitschlichtung</h2>
                <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" className="text-burgundy hover:text-coral underline">https://ec.europa.eu/consumers/odr/</a></p>
                <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-burgundy mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
                <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-burgundy mb-4">Haftung für Inhalte</h2>
                <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-burgundy mb-4">Haftung für Links</h2>
                <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
                <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-burgundy mb-4">Urheberrecht</h2>
                <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
                <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
