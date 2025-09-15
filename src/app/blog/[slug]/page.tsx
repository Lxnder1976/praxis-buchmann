import { getBlogPost, getAllBlogSlugs } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Header from '@/components/Header';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Blog-Artikel nicht gefunden - Alexandra Buchmann',
    };
  }

  const baseUrl = 'https://praxis-buchmann.info';
  const heroImageUrl = `${baseUrl}/content/blog/${slug}/hero.jpg`;

  return {
    title: `${post.title} - Alexandra Buchmann Blog`,
    description: post.excerpt,
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${baseUrl}/blog/${slug}`,
      siteName: 'Praxis Alexandra Buchmann',
      images: [
        {
          url: heroImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'de_DE',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [heroImageUrl],
    },
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hauptnavigation verwenden */}
      <Header />
      {/* Hero Section - Responsive Höhe für Mobile */}
      <section className="relative h-[35vh] sm:h-[45vh] lg:h-[60vh] min-h-[250px] sm:min-h-[350px] lg:min-h-[500px] bg-burgundy/5">
        <Image
          src={post.heroPath}
          alt={post.title}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          style={{ 
            objectPosition: 'center 20%' // Noch weniger Zoom, mehr vom Bild sichtbar
          }}
        />
        {/* Subtiles Gradient für bessere Lesbarkeit */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </section>

      {/* Titel und Metadaten unter dem Hero-Bild */}
      <section className="bg-white pt-6 lg:pt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category & Meta */}
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-block bg-coral text-white text-sm font-medium px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-burgundy/70 text-sm">
              {formatDate(post.date)}
            </span>
            <span className="text-burgundy/70 text-sm">
              {post.readTime}
            </span>
          </div>
          
          {/* Title */}
          <h1 className="blog-title">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Blog Content */}
      <article className="pt-0.5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Content */}
          <div 
            className="prose prose-sm sm:prose md:prose-lg max-w-none
              prose-p:leading-relaxed prose-p:mb-4
              prose-ul:mb-4 prose-ol:mb-4
              prose-li:mb-2
              prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Author Info */}
          <div className="mt-12 pt-8 border-t border-burgundy/20">
            <div className="bg-new-cream rounded-2xl p-6">
              <h3 className="text-xl font-medium text-burgundy mb-3">Über die Autorin</h3>
              <p className="body-text text-burgundy/80 mb-4">
                <strong>Alexandra Buchmann</strong> ist Heilpraktikerin und spezialisiert auf funktionelle Medizin und Osteopathie. 
                In ihrer Praxis in Wentorf begleitet sie Menschen auf ihrem Weg zu mehr Gesundheit und Lebensqualität.
              </p>
              <Link 
                href="/#kontakt" 
                className="btn-outline-burgundy inline-block"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>

          {/* Call-to-Action zur Hauptseite */}
          <div className="mt-12 bg-burgundy/5 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-medium text-burgundy mb-4">
              Interessiert an einer persönlichen Beratung?
            </h3>
            <p className="body-text text-burgundy/80 mb-6 max-w-2xl mx-auto">
              Erfahren Sie mehr über meine Leistungen und wie ich Sie auf Ihrem Weg zu mehr Gesundheit und Lebensqualität unterstützen kann.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#leistungen" 
                className="btn-burgundy"
              >
                Meine Leistungen entdecken
              </Link>
              <Link 
                href="/" 
                className="btn-outline-burgundy"
              >
                Zur Startseite
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 text-center">
            <Link 
              href="/blog" 
              className="text-burgundy hover:text-coral transition-colors inline-flex items-center"
            >
              ← Zurück zum Blog
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
