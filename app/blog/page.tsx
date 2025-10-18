'use client'

import { useEffect, useState } from 'react'
import BlogHero from '@/components/blog/BlogHero'
import FeaturedBlogs from '@/components/blog/FeaturedBlogs'
import BlogClient from '@/components/blog/BlogClient'
import { blogService } from '@/lib/blog'
import { BlogPost } from '@/components/blog/types'

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const [allPosts, featured] = await Promise.all([
          blogService.getPublishedPosts(),
          blogService.getFeaturedPosts()
        ])
        setPosts(allPosts)
        setFeaturedPosts(featured)
      } catch (error) {
        console.error('Error loading blog posts:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blog posts...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <BlogHero />
      <FeaturedBlogs featuredBlogs={featuredPosts} />
      <BlogClient blogs={posts} />
    </div>
  )
}