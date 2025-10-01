"use client";

import { useState, useEffect } from "react";
import BlogSidebar from "./BlogSidebar";
import BlogGrid from "./BlogGrid";
import { BlogPost } from "./types";

interface BlogClientProps {
  blogs: BlogPost[];
}

export default function BlogClient({ blogs }: BlogClientProps) {
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    setFilteredBlogs(blogs);
    const uniqueCategories = Array.from(new Set(blogs.map(blog => blog.category)));
    setCategories(uniqueCategories);
  }, [blogs]);

  useEffect(() => {
    let result = blogs;
    if (selectedCategory !== "All") {
      result = result.filter(blog => blog.category === selectedCategory);
    }
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        blog =>
          blog.title.toLowerCase().includes(query) ||
          blog.excerpt.toLowerCase().includes(query) ||
          blog.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    setFilteredBlogs(result);
  }, [searchQuery, selectedCategory, blogs]);

  return (
    <section className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <BlogSidebar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            categories={categories}
          />
          <BlogGrid filteredBlogs={filteredBlogs} />
        </div>
      </div>
    </section>
  );
}