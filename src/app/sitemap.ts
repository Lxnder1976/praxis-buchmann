import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://praxis-buchmann.info'; // Korrekte .info Domain

  // Statische Seiten (ohne thin content pages wie termin-bestaetigt)
  const staticPages = [
    '/',  // Mit Slash für SEO-Sauberkeit
    '/datenschutz', 
    '/impressum',
  ];

  const staticSitemapEntries: MetadataRoute.Sitemap = staticPages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date().toISOString().split('.')[0] + 'Z', // Ohne Millisekunden
    changeFrequency: page === '/' ? 'weekly' as const : 'monthly' as const,
    priority: page === '/' ? 1.0 : 0.8, // Als Dezimal
  }));

  return staticSitemapEntries;
}
