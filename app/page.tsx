import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ClientScroller from "@/components/ClientScroller";

export default function Home() {
  return (
    <div>
      <Hero />
      <ClientScroller />
      <AboutSection />
    </div>
  );
}
