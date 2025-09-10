interface ServiceHeroProps {
  title: string;
  subtitle: string;
  heroImage: string;
}

export default function ServiceHero({ title, subtitle }: ServiceHeroProps) {
  return (
    <section className="bg-cream pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-0">
          <h1 className="heading-primary text-4xl lg:text-5xl text-burgundy mb-6">
            {title}
          </h1>
          <p 
            className="text-burgundy text-lg leading-relaxed max-w-4xl mx-auto"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        </div>
      </div>
    </section>
  );
}
