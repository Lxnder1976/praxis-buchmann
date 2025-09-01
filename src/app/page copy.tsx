"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add('shadow-md');
        } else {
          navbar.classList.remove('shadow-md');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <main>
      {/* Header & Navigation */}
      <header className="bg-cream sticky top-0 z-50 transition-shadow duration-300" id="navbar" style={{height: '100px'}}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="grid grid-cols-3 items-center h-full">
            {/* Alexandra Buchmann links */}
            <div className="flex justify-start">
              <h1 className="text-2xl font-light text-burgundy">Alexandra Buchmann</h1>
            </div>
            
            {/* Zentrales Logo */}
            <div className="flex justify-center">
              <Image
                src="/logo-praxis-buchmann.png"
                alt="Logo Praxis Buchmann"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
            </div>
            
            {/* Navigation rechts */}
            <div className="hidden md:flex justify-end items-center space-x-4">
              <a href="#funktionelle-medizin" className="text-xs text-burgundy hover:text-coral transition-colors">FUNKTIONELLE MEDIZIN</a>
              <a href="#leistungen" className="text-xs text-burgundy hover:text-coral transition-colors">LEISTUNGEN</a>
              <a href="#ueber-mich" className="text-xs text-burgundy hover:text-coral transition-colors">ÜBER MICH</a>
              <a href="#kosten" className="text-xs text-burgundy hover:text-coral transition-colors">KOSTEN</a>
              <a href="#kontakt" className="text-xs text-burgundy hover:text-coral transition-colors">KONTAKT</a>
              <div className="w-5 h-5 text-coral ml-3">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.404-5.965 1.404-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.74-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex justify-end">
              <button className="text-burgundy">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Sektion 1: Hero */}
      <section className="bg-cream section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Bild links */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/hero.jpg"
                  alt="Alexandra Buchmann bei der Osteopathie-Behandlung"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Text rechts */}
            <div className="space-y-6">
              <h1 className="heading-primary text-4xl lg:text-5xl text-burgundy">
                Für mehr<br />
                Gesundheit und<br />
                Lebensqualität
              </h1>
              <p className="body-text text-lg">
                Es ist mir eine Freude, Sie in meiner Praxis für funktionelle Medizin und Osteopathie in Wentorf bei Hamburg zu begrüßen.
              </p>
              <button className="btn-burgundy">
                MEHR ERFAHREN
              </button>
            </div>
          </div>
        </div>
        
        {/* Dekorative rosa Linie */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
          <svg viewBox="0 0 200 200" className="w-full h-full text-coral">
            <path d="M 0,200 Q 100,100 200,200" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
      </section>

      {/* Sektion 2: Funktionelle Medizin */}
      <section id="funktionelle-medizin" className="bg-white section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-secondary text-3xl lg:text-4xl text-burgundy mb-12">
            Funktionelle Medizin
          </h2>
          
          <div className="space-y-8 text-center">
            <p className="body-text text-lg">
              Die funktionelle Medizin stellt die Ursachen in den Mittelpunkt – und betrachtet den Menschen mit einem ganzheitlichen Blick auf Körper, Geist und Lebensstil.
            </p>
            
            <p className="body-text text-lg">
              Ziel ist es, die tatsächlichen Auslöser von Beschwerden zu finden, anstatt nur deren Folgen zu behandeln. Dabei spielen Faktoren wie Ernährung, Stoffwechsel, Hormone, Darmgesundheit, das Immunsystem und der Lebensstil eine wichtige Rolle.
            </p>
            
            <p className="body-text text-lg">
              Die funktionelle Medizin eignet sich besonders bei komplexen oder wiederkehrenden Beschwerden wie Erschöpfung, Infektanfälligkeit, Stoffwechselstörungen oder hormonellen Dysbalancen – ebenso, wenn es darum geht, die Gesundheit langfristig zu erhalten und durch Longevity-Konzepte Gesundheit und Lebensqualität bis ins hohe Alter zu bewahren.
            </p>
          </div>
        </div>
      </section>

      {/* Sektion 3: Leistungen */}
      <section id="leistungen" className="bg-burgundy section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-secondary text-3xl lg:text-4xl text-white text-center mb-16">
            Leistungen
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Health Check */}
            <div className="service-card bg-white p-8 rounded-lg">
              <div className="w-12 h-12 bg-coral rounded-full mb-6"></div>
              <h3 className="text-xl font-medium text-burgundy mb-2">Health Check</h3>
              <p className="text-sm text-burgundy uppercase tracking-wider mb-4">
                GANZHEITLICHE ANALYSE<br />
                FÜR EINEN KLAREN ÜBERBLICK
              </p>
              <p className="body-text">
                Mit moderner Diagnostik (BIA, EKG, HRV), ausführlicher Anamnese und einer umfangreichen Vitalparameter-Analyse entsteht ein persönliches Gesundheitsprofil. So lassen sich Risiken frühzeitig erkennen und die Basis für ein individuelles Therapiekonzept schaffen.
              </p>
            </div>
            
            {/* Labordiagnostik */}
            <div className="service-card bg-white p-8 rounded-lg">
              <div className="w-12 h-12 bg-yellow-700 rounded-full mb-6"></div>
              <h3 className="text-xl font-medium text-burgundy mb-2">Labordiagnostik</h3>
              <p className="text-sm text-burgundy uppercase tracking-wider mb-4">
                FUNDIERTE WERTE.<br />
                KLARE ENTSCHEIDUNGEN.
              </p>
              <p className="body-text">
                Ob umfassendes Profil oder gezielte Nährstoffanalysen: Ihre Laborwerte bilden die Grundlage für eine präzise Behandlung und machen Fortschritte sichtbar. Durch die Auswahl spezifischer Parameter lassen sich Zusammenhänge erkennen und individuelle Schwerpunkte gezielt berücksichtigen.
              </p>
            </div>
            
            {/* Nährstofftherapie */}
            <div className="service-card bg-white p-8 rounded-lg">
              <div className="w-12 h-12 bg-burgundy rounded-full mb-6"></div>
              <h3 className="text-xl font-medium text-burgundy mb-2">Nährstofftherapie</h3>
              <p className="text-sm text-burgundy uppercase tracking-wider mb-4">
                GEZIELTE ENERGIE<br />
                VON INNEN.
              </p>
              <p className="body-text">
                Individuelle Nährstoffkonzepte – auf Basis von Laborwerten und Ihren Bedürfnissen. Ziel ist es, fehlende Reserven aufzufüllen, die Speicher wieder ins Gleichgewicht zu bringen und so Energie, Immunsystem und Regeneration nachhaltig zu stärken.
              </p>
            </div>
            
            {/* Kraniosakrale Osteopathie */}
            <div className="service-card bg-white p-8 rounded-lg">
              <div className="w-12 h-12 bg-coral rounded-full mb-6"></div>
              <h3 className="text-xl font-medium text-burgundy mb-2">Kraniosakrale Osteopathie</h3>
              <p className="text-sm text-burgundy uppercase tracking-wider mb-4">
                BLOCKADEN LÖSEN.<br />
                BALANCE FINDEN.
              </p>
              <p className="body-text">
                Sanfte manuelle Techniken stellen Beweglichkeit und Gleichgewicht wieder her. Ziel ist es, Funktionsstörungen zu beseitigen, Schmerzen zu lindern und die natürlichen Heilungsprozesse des Körpers zu fördern.
              </p>
            </div>
          </div>
        </div>
        
        {/* Dekorative rosa Linie */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
          <svg viewBox="0 0 200 200" className="w-full h-full text-coral">
            <path d="M 0,0 Q 100,100 200,0" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
      </section>

      {/* Sektion 4: Über mich */}
      <section id="ueber-mich" className="bg-cream section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text links */}
            <div className="space-y-6">
              <h2 className="heading-secondary text-3xl lg:text-4xl text-burgundy">
                Über mich
              </h2>
              
              <div className="space-y-6">
                <p className="body-text text-lg">
                  Mein Name ist Alexandra Buchmann, und als Heilpraktikerin ist es meine Leidenschaft, Menschen wie Sie auf ihrem Weg zu mehr Gesundheit und Lebensqualität zu begleiten. Mit meiner Erfahrung aus der Laboranalytik, meiner Ausbildung zur Heilpraktikerin und meiner mehrjährigen Expertise in der Osteopathie habe ich gelernt, den Körper als Ganzes zu betrachten.
                </p>
                
                <p className="body-text text-lg">
                  Deshalb steht bei mir immer der Mensch im Mittelpunkt – mit all seinen individuellen Bedürfnissen und seiner einzigartigen Geschichte. Ich nehme mir die Zeit, die Ursachen Ihrer Beschwerden zu ergründen und ein ganz auf Sie zugeschnittenes Behandlungskonzept zu entwickeln. So schaffen wir gemeinsam eine Lösung, die nicht nur Symptome lindert, sondern Ihre Gesundheit nachhaltig stärkt.
                </p>
              </div>
              
              <button className="btn-burgundy">
                KONTAKT
              </button>
            </div>
            
            {/* Bild rechts */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg">
                {/* Rosa Hintergrund-Element */}
                <div className="absolute inset-0 bg-light-coral rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
                <Image
                  src="/portrait_alexandra_buchmann.jpg"
                  alt="Portrait von Alexandra Buchmann"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sektion 5: Testimonials */}
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

      {/* Sektion 6: Ablauf und Kosten */}
      <section id="kosten" className="bg-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Bild links */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/beratung.jpg"
                  alt="Beratungsgespräch in der Praxis"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Text rechts */}
            <div className="space-y-8">
              <h2 className="heading-secondary text-3xl lg:text-4xl text-burgundy">
                Ablauf und Kosten
              </h2>
              
              <p className="body-text text-lg">
                Eine Beratung beginnt immer mit einem ausführlichen Gespräch über Ihre Beschwerden, Ihre Krankengeschichte und Ihre Ziele. Je nach Bedarf folgen dann gezielte Untersuchungen und die Besprechung eines individuellen Behandlungsplans.
              </p>
              
              {/* Preistabelle */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-burgundy mb-4">Behandlungskosten</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="body-text">Erstberatung (60 Min.)</span>
                    <span className="font-medium">120,00 €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="body-text">Folgebehandlung (45 Min.)</span>
                    <span className="font-medium">90,00 €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="body-text">Osteopathie (60 Min.)</span>
                    <span className="font-medium">120,00 €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="body-text">Health Check</span>
                    <span className="font-medium">180,00 €</span>
                  </div>
                </div>
                
                <p className="body-text text-sm mt-4">
                  *Alle Preise verstehen sich als Selbstzahlerleistungen. Eine Kostenerstattung durch die Krankenversicherung ist je nach Tarif möglich.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sektion 7: Call to Action */}
      <section className="bg-coral section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-secondary text-3xl lg:text-4xl text-white mb-8">
            Haben Sie Interesse?
          </h2>
          
          <p className="text-white text-lg mb-12 leading-relaxed">
            Gerne bespreche ich mit Ihnen in einem unverbindlichen Gespräch, wie ich Sie auf Ihrem Weg zu mehr Gesundheit und Lebensqualität unterstützen kann. Rufen Sie mich an, schreiben Sie mir eine E-Mail oder buchen Sie direkt einen Termin online.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+4940607763460"
              className="bg-white text-burgundy px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Anrufen
            </a>
            <a 
              href="mailto:alexandra@praxis-buchmann.info"
              className="bg-white text-burgundy px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              E-Mail
            </a>
            <a 
              href="#"
              className="bg-burgundy text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
            >
              Termin buchen
            </a>
          </div>
        </div>
      </section>

      {/* Sektion 8: Footer/Kontakt */}
      <footer id="kontakt" className="bg-light-gray section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Praxis-Galerie */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/placeholder-practice1.jpg"
                alt="Praxisraum"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/placeholder-practice2.jpg"
                alt="Behandlungsraum"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/placeholder-practice3.jpg"
                alt="Wartebereich"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
          
          {/* Kontaktinformationen */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-medium text-burgundy mb-4">Adresse</h3>
              <p className="body-text">
                Praxis Alexandra Buchmann<br />
                Musterstraße 123<br />
                21465 Wentorf bei Hamburg
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-burgundy mb-4">Kontakt</h3>
              <p className="body-text">
                Telefon: 040 / 607 763 460<br />
                E-Mail: alexandra@praxis-buchmann.info
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-burgundy mb-4">Öffnungszeiten</h3>
              <p className="body-text">
                Mo - Fr: 9:00 - 18:00 Uhr<br />
                Termine nach Vereinbarung
              </p>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div className="border-t border-gray-300 mt-12 pt-8 text-center">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="body-text text-sm">
                © 2024 Alexandra Buchmann - Alle Rechte vorbehalten
              </p>
              <div className="flex space-x-6 mt-4 sm:mt-0">
                <a href="#" className="text-sm text-text-gray hover:text-burgundy">Impressum</a>
                <a href="#" className="text-sm text-text-gray hover:text-burgundy">Datenschutz</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
