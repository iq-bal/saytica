'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Eye, 
  Calendar,
  User,
  Tag,
  Image as ImageIcon,
  Upload
} from 'lucide-react'
import { blogService, BlogPostInput } from '@/lib/blog'
import { storageService } from '@/lib/storage'
import { useAuth } from '@/lib/auth-context'
import { BlogPost } from '@/components/blog/types'

// Dynamically import the RichTextEditor to avoid SSR issues
const RichTextEditor = dynamic(() => import('./RichTextEditor'), {
  ssr: false,
  loading: () => <div className="border rounded-lg p-4 min-h-[200px] bg-gray-50 animate-pulse">Loading editor...</div>
})





const BlogForm = ({ 
  post, 
  onSave, 
  onCancel 
}: { 
  post?: BlogPost; 
  onSave: (post: BlogPostInput) => void; 
  onCancel: () => void; 
}) => {
  const { user } = useAuth()
  const [formData, setFormData] = useState({
    title: post?.title || "",
    slug: post?.slug || "",
    excerpt: post?.excerpt || "",
    content: post?.content || "",
    author: post?.author || user?.user_metadata?.full_name || user?.email || "",
    status: post?.status || "published" as const,
    tags: post?.tags?.join(", ") || "",
    cover_image: post?.cover_image || "",
    featured: post?.featured || false
  })
  const [isUploading, setIsUploading] = useState(false)
  const [coverImageFile, setCoverImageFile] = useState<File | null>(null)

  // Update form data when post prop changes
  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title || "",
        slug: post.slug || "",
        excerpt: post.excerpt || "",
        content: post.content || "",
        author: post.author || user?.user_metadata?.full_name || user?.email || "",
        status: post.status || "published" as const,
        tags: post.tags?.join(", ") || "",
        cover_image: post.cover_image || "",
        featured: post.featured || false
      })
    }
  }, [post, user])

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: formData.slug || generateSlug(title)
    });
  };

  const handleCoverImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setCoverImageFile(file)
    
    // Create preview URL
    const previewUrl = URL.createObjectURL(file)
    setFormData({
      ...formData,
      cover_image: previewUrl
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsUploading(true)

    try {
      let coverImageUrl = formData.cover_image

      // Upload cover image if a new file was selected
      if (coverImageFile && formData.slug) {
        const uploadResult = await storageService.uploadCoverImage(coverImageFile, formData.slug)
        coverImageUrl = uploadResult.url
      }

      const postData: BlogPostInput = {
        title: formData.title,
        slug: formData.slug,
        excerpt: formData.excerpt,
        content: formData.content,
        author: formData.author,
        status: formData.status,
        tags: formData.tags.split(",").map(tag => tag.trim()).filter(tag => tag),
        cover_image: coverImageUrl,
        featured: formData.featured
      }

      onSave(postData)
    } catch (error) {
      console.error('Error saving post:', error)
      alert('Failed to save post. Please try again.')
    } finally {
      setIsUploading(false)
    }
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">
        {post ? "Edit Blog Post" : "Create New Blog Post"}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Slug</label>
            <input
              type="text"
              value={formData.slug}
              onChange={(e) => setFormData({...formData, slug: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Author</label>
            <input
              type="text"
              value={formData.author}
              onChange={(e) => setFormData({...formData, author: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({...formData, status: e.target.value as "draft" | "published" | "archived"})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              disabled
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <span className="text-sm font-medium">Featured Post</span>
            </label>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Tags (comma-separated)</label>
          <input
            type="text"
            value={formData.tags}
            onChange={(e) => setFormData({...formData, tags: e.target.value})}
            placeholder="AI, Technology, Tutorial"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Cover Image</label>
          <div className="space-y-2">
            <input
              type="file"
              accept="image/*"
              onChange={handleCoverImageUpload}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
            {formData.cover_image && (
              <div className="mt-2">
                <img
                  src={formData.cover_image}
                  alt="Cover preview"
                  className="w-32 h-20 object-cover rounded border"
                />
              </div>
            )}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Excerpt</label>
          <textarea
            value={formData.excerpt}
            onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Content</label>
          <RichTextEditor
            content={formData.content}
            onChange={(content) => setFormData({...formData, content})}
            onImageUpload={async (file: File) => {
              if (!formData.slug) {
                throw new Error('Please set a title first to generate a slug')
              }
              const result = await storageService.uploadContentImage(file, formData.slug)
              return result.url
            }}
          />
        </div>
        
        <div className="flex space-x-2">
          <Button type="submit" disabled={isUploading}>
            {isUploading ? (
              <>
                <Upload className="h-4 w-4 mr-2 animate-spin" />
                Saving...
              </>
            ) : (
              post ? "Update Post" : "Create Post"
            )}
          </Button>
          <Button type="button" variant="outline" onClick={onCancel} disabled={isUploading}>
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      setLoading(true);
      const blogPosts = await blogService.getAllPosts();
      setPosts(blogPosts);
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePost = () => {
    setEditingPost(null);
    setShowForm(true);
  };

  const handleEditPost = async (post: BlogPost) => {
    try {
      // Fetch the latest post data from the database to ensure we have current status
      const latestPost = await blogService.getPostById(post.id);
      setEditingPost(latestPost || post);
      setShowForm(true);
    } catch (error) {
      console.error('Error fetching latest post data:', error);
      // Fallback to the post from the list
      setEditingPost(post);
      setShowForm(true);
    }
  };

  const handleSavePost = async (postData: BlogPostInput) => {
    try {
      if (editingPost) {
        // Update existing post
        await blogService.updatePost({
          id: editingPost.id,
          ...postData
        });
      } else {
        // Create new post
        await blogService.createPost(postData);
      }
      
      setShowForm(false);
      setEditingPost(null);
      await loadPosts(); // Reload posts
    } catch (error) {
      console.error('Error saving post:', error);
      alert('Failed to save post. Please try again.');
    }
  };

  const handleDeletePost = async (postId: string) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      try {
        await blogService.deletePost(postId);
        await loadPosts(); // Reload posts
      } catch (error) {
        console.error('Error deleting post:', error);
        alert('Failed to delete post. Please try again.');
      }
    }
  };

  const getStatusColor = (status?: "draft" | "published" | "archived") => {
    switch (status) {
      case "published": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "draft": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "archived": return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };

  if (showForm) {
    return (
      <div>
        <BlogForm
          post={editingPost || undefined}
          onSave={handleSavePost}
          onCancel={() => {
            setShowForm(false);
            setEditingPost(null);
          }}
        />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Blog Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Loading blog posts...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Blog Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Create and manage blog posts with rich content
          </p>
        </div>
        <Button onClick={handleCreatePost} className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Create Post</span>
        </Button>
      </div>

      <div className="grid gap-4">
        {posts.map((post) => (
          <Card key={post.id} className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {post.title}
                  </h3>
                  <Badge className={getStatusColor(post.status)}>
                    {post.status}
                  </Badge>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.published_date || post.created_at)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{post.views || 0} views</span>
                  </div>
                </div>
                
                {post.tags.length > 0 && (
                  <div className="flex items-center space-x-2 mt-2">
                    <Tag className="h-4 w-4 text-gray-400" />
                    <div className="flex flex-wrap gap-1">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex space-x-2 ml-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleEditPost(post)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDeletePost(post.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
        
        {posts.length === 0 && (
          <Card className="p-8 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              No blog posts found. Create your first post to get started.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}