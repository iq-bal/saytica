import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ClientScroller from "@/components/ClientScroller";
import SolutionsGrid from "@/components/SolutionsGrid";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import BlogSection from "@/components/sections/BlogSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <ClientScroller />
      <AboutSection />
      <SolutionsGrid />
      <TestimonialsSection />
      <CaseStudiesSection />
      <BlogSection />
    </div>
  );
}
