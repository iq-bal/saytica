import { supabase } from '@/lib/supabase'
import { BlogPost } from '@/components/blog/types'

export interface BlogPostInput {
  title: string
  slug: string
  excerpt?: string
  content: string
  author: string
  status: 'draft' | 'published' | 'archived'
  tags?: string[]
  cover_image?: string
  featured?: boolean
}

export interface BlogPostUpdate extends Partial<BlogPostInput> {
  id: string
}

class BlogService {
  private supabaseClient = supabase

  // Get all blog posts (for admin)
  async getAllPosts(): Promise<BlogPost[]> {
    const { data, error } = await this.supabaseClient
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching all posts:', error)
      return []
    }

    return this.transformPosts(data || [])
  }

  // Get published blog posts (for public)
  async getPublishedPosts(): Promise<BlogPost[]> {
    const { data, error } = await this.supabaseClient
      .from('blog_posts')
      .select('*')
      .eq('status', 'published')
      .order('published_at', { ascending: false })

    if (error) {
      console.error('Error fetching published posts:', error)
      return []
    }

    return this.transformPosts(data || [])
  }

  // Get featured blog posts
  async getFeaturedPosts(): Promise<BlogPost[]> {
    const { data, error } = await this.supabaseClient
      .from('blog_posts')
      .select('*')
      .eq('status', 'published')
      .eq('featured', true)
      .order('published_at', { ascending: false })
      .limit(3)

    if (error) {
      console.error('Error fetching featured posts:', error)
      return []
    }

    return this.transformPosts(data || [])
  }

  // Get single blog post by slug
  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    const { data, error } = await this.supabaseClient
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        return null // Post not found
      }
      console.error('Error fetching post by slug:', error)
      return null
    }

    // Increment view count
    await this.incrementViews(data.id)
    
    return this.transformPost(data)
  }

  // Get post by ID (for admin editing)
  async getPostById(id: string): Promise<BlogPost | null> {
    const { data, error } = await this.supabaseClient
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        return null // Post not found
      }
      console.error('Error fetching post by id:', error)
      return null
    }

    return this.transformPost(data)
  }

  // Create new blog post
  async createPost(postData: BlogPostInput): Promise<BlogPost> {
    const { data, error } = await this.supabaseClient
      .from('blog_posts')
      .insert({
        ...postData,
        published_at: postData.status === 'published' ? new Date().toISOString() : null
      })
      .select()
      .single()

    if (error) {
      console.error('Error creating blog post:', error)
      throw new Error('Failed to create blog post')
    }

    return this.transformPost(data)
  }

  // Update blog post
  async updatePost(postData: BlogPostUpdate): Promise<BlogPost> {
    const { id, ...updateData } = postData
    
    // Set published_at if status is being changed to published
    const updates: any = { ...updateData }
    if (updateData.status === 'published') {
      updates.published_at = new Date().toISOString()
    }

    const { data, error } = await this.supabaseClient
      .from('blog_posts')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating blog post:', error)
      throw new Error('Failed to update blog post')
    }

    return this.transformPost(data)
  }

  // Delete blog post
  async deletePost(id: string): Promise<void> {
    const { error } = await this.supabaseClient
      .from('blog_posts')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting blog post:', error)
      throw new Error('Failed to delete blog post')
    }
  }

  // Increment view count
  private async incrementViews(id: string): Promise<void> {
    const { error } = await this.supabaseClient
      .from('blog_posts')
      .update({ views: 'views + 1' })
      .eq('id', id)

    if (error) {
      console.error('Error incrementing views:', error)
    }
  }

  // Transform database posts to BlogPost interface
  private transformPosts(posts: any[]): BlogPost[] {
    return posts.map(post => this.transformPost(post))
  }

  private transformPost(post: any): BlogPost {
    return {
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt || '',
      content: post.content || '',
      author: post.author,
      published_date: post.published_at || post.created_at,
      read_time: this.calculateReadTime(post.content || ''),
      category: post.tags?.[0] || 'General', // Use first tag as category or default
      tags: post.tags || [],
      cover_image: post.cover_image || '',
      featured: post.featured || false
    }
  }

  // Calculate estimated read time
  private calculateReadTime(content: string): string {
    const wordsPerMinute = 200
    const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length
    const minutes = Math.ceil(words / wordsPerMinute)
    return `${minutes} min read`
  }
}

export const blogService = new BlogService()