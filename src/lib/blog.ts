import type { BlogPost, BlogPostMeta } from "@/types/blog";

// Import all markdown files from content/blog directory
const blogModules = import.meta.glob("/src/content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function parseFrontmatter(content: string): { meta: Record<string, any>; body: string } {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { meta: {}, body: content };
  }

  const frontmatterLines = match[1].split("\n");
  const meta: Record<string, any> = {};

  let currentKey = "";
  let isArray = false;
  let arrayItems: string[] = [];

  for (const line of frontmatterLines) {
    // Check for array items
    if (line.startsWith("  - ")) {
      if (isArray && currentKey) {
        arrayItems.push(line.replace("  - ", "").replace(/^["']|["']$/g, ""));
      }
      continue;
    }

    // If we were building an array, save it
    if (isArray && currentKey) {
      meta[currentKey] = arrayItems;
      isArray = false;
      arrayItems = [];
    }

    const keyValueMatch = line.match(/^(\w+):\s*(.*)$/);
    if (keyValueMatch) {
      currentKey = keyValueMatch[1];
      const value = keyValueMatch[2].trim();
      
      if (value === "" || value === "[]") {
        // Empty array or upcoming array
        isArray = true;
        arrayItems = [];
      } else if (value.startsWith("[") && value.endsWith("]")) {
        // Inline array
        const items = value.slice(1, -1).split(",").map(item => 
          item.trim().replace(/^["']|["']$/g, "")
        );
        meta[currentKey] = items;
      } else {
        // Regular value
        meta[currentKey] = value.replace(/^["']|["']$/g, "");
      }
    }
  }

  // Handle any remaining array
  if (isArray && currentKey) {
    meta[currentKey] = arrayItems;
  }

  return { meta, body: match[2].trim() };
}

export function getAllPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const [path, content] of Object.entries(blogModules)) {
    const slug = path.replace("/src/content/blog/", "").replace(".md", "");
    const { meta, body } = parseFrontmatter(content as string);

    posts.push({
      slug: meta.slug || slug,
      title: meta.title || "Untitled",
      description: meta.description || "",
      keywords: Array.isArray(meta.keywords) ? meta.keywords : [],
      author: meta.author || "VDS",
      date: meta.date || new Date().toISOString().split("T")[0],
      category: meta.category || "General",
      image: meta.image,
      content: body,
    });
  }

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find(post => post.slug === slug);
}

export function getPostMeta(post: BlogPost): BlogPostMeta {
  const { content, ...meta } = post;
  return meta;
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map(post => post.category));
  return Array.from(categories).sort();
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter(post => post.category === category);
}

export function formatDate(dateString: string, language: "en" | "sv" = "en"): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(language === "sv" ? "sv-SE" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
