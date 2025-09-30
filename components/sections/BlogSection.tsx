"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// Blog data types
interface Author {
  name: string;
  role: string;
  avatar: string;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt?: string;
  author?: Author;
  tag: string;
  image: string;
  featured?: boolean;
}

// Sample blog data
const blogPosts: BlogPost[] = [
  {
    id: "featured-energy-healing",
    title: "5 Energy Healing Techniques To Rebalance Your Chakras",
    excerpt: "Unlock the secrets of your body's energy system and discover powerful techniques to restore balance, harmony, and vitality to your chakras through ancient healing practices.",
    author: {
      name: "Lena Hart",
      role: "Reiki Master & Energy Healer",
      avatar: "/testimonials/emily.avif"
    },
    tag: "Energy Healing",
    image: "/testimonials/sarah.avif",
    featured: true
  },
  {
    id: "sound-baths",
    title: "How Sound Baths Can Calm The Nervous System",
    tag: "Mindfulness",
    image: "/testimonials/james.avif"
  },
  {
    id: "ayurveda-guide",
    title: "A Beginner's Guide To Ayurveda For Everyday",
    tag: "Ayurveda",
    image: "/testimonials/lisa.avif"
  },
  {
    id: "breathwork-stress",
    title: "The Power Of Breathwork Release Stress In Minutes",
    tag: "Breathwork",
    image: "/testimonials/michael.avif"
  }
];

export default function BlogSection() {
  const featuredPost = blogPosts.find(post => post.featured);
  const secondaryPosts = blogPosts.filter(post => !post.featured);

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto bg-gray-50 rounded-xl p-8 md:p-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Latest Insights & Wellness Tips
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Discover transformative wellness practices, healing techniques, and mindful living tips 
            from our community of certified practitioners and wellness experts.
          </p>
        </div>

        {/* Featured Blog Card */}
        {featuredPost && (
          <div className="grid md:grid-cols-2 gap-0 mb-6 rounded-2xl overflow-hidden shadow-lg">
            {/* Image Card */}
            <div className="relative h-80 md:h-full">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content Card */}
            <div className="bg-green-50 p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-700 mt-2 leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="space-y-4">
                {/* Author Section */}
                {featuredPost.author && (
                  <div className="flex items-center space-x-3">
                    <div className="relative h-8 w-8 rounded-full overflow-hidden">
                      <Image
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {featuredPost.author.name}
                      </p>
                      <p className="text-xs text-gray-600">
                        {featuredPost.author.role}
                      </p>
                    </div>
                  </div>
                )}

                {/* Tag */}
                <span className="rounded-full bg-green-100 text-green-800 text-xs px-3 py-1 inline-block font-medium">
                  {featuredPost.tag}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryPosts.map((post) => (
            <div key={post.id} className="space-y-4">
              {/* Image with Tag Overlay */}
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                {/* Tag Overlay */}
                <span className="absolute bottom-3 left-3 bg-white/90 text-xs px-3 py-1 rounded-full font-medium text-gray-800">
                  {post.tag}
                </span>
              </div>
              
              {/* Title */}
              <h3 className="text-base font-semibold text-gray-900 text-center">
                {post.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}