export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = 'https://praxis-buchmann.de'; // Ändern Sie dies zu Ihrer echten Domain

  // Statische Seiten
  const staticPages = [
    '',
    '/datenschutz',
    '/impressum',
    '/termin-bestaetigt',
  ];

  const staticSitemapEntries = staticPages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'weekly' : 'monthly',
    priority: page === '' ? 1 : 0.8,
  }));

  return staticSitemapEntries;
}
