"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { TopRightDecoration, BottomLeftDecoration } from "@/components/ui/corner-decoration";

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for. Their translation services are unmatched in quality and speed.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "/testimonials/sarah.avif",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The team's expertise in localization helped us expand into new markets effortlessly. Highly recommend their services.",
    name: "Michael Rodriguez",
    designation: "CTO at GlobalTech",
    src: "/testimonials/michael.avif",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The quality of translations and cultural adaptation is outstanding. We've seen a 40% increase in international engagement.",
    name: "Emily Watson",
    designation: "Marketing Director at InnovateCorp",
    src: "/testimonials/emily.avif",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a service that delivers on all its promises. Their multilingual expertise has been crucial for our global expansion.",
    name: "James Thompson",
    designation: "CEO at StartupVenture",
    src: "/testimonials/james.avif",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. We've been able to localize content for 15+ markets with incredible efficiency and accuracy.",
    name: "Lisa Park",
    designation: "Operations Manager at ScaleUp",
    src: "/testimonials/lisa.avif",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-12 lg:py-16 bg-background">
      {/* Corner Decorations */}
      <TopRightDecoration variant="geometric" />
      <BottomLeftDecoration variant="organic" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Section label - small, uppercase, muted */}
          <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Testimonials
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            What Our Clients Say
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Trusted by companies worldwide for exceptional translation and localization services
          </p>
        </div>

        {/* Animated Testimonials */}
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}