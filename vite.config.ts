import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "@prerenderer/rollup-plugin";
import { getBlogSlugs, staticRoutes } from "./scripts/routes";

// Generate all routes for pre-rendering (EN + SV)
function getAllRoutes(): string[] {
  const routes: string[] = [];
  const blogSlugs = getBlogSlugs();
  
  // English routes
  for (const route of staticRoutes) {
    routes.push(route);
  }
  for (const slug of blogSlugs) {
    routes.push(`/blog/${slug}`);
  }
  
  // Swedish routes
  for (const route of staticRoutes) {
    routes.push(route === '/' ? '/sv' : `/sv${route}`);
  }
  for (const slug of blogSlugs) {
    routes.push(`/sv/blog/${slug}`);
  }
  
  return routes;
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Pre-render all routes for SEO (only in production build)
    mode === "production" && prerender({
      routes: getAllRoutes(),
      renderer: "@prerenderer/renderer-puppeteer",
      rendererOptions: {
        // Wait for React to fully render
        renderAfterTime: 2000,
      },
      postProcess(renderedRoute) {
        // Replace localhost URLs with production URL
        renderedRoute.html = renderedRoute.html
          .replace(/http:/gi, 'https:')
          .replace(/(https:\/\/)?(localhost|127\.0\.0\.1):\d*/gi, 'https://vdsai.se');
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
