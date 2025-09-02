export default function Testimonials() {
  return (
    <section 
      className="relative min-h-[600px] bg-left bg-no-repeat bg-contain flex items-center justify-center"
      style={{
        backgroundColor: '#f4f4f4',
        backgroundImage: "url('/huefte_hand.jpg')"
      }}
    >
      
      {/* Zentriertes Zitat */}
      <div className="flex items-center justify-center w-full h-full px-8 lg:px-16 py-16">
        <blockquote className="text-burgundy text-center max-w-4xl">
          <p className="heading-secondary text-2xl lg:text-4xl mb-8 leading-relaxed">
            „Gesundheit entsteht im Einklang – wenn wir den Körper verstehen, können wir ihn stärken."
          </p>
        </blockquote>
      </div>
      
    </section>
  );
}
