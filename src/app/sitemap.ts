import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.praxis-buchmann.info'; // Korrekte .info Domain mit www

  // Statische Seiten (ohne thin content pages wie termin-bestaetigt)
  const staticPages = [
    '/',  // Mit Slash für SEO-Sauberkeit
    '/datenschutz', 
    '/impressum',
    '/agb',
    '/blog', // Blog-Übersichtsseite
    '/leistungen', // Service-Übersichtsseite
  ];

  // Dynamisch alle Blog-Posts aus dem content/blog Verzeichnis laden
  const blogPages: string[] = [];
  try {
    const contentDir = path.join(process.cwd(), 'content', 'blog');
    if (fs.existsSync(contentDir)) {
      const blogDirs = fs.readdirSync(contentDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => `/blog/${dirent.name}`);
      blogPages.push(...blogDirs);
    }
  } catch (error) {
    console.warn('Could not read blog directory:', error);
  }

  // Dynamisch alle Service-Seiten aus dem content/services Verzeichnis laden
  const servicePages: string[] = [];
  try {
    const servicesDir = path.join(process.cwd(), 'content', 'services');
    if (fs.existsSync(servicesDir)) {
      const serviceFiles = fs.readdirSync(servicesDir, { withFileTypes: true })
        .filter(dirent => dirent.isFile() && dirent.name.endsWith('.md'))
        .map(dirent => `/leistungen/${dirent.name.replace('.md', '')}`);
      servicePages.push(...serviceFiles);
    }
  } catch (error) {
    console.warn('Could not read services directory:', error);
  }

  const allPages = [...staticPages, ...blogPages, ...servicePages];

  const staticSitemapEntries: MetadataRoute.Sitemap = allPages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date().toISOString().split('T')[0], // Nur Datum, kein Timestamp
    // priority und changeFrequency entfernt - Google ignoriert sie oft
  }));

  return staticSitemapEntries;
}
