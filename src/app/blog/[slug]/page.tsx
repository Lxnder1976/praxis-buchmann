import { getBlogPost, getAllBlogSlugs } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

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

  return {
    title: `${post.title} - Alexandra Buchmann Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
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
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-burgundy/5">
        <Image
          src={post.heroPath}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-burgundy/40"></div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8">
              {/* Category & Meta */}
              <div className="flex items-center gap-4 mb-4">
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
              <h1 className="heading-primary text-3xl lg:text-4xl text-burgundy mb-4">
                {post.title}
              </h1>
              
              {/* Author */}
              <p className="text-burgundy/80">
                von <strong>{post.author}</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Content */}
          <div 
            className="prose prose-lg max-w-none
              prose-headings:text-burgundy prose-headings:font-medium
              prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-8 prose-h1:font-semibold
              prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-6 prose-h2:font-semibold
              prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-5 prose-h3:font-medium
              prose-h4:text-lg prose-h4:mb-2 prose-h4:mt-4 prose-h4:font-medium
              prose-p:text-burgundy/90 prose-p:leading-relaxed prose-p:mb-4
              prose-strong:text-burgundy prose-strong:font-semibold
              prose-ul:text-burgundy/90 prose-ol:text-burgundy/90
              prose-li:mb-2 prose-li:text-burgundy/90
              prose-a:text-coral prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-coral prose-blockquote:bg-coral/5 prose-blockquote:pl-6 prose-blockquote:py-4
              prose-blockquote:text-burgundy/80"
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
                href="/kontakt" 
                className="btn-outline-burgundy inline-block"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 text-center">
            <Link 
              href="/blog" 
              className="btn-burgundy inline-block"
            >
              ← Zurück zum Blog
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
