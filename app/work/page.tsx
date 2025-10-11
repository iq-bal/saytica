import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type Project = {
  title: string
  image: string
  summary: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: "Global Education Platform Localization",
    image: "/case-studies/global-education.png",
    summary: "Localized a large-scale e-learning platform across 18 languages with consistent terminology, UI patterns, and QA flows.",
    tags: ["Localization", "EdTech", "Multilingual"],
  },
  {
    title: "Enterprise Knowledge Base Translation",
    image: "/case-studies/technology.png",
    summary: "Structured translation for 1,200+ articles with glossary alignment, review loops, and continuous delivery.",
    tags: ["Translation", "Technical", "Glossary"],
  },
  {
    title: "Voiceover & Subtitling for Product Demos",
    image: "/case-studies/console.png",
    summary: "Produced multilingual voiceover and timed subtitles, integrated with a modern media pipeline and versioning.",
    tags: ["Media", "Voiceover", "Subtitles"],
  },
  {
    title: "Custom Multilingual Dataset Collection",
    image: "/case-studies/technology.png",
    summary: "Curated domain-specific text and audio datasets with consent management and metadata integrity checks.",
    tags: ["Datasets", "Curation", "Quality"],
  },
  {
    title: "Website Localization for Regional Launch",
    image: "/case-studies/global-education.png",
    summary: "Launched localized websites across APAC and EMEA using design tokens, slim components, and shadcn/ui defaults.",
    tags: ["Web", "Design Tokens", "APAC/EMEA"],
  },
]

export default function WorkPage() {
  return (
    <div>
      {/* Header aligned with global container from layout.tsx */}
      <header className="mt-8 mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Our Work</h1>
        <p className="mt-3 text-muted-foreground">Selected projects that reflect our approach and standards.</p>
      </header>

      {/* Projects grid */}
      <section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Card key={i} className="rounded-xl border bg-card hover:bg-muted/30 transition-colors">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl leading-tight">{p.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{p.summary}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg border bg-muted">
                  <Image src={p.image} alt={p.title} fill className="object-cover" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <Button asChild variant="default">
                  <Link href="/contact">Discuss a similar project</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#">View details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA band matching site philosophy */}
      <section className="my-16">
        <div className="rounded-xl border p-6 md:p-8 bg-muted/40">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">Have a project in mind?</h2>
              <p className="mt-1 text-sm text-muted-foreground">We align to your domain, languages, and quality thresholds.</p>
            </div>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}