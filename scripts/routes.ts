import { readdirSync, readFileSync } from "node:fs";
import { basename, join, resolve } from "node:path";
import matter from "gray-matter";

// Static page routes (without language prefix)
export const staticRoutes = [
  "/",
  "/services",
  "/custom-ai",
  "/agentic-workflows",
  "/ai-readiness-test",
  "/about",
  "/contact",
  "/privacy",
  "/blog",
];

const BLOG_DIR = resolve(process.cwd(), "src/content/blog");

export function getBlogSlugs(): string[] {
  const files = readdirSync(BLOG_DIR).filter((file) => file.endsWith(".md"));

  const slugs = files.map((file) => {
    const content = readFileSync(join(BLOG_DIR, file), "utf-8");
    const { data } = matter(content);
    const slug =
      typeof data.slug === "string" && data.slug.trim().length > 0
        ? data.slug.trim()
        : basename(file, ".md");
    return slug;
  });

  return slugs.sort();
}
