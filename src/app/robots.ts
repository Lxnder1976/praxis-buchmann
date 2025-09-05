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
    sitemap: 'https://www.praxis-buchmann.info/sitemap.xml',
    host: 'https://www.praxis-buchmann.info',
  };
}
