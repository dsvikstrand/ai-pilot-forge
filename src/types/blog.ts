export interface BilingualText {
  en: string;
  sv: string;
}

export interface BlogPost {
  slug: string;
  title: BilingualText;
  description: BilingualText;
  keywords: string[];
  author: string;
  date: string;
  category: string;
  image?: string;
  content: BilingualText;
}

export interface BlogPostMeta {
  slug: string;
  title: BilingualText;
  description: BilingualText;
  keywords: string[];
  author: string;
  date: string;
  category: string;
  image?: string;
}
