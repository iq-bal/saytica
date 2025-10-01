"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface BlogSidebarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: string[];
}

export default function BlogSidebar({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories
}: BlogSidebarProps) {
  return (
    <div className="lg:col-span-1 space-y-8">
      <div className="sticky top-24 space-y-8">
        <div className="bg-card rounded-xl shadow-sm p-6 space-y-4">
          <h3 className="text-lg font-semibold">Search</h3>
          <div className="relative">
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSearchChange(e.target.value)}
              className="pr-10"
            />
            <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="bg-card rounded-xl shadow-sm p-6 space-y-4">
          <h3 className="text-lg font-semibold">Categories</h3>
          <div className="space-y-2">
            <button
              onClick={() => onCategoryChange("All")}
              className={`block w-full text-left px-3 py-2 rounded-lg transition ${
                selectedCategory === "All"
                  ? "bg-primary text-primary-foreground font-medium"
                  : "hover:bg-muted"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`block w-full text-left px-3 py-2 rounded-lg transition ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground font-medium"
                    : "hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-xl shadow-sm p-6 space-y-4">
          <h3 className="text-lg font-semibold">Subscribe</h3>
          <p className="text-sm text-muted-foreground">
            Get the latest articles and insights delivered to your inbox.
          </p>
          <div className="space-y-3">
            <Input type="email" placeholder="Your email address" className="w-full" />
            <Button className="w-full">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
}