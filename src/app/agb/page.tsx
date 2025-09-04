import Header from "@/components/Header";
import Link from "next/link";

export const metadata = {
  title: "AGB - Alexandra Buchmann Praxis",
  description: "Allgemeine Geschäftsbedingungen und Behandlungsvertrag der Praxis Alexandra Buchmann für funktionelle Medizin und Osteopathie in Wentorf bei Hamburg.",
};

export default function AGB() {
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
            <h1 className="heading-primary text-4xl text-burgundy mb-8">Allgemeine Geschäftsbedingungen und Behandlungsvertrag</h1>
            
            <div className="space-y-8 body-text">
              <section>
                <h2 className="text-2xl font-semibold text-burgundy mb-4">§ 1 Anwendbarkeit der AGB</h2>
                <div className="space-y-4">
                  <p><strong>a)</strong> Die AGB regeln die Geschäftsbeziehungen zwischen Heilpraktiker und Patient als Behandlungsvertrag im Sinne der §§ 611 ff BGB, soweit zwischen den Vertragsparteien Abweichendes nicht schriftlich vereinbart wurde.</p>
                  
                  <p><strong>b)</strong> Der Behandlungsvertrag kommt zustande, wenn der Patient das generelle Angebot des Heilpraktikers, die Heilkunde gegen jedermann auszuüben, annimmt und sich an den Heilpraktiker zum Zwecke der Beratung, Diagnose und Therapie wendet.</p>
                  
                  <p><strong>c)</strong> Der Heilpraktiker ist jedoch berechtigt, einen Behandlungsvertrag ohne Angabe von Gründen abzulehnen; insbesondere wenn ein erforderliches Vertrauensverhältnis nicht erwartet werden kann, es um Beschwerden geht, die der Heilpraktiker aufgrund seiner Spezialisierung oder aus gesetzlichen Gründen nicht behandeln kann oder darf oder die ihn in Gewissenskonflikte bringen können. In diesem Fall bleibt der Honoraranspruch des Heilpraktikers für die bis zur Ablehnung entstandenen Leistungen, einschließlich Beratung, erhalten.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-burgundy mb-4">§ 2 Terminabsagen</h2>
                <div className="space-y-4">
                  <p>Da es sich um eine reine Terminpraxis handelt, ist es kaum möglich, durch Absagen entstehende Terminlücken kurzfristig zu besetzen. Termine werden ausschließlich für den Patienten reserviert. Mit dem Heilpraktiker vereinbarte Termine müssen daher mindestens 24 Stunden vor Beginn in Textform oder telefonisch abgesagt werden.</p>
                  
                  <p>Bei Nichteinhaltung dieser Regelung ist der Heilpraktiker berechtigt, das Honorar in voller Höhe in Rechnung zu stellen, abzüglich etwaig ersparter Aufwendungen oder Einnahmen aufgrund anderweitiger Vergabe des Termins.</p>
                  
                  <p>Nur sofern Frist und/oder Form einer Absage ohne Verschulden und unter Vorlage eines entsprechenden Nachweises (z. B. ärztliches Attest) nicht eingehalten werden können, entfällt die Verpflichtung zur Zahlung des Honorars.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-burgundy mb-4">§ 3 Inhalt und Zweck des Behandlungsvertrages</h2>
                <div className="space-y-4">
                  <p><strong>a)</strong> Der Heilpraktiker erbringt seine Dienste gegenüber dem Patienten in der Form, dass er seine Kenntnisse und Fähigkeiten der Ausübung der Heilkunde zur Beratung, Diagnose und Therapie beim Patienten anwendet.</p>
                  
                  <p><strong>b)</strong> Über die Diagnose- und Therapiemethoden entscheidet der Patient nach seinen Befindlichkeiten frei, nachdem er vom Heilpraktiker über die anwendbaren Methoden und deren Vor- und Nachteile in fachlicher und wirtschaftlicher Hinsicht umfassend informiert wurde. Soweit der Patient nicht entscheidet oder nicht entscheiden kann, ist der Heilpraktiker befugt, die Methode anzuwenden, die dem mutmaßlichen Patientenwillen entspricht.</p>
                  
                  <p><strong>c)</strong> In der Regel werden vom Heilpraktiker Methoden angewendet, die schulmedizinisch nicht anerkannt sind und nicht dem Stand der Wissenschaft entsprechen. Diese Methoden sind allgemein auch nicht kausal-funktional erklärbar und insofern nicht zielgerichtet. Ein subjektiv erwarteter Erfolg der Methode kann weder in Aussicht gestellt noch garantiert werden. Soweit der Patient die Anwendung derartiger Methoden ablehnt und ausschließlich nach wissenschaftlich anerkannten Methoden der Schulmedizin beraten, diagnostiziert oder therapiert werden will, hat er dies gegenüber dem Heilpraktiker schriftlich zu erklären.</p>
                  
                  <p><strong>d)</strong> Der Heilpraktiker darf keine verschreibungspflichtigen Medikamente verordnen.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-burgundy mb-4">§ 4 Mitwirkung des Patienten</h2>
                <p>Zu einer aktiven Mitwirkung ist der Patient nicht verpflichtet. Der Heilpraktiker ist jedoch berechtigt, die Behandlung abzubrechen, wenn das erforderliche Vertrauensverhältnis nicht mehr gegeben erscheint, insbesondere wenn der Patient Beratungsinhalte negiert, erforderliche Auskünfte zur Anamnese und Diagnose unzutreffend oder lückenhaft erteilt oder Therapiemaßnahmen vereitelt.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-burgundy mb-4">§ 5 Honorierung des Heilpraktikers</h2>
                <div className="space-y-4">
                  <p><strong>a)</strong> Der Heilpraktiker hat für seine Dienste Anspruch auf ein Honorar. Soweit die Honorare nicht individuell zwischen Heilpraktiker und Patient vereinbart sind, gelten die auf dieser Internetseite aufgeführten Sätze. Die Anwendung anderer Gebührenordnungen oder Gebührenverzeichnisse ist ausgeschlossen.</p>
                  
                  <p><strong>b)</strong> Die Honorare sind für jeden Behandlungstag vom Patienten in bar oder per EC-/Kreditkarte an den Heilpraktiker gegen Quittung zu bezahlen. Nach Abschluss einer Behandlungsphase erhält der Patient auf Wunsch eine Rechnung nach § 8.</p>
                  
                  <p><strong>c)</strong> Vermittelt der Heilpraktiker Leistungen Dritter, die er nicht fachlich überwacht (z. B. Laborleistungen analog M III–IV, N der GOÄ), ist der Heilpraktiker berechtigt, die von dem Dritten in Rechnung gestellten Beträge als eigene Honorarbestandteile geltend zu machen und mit dem Patienten in der voraussichtlichen Höhe gemäß Absatz b) abzurechnen. In Quittungen und Rechnungen sind diese Beträge gesondert auszuweisen.</p>
                  
                  <p>Hierbei wird sich der Heilpraktiker von den Dritten weder Rückvergütungen noch sonstige Vorteile gewähren lassen. Der Heilpraktiker ist jedoch berechtigt, bei einer entsprechenden Vereinbarung für die Vermittlung begleitender Leistungen beim Patienten eigene Honorare geltend zu machen.</p>
                  
                  <p><strong>d)</strong> Im Fall des Absatz c) ist der Heilpraktiker von den Beschränkungen des § 181 BGB befreit und darf als Beauftragter des Patienten zwischen dem Dritten (z. B. Labor) und sich selbst Rechtsgeschäfte abschließen. Das Verbot der Vorteilsgewährung nach Absatz c bleibt hiervon unberührt.</p>
                  
                  <p><strong>f)</strong> Aufgrund gesetzlicher Vorschriften (§ 43 AMG i. d. F. der 8. Änderung 1998) ist die Abgabe von apothekenpflichtigen Arzneimitteln Heilpraktikern nicht gestattet. Die Direktverabreichung an Patienten durch den Heilpraktiker ist jedoch zulässig, da dies keine Abgabe, sondern eine Verwendung ist. Heilpraktikerhonorare enthalten daher grundsätzlich die verwendeten Arzneimittel.</p>
                  
                  <p><strong>g)</strong> Die Abgabe von Arzneimitteln durch Apotheken an den Patienten für verordnete oder empfohlene Präparate ist ein Direktgeschäft zwischen Patient und Apotheke und nicht Bestandteil dieser AGB. Dies gilt auch für freiverkäufliche Arzneimittel, Nahrungsergänzungsmittel und andere Hilfsmittel. Dabei hat der Patient freie Wahl der Verkaufsstelle.</p>
                  
                  <p><strong>h)</strong> Die Abgabe von freiverkäuflichen Arzneimitteln, Nahrungsergänzungsmitteln und anderen Hilfsmitteln ist dem Heilpraktiker oder mit ihm wirtschaftlich verbundenen Unternehmen gestattet. Unter Wahrung der freien Wahl der Verkaufsstelle (Absatz g) können diese Produkte vom Heilpraktiker in Gewinnerzielungsabsicht verkauft oder gegen Provision vermittelt werden.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-burgundy mb-4">§ 6 Honorarerstattung durch Dritte</h2>
                <div className="space-y-4">
                  <p><strong>a)</strong> Soweit der Patient Anspruch auf Erstattung oder Teilerstattung des Honorars durch Dritte hat oder zu haben glaubt, bleibt der Honoraranspruch des Heilpraktikers hiervon unberührt. Der Heilpraktiker führt keine Direktabrechnung durch und stundet das Honorar nicht.</p>
                  
                  <p><strong>b)</strong> Soweit der Heilpraktiker im Rahmen der Beratung nach § 3 Absatz b Angaben zur Erstattungspraxis Dritter macht, sind diese unverbindlich. Die Erstattungssätze gelten nicht als vereinbartes Honorar.</p>
                  
                  <p><strong>c)</strong> Der Heilpraktiker erteilt in Erstattungsfragen Dritten keine direkten Auskünfte. Alle Bescheinigungen und Auskünfte erhält ausschließlich der Patient. Diese Leistungen sind honorarpflichtig.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-burgundy mb-4">§ 7 Vertraulichkeit und Datenschutz</h2>
                <div className="space-y-4">
                  <p><strong>1.</strong> Der Heilpraktiker ist verpflichtet, alle Informationen über den Patienten – insbesondere zu Diagnose, Beratung, Therapie sowie persönliche Verhältnisse – streng vertraulich zu behandeln. Eine Weitergabe an Dritte erfolgt ausschließlich, wenn</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>eine ausdrückliche schriftliche Einwilligung des Patienten vorliegt oder</li>
                    <li>eine gesetzliche Pflicht zur Weitergabe besteht (z. B. behördliche Meldepflichten, gerichtliche Anordnungen).</li>
                  </ul>
                  
                  <p><strong>2.</strong> Der Heilpraktiker führt Aufzeichnungen über die Behandlung (Handakte). Diese dienen ausschließlich internen Dokumentations- und Nachweispflichten. Einsicht in die Handakte steht dem Patienten nicht zu. Auf Wunsch kann jedoch eine Behandlungs- oder Krankenakte erstellt werden; hierfür können Kopier- und Bearbeitungskosten berechnet werden.</p>
                  
                  <p><strong>3.</strong> Die Aufbewahrung und Löschung der Patientendaten erfolgt im Einklang mit den gesetzlichen Vorgaben (§ 630f BGB, DSGVO). Behandlungsunterlagen werden in der Regel <strong>10 Jahre nach Abschluss der Behandlung</strong> aufbewahrt; längere Aufbewahrungsfristen können gelten, wenn dies aus rechtlichen Gründen erforderlich ist.</p>
                  
                  <p><strong>4.</strong> Im Übrigen gelten die <strong>Datenschutzbestimmungen in der jeweils aktuellen Fassung auf unserer Webseite</strong>: <Link href="/datenschutz" className="text-burgundy hover:text-coral underline">www.praxis-buchmann.info/datenschutz</Link>.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-burgundy mb-4">§ 8 Rechnungsstellung</h2>
                <div className="space-y-4">
                  <p><strong>a)</strong> Neben den Quittungen nach § 5 erhält der Patient nach Abschluss der Behandlungsphase auf Verlangen eine Rechnung, deren Ausstellung honorarpflichtig ist. Die Rechnung enthält den Namen, die Anschrift und die Steuernummer des Heilpraktikers sowie den Namen und die Anschrift und auf Wunsch das Geburtsdatum des Patienten.</p>
                  
                  <p>Sie spezifiziert den Behandlungszeitraum, die bezahlten Honorare sowie Dritt- und Nebenleistungen. Für alle Leistungsarten ist ggf. der zutreffende Mehrwertsteuersatz auszuweisen. Die dem Patienten ausgehändigte Rechnung enthält zudem eine oder mehrere Behandlungsdiagnosen.</p>
                  
                  <p><strong>b)</strong> Wünscht der Patient aus Beweis- oder Erstattungsgründen eine Ausfertigung der Rechnung, die eine Diagnose oder Therapiespezifizierungen mit Diagnoserückschlüssen enthalten, bedarf dies der Belehrung über den Bruch der Vertraulichkeit und des schriftlichen Auftrages des Patienten.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-burgundy mb-4">§ 9 Meinungsverschiedenheiten</h2>
                <p>Meinungsverschiedenheiten aus dem Behandlungsvertrag und den AGB sollten gütlich beigelegt werden. Es empfiehlt sich, Gegenvorstellungen, abweichende Meinungen oder Beschwerden schriftlich der jeweils anderen Vertragspartei vorzulegen.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-burgundy mb-4">§ 10 Salvatorische Klausel</h2>
                <p>Sollten einzelne Bestimmungen des Behandlungsvertrages oder der AGB ungültig oder nichtig sein oder werden, bleibt die Wirksamkeit des Behandlungsvertrages insgesamt unberührt. Die ungültige oder nichtige Bestimmung ist vielmehr in freier Auslegung durch eine Bestimmung zu ersetzen, die dem Vertragszweck und dem Parteiwillen am nächsten kommt.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
