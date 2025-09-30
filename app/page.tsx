import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ClientScroller from "@/components/ClientScroller";
import SolutionsGrid from "@/components/SolutionsGrid";

export default function Home() {
  return (
    <div>
      <Hero />
      <ClientScroller />
      <AboutSection />
      <SolutionsGrid />
    </div>
  );
}
