import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FunktionelleMedizin from '@/components/FunktionelleMedizin';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FunktionelleMedizin />
      <Services />
      <About />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
