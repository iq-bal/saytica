import { notFound } from "next/navigation";
import type { BlogPost } from "@/components/blog/types";
import { dummyBlogs } from "@/components/blog/data";
import BlogHeroSection from "@/components/blog/BlogHeroSection";
import BlogContent from "@/components/blog/BlogContent";
import BlogMoreArticles from "@/components/blog/BlogMoreArticles";

// Animations are handled inside client components to preserve behavior

interface PageProps { params: { slug: string } }

export default function BlogPost({ params }: PageProps) {
  const slug = params.slug;

  const post = dummyBlogs.find((blog) => blog.slug === slug) || null;
  if (!post) {
    notFound();
  }

  // More articles (excluding current post)
  const moreArticles: BlogPost[] = dummyBlogs
    .filter((blog) => blog.id !== post!.id)
    .slice(0, 6);

  // Related posts: first 3 of moreArticles
  const relatedPosts: BlogPost[] = moreArticles.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <BlogHeroSection post={post!} />

      {/* Main content + Sidebar in one grid */}
      <BlogContent post={post!} relatedPosts={relatedPosts} />

      {/* More articles section */}
      <BlogMoreArticles articles={moreArticles} />
    </div>
  );
}