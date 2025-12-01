import { getPaginatedBlogPosts } from '@/lib/blog';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Pagination from '@/components/Pagination';

export const metadata: Metadata = {
  title: 'Blog - Alexandra Buchmann | Gesundheit & Wohlbefinden',
  description: 'Entdecken Sie wertvolle Tipps und Einblicke zu funktioneller Medizin, Osteopathie und ganzheitlicher Gesundheit von Alexandra Buchmann.',
  metadataBase: new URL('https://www.praxis-buchmann.info'),
  openGraph: {
    title: 'Blog - Alexandra Buchmann | Gesundheit & Wohlbefinden',
    description: 'Entdecken Sie wertvolle Tipps und Einblicke zu funktioneller Medizin, Osteopathie und ganzheitlicher Gesundheit von Alexandra Buchmann.',
    url: 'https://www.praxis-buchmann.info/blog',
    siteName: 'Praxis Alexandra Buchmann',
    images: [
      {
        url: '/logo.webp',
        width: 800,
        height: 600,
        alt: 'Praxis Alexandra Buchmann Blog',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Alexandra Buchmann | Gesundheit & Wohlbefinden',
    description: 'Entdecken Sie wertvolle Tipps und Einblicke zu funktioneller Medizin, Osteopathie und ganzheitlicher Gesundheit.',
    images: ['/logo.webp'],
  },
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default function BlogPage() {
  const { posts, totalPages, currentPage } = getPaginatedBlogPosts(1);

  return (
    <div className="min-h-screen bg-white">
      {/* Hauptnavigation verwenden */}
      <Header />
      <section className="bg-new-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-primary text-2xl sm:text-3xl lg:text-4xl text-burgundy mb-4 md:mb-6">
            Blog
          </h1>
          <p className="body-text text-base sm:text-lg lg:text-xl text-burgundy/80 max-w-3xl mx-auto">
            Entdecken Sie wertvolle Einblicke zu funktioneller Medizin, Osteopathie und ganzheitlicher Gesundheit. 
            Hier teile ich mein Wissen und meine Erfahrungen für Ihr Wohlbefinden.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="body-text text-burgundy/70 text-lg">
                Neue Blog-Artikel sind in Vorbereitung. Schauen Sie bald wieder vorbei!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.slug} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                  <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                    {/* Thumbnail */}
                    <div className="relative h-48 sm:h-44 md:h-48 bg-burgundy/5 flex-shrink-0">
                      <Image
                        src={post.thumbnailPath}
                        alt={post.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-4 sm:p-6 flex flex-col flex-grow">
                      {/* Category & Date */}
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <span className="inline-block bg-coral/10 text-coral text-xs font-medium px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-burgundy/60">
                          {formatDate(post.date)}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h2 className="heading-secondary text-base sm:text-lg md:text-xl text-burgundy mb-3 sm:mb-4 line-clamp-4 sm:line-clamp-3 hover:text-coral transition-colors">
                        {post.title}
                      </h2>
                      
                      {/* Excerpt */}
                      <p className="body-text text-sm sm:text-base text-burgundy/80 mb-3 sm:mb-4 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                      
                      {/* Meta */}
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-xs text-burgundy/60">
                          {post.readTime}
                        </span>
                        <span className="text-coral text-sm font-medium hover:text-burgundy transition-colors">
                          Weiterlesen →
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
          
          {/* Pagination */}
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      </section>
    </div>
  );
}
