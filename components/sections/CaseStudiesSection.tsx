"use client";

import { CaseStudiesCarousel, CaseStudy } from "@/components/ui/case-studies-carousel";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample case study data
const caseStudiesData: CaseStudy[] = [
  {
    id: "playforge",
    slug: "playforge-games-localization",
    clientName: "PlayForge Games",
    clientLogo: "/case-studies/console.png",
    quote: "Localized UI and context-aware translations boosted retention in APAC markets significantly.",
    author: "David Chen",
    role: "Head of Localization",
    challenge: "Culturalization of complex UI elements and in-game dialogue for diverse APAC gaming audiences.",
    solution: "Advanced linguistic QA combined with in-context testing and cultural adaptation for each target market.",
    result: "+40% DAU",
    caseStudyUrl: "/case-studies/playforge-games",
    description: "A comprehensive localization project for a leading gaming company expanding into APAC markets.",
    technologies: ["Unity", "React", "Node.js", "MongoDB"],
    duration: "6 months",
    industry: "Gaming",
    teamSize: "12 specialists",
    metrics: [
      { label: "Languages", value: "8" },
      { label: "Markets", value: "12" },
      { label: "Retention Increase", value: "40%" },
      { label: "Revenue Growth", value: "65%" }
    ]
  },
  {
    id: "globaledu",
    slug: "global-education-platform",
    clientName: "EduGlobal Platform",
    clientLogo: "/case-studies/education.png",
    quote: "Our e-learning platform reached 2M+ students worldwide with culturally adapted content.",
    author: "Maria Rodriguez",
    role: "VP of International Expansion",
    challenge: "Adapting educational content and assessments for diverse cultural and linguistic contexts across 20+ countries.",
    solution: "Comprehensive educational localization with cultural adaptation, accessibility compliance, and pedagogical review.",
    result: "2M+ students",
    caseStudyUrl: "/case-studies/global-education-platform",
    description: "Transforming online education through culturally sensitive localization and accessibility improvements.",
    technologies: ["React", "Python", "AWS", "PostgreSQL"],
    duration: "8 months",
    industry: "Education",
    teamSize: "18 specialists",
    metrics: [
      { label: "Languages", value: "25" },
      { label: "Countries", value: "22" },
      { label: "Students Reached", value: "2M+" },
      { label: "Completion Rate", value: "85%" }
    ]
  },
  {
    id: "techcorp",
    slug: "techcorp-enterprise-software",
    clientName: "TechCorp Solutions",
    clientLogo: "/case-studies/technology.png",
    quote: "Our software documentation became accessible to global teams, accelerating our international product launches.",
    author: "Sarah Johnson",
    role: "Product Manager",
    challenge: "Translate technical documentation and user interfaces for enterprise software across 15 languages.",
    solution: "Specialized technical translation with terminology management and collaborative review processes.",
    result: "+65% faster launches",
    caseStudyUrl: "/case-studies/techcorp-solutions",
    description: "Streamlining global software deployment through comprehensive technical documentation localization.",
    technologies: ["Angular", "Java", "Spring Boot", "Oracle"],
    duration: "4 months",
    industry: "Enterprise Software",
    teamSize: "8 specialists",
    metrics: [
      { label: "Languages", value: "15" },
      { label: "Documentation Pages", value: "500+" },
      { label: "Launch Speed", value: "65% faster" },
      { label: "User Satisfaction", value: "92%" }
    ]
  },
];

export default function CaseStudiesSection() {
  type CarouselControlsWindow = Window & {
    carouselPrevious?: () => void;
    carouselNext?: () => void;
  };

  const handlePrevious = () => {
    const w = window as CarouselControlsWindow;
    w.carouselPrevious?.();
  };

  const handleNext = () => {
    const w = window as CarouselControlsWindow;
    w.carouselNext?.();
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