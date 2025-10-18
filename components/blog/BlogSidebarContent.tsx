import Image from "next/image";
import Link from "next/link";
import SectionSelector from "@/components/blog/SectionSelector";
import type { BlogPost } from "@/components/blog/types";

export default function BlogSidebarContent({
  post,
  relatedPosts,
}: {
  post: BlogPost;
  relatedPosts: BlogPost[];
}) {
  return (
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
                        src={relatedPost.cover_image || '/placeholder-blog.jpg'}
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
  );
}