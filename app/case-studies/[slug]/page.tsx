"use client";

import { use } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, CheckCircle, Target, Lightbulb, TrendingUp, Users, Building, ExternalLink } from "lucide-react"

// Case Study interface
interface CaseStudy {
  id: string
  slug: string
  clientName: string
  clientLogo: string
  quote: string
  author: string
  role: string
  challenge: string
  solution: string
  result: string
  caseStudyUrl: string
  description?: string
  technologies?: string[]
  duration?: string
  industry?: string
  teamSize?: string
  metrics?: {
    label: string
    value: string
  }[]
}

// Sample case studies data (in a real app, this would come from a database or API)
const caseStudies: CaseStudy[] = [
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

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = use(params)
  const caseStudy = caseStudies.find(cs => cs.slug === slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link 
            href="/#case-studies" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              <span>{caseStudy.clientName}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{caseStudy.duration}</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">{caseStudy.clientName} Case Study</h1>
          <p className="text-xl text-muted-foreground">{caseStudy.description}</p>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <div className="aspect-[16/9] relative rounded-lg overflow-hidden bg-muted">
            <Image
              src={caseStudy.clientLogo}
              alt={`${caseStudy.clientName} case study`}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quote Section */}
            <section>
              <div className="bg-muted/40 rounded-lg p-6">
                <blockquote className="text-lg font-medium mb-4">
                  &ldquo;{caseStudy.quote}&rdquo;
                </blockquote>
                <cite className="text-sm text-muted-foreground">
                  — {caseStudy.author}, {caseStudy.role}
                </cite>
              </div>
            </section>

            {/* Challenge */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
            </section>

            {/* Solution */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
              <p className="text-muted-foreground leading-relaxed">{caseStudy.solution}</p>
            </section>

            {/* Results & Impact */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Results & Impact</h2>
              <div className="grid gap-3">
                {caseStudy.metrics?.map((metric, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{metric.label}: {metric.value}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Technologies & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies?.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">Client</h4>
                  <p className="text-sm text-muted-foreground">{caseStudy.clientName}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Duration</h4>
                  <p className="text-sm text-muted-foreground">{caseStudy.duration}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Industry</h4>
                  <p className="text-sm text-muted-foreground">{caseStudy.industry}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Team Size</h4>
                  <p className="text-sm text-muted-foreground">{caseStudy.teamSize}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA section */}
        <section className="mt-16">
          <div className="rounded-xl border p-6 md:p-8 bg-muted/40">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">Interested in a similar project?</h2>
                <p className="mt-1 text-sm text-muted-foreground">Let&apos;s discuss how we can help you achieve your localization goals.</p>
              </div>
              <div className="flex gap-3">
                <Button asChild variant="outline">
                  <Link href="/#case-studies">View More Case Studies</Link>
                </Button>
                <Button asChild>
                  <Link href="/contact">Start a Project</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}