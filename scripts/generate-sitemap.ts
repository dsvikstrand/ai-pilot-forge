/**
 * Sitemap Generator Script
 * Run with: npx ts-node scripts/generate-sitemap.ts
 * Or integrate into build process
 */

const BASE_URL = 'https://vds.se';

// Static page routes (without language prefix)
const staticRoutes = [
  '/',
  '/services',
  '/custom-ai',
  '/agentic-workflows',
  '/ai-readiness-test',
  '/about',
  '/contact',
  '/privacy',
  '/blog',
];

// Blog post slugs - keep in sync with vite.config.ts
const blogSlugs = [
  'rag-customer-support',
];

interface SitemapUrl {
  loc: string;
  alternates: { lang: string; href: string }[];
  lastmod?: string;
  changefreq?: string;
  priority?: string;
}

function generateSitemapUrls(): SitemapUrl[] {
  const urls: SitemapUrl[] = [];
  const today = new Date().toISOString().split('T')[0];

  // Generate URLs for static pages
  for (const route of staticRoutes) {
    const enUrl = route === '/' ? BASE_URL : `${BASE_URL}${route}`;
    const svUrl = route === '/' ? `${BASE_URL}/sv` : `${BASE_URL}/sv${route}`;
    
    // English version
    urls.push({
      loc: enUrl,
      alternates: [
        { lang: 'en', href: enUrl },
        { lang: 'sv', href: svUrl },
        { lang: 'x-default', href: enUrl },
      ],
      lastmod: today,
      changefreq: route === '/' ? 'weekly' : 'monthly',
      priority: route === '/' ? '1.0' : '0.8',
    });
    
    // Swedish version
    urls.push({
      loc: svUrl,
      alternates: [
        { lang: 'en', href: enUrl },
        { lang: 'sv', href: svUrl },
        { lang: 'x-default', href: enUrl },
      ],
      lastmod: today,
      changefreq: route === '/' ? 'weekly' : 'monthly',
      priority: route === '/' ? '1.0' : '0.8',
    });
  }

  // Generate URLs for blog posts
  for (const slug of blogSlugs) {
    const enUrl = `${BASE_URL}/blog/${slug}`;
    const svUrl = `${BASE_URL}/sv/blog/${slug}`;
    
    // English version
    urls.push({
      loc: enUrl,
      alternates: [
        { lang: 'en', href: enUrl },
        { lang: 'sv', href: svUrl },
        { lang: 'x-default', href: enUrl },
      ],
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.7',
    });
    
    // Swedish version
    urls.push({
      loc: svUrl,
      alternates: [
        { lang: 'en', href: enUrl },
        { lang: 'sv', href: svUrl },
        { lang: 'x-default', href: enUrl },
      ],
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.7',
    });
  }

  return urls;
}

function generateSitemapXml(urls: SitemapUrl[]): string {
  const urlElements = urls.map(url => {
    const alternateLinks = url.alternates
      .map(alt => `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.href}"/>`)
      .join('\n');
    
    return `  <url>
    <loc>${url.loc}</loc>
${alternateLinks}
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlElements}
</urlset>`;
}

// Generate and output sitemap
const urls = generateSitemapUrls();
const sitemap = generateSitemapXml(urls);
console.log(sitemap);

export { generateSitemapUrls, generateSitemapXml };
