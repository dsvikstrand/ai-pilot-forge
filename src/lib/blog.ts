import type { BlogPost, BlogPostMeta, BilingualText } from "@/types/blog";

// Import all markdown files from content/blog directory
const blogModules = import.meta.glob("/src/content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

interface ParsedFrontmatter {
  meta: Record<string, any>;
  bodyEn: string;
  bodySv: string;
}

function parseFrontmatter(content: string): ParsedFrontmatter {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { meta: {}, bodyEn: content, bodySv: content };
  }

  const frontmatterLines = match[1].split("\n");
  const meta: Record<string, any> = {};
  const fullBody = match[2].trim();

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

  // Parse bilingual content sections
  const enMarker = "<!-- lang:en -->";
  const svMarker = "<!-- lang:sv -->";
  
  let bodyEn = fullBody;
  let bodySv = fullBody;

  if (fullBody.includes(enMarker) && fullBody.includes(svMarker)) {
    // Find the positions of language markers
    const enIndex = fullBody.indexOf(enMarker);
    const svIndex = fullBody.indexOf(svMarker);

    if (enIndex < svIndex) {
      // English comes first
      bodyEn = fullBody.substring(enIndex + enMarker.length, svIndex).trim();
      bodySv = fullBody.substring(svIndex + svMarker.length).trim();
    } else {
      // Swedish comes first
      bodySv = fullBody.substring(svIndex + svMarker.length, enIndex).trim();
      bodyEn = fullBody.substring(enIndex + enMarker.length).trim();
    }
  }

  return { meta, bodyEn, bodySv };
}

function getBilingualText(meta: Record<string, any>, key: string, fallback: string = ""): BilingualText {
  const enKey = `${key}_en`;
  const svKey = `${key}_sv`;
  
  // Check for bilingual format first
  if (meta[enKey] || meta[svKey]) {
    return {
      en: meta[enKey] || meta[key] || fallback,
      sv: meta[svKey] || meta[key] || fallback,
    };
  }
  
  // Fall back to single language (use for both)
  const value = meta[key] || fallback;
  return { en: value, sv: value };
}

export function getAllPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const [path, content] of Object.entries(blogModules)) {
    const slug = path.replace("/src/content/blog/", "").replace(".md", "");
    const { meta, bodyEn, bodySv } = parseFrontmatter(content as string);

    posts.push({
      slug: meta.slug || slug,
      title: getBilingualText(meta, "title", "Untitled"),
      description: getBilingualText(meta, "description", ""),
      keywords: Array.isArray(meta.keywords) ? meta.keywords : [],
      author: meta.author || "VDS",
      date: meta.date || new Date().toISOString().split("T")[0],
      category: meta.category || "General",
      image: meta.image,
      content: { en: bodyEn, sv: bodySv },
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
