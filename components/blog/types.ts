export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  published_date: string;
  read_time: string;
  category: string;
  tags: string[];
  cover_image: string;
  featured: boolean;
}