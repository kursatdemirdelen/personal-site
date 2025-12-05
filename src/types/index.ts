export interface Project {
  title: string;
  description: string;
  longDescription?: string;  // Detay sayfası için
  tags: string[];
  url?: string;
  slug: string;
  features?: string[];       // Özellikler listesi
}

export interface BlogPost {
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

export interface Hobby {
  icon: string;
  title: string;
  description: string;
}
