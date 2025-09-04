import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  author: string;
  readTime: string;
  content: string;
  thumbnailPath: string;
  heroPath: string;
}

export interface BlogPostMetadata {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  author: string;
  readTime: string;
  thumbnailPath: string;
}

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.filter(name => {
    const fullPath = path.join(postsDirectory, name);
    return fs.statSync(fullPath).isDirectory();
  });
}

export function getAllBlogPosts(): BlogPostMetadata[] {
  const slugs = getAllBlogSlugs();
  const allPostsData = slugs.map((slug) => {
    return getBlogPostMetadata(slug);
  }).filter(post => post !== null) as BlogPostMetadata[];

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getBlogPostMetadata(slug: string): BlogPostMetadata | null {
  try {
    const fullPath = path.join(postsDirectory, slug, 'post.md');
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // Check if thumbnail exists
    const thumbnailPath = `/content/blog/${slug}/thumbnail.jpg`;
    const thumbnailFullPath = path.join(process.cwd(), 'public', thumbnailPath);
    const hasThumbnail = fs.existsSync(thumbnailFullPath);

    return {
      slug,
      title: matterResult.data.title || 'Untitled',
      date: matterResult.data.date || new Date().toISOString().split('T')[0],
      category: matterResult.data.category || 'Allgemein',
      excerpt: matterResult.data.excerpt || '',
      author: matterResult.data.author || 'Alexandra Buchmann',
      readTime: matterResult.data.readTime || '5 Min. Lesezeit',
      thumbnailPath: hasThumbnail ? thumbnailPath : '/placeholder-blog.jpg',
    };
  } catch (error) {
    console.error(`Error reading blog post metadata for ${slug}:`, error);
    return null;
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, slug, 'post.md');
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(remarkGfm)
      .use(remarkBreaks)
      .use(html, { sanitize: false })
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Check if images exist
    const thumbnailPath = `/content/blog/${slug}/thumbnail.jpg`;
    const heroPath = `/content/blog/${slug}/hero.jpg`;
    const thumbnailFullPath = path.join(process.cwd(), 'public', thumbnailPath);
    const heroFullPath = path.join(process.cwd(), 'public', heroPath);
    
    const hasThumbnail = fs.existsSync(thumbnailFullPath);
    const hasHero = fs.existsSync(heroFullPath);

    return {
      slug,
      title: matterResult.data.title || 'Untitled',
      date: matterResult.data.date || new Date().toISOString().split('T')[0],
      category: matterResult.data.category || 'Allgemein',
      excerpt: matterResult.data.excerpt || '',
      author: matterResult.data.author || 'Alexandra Buchmann',
      readTime: matterResult.data.readTime || '5 Min. Lesezeit',
      content: contentHtml,
      thumbnailPath: hasThumbnail ? thumbnailPath : '/placeholder-blog.jpg',
      heroPath: hasHero ? heroPath : '/placeholder-hero.jpg',
    };
  } catch (error) {
    console.error(`Error reading blog post for ${slug}:`, error);
    return null;
  }
}

export function getBlogCategories(): string[] {
  const posts = getAllBlogPosts();
  const categories = posts.map(post => post.category);
  return [...new Set(categories)].sort();
}
