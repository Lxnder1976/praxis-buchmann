import Link from 'next/link';
import Image from 'next/image';
import { Krub, Playfair_Display } from "next/font/google";

const krub = Krub({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function NotFound() {
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center px-4 ${krub.className}`} style={{ backgroundColor: '#e4c4c7' }}>
      <div className="text-center max-w-2xl">
        <h1 className={`text-9xl font-bold text-burgundy mt-2 mb-2 ${playfairDisplay.className}`}>404</h1>
        
        <div className="mb-8 flex justify-center">
          <Image
            src="/404.webp"
            alt="404 - Seite nicht gefunden"
            width={400}
            height={267}
            className="rounded-lg"
            priority
          />
        </div>
        
        <p className="text-2xl text-burgundy mb-8">
          Oh, hier sind Sie leider falsch. Die Praxis ist ein Raum weiter.
        </p>
        
        <Link 
          href="/"
          className="btn-burgundy inline-block"
        >
          Zurück zur Praxis
        </Link>
      </div>
    </div>
  );
}
