'use client'

import { useState } from 'react'
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
  Image as ImageIcon
} from 'lucide-react'

// Dynamically import the RichTextEditor to avoid SSR issues
const RichTextEditor = dynamic(() => import('./RichTextEditor'), {
  ssr: false,
  loading: () => <div className="border rounded-lg p-4 min-h-[200px] bg-gray-50 animate-pulse">Loading editor...</div>
})

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  status: "draft" | "published" | "archived";
  tags: string[];
  featuredImage?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  views: number;
}

// Mock data
const mockPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of AI in Language Processing",
    slug: "future-ai-language-processing",
    excerpt: "Exploring how artificial intelligence is revolutionizing the way we process and understand human language...",
    content: "<p>Artificial intelligence has made remarkable strides in recent years...</p>",
    author: "Sarah Johnson",
    status: "published",
    tags: ["AI", "Technology", "Language"],
    featuredImage: "/blog/ai-language.jpg",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
    publishedAt: "2024-01-15T10:00:00Z",
    views: 1250
  },
  {
    id: "2",
    title: "Building Scalable Data Pipelines",
    slug: "building-scalable-data-pipelines",
    excerpt: "Learn best practices for creating robust and scalable data processing pipelines...",
    content: "<p>Data pipelines are the backbone of modern data-driven applications...</p>",
    author: "Michael Chen",
    status: "published",
    tags: ["Data", "Engineering", "Scalability"],
    createdAt: "2024-01-12T14:30:00Z",
    updatedAt: "2024-01-12T14:30:00Z",
    publishedAt: "2024-01-12T14:30:00Z",
    views: 890
  },
  {
    id: "3",
    title: "Introduction to Machine Learning",
    slug: "introduction-machine-learning",
    excerpt: "A beginner-friendly guide to understanding machine learning concepts and applications...",
    content: "<p>Machine learning is a subset of artificial intelligence...</p>",
    author: "Emily Rodriguez",
    status: "draft",
    tags: ["ML", "Beginner", "Tutorial"],
    createdAt: "2024-01-10T09:15:00Z",
    updatedAt: "2024-01-14T16:45:00Z",
    views: 0
  }
];



const BlogForm = ({ 
  post, 
  onSave, 
  onCancel 
}: { 
  post?: BlogPost; 
  onSave: (post: Partial<BlogPost>) => void; 
  onCancel: () => void; 
}) => {
  const [formData, setFormData] = useState({
    title: post?.title || "",
    slug: post?.slug || "",
    excerpt: post?.excerpt || "",
    content: post?.content || "",
    author: post?.author || "",
    status: post?.status || "draft",
    tags: post?.tags?.join(", ") || "",
    featuredImage: post?.featuredImage || ""
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      tags: formData.tags.split(",").map(tag => tag.trim()).filter(tag => tag),
    });
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
              onChange={(e) => setFormData({...formData, status: e.target.value as BlogPost["status"]})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
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
          <label className="block text-sm font-medium mb-1">Featured Image URL</label>
          <input
            type="url"
            value={formData.featuredImage}
            onChange={(e) => setFormData({...formData, featuredImage: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
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
          />
        </div>
        
        <div className="flex space-x-2">
          <Button type="submit">
            {post ? "Update Post" : "Create Post"}
          </Button>
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>(mockPosts);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  const handleCreatePost = () => {
    setEditingPost(null);
    setShowForm(true);
  };

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setShowForm(true);
  };

  const handleSavePost = (postData: Partial<BlogPost>) => {
    if (editingPost) {
      // Update existing post
      setPosts(posts.map(post => 
        post.id === editingPost.id 
          ? { 
              ...post, 
              ...postData,
              updatedAt: new Date().toISOString(),
              publishedAt: postData.status === "published" ? new Date().toISOString() : post.publishedAt
            }
          : post
      ));
    } else {
      // Create new post
      const newPost: BlogPost = {
        ...postData as BlogPost,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: postData.status === "published" ? new Date().toISOString() : undefined,
        views: 0
      };
      setPosts([newPost, ...posts]);
    }
    setShowForm(false);
    setEditingPost(null);
  };

  const handleDeletePost = (postId: string) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      setPosts(posts.filter(post => post.id !== postId));
    }
  };

  const getStatusColor = (status: BlogPost["status"]) => {
    switch (status) {
      case "published": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "draft": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "archived": return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const formatDate = (dateString: string) => {
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
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(post.status)}`}>
                    {post.status}
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.createdAt)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{post.views} views</span>
                  </div>
                  {post.tags.length > 0 && (
                    <div className="flex items-center space-x-1">
                      <Tag className="h-4 w-4" />
                      <span>{post.tags.join(", ")}</span>
                    </div>
                  )}
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Slug: /{post.slug}
                  {post.publishedAt && (
                    <span> • Published: {formatDate(post.publishedAt)}</span>
                  )}
                </div>
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
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <Edit className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No blog posts yet
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Create your first blog post to start sharing content.
          </p>
          <Button onClick={handleCreatePost}>
            Create Blog Post
          </Button>
        </div>
      )}
    </div>
  );
}