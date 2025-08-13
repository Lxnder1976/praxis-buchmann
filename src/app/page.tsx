import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4" style={{backgroundColor: '#c46b67'}}>
      <div className="text-center">
        <h1 className="text-white text-2xl md:text-4xl font-light mb-8 max-w-4xl leading-relaxed">
          Praxis für Osteopathie und funktionelle Medizin in Wentorf
        </h1>
        <div className="relative">
          <Image
            src="/logo-praxis-buchmann.png"
            alt="Praxis Dr. Buchmann Logo"
            width={400}
            height={300}
            className="mx-auto max-w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}
