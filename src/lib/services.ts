import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const servicesDirectory = path.join(process.cwd(), 'content/services');

export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  benefits: string[];
  treatmentSteps: {
    title: string;
    description: string;
    color: 'burgundy' | 'coral';
  }[];
  seo: {
    title: string;
    description: string;
  };
}

export function getServiceSlugs() {
  if (!fs.existsSync(servicesDirectory)) {
    return [];
  }
  
  return fs.readdirSync(servicesDirectory)
    .filter(name => name.endsWith('.md'))
    .map(name => name.replace(/\.md$/, ''));
}

export function getServiceBySlug(slug: string): ServiceData | null {
  try {
    const fullPath = path.join(servicesDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    
    return {
      slug,
      title: matterResult.data.title || 'Untitled Service',
      subtitle: matterResult.data.subtitle || '',
      heroImage: matterResult.data.heroImage || '',
      benefits: matterResult.data.benefits || [],
      treatmentSteps: matterResult.data.treatmentSteps || [],
      seo: matterResult.data.seo || {
        title: matterResult.data.title || 'Service',
        description: matterResult.data.subtitle || ''
      }
    };
  } catch (error) {
    console.error(`Error reading service ${slug}:`, error);
    return null;
  }
}

export function getAllServices(): ServiceData[] {
  const slugs = getServiceSlugs();
  const services = slugs
    .map(slug => getServiceBySlug(slug))
    .filter((service): service is ServiceData => service !== null);
  
  return services;
}
