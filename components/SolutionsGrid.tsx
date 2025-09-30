"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { 
  Globe, 
  Smartphone, 
  Monitor, 
  Video, 
  FileText, 
  GraduationCap, 
  Gamepad2, 
  Megaphone 
} from "lucide-react";

const solutions = [
  {
    title: "Web & Ecommerce",
    description: "Projecting a local vibe when you've got a global audience may feel like an impossible task, but with our website connectors and integrations, we can make that dream a reality.",
    link: "#web-ecommerce",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "Mobile Apps",
    description: "Maximize your global visibility and multiply downloads through innovative localization services tailored to target markets.",
    link: "#mobile-apps",
    icon: <Smartphone className="w-6 h-6" />
  },
  {
    title: "Software",
    description: "Take your software to a global audience, but make it feel local. We go beyond translation services, adapting your programs culturally so you can succeed in new markets.",
    link: "#software",
    icon: <Monitor className="w-6 h-6" />
  },
  {
    title: "Videos",
    description: "Take your brand to market with flawless audio. We've recorded thousands of hours — our practice makes your products perfect.",
    link: "#videos",
    icon: <Video className="w-6 h-6" />
  },
  {
    title: "Documents",
    description: "Deliver precise translations of high-volume documents quickly and cost-effectively with Andovar's accurate, AI-driven document localization services.",
    link: "#documents",
    icon: <FileText className="w-6 h-6" />
  },
  {
    title: "eLearning",
    description: "Knowledge knows no borders, and neither should sharing it. Localize your online educational programs in any language and in any country with our expert teams.",
    link: "#elearning",
    icon: <GraduationCap className="w-6 h-6" />
  },
  {
    title: "Games",
    description: "There are now over 2.5 billion active video gamers around the world. But are they playing your games? Globalize your audience by localizing your games.",
    link: "#games",
    icon: <Gamepad2 className="w-6 h-6" />
  },
  {
    title: "Marketing Content",
    description: "Create customized experiences for audiences around the world with localized marketing and communications messages.",
    link: "#marketing-content",
    icon: <Megaphone className="w-6 h-6" />
  }
];

export default function SolutionsGrid() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Section label - small, uppercase, muted */}
          <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Solutions
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            What We Translate
          </h2>
        </div>

        {/* Solutions Grid */}
        <HoverEffect 
          items={solutions} 
          className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
        />
      </div>
    </section>
  );
}