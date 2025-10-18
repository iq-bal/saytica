"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bookmark, Calendar, Clock, ChevronRight } from "lucide-react";
import type { BlogPost } from "@/components/blog/types";

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

export default function BlogMoreArticles({ articles }: { articles: BlogPost[] }) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">More Articles</h2>
          <p className="text-muted-foreground mt-2">Explore more from our blog</p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {articles.length > 0 ? (
            articles.map((article) => (
              <motion.div key={article.id} variants={fadeInUp} className="group">
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col p-0">
                  <div className="relative h-52 overflow-hidden">
                    <div className="absolute top-3 right-3 z-10">
                      <Badge className="bg-background text-foreground">{article.category}</Badge>
                    </div>
                    <Link href={`/blog/${article.slug}`}>
                      <Image
                        src={article.cover_image || '/placeholder-blog.jpg'}
                        alt={article.title}
                        width={400}
                        height={220}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                  </div>
                  <CardContent className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center text-xs text-muted-foreground space-x-4 mb-3">
                      <span className="flex items-center">
                        <Calendar size={14} className="mr-1" /> {article.published_date}
                      </span>
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1" /> {article.read_time}
                      </span>
                    </div>
                    <Link href={`/blog/${article.slug}`} className="group-hover:text-primary transition-colors">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{article.title}</h3>
                    </Link>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="mt-auto flex items-center justify-between pt-4">
                      <Link href={`/blog/${article.slug}`} className="text-primary font-medium text-sm flex items-center hover:underline">
                        Read More <ChevronRight size={16} className="ml-1" />
                      </Link>
                      <button className="text-muted-foreground hover:text-primary transition-colors">
                        <Bookmark size={18} />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-muted-foreground">No more articles available at the moment.</p>
              <Link href="/blog" className="text-primary hover:underline mt-2 inline-block">
                Browse all articles
              </Link>
            </div>
          )}
        </motion.div>
        <div className="text-center mt-10">
          <Link href="/blog">
            <Button variant="outline" size="lg">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}