"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Clock, 
  Shield,
  Zap,
  Globe,
  Target,
  TrendingUp
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

interface Benefit {
  title: string;
  description: string;
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface SolutionData {
  title: string;
  subtitle: string;
  description: string;
  heroImage?: string;
  features: Feature[];
  benefits: Benefit[];
  process: ProcessStep[];
  stats: {
    label: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    company: string;
    rating: number;
  };
}

interface SolutionPageTemplateProps {
  data: SolutionData;
}

export default function SolutionPageTemplate({ data }: SolutionPageTemplateProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="w-fit">
              {data.title}
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              {data.subtitle}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {data.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <Globe className="h-24 w-24 text-primary/40" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border/40">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {data.stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section - Sticky Full Page Slides */}
      <section className="relative">
        {/* Header */}
        <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40 py-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Key Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the powerful capabilities that make our solution stand out
            </p>
          </div>
        </div>
        
        {/* Sticky Feature Slides */}
        <div className="relative">
          {data.features.map((feature, index) => (
            <div 
              key={index} 
              className="sticky top-0 h-screen w-full flex items-center justify-center"
              style={{ 
                zIndex: 30 + index,
                background: `linear-gradient(135deg, hsl(var(--primary) / ${0.05 + (index * 0.02)}), hsl(var(--secondary) / ${0.03 + (index * 0.02)}))`
              }}
            >
              <div className="w-full px-4 lg:px-8">
                <Card className="w-full max-w-7xl mx-auto border-0 shadow-2xl bg-background/95 backdrop-blur-sm">
                  <CardContent className="p-8 lg:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div className="space-y-6">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                          {feature.icon}
                        </div>
                        <div className="space-y-4">
                          <h3 className="text-3xl lg:text-4xl font-bold">
                            {feature.title}
                          </h3>
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-8 h-1 bg-primary rounded-full"></span>
                          <span>Feature {index + 1} of {data.features.length}</span>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center">
                          <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
                            {feature.icon}
                          </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full"></div>
                        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary/20 rounded-full"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
        
        {/* Spacer to allow last slide to be fully visible */}
        <div className="h-16"></div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Why Choose Our Solution
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the advantages that drive real business results
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data.benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process ensures efficient and effective results
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.process.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < data.process.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full">
                  <ArrowRight className="h-6 w-6 text-muted-foreground mx-auto" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <Card className="border-0 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <CardContent className="p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their business with our solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="rounded-full">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Contact Sales
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}