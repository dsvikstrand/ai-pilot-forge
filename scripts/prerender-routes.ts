/**
 * Generate all routes for pre-rendering
 * This includes all static pages and blog posts in both EN and SV
 */

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

// Blog post slugs - add new blog posts here
const blogSlugs = [
  'rag-customer-support',
  'building-ai-agents-practical-guide-smes',
];

/**
 * Generate all routes for pre-rendering
 * Returns both English (default) and Swedish (/sv/*) versions
 */
export function getAllRoutes(): string[] {
  const routes: string[] = [];
  
  // Add English routes
  for (const route of staticRoutes) {
    routes.push(route);
  }
  
  // Add English blog post routes
  for (const slug of blogSlugs) {
    routes.push(`/blog/${slug}`);
  }
  
  // Add Swedish routes
  for (const route of staticRoutes) {
    if (route === '/') {
      routes.push('/sv');
    } else {
      routes.push(`/sv${route}`);
    }
  }
  
  // Add Swedish blog post routes
  for (const slug of blogSlugs) {
    routes.push(`/sv/blog/${slug}`);
  }
  
  return routes;
}

// Export for use in vite.config.ts
export const prerenderRoutes = getAllRoutes();

// Also export individual parts for sitemap generation
export { staticRoutes, blogSlugs };
