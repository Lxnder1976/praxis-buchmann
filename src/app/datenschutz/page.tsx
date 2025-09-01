import Header from "@/components/Header";
import Link from "next/link";

export const metadata = {
  title: "Datenschutz - Alexandra Buchmann Praxis",
  description: "Datenschutzerklärung der Praxis Alexandra Buchmann für funktionelle Medizin und Osteopathie in Wentorf bei Hamburg.",
};

export default function Datenschutz() {
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
            <h1 className="heading-primary text-4xl text-burgundy mb-8">Datenschutzerklärung</h1>
            
            <div className="space-y-8 body-text">
              <section>
                <h2 className="text-2xl font-semibold text-burgundy mb-4">1. Datenschutz auf einen Blick</h2>
                
                <h3 className="text-xl font-semibold text-burgundy mb-3">Allgemeine Hinweise</h3>
                <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
                
                <h3 className="text-xl font-semibold text-burgundy mb-3 mt-6">Datenerfassung auf dieser Website</h3>
                <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
                <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.</p>
                
                <p className="mt-4"><strong>Wie erfassen wir Ihre Daten?</strong></p>
                <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
                <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-burgundy mb-4">2. Hosting</h2>
                <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
                
                <h3 className="text-xl font-semibold text-burgundy mb-3 mt-6">Microsoft Azure</h3>
                <p>Diese Website wird bei Microsoft Azure gehostet. Anbieter ist die Microsoft Corporation, One Microsoft Way, Redmond, WA 98052-6399, USA (nachfolgend „Azure").</p>
                <p>Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern von Azure gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.</p>
                <p>Das Hosting bei Azure erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).</p>
                <p>Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.</p>
                <p>Microsoft Azure ist zertifiziert nach EU-US Data Privacy Framework und bietet angemessene Datenschutzgarantien. Details zu den Datenschutzbestimmungen von Microsoft Azure finden Sie unter: <a href="https://privacy.microsoft.com/de-de/privacystatement" className="text-burgundy hover:text-coral underline">https://privacy.microsoft.com/de-de/privacystatement</a></p>
                
                <h3 className="text-xl font-semibold text-burgundy mb-3 mt-6">Auftragsverarbeitung</h3>
                <p>Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-burgundy mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                
                <h3 className="text-xl font-semibold text-burgundy mb-3">Datenschutz</h3>
                <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen sowie dieser Datenschutzerklärung.</p>
                <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p>
                
                <h3 className="text-xl font-semibold text-burgundy mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
                <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                <div className="bg-gray-50 p-4 rounded mt-4">
                  <p><strong>Alexandra Buchmann</strong></p>
                  <p>Praxis für funktionelle Medizin und Osteopathie</p>
                  <p>Zwischen den Toren 3</p>
                  <p>21465 Wentorf bei Hamburg</p>
                  <p>Telefon: 040 607 763 460</p>
                  <p>E-Mail: alexandra@praxis-buchmann.info</p>
                </div>
                <p className="mt-4">Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-burgundy mb-4">4. Cookies</h2>
                
                <h3 className="text-xl font-semibold text-burgundy mb-3">Was sind Cookies?</h3>
                <p>Cookies sind kleine Textdateien, die auf Ihrem Computer gespeichert werden, wenn Sie eine Website besuchen. Sie ermöglichen es der Website, sich an Ihre Aktionen und Präferenzen zu erinnern.</p>
                
                <h3 className="text-xl font-semibold text-burgundy mb-3 mt-6">Welche Cookies verwenden wir?</h3>
                
                <h4 className="text-lg font-semibold text-burgundy mb-2 mt-4">Notwendige Cookies</h4>
                <p>Diese Cookies sind erforderlich, damit die Website ordnungsgemäß funktioniert. Sie können diese Cookies nicht ablehnen, ohne dass die Funktionalität der Website beeinträchtigt wird. Dazu gehören:</p>
                <ul className="list-disc ml-6 space-y-1 mt-2">
                  <li>Session-Cookies für die Websitesicherheit</li>
                  <li>Cookie-Einstellungen speichern</li>
                  <li>Technische Funktionalitäten</li>
                </ul>
                
                <h4 className="text-lg font-semibold text-burgundy mb-2 mt-4">Analyse-Cookies (optional)</h4>
                <p>Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie Informationen anonym sammeln. Verwendung nur mit Ihrer Einwilligung für:</p>
                <ul className="list-disc ml-6 space-y-1 mt-2">
                  <li>Website-Traffic-Analyse</li>
                  <li>Verbesserung der Benutzererfahrung</li>
                  <li>Funktionalitäts-Optimierung</li>
                </ul>
                
                <h4 className="text-lg font-semibold text-burgundy mb-2 mt-4">Marketing-Cookies (optional)</h4>
                <p>Diese Cookies werden verwendet, um Ihnen relevante Werbung anzuzeigen. Verwendung nur mit Ihrer Einwilligung für:</p>
                <ul className="list-disc ml-6 space-y-1 mt-2">
                  <li>Personalisierte Werbung</li>
                  <li>Social Media Integration</li>
                  <li>Remarketing-Kampagnen</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-burgundy mb-3 mt-6">Cookie-Einstellungen verwalten</h3>
                <p>Sie können Ihre Cookie-Einstellungen jederzeit über unser Cookie-Banner ändern oder über Ihren Browser verwalten. Beachten Sie, dass das Deaktivieren bestimmter Cookies die Funktionalität der Website beeinträchtigen kann.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-burgundy mb-4">5. Datenerfassung auf dieser Website</h2>
                
                <h3 className="text-xl font-semibold text-burgundy mb-3">Server-Log-Dateien</h3>
                <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
                <ul className="list-disc ml-6 space-y-1 mt-4">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="mt-4">Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
                <p>Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.</p>
                
                <h3 className="text-xl font-semibold text-burgundy mb-3 mt-6">Kontaktformular</h3>
                <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
                <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-burgundy mb-4">6. Ihre Rechte</h2>
                <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
                <p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-burgundy mb-4">7. Medizinische Daten</h2>
                <p><strong>Besondere Kategorien personenbezogener Daten</strong></p>
                <p>Im Rahmen der medizinischen Behandlung verarbeiten wir besondere Kategorien personenbezogener Daten gemäß Art. 9 DSGVO (Gesundheitsdaten). Die Verarbeitung erfolgt:</p>
                <ul className="list-disc ml-6 space-y-1 mt-4">
                  <li>zur Erfüllung rechtlicher Verpflichtungen nach dem Heilberuferecht</li>
                  <li>zum Schutz lebenswichtiger Interessen</li>
                  <li>zur Gesundheitsvorsorge oder Arbeitsmedizin</li>
                  <li>für Zwecke der Gesundheitsversorgung</li>
                </ul>
                <p className="mt-4">Medizinische Daten unterliegen der besonderen ärztlichen Schweigepflicht und werden entsprechend den berufsrechtlichen Bestimmungen sowie den Aufbewahrungsfristen behandelt.</p>
              </section>

              <div className="text-sm text-gray-600 mt-12 pt-8 border-t">
                <p>Stand: Januar 2025</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
