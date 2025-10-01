"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlogPost } from "./types";

interface FeaturedBlogsProps {
  featuredBlogs: BlogPost[];
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

export default function FeaturedBlogs({ featuredBlogs }: FeaturedBlogsProps) {
  if (featuredBlogs.length === 0) return null;

  return (
    <section className="relative bg-background text-foreground pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {featuredBlogs.map((post, idx) => (
            <motion.div
              key={post.id}
              variants={fadeInUp}
              className={`relative overflow-hidden rounded-xl ${idx === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              <Image
                src={post.cover_image}
                alt={post.title}
                width={800}
                height={idx === 0 ? 600 : 400}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="flex items-center space-x-2 text-sm mb-3">
                  <Badge variant="secondary" className="bg-primary/80 hover:bg-primary text-white border-none">
                    {post.category}
                  </Badge>
                  <span className="text-gray-300 flex items-center text-xs">
                    <Calendar size={12} className="mr-1" /> {post.published_date}
                  </span>
                  <span className="text-gray-300 flex items-center text-xs">
                    <Clock size={12} className="mr-1" /> {post.read_time}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.slug}`} className="inline-flex">
                  <Button variant="outline" size="sm" className="text-white border-white/30 bg-white/10 hover:bg-white/20">
                    Read Article <ChevronRight size={16} className="ml-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}