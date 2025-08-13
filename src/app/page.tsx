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
        <h2 className="text-white text-xl md:text-3xl font-light max-w-4xl leading-relaxed">
          Praxis für Osteopathie und funktionelle Medizin in Wentorf
        </h2>
      </div>
    </div>
  );
}
