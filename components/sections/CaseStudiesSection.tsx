"use client";

import { CaseStudiesCarousel, CaseStudy } from "@/components/ui/case-studies-carousel";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample case study data
const caseStudiesData: CaseStudy[] = [
  {
    id: "playforge",
    clientName: "PlayForge Games",
    clientLogo: "/case-studies/console.png",
    quote: "Localized UI and context-aware translations boosted retention in APAC markets significantly.",
    author: "David Chen",
    role: "Head of Localization",
    challenge: "Culturalization of complex UI elements and in-game dialogue for diverse APAC gaming audiences.",
    solution: "Advanced linguistic QA combined with in-context testing and cultural adaptation for each target market.",
    result: "+40% DAU",
    caseStudyUrl: "/case-studies/playforge-games",
  },
  {
    id: "globaledu",
    clientName: "PlayForge Games",
    clientLogo: "/case-studies/console.png",
    quote: "Localized UI and context-aware translations boosted retention in APAC markets significantly.",
    author: "David Chen",
    role: "Head of Localization",
    challenge: "Culturalization of complex UI elements and in-game dialogue for diverse APAC gaming audiences.",
    solution: "Advanced linguistic QA combined with in-context testing and cultural adaptation for each target market.",
    result: "+40% DAU",
    caseStudyUrl: "/case-studies/playforge-games",
  },
  {
    id: "techcorp",
    clientName: "TechCorp Solutions",
    clientLogo: "/case-studies/technology.png",
    quote: "Our software documentation became accessible to global teams, accelerating our international product launches.",
    author: "Sarah Johnson",
    role: "Product Manager",
    challenge: "Translate technical documentation and user interfaces for enterprise software across 15 languages.",
    solution: "Specialized technical translation with terminology management and collaborative review processes.",
    result: "+65% faster launches",
    caseStudyUrl: "/case-studies/techcorp-solutions",
  },
];

export default function CaseStudiesSection() {
  const handlePrevious = () => {
    if ((window as any).carouselPrevious) {
      (window as any).carouselPrevious();
    }
  };

  const handleNext = () => {
    if ((window as any).carouselNext) {
      (window as any).carouselNext();
    }
  };

  return (
    <section 
      className="py-12 lg:py-16 bg-background relative overflow-hidden"
      aria-labelledby="case-studies-heading"
    >
      {/* Decorative shapes in top right corner */}
      <div className="absolute top-0 right-0 pointer-events-none">
        {/* Semi-circle */}
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full"></div>
        {/* Triangle */}
        <div className="absolute top-8 right-8 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-blue-500/20"></div>
        {/* Rectangle */}
        <div className="absolute top-20 right-20 w-12 h-8 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-sm transform rotate-12"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with Navigation */}
        <div className="mb-12 flex items-start justify-between">
          <div className="flex-1">
            <h2 
              id="case-studies-heading"
              className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
            >
              Companies expanding globally with Saytica
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover how leading organizations have accelerated their international growth 
              through our comprehensive localization solutions.
            </p>
          </div>
          
          {/* Arrow Buttons in Header */}
          <div className="flex items-center gap-2 ml-8">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrevious}
              className="h-10 w-10 p-0 border-border hover:border-foreground hover:bg-muted"
              aria-label="Previous case study"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleNext}
              className="h-10 w-10 p-0 border-border hover:border-foreground hover:bg-muted"
              aria-label="Next case study"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Case Studies Carousel */}
        <CaseStudiesCarousel 
          caseStudies={caseStudiesData}
          autoplay={false}
          autoplayInterval={6000}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </div>
    </section>
  );
}