export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  status?: 'draft' | 'published' | 'archived';
  published_date?: string;
  published_at?: string;
  read_time?: string;
  category?: string;
  tags: string[];
  cover_image?: string;
  featured: boolean;
  views?: number;
  created_at?: string;
  updated_at?: string;
}