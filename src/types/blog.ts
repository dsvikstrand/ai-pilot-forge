export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  author: string;
  date: string;
  category: string;
  image?: string;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  author: string;
  date: string;
  category: string;
  image?: string;
}
