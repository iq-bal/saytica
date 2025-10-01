"use client";

import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User, Bookmark, Facebook, Twitter, Linkedin, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { dummyBlogs } from "@/components/blog/data";
import SectionSelector from "@/components/blog/SectionSelector";
import type { BlogPost } from "@/components/blog/types";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [moreArticles, setMoreArticles] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = () => {
      try {
        // Find the specific post from dummy data
        const foundPost = dummyBlogs.find(blog => blog.slug === slug);
        
        if (!foundPost) {
          return notFound();
        }
        
        setPost(foundPost);
        
        // Find more articles (excluding current post)
        const more = dummyBlogs
          .filter(blog => blog.id !== foundPost.id)
          .slice(0, 6); // Show up to 6 more articles
        
        setMoreArticles(more);
        
        // Set related posts to show the same articles as more articles (first 3)
        const related = more.slice(0, 3);
        setRelatedPosts(related);
        
      } catch (error) {
        console.error("Failed to fetch blog data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPost();
  }, [slug]);

  const [isBookmarked, setIsBookmarked] = useState(false);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-60 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
          <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    );
  }

  if (!post) {
    return notFound();
  }

  // Generate full article content for demonstration
  const fullContent = `
# ${post.title}

${post.excerpt}

## Introduction

In today's rapidly evolving digital landscape, understanding the latest trends and technologies is crucial for success. This comprehensive guide explores the key concepts and strategies that will help you stay ahead of the curve.

## Key Insights

### 1. Understanding the Fundamentals

The foundation of any successful strategy lies in understanding the core principles. Whether you're dealing with technology, marketing, or business development, these fundamentals remain constant:

- **Research and Analysis**: Always start with thorough research
- **Strategic Planning**: Develop a clear roadmap for implementation
- **Continuous Learning**: Stay updated with industry trends
- **Adaptation**: Be ready to pivot when necessary

### 2. Implementation Strategies

Once you have a solid understanding of the fundamentals, the next step is implementation. Here are some proven strategies:

#### Best Practices
- Start with small, manageable projects
- Test and iterate based on feedback
- Scale gradually as you gain confidence
- Monitor performance metrics regularly

#### Common Pitfalls to Avoid
- Rushing into implementation without proper planning
- Ignoring user feedback and market signals
- Failing to allocate sufficient resources
- Not having a clear success measurement framework

## Advanced Techniques

For those looking to take their skills to the next level, consider these advanced techniques:

### Data-Driven Decision Making

Modern success requires leveraging data effectively. This means:
- Collecting relevant metrics
- Analyzing trends and patterns
- Making informed decisions based on insights
- Continuously optimizing based on results

### Innovation and Creativity

While following best practices is important, innovation often comes from thinking outside the box:
- Experiment with new approaches
- Challenge conventional wisdom
- Embrace failure as a learning opportunity
- Foster a culture of creativity and experimentation

## Future Outlook

Looking ahead, several trends are shaping the future of this field:

1. **Artificial Intelligence Integration**: AI is becoming increasingly important across all industries
2. **Sustainability Focus**: Environmental considerations are driving new approaches
3. **Remote Collaboration**: Distributed teams are becoming the norm
4. **Personalization**: Tailored experiences are expected by users
5. **Security and Privacy**: Data protection is more critical than ever

## Conclusion

Success in today's environment requires a combination of solid fundamentals, strategic thinking, and adaptability. By following the principles outlined in this guide and staying current with industry trends, you'll be well-positioned to achieve your goals.

Remember that continuous learning and adaptation are key. The landscape will continue to evolve, and those who embrace change while maintaining strong foundational knowledge will thrive.

## Next Steps

To get started with implementing these strategies:

1. Assess your current situation and identify areas for improvement
2. Develop a clear action plan with specific milestones
3. Start with small experiments to test your approach
4. Scale successful initiatives while learning from failures
5. Stay connected with industry communities and thought leaders

The journey to mastery is ongoing, but with dedication and the right approach, you can achieve remarkable results.
  `;

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="relative pb-16 pt-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <Link href="/blog" className="inline-flex items-center text-sm text-gray-300 hover:text-white mb-4 transition-colors">
              <ArrowLeft size={16} className="mr-2" /> Back to Articles
            </Link>
            
            <Badge variant="outline" className="text-xs px-4 py-1 border-primary/40 bg-primary/10 mb-6 text-white">
              {post.category}
            </Badge>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              {post.title}
            </h1>
            
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              {post.excerpt}
            </p>
            
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

      {/* Main content */}
      <section className="py-16 bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="lg:col-span-8 space-y-10"
            >
              {/* Featured image */}
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={post.cover_image}
                  alt={post.title}
                  width={1200}
                  height={600}
                  className="w-full object-cover"
                />
              </div>

              {/* Social share buttons */}
              <div className="flex items-center justify-between py-4 border-y border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Share this article:</span>
                  <div className="flex items-center space-x-2">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    >
                      <Facebook size={16} />
                    </a>

                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors"
                    >
                      <Twitter size={16} />
                    </a>

                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.excerpt)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
                    >
                      <Linkedin size={16} />
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={handleBookmark}
                    className="flex items-center text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    <Bookmark size={20} className="mr-1" />
                    <span className="text-sm">Save</span>
                  </button>
                </div>
              </div>

              {/* Article content */}
              <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-primary prose-strong:text-foreground prose-ul:text-gray-700 dark:prose-ul:text-gray-300 prose-ol:text-gray-700 dark:prose-ol:text-gray-300">
                <div dangerouslySetInnerHTML={{ __html: post.content.split('\n').map(line => {
                  if (line.startsWith('# ')) {
                    const title = line.substring(2);
                    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    return `<h1 id="${id}">${title}</h1>`;
                  } else if (line.startsWith('## ')) {
                    const title = line.substring(3);
                    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    return `<h2 id="${id}">${title}</h2>`;
                  } else if (line.startsWith('### ')) {
                    const title = line.substring(4);
                    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    return `<h3 id="${id}">${title}</h3>`;
                  } else if (line.startsWith('#### ')) {
                    const title = line.substring(5);
                    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    return `<h4 id="${id}">${title}</h4>`;
                  } else if (line.startsWith('- ')) {
                    return `<li>${line.substring(2)}</li>`;
                  } else if (line.trim() === '') {
                    return '<br>';
                  } else if (line.match(/^\d+\./)) {
                    return `<li>${line.substring(line.indexOf('.') + 2)}</li>`;
                  } else {
                    return `<p>${line}</p>`;
                  }
                }).join('') }} />
              </div>

              {/* Tags */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold mb-4">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              <div className="space-y-8 sticky top-24">

                {/* Section Selector */}
                <SectionSelector content={post.content} />

                {/* Related posts */}
                {relatedPosts.length > 0 && (
                  <div className="bg-card rounded-xl shadow-sm p-6 space-y-6">
                    <h3 className="text-lg font-semibold border-b border-gray-200 dark:border-gray-700 pb-3">
                      Related Articles
                    </h3>
                    <div className="space-y-2">
                      {relatedPosts.map((relatedPost) => (
                        <div key={relatedPost.id} className="overflow-hidden">
                          <div className="flex gap-3 py-1">
                            <div className="flex-shrink-0 w-16 h-16 relative rounded-lg overflow-hidden">
                              <Image
                                src={relatedPost.cover_image}
                                alt={relatedPost.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <Link href={`/blog/${relatedPost.slug}`}>
                                <h4 className="font-medium line-clamp-2 mb-1 text-sm">{relatedPost.title}</h4>
                              </Link>
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                {relatedPost.published_date}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More articles section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">More Articles</h2>
            <p className="text-muted-foreground mt-2">
              Explore more from our blog
            </p>
          </div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {moreArticles.length > 0 ? moreArticles.map((article) => (
              <motion.div key={article.id} variants={fadeInUp} className="group">
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col p-0">
                  <div className="relative h-52 overflow-hidden">
                    <div className="absolute top-3 right-3 z-10">
                      <Badge className="bg-background text-foreground">
                        {article.category}
                      </Badge>
                    </div>
                    <Link href={`/blog/${article.slug}`}>
                      <Image
                        src={article.cover_image}
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
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
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
            )) : (
              // Fallback to show some articles if no more articles available
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
    </div>
  );
}