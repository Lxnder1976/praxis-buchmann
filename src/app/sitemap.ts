import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.praxis-buchmann.info'; // Korrekte .info Domain mit www

  // Statische Seiten (ohne thin content pages wie termin-bestaetigt)
  const staticPages = [
    '/',  // Mit Slash für SEO-Sauberkeit
    '/datenschutz', 
    '/impressum',
    '/agb',
  ];

  const staticSitemapEntries: MetadataRoute.Sitemap = staticPages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date().toISOString().split('T')[0], // Nur Datum, kein Timestamp
    // priority und changeFrequency entfernt - Google ignoriert sie oft
  }));

  return staticSitemapEntries;
}
