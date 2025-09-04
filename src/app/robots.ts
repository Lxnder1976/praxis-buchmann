export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://praxis-buchmann.de/sitemap.xml', // Ändern Sie dies zu Ihrer echten Domain
    host: 'https://praxis-buchmann.de', // Ändern Sie dies zu Ihrer echten Domain
  };
}
