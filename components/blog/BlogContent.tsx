"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Bookmark, Facebook, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/components/blog/types";
import BlogSidebarContent from "@/components/blog/BlogSidebarContent";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

export default function BlogContent({ post, relatedPosts }: { post: BlogPost; relatedPosts: BlogPost[] }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const shareUrl = isClient ? window.location.href : "";
  const facebookHref = isClient
    ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    : "#";
  const twitterHref = isClient
    ? `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`
    : "#";
  const linkedinHref = isClient
    ? `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.excerpt)}`
    : "#";

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <section className="py-16 bg-background text-foreground">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="lg:col-span-8 space-y-10"
          >
            {/* Featured image */}
            {post.cover_image && (
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={post.cover_image}
                  alt={post.title}
                  width={1200}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
            )}

            {/* Social share buttons */}
            <div className="flex items-center justify-between py-4 border-y border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-500 dark:text-gray-400">Share this article:</span>
                <div className="flex items-center space-x-2">
                  <a
                    href={facebookHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    <Facebook size={16} />
                  </a>

                  <a
                    href={twitterHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors"
                  >
                    <Twitter size={16} />
                  </a>

                  <a
                    href={linkedinHref}
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
              <style jsx global>{`
                .prose [style*="font-size"] {
                  font-size: var(--font-size) !important;
                }
                .prose span[style*="font-size: 12px"] { font-size: 12px !important; }
                .prose span[style*="font-size: 14px"] { font-size: 14px !important; }
                .prose span[style*="font-size: 16px"] { font-size: 16px !important; }
                .prose span[style*="font-size: 18px"] { font-size: 18px !important; }
                .prose span[style*="font-size: 20px"] { font-size: 20px !important; }
                .prose span[style*="font-size: 24px"] { font-size: 24px !important; }
                .prose span[style*="font-size: 32px"] { font-size: 32px !important; }
                .prose ul {
                  list-style-type: disc !important;
                  padding-left: 1.5rem !important;
                }
                .prose ol {
                  list-style-type: decimal !important;
                  padding-left: 1.5rem !important;
                }
                .prose li {
                  display: list-item !important;
                  margin-left: 0 !important;
                }
                .prose u {
                  text-decoration: underline !important;
                }
                .prose s {
                  text-decoration: line-through !important;
                }
                .prose .text-left { text-align: left !important; }
                .prose .text-center { text-align: center !important; }
                .prose .text-right { text-align: right !important; }
                .prose .text-justify { text-align: justify !important; }
                
                /* Line spacing and break handling */
                .prose br {
                  display: block !important;
                  margin: 0.75em 0 !important;
                  content: "" !important;
                  line-height: 1.5 !important;
                }
                .prose p {
                  margin-bottom: 1em !important;
                  line-height: 1.7 !important;
                }
                .prose p:last-child {
                  margin-bottom: 0 !important;
                }
                /* Preserve whitespace and line breaks */
                .prose {
                  white-space: pre-wrap !important;
                }
              `}</style>
              <div
                dangerouslySetInnerHTML={{
                  __html: (() => {
                    // Check if content is already HTML (contains HTML tags)
                    const isHTML = /<[^>]+>/.test(post.content);
                    
                    if (isHTML) {
                      // Content is already HTML, just add IDs to headings for TOC navigation
                      return post.content.replace(
                        /<h([1-6])([^>]*)>(.*?)<\/h[1-6]>/gi,
                        (match, level, attributes, title) => {
                          const cleanTitle = title.replace(/<[^>]*>/g, '').trim();
                          const id = cleanTitle
                            .toLowerCase()
                            .replace(/[^a-z0-9]+/g, "-")
                            .replace(/(^-|-$)/g, "");
                          
                          // Check if ID already exists in attributes
                          if (attributes.includes('id=')) {
                            return match; // Keep existing ID
                          }
                          
                          return `<h${level}${attributes} id="${id}">${title}</h${level}>`;
                        }
                      );
                    } else {
                      // Content is Markdown, process as before
                      return post.content
                        .split("\n")
                        .map((line, index, array) => {
                          if (line.startsWith("# ")) {
                            const title = line.substring(2);
                            const id = title
                              .toLowerCase()
                              .replace(/[^a-z0-9]+/g, "-")
                              .replace(/(^-|-$)/g, "");
                            return `<h1 id="${id}">${title}</h1>`;
                          } else if (line.startsWith("## ")) {
                            const title = line.substring(3);
                            const id = title
                              .toLowerCase()
                              .replace(/[^a-z0-9]+/g, "-")
                              .replace(/(^-|-$)/g, "");
                            return `<h2 id="${id}">${title}</h2>`;
                          } else if (line.startsWith("### ")) {
                            const title = line.substring(4);
                            const id = title
                              .toLowerCase()
                              .replace(/[^a-z0-9]+/g, "-")
                              .replace(/(^-|-$)/g, "");
                            return `<h3 id="${id}">${title}</h3>`;
                          } else if (line.startsWith("#### ")) {
                            const title = line.substring(5);
                            const id = title
                              .toLowerCase()
                              .replace(/[^a-z0-9]+/g, "-")
                              .replace(/(^-|-$)/g, "");
                            return `<h4 id="${id}">${title}</h4>`;
                          } else if (line.startsWith("- ")) {
                            return `<li>${line.substring(2)}</li>`;
                          } else if (line.trim() === "") {
                            // Check if the next line is also empty to create proper spacing
                            const nextLine = array[index + 1];
                            if (nextLine && nextLine.trim() === "") {
                              return "<br><br>";
                            }
                            return "<br>";
                          } else if (line.match(/^\d+\./)) {
                            return `<li>${line.substring(line.indexOf(".") + 2)}</li>`;
                          } else {
                            return `<p>${line}</p>`;
                          }
                        })
                        .join("");
                    }
                  })()
                }}
              />
            </div>

            {/* Tags */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-semibold mb-4">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar: TOC + related articles */}
          <BlogSidebarContent post={post} relatedPosts={relatedPosts} />
        </div>
      </div>
    </section>
  );
}