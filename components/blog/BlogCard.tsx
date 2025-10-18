"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ChevronRight, Calendar, Clock, Bookmark } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BlogPost } from "./types";

interface BlogCardProps {
  post: BlogPost;
  variants?: Variants;
}

export default function BlogCard({ post, variants }: BlogCardProps) {
  return (
    <motion.div variants={variants} className="group">
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col p-0">
        <div className="relative h-52 overflow-hidden">
          <div className="absolute top-3 right-3 z-10">
            <Badge className="bg-background text-foreground">{post.category}</Badge>
          </div>
          <Link href={`/blog/${post.slug}`}>
            <Image
              src={post.cover_image || '/placeholder-blog.jpg'}
              alt={post.title}
              width={400}
              height={220}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>
        <CardContent className="p-5 flex-1 flex flex-col">
          <div className="flex items-center text-xs text-muted-foreground space-x-4 mb-3">
            <span className="flex items-center">
              <Calendar size={14} className="mr-1" /> {post.published_date?.slice(0, 10) || 'No date'}
            </span>
            <span className="flex items-center">
              <Clock size={14} className="mr-1" /> {post.read_time}
            </span>
          </div>
          <Link href={`/blog/${post.slug}`} className="group-hover:text-primary transition-colors">
            <h3 className="font-semibold text-lg mb-2 line-clamp-2">{post.title}</h3>
          </Link>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="mt-auto flex items-center justify-between pt-4">
            <Link href={`/blog/${post.slug}`} className="text-primary font-medium text-sm flex items-center hover:underline">
              Read More <ChevronRight size={16} className="ml-1" />
            </Link>
            <button className="text-muted-foreground hover:text-primary transition-colors">
              <Bookmark size={18} />
            </button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}