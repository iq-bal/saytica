import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, CheckCircle } from "lucide-react"

type Project = {
  title: string
  slug: string
  image: string
  summary: string
  tags: string[]
  description: string
  challenge: string
  solution: string
  results: string[]
  technologies: string[]
  duration: string
  client: string
}

const projects: Project[] = [
  {
    title: "Global Education Platform Localization",
    slug: "global-education-platform-localization",
    image: "/case-studies/global-education.png",
    summary: "Localized a large-scale e-learning platform across 18 languages with consistent terminology, UI patterns, and QA flows.",
    tags: ["Localization", "EdTech", "Multilingual"],
    description: "A comprehensive localization project for a leading global education platform serving millions of students worldwide. The project involved translating and adapting content across 18 languages while maintaining educational quality and cultural relevance.",
    challenge: "The main challenge was maintaining consistency across multiple languages while ensuring educational content remained pedagogically sound and culturally appropriate for each target market.",
    solution: "We implemented a robust localization workflow with specialized educational translators, comprehensive glossaries, and rigorous QA processes. Our team worked closely with subject matter experts to ensure accuracy.",
    results: ["Successful launch in 18 markets", "95% user satisfaction rate", "30% increase in global user engagement", "Zero critical localization bugs post-launch"],
    technologies: ["Translation Management Systems", "Quality Assurance Tools", "Linguistic Testing", "Cultural Adaptation"],
    duration: "8 months",
    client: "Global EdTech Leader"
  },
  {
    title: "Enterprise Knowledge Base Translation",
    slug: "enterprise-knowledge-base-translation",
    image: "/case-studies/technology.png",
    summary: "Structured translation for 1,200+ articles with glossary alignment, review loops, and continuous delivery.",
    tags: ["Translation", "Technical", "Glossary"],
    description: "A large-scale technical documentation translation project for a Fortune 500 enterprise, involving the translation of over 1,200 knowledge base articles across multiple technical domains.",
    challenge: "Managing the complexity of technical terminology across different product lines while maintaining consistency and ensuring rapid delivery cycles to match the client's agile development process.",
    solution: "We developed a sophisticated glossary management system and implemented automated quality checks. Our team of technical translators worked in parallel with continuous integration workflows.",
    results: ["1,200+ articles translated", "99.8% terminology consistency", "50% reduction in translation turnaround time", "Seamless integration with client's CMS"],
    technologies: ["CAT Tools", "Terminology Management", "API Integration", "Automated QA"],
    duration: "6 months",
    client: "Fortune 500 Technology Company"
  },
  {
    title: "Voiceover & Subtitling for Product Demos",
    slug: "voiceover-subtitling-product-demos",
    image: "/case-studies/console.png",
    summary: "Produced multilingual voiceover and timed subtitles, integrated with a modern media pipeline and versioning.",
    tags: ["Media", "Voiceover", "Subtitles"],
    description: "A comprehensive multimedia localization project involving voiceover production and subtitling for a series of product demonstration videos across multiple languages and markets.",
    challenge: "Synchronizing voiceover timing with existing video content while maintaining natural speech patterns and ensuring subtitle readability across different languages with varying text lengths.",
    solution: "We established a professional recording studio network and developed custom timing algorithms for subtitle optimization. Our linguists worked closely with voice talent to ensure natural delivery.",
    results: ["25 languages supported", "Professional studio quality", "100% lip-sync accuracy", "Automated subtitle generation pipeline"],
    technologies: ["Professional Recording Studios", "Subtitle Timing Software", "Voice Talent Network", "Quality Control Systems"],
    duration: "4 months",
    client: "SaaS Platform Provider"
  },
  {
    title: "Custom Multilingual Dataset Collection",
    slug: "custom-multilingual-dataset-collection",
    image: "/case-studies/technology.png",
    summary: "Curated domain-specific text and audio datasets with consent management and metadata integrity checks.",
    tags: ["Datasets", "Curation", "Quality"],
    description: "A specialized data collection and curation project focused on building high-quality multilingual datasets for machine learning applications, with strict quality controls and ethical data practices.",
    challenge: "Ensuring data quality and consistency across multiple languages while maintaining strict ethical standards and consent management for all data sources.",
    solution: "We implemented a comprehensive data collection framework with built-in quality checks, consent tracking, and metadata validation. Our team of linguistic experts ensured cultural and contextual accuracy.",
    results: ["500K+ data points collected", "12 languages covered", "99.9% data quality score", "Full consent and compliance tracking"],
    technologies: ["Data Collection Platforms", "Quality Assurance Systems", "Consent Management", "Metadata Validation"],
    duration: "10 months",
    client: "AI Research Institute"
  },
  {
    title: "Website Localization for Regional Launch",
    slug: "website-localization-regional-launch",
    image: "/case-studies/global-education.png",
    summary: "Launched localized websites across APAC and EMEA using design tokens, slim components, and shadcn/ui defaults.",
    tags: ["Web", "Design Tokens", "APAC/EMEA"],
    description: "A comprehensive website localization project for a major product launch across APAC and EMEA regions, involving both linguistic translation and cultural adaptation of user interfaces.",
    challenge: "Adapting complex web interfaces for different cultural contexts while maintaining brand consistency and ensuring optimal user experience across diverse markets.",
    solution: "We leveraged modern design systems with flexible design tokens and component libraries to create culturally adapted interfaces. Our approach ensured consistency while allowing for regional customization.",
    results: ["15 regional markets launched", "40% increase in regional engagement", "Seamless brand consistency", "Mobile-first responsive design"],
    technologies: ["Design Systems", "Component Libraries", "Responsive Design", "Cultural UX Research"],
    duration: "5 months",
    client: "Global Consumer Brand"
  },
]

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div>
      {/* Back navigation */}
      <div className="mb-8">
        <Button asChild variant="ghost" className="pl-0">
          <Link href="/work" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Work
          </Link>
        </Button>
      </div>

      {/* Project header */}
      <header className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{project.title}</h1>
        <p className="text-lg text-muted-foreground mb-6">{project.summary}</p>
        
        {/* Project meta info */}
        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{project.client}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{project.duration}</span>
          </div>
        </div>
      </header>

      {/* Hero image */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-xl border bg-muted mb-12">
        <Image src={project.image} alt={project.title} fill className="object-cover" />
      </div>

      {/* Project content */}
      <div className="grid gap-12 lg:grid-cols-3">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          </section>

          {/* Challenge */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
            <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
          </section>

          {/* Results */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Results & Impact</h2>
            <div className="grid gap-3">
              {project.results.map((result, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{result}</span>
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
                {project.technologies.map((tech) => (
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
                <p className="text-sm text-muted-foreground">{project.client}</p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Duration</h4>
                <p className="text-sm text-muted-foreground">{project.duration}</p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Services</h4>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
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
                <Link href="/work">View More Work</Link>
              </Button>
              <Button asChild>
                <Link href="/contact">Start a Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}