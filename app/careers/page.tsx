"use client"
import { useMemo, useState } from "react"
import { Inter } from "next/font/google"
import { motion } from "framer-motion"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardAction } from "@/components/ui/card"
import { ArrowUpRight, Clock, MapPin } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

type Job = {
  id: string
  title: string
  description: string
  category: "Development" | "Design" | "Marketing" | "Operations"
  link: string
}

const jobs: Job[] = [
  {
    id: "product-designer",
    title: "Product Designer",
    description: "We're looking for a mid-level product designer to join our team.",
    category: "Design",
    link: "/careers/inhouse",
  },
  {
    id: "engineering-manager",
    title: "Engineering Manager",
    description: "We're looking for an experienced engineering manager to join our team.",
    category: "Development",
    link: "/careers/inhouse",
  },
  {
    id: "customer-success",
    title: "Customer Success Manager",
    description: "We're looking for a customer success manager to join our team.",
    category: "Operations",
    link: "/careers/freelance",
  },
]

const categories = [
  "View all",
  "Development",
  "Design",
  "Marketing",
  "Customer Service",
  "Operations",
  "Finance",
  "Management",
] as const

export default function CareersPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("View all")

  const filteredJobs = useMemo(() => {
    if (activeCategory === "View all") return jobs
    return jobs.filter((j) => j.category === activeCategory)
  }, [activeCategory])

  return (
    <div className={`${inter.className} relative`}>
      {/* Soft peach/pink gradient accent on the right */}
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-1/2">
        <div className="absolute right-[-10%] top-10 h-72 w-72 rounded-full bg-gradient-to-br from-[#FFD1C1] to-[#FFE8E2] blur-3xl opacity-60" />
      </div>

      <section className="max-w-5xl mx-auto px-4 md:px-6 pt-10 md:pt-14">
        {/* Badge */}
        <Badge variant="outline" className="rounded-full px-3 py-1 text-xs md:text-sm">
          We're hiring!
        </Badge>

        {/* Heading */}
        <h1 className="mt-4 text-5xl md:text-6xl font-bold tracking-tight">
          Be part of our mission
        </h1>
        {/* Subtext */}
        <p className="mt-3 text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg max-w-2xl">
          We're looking for passionate people to join us on our mission. We value
          flat hierarchies, clear communication, and full ownership and responsibility.
        </p>

        {/* Category filter chips */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isActive = cat === activeCategory
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="outline-none"
                aria-pressed={isActive}
              >
                <Badge
                  variant={isActive ? "secondary" : "outline"}
                  className={
                    isActive
                      ? "rounded-full bg-neutral-900 text-white px-3 py-1"
                      : "rounded-full px-3 py-1"
                  }
                >
                  {cat}
                </Badge>
              </button>
            )
          })}
        </div>
      </section>

      {/* Job listings */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 pb-12 md:pb-16">
        <div className="mt-8 md:mt-10 border-t divide-y">
          {filteredJobs.map((job, idx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="py-6 md:py-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">{job.title}</h3>
                  <p className="mt-1 text-gray-600 text-sm md:text-base">
                    {job.description}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <Badge variant="outline" className="rounded-full px-3 py-1 text-xs inline-flex items-center gap-1">
                      <MapPin className="size-3" /> 100% remote
                    </Badge>
                    <Badge variant="outline" className="rounded-full px-3 py-1 text-xs inline-flex items-center gap-1">
                      <Clock className="size-3" /> Full-time
                    </Badge>
                  </div>
                </div>
                <Link
                  href={job.link}
                  className="text-base md:text-lg text-foreground inline-flex items-center gap-1 hover:underline"
                >
                  Apply <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}