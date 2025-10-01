"use client";

import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import { BlogPost } from "./types";

interface BlogGridProps {
  filteredBlogs: BlogPost[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function BlogGrid({ filteredBlogs }: BlogGridProps) {
  return (
    <div className="lg:col-span-3 space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          All Articles
          <span className="text-muted-foreground ml-2 text-lg font-normal">
            ({filteredBlogs.length})
          </span>
        </h2>
      </div>

      {filteredBlogs.length === 0 ? (
        <div className="text-center py-16">
          <h3 className="text-xl font-medium mb-2">No articles found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filter to find what you&apos;re looking for.
          </p>
        </div>
      ) : (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {filteredBlogs.map((post) => (
            <BlogCard key={post.id} post={post} variants={fadeInUp} />
          ))}
        </motion.div>
      )}
    </div>
  );
}