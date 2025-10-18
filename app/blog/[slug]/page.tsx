import { notFound } from "next/navigation";
import type { BlogPost } from "@/components/blog/types";
import { blogService } from "@/lib/blog";
import BlogHeroSection from "@/components/blog/BlogHeroSection";
import BlogContent from "@/components/blog/BlogContent";
import BlogMoreArticles from "@/components/blog/BlogMoreArticles";

// Animations are handled inside client components to preserve behavior

interface PageProps { params: { slug: string } }

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;

  const post = await blogService.getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  // Get more published articles (excluding current post)
  const allPosts = await blogService.getPublishedPosts();
  const moreArticles: BlogPost[] = allPosts
    .filter((blog) => blog.id !== post.id)
    .slice(0, 6);

  // Related posts: first 3 of moreArticles
  const relatedPosts: BlogPost[] = moreArticles.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <BlogHeroSection post={post} />

      {/* Main content + Sidebar in one grid */}
      <BlogContent post={post} relatedPosts={relatedPosts} />

      {/* More articles section */}
      <BlogMoreArticles articles={moreArticles} />
    </div>
  );
}