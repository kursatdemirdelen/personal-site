export interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  slug: string;
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
