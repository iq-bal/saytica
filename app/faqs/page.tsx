"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { MessageCircle } from "lucide-react"

type FaqItem = { question: string; answer: string }

const categories = [
  "General Questions",
  "Saytica Services",
  "Registration & Account",
  "Data Solutions & Datasets",
  "Using the Website",
] as const

const faqContent: Record<(typeof categories)[number], FaqItem[]> = {
  "General Questions": [
    {
      question: "What is Saytica and how does it work?",
      answer:
        "Saytica is a language and data solutions company. We help teams localize content and source multilingual datasets with transparent processes, quality assurance, and enterprise-ready delivery.",
    },
    {
      question: "What makes Saytica different?",
      answer:
        "We combine strong in-house expertise with curated networks, modern tooling, and review flows. Our UI and delivery pipelines prioritize clarity, consistency, and speed.",
    },
    {
      question: "Which regions and languages do you support?",
      answer:
        "We support a wide range of languages and regions across Asia, Europe, the Americas, and MENA. Get in touch for specific coverage.",
    },
  ],
  "Saytica Services": [
    {
      question: "Do you offer translation and localization services?",
      answer:
        "Yes. We provide end-to-end translation and localization for websites, apps, games, eLearning, documents, and media (including voiceover).",
    },
    {
      question: "Can you collect and curate datasets?",
      answer:
        "Yes. We source, collect, and curate multilingual datasets (audio, text, image, lex resources) with consent management and quality checks.",
    },
    {
      question: "How do you ensure quality?",
      answer:
        "We apply standardized guidelines, multi-stage review, and validation tailored to each domain. For datasets, we include sampling, audits, and metadata integrity checks.",
    },
  ],
  "Registration & Account": [
    {
      question: "Do I need an account to contact the team?",
      answer:
        "No. You can reach us directly via the contact page or the support form below. Accounts are needed only for specific workflows.",
    },
    {
      question: "Can I manage my project preferences?",
      answer:
        "Yes. Once onboarded, you can share preferred languages, domains, style guides, and delivery formats. We align our pipelines to your requirements.",
    },
  ],
  "Data Solutions & Datasets": [
    {
      question: "Do you have ready-to-use datasets?",
      answer:
        "We provide catalog pages for Audio, Text, Image, and Lex datasets. You can browse, search, and request details for any dataset.",
    },
    {
      question: "Can you create a custom dataset for my use-case?",
      answer:
        "Absolutely. We tailor collection to your domain, language mix, consent needs, and quality thresholds.",
    },
    {
      question: "How do previews and samples work?",
      answer:
        "Dataset cards include metadata and, where applicable, sample previews. Reach out for extended samples under appropriate terms.",
    },
  ],
  "Using the Website": [
    {
      question: "How do I find datasets quickly?",
      answer:
        "Use the search bar and informational chips on dataset pages to narrow by language, region, type, and topic.",
    },
    {
      question: "Is dark mode supported?",
      answer:
        "Yes. The site supports dark and light themes. Your preference applies across pages, including FAQs and dataset listings.",
    },
  ],
}

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>(categories[0])

  return (
    <div>
      {/* Header Section */}
      <header className="mt-8 mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h1>
        {/* Optional subtitle: <p className="mt-3 text-muted-foreground">Find answers to common questions about Saytica.</p> */}
      </header>

      {/* FAQ Section */}
      <section>
        <div className="grid md:grid-cols-[250px_1fr] gap-8">
          {/* Sidebar */}
          <aside className="border-r pr-6">
            <nav aria-label="FAQ categories" className="space-y-1">
              {categories.map((cat) => {
                const isActive = cat === activeCategory
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={
                      "block w-full text-left py-2 text-sm cursor-pointer transition-colors duration-200 " +
                      (isActive
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground")
                    }
                    aria-current={isActive ? "page" : undefined}
                  >
                    {cat}
                  </button>
                )
              })}
            </nav>
          </aside>

          {/* FAQ Content */}
          <section className="space-y-2">
            <Accordion type="single" collapsible className="space-y-3">
              {faqContent[activeCategory].map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="rounded-sm border bg-card hover:bg-muted/30 transition-colors"
                >
                  <AccordionTrigger className="px-2 py-1.5 text-sm md:text-base leading-tight">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-2 text-sm leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>


        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-muted rounded-2xl border p-6 md:p-8 my-16">
        <h2 className="text-2xl font-semibold text-center mb-6">Still Have Questions?</h2>
        <form className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="text-sm font-medium text-muted-foreground" htmlFor="firstName">First name</label>
            <Input id="firstName" name="firstName" placeholder="e.g. Alex" autoComplete="given-name" required className="rounded-lg p-2.5 text-sm" />
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground" htmlFor="lastName">Last name</label>
            <Input id="lastName" name="lastName" placeholder="e.g. Morgan" autoComplete="family-name" required className="rounded-lg p-2.5 text-sm" />
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground" htmlFor="email">Email</label>
            <Input id="email" name="email" type="email" placeholder="you@company.com" autoComplete="email" required className="rounded-lg p-2.5 text-sm" />
            <p className="mt-1 text-xs text-muted-foreground">We’ll only use this to reply to your request.</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground" htmlFor="phone">Phone</label>
            <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" autoComplete="tel" className="rounded-lg p-2.5 text-sm" />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-muted-foreground" htmlFor="message">Message</label>
            <Textarea id="message" name="message" placeholder="Tell us how we can help" rows={4} required className="rounded-lg p-2.5 text-sm min-h-[120px]" />
          </div>
          <Button type="submit" variant="default" className="mt-2 md:col-span-2 w-full md:w-auto">Submit</Button>
        </form>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Support"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  )
}