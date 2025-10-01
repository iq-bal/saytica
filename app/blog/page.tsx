import BlogHero from "@/components/blog/BlogHero";
import FeaturedBlogs from "@/components/blog/FeaturedBlogs";
import BlogClient from "@/components/blog/BlogClient";
import { dummyBlogs } from "@/components/blog/data";

export default function BlogPage() {
  const featuredBlogs = dummyBlogs.filter(blog => blog.featured);

  return (
    <div className="min-h-screen">
      <BlogHero />
      <FeaturedBlogs featuredBlogs={featuredBlogs} />
      <BlogClient blogs={dummyBlogs} />
    </div>
  );
}