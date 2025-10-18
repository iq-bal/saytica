"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { 
  ArrowRight, 
  Globe, 
  GraduationCap, 
  Gamepad2, 
  Megaphone, 
  Scale, 
  Heart, 
  Code, 
  DollarSign,
  Database,
  FileText,
  Mic,
  Image,
  BookOpen
} from "lucide-react";

// Solutions data
const solutionsData = [
  {
    title: "Translation & Localization",
    description: "Professional translation and localization services that help your business communicate effectively across cultures and markets worldwide.",
    href: "/solutions/translation",
    icon: <Globe className="w-6 h-6" />,
    category: "Core Services"
  },
  {
    title: "Legal Document Localization",
    description: "Specialized legal translation and localization services ensuring accuracy, compliance, and cultural appropriateness for all your legal documentation needs.",
    href: "/solutions/legal",
    icon: <Scale className="w-6 h-6" />,
    category: "Industry Solutions"
  },
  {
    title: "Medical Localization",
    description: "Specialized medical translation and localization services ensuring patient safety, regulatory compliance, and cultural sensitivity in healthcare communications worldwide.",
    href: "/solutions/medical",
    icon: <Heart className="w-6 h-6" />,
    category: "Industry Solutions"
  },
  {
    title: "Financial Services Localization",
    description: "Specialized financial translation and localization services ensuring regulatory compliance, cultural sensitivity, and market-specific adaptation for financial institutions worldwide.",
    href: "/solutions/financial",
    icon: <DollarSign className="w-6 h-6" />,
    category: "Industry Solutions"
  },
  {
    title: "Software Localization",
    description: "Comprehensive software localization services that make your applications accessible and user-friendly for global markets while maintaining technical integrity.",
    href: "/solutions/software",
    icon: <Code className="w-6 h-6" />,
    category: "Technology Solutions"
  },
  {
    title: "Game Localization",
    description: "Comprehensive game localization services that bring your games to life for players worldwide, maintaining the excitement and immersion across all cultures.",
    href: "/solutions/gaming",
    icon: <Gamepad2 className="w-6 h-6" />,
    category: "Technology Solutions"
  },
  {
    title: "eLearning Localization",
    description: "Transform your educational content for global learners with culturally appropriate and pedagogically sound localization services.",
    href: "/solutions/elearning",
    icon: <GraduationCap className="w-6 h-6" />,
    category: "Technology Solutions"
  },
  {
    title: "Marketing Localization",
    description: "Transform your marketing campaigns for global audiences with culturally resonant messaging that drives engagement and conversions across all markets.",
    href: "/solutions/marketing",
    icon: <Megaphone className="w-6 h-6" />,
    category: "Marketing Solutions"
  }
];

// Data solutions data
const dataSolutionsData = [
  {
    title: "All Datasets",
    description: "Browse our comprehensive collection of multilingual datasets across audio, text, image, and lexical resources for your AI and ML projects.",
    href: "/data/all-datasets",
    icon: <Database className="w-6 h-6" />,
    category: "Data Collections"
  },
  {
    title: "Audio Datasets",
    description: "High-quality speech and audio datasets for voice recognition, synthesis, and audio processing applications across multiple languages.",
    href: "/data/audio-datasets",
    icon: <Mic className="w-6 h-6" />,
    category: "Data Collections"
  },
  {
    title: "Text Datasets",
    description: "Curated text corpora and linguistic datasets for natural language processing, machine translation, and text analysis projects.",
    href: "/data/text-datasets",
    icon: <FileText className="w-6 h-6" />,
    category: "Data Collections"
  },
  {
    title: "Image Datasets",
    description: "Annotated image datasets for computer vision, object recognition, and visual AI applications with multilingual labeling.",
    href: "/data/image-datasets",
    icon: <Image className="w-6 h-6" aria-label="Image datasets icon" />,
    category: "Data Collections"
  },
  {
    title: "Lex Resources",
    description: "Lexical resources including dictionaries, terminology databases, and linguistic annotations for specialized domains.",
    href: "/data/lex",
    icon: <BookOpen className="w-6 h-6" />,
    category: "Data Collections"
  }
];

// Group services by category
const groupedServices = [...solutionsData, ...dataSolutionsData].reduce((acc, service) => {
  if (!acc[service.category]) {
    acc[service.category] = [];
  }
  acc[service.category].push(service);
  return acc;
}, {} as Record<string, typeof solutionsData>);

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium rounded-full bg-muted/50 text-muted-foreground border-border/50 hover:bg-muted transition-colors mb-6">
            <Globe className="w-4 h-4 mr-2" />
            Complete Language & Data Solutions
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive localization services and data solutions to help your business succeed globally. 
            From translation to AI datasets, we provide the tools you need to reach international markets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="px-8 py-4 text-lg font-semibold">
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="px-8 py-4 text-lg font-semibold">
              <Link href="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {Object.entries(groupedServices).map(([category, services]) => (
            <div key={category} className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">{category}</h2>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <Card key={service.title} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          {service.icon}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {service.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {service.description}
                      </p>
                      <Button variant="ghost" asChild className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Link href={service.href}>
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Go Global?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let&apos;s discuss how our localization services and data solutions can help your business reach new markets and audiences worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="px-8 py-4 text-lg font-semibold">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="px-8 py-4 text-lg font-semibold">
              <Link href="/about">
                About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}