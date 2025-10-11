"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/components/blog/types";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BlogHeroSection({ post }: { post: BlogPost }) {
  return (
    <section className="relative pb-16 pt-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      <div className="relative z-10 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-gray-300 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Articles
          </Link>

          <Badge
            variant="outline"
            className="text-xs px-4 py-1 border-primary/40 bg-primary/10 mb-6 text-white"
          >
            {post.category}
          </Badge>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            {post.title}
          </h1>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto">{post.excerpt}</p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-300 pt-2">
            <div className="flex items-center">
              <User size={16} className="mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              {post.published_date}
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              {post.read_time}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}