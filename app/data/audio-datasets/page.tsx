"use client"
import { useMemo, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle, Database, Headphones, Layers, ShieldCheck, Globe, Search, Filter } from "lucide-react"

type Dataset = {
  id: string
  title: string
  openSource?: boolean
  samples: number
  language: string
  industry: string
  application: string
  type: "Training Set" | "Test Set"
  region: string
  topic: string
  speechStyle: "Conversational Speech" | "Read Speech" | "Noise"
  environment: string
  device: string
  audioPreview?: string
}

// Dummy dataset generator to populate listings
const makeDatasets = (count = 48): Dataset[] => {
  const languages = [
    "English",
    "Mandarin Chinese",
    "Japanese",
    "Korean",
    "Thai",
    "Spanish",
    "Hindi",
    "Filipino/Tagalog",
    "French",
    "German",
  ]
  const industries = ["Automotive", "Financial Services", "Smart Home", "Smart Devices", "Social Networks"]
  const applications = [
    "Consumer Robot Controls",
    "Automotive Virtual Assistant",
    "Voice Commerce & Consumer Service",
    "Smart Home Controls",
    "Security & Authentication",
    "Healthcare",
  ]
  const regions = [
    "USA",
    "China",
    "Japan",
    "Germany",
    "France",
    "Brazil",
    "Saudi Arabia",
    "Thailand",
    "Turkey",
    "India",
  ]
  const topics = [
    "Work",
    "Daily Life",
    "Education & Healthcare",
    "Science & Technology",
    "Smart Devices",
    "Travel",
  ]
  const devices = [
    "Smart Phone",
    "High Fidelity Mic",
    "Bluetooth headset",
    "Telephony",
    "Microphone",
  ]
  const envs = ["Indoor", "Outdoor", "In-Vehicle Environments", "Public Space", "Residential"]
  const styles: Dataset["speechStyle"][] = ["Conversational Speech", "Read Speech", "Noise"]

  return Array.from({ length: count }).map((_, i) => {
    const lang = languages[i % languages.length]
    const ind = industries[i % industries.length]
    const app = applications[i % applications.length]
    const reg = regions[i % regions.length]
    const top = topics[i % topics.length]
    const dev = devices[i % devices.length]
    const env = envs[i % envs.length]
    const style = styles[i % styles.length]
    const isOpen = i % 7 === 0
    const isTraining = i % 2 === 0
    return {
      id: `mdt-${i + 1}`,
      title: `MDT-${String(i + 1).padStart(3, "0")} ${lang} ${style} Recognition Corpus`,
      openSource: isOpen,
      samples: 1000 + i * 37,
      language: lang,
      industry: ind,
      application: app,
      type: isTraining ? "Training Set" : "Test Set",
      region: reg,
      topic: top,
      speechStyle: style,
      environment: env,
      device: dev,
      audioPreview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    }
  })
}

const INDUSTRIES = ["Automotive", "Financial Services", "Social Networks", "Smart Home", "Smart Devices"] as const
const DATA_TYPES = ["All Datasets", "Audio Datasets", "Text Datasets", "Image Datasets", "Lex"] as const
const LANGUAGES = [
  "Mandarin Chinese",
  "English",
  "Chinese Dialects",
  "Code-Mixing",
  "Filipino/Tagalog",
  "Japanese",
  "Korean",
  "Thai",
  "Spanish",
  "Hindi",
  "Bahasa Indonesia",
  "Russian",
  "Malay",
  "Turkish",
  "Arabic",
  "German",
  "Portuguese",
  "Urdu",
  "Italian",
  "French",
  "Swedish",
] as const
const APPLICATIONS = [
  "Consumer Robot Controls",
  "Automotive Virtual Assistant",
  "Voice Commerce & Consumer Service",
  "Smart Home Controls",
  "Security & Authentication",
  "Healthcare",
  "Smartphones / Wearables",
] as const
const TYPES = ["Training Set", "Test Set"] as const
const REGIONS = [
  "China",
  "UAE",
  "Egypt",
  "Pakistan",
  "Brazil",
  "Germany",
  "Russia",
  "Kazakhstan",
  "Ukraine",
  "France",
  "Philippines",
  "Korea",
  "Malaysia",
  "USA",
  "Japan",
  "Saudi Arabia",
  "Thailand",
  "Turkey",
  "Spain",
  "Singapore",
  "Italy",
  "India",
  "Indonesia",
  "Sweden",
] as const
const TOPICS = [
  "Work",
  "Art",
  "Business & Economy",
  "Career Development",
  "Climate & Environment",
  "Culture",
  "Daily Life",
  "Education & Healthcare",
  "Entertainment",
  "Family Life",
  "Health",
  "Humanities",
  "Interpersonal Relation",
  "Military",
  "Personality",
  "Politics & Law",
  "Science & Technology",
  "Smart Devices",
  "Sport",
  "Study",
  "Travel",
] as const
const STYLES = ["Conversational Speech", "Read Speech", "Noise"] as const
const ENVIRONMENTS = [
  "Indoor",
  "Outdoor",
  "In-Vehicle Environments",
  "Professional TTS Studio",
  "Residential",
  "Public Space",
] as const
const DEVICES = [
  "Telephony",
  "Recorder",
  "Microphone",
  "Desktop",
  "High Fidelity Mic",
  "Smart Phone",
  "Bluetooth headset",
] as const

export default function AudioDatasetsPage() {
  const [allDatasets] = useState<Dataset[]>(() => makeDatasets(72))
  const [query, setQuery] = useState("")
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null)
  const [activeTypeToggle, setActiveTypeToggle] = useState<(typeof DATA_TYPES)[number]>("Audio Datasets")
  const [activeLanguage, setActiveLanguage] = useState<string | null>(null)
  const [activeApplication, setActiveApplication] = useState<string | null>(null)
  const [activeType, setActiveType] = useState<(typeof TYPES)[number] | null>(null)
  const [activeRegion, setActiveRegion] = useState<string | null>(null)
  const [activeTopic, setActiveTopic] = useState<string | null>(null)
  const [activeStyle, setActiveStyle] = useState<(typeof STYLES)[number] | null>(null)
  const [activeEnvironment, setActiveEnvironment] = useState<string | null>(null)
  const [activeDevice, setActiveDevice] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 12
  const [showFilters, setShowFilters] = useState(false)

  const filtered = useMemo(() => {
    let list = allDatasets
    // Data type toggle is informational here; we’re focused on audio datasets
    if (activeIndustry) list = list.filter((d) => d.industry === activeIndustry)
    if (activeLanguage) list = list.filter((d) => d.language === activeLanguage)
    if (activeApplication) list = list.filter((d) => d.application === activeApplication)
    if (activeType) list = list.filter((d) => d.type === activeType)
    if (activeRegion) list = list.filter((d) => d.region === activeRegion)
    if (activeTopic) list = list.filter((d) => d.topic === activeTopic)
    if (activeStyle) list = list.filter((d) => d.speechStyle === activeStyle)
    if (activeEnvironment) list = list.filter((d) => d.environment === activeEnvironment)
    if (activeDevice) list = list.filter((d) => d.device === activeDevice)
    if (query.trim()) {
      const q = query.toLowerCase()
      list = list.filter((d) =>
        [
          d.title,
          d.language,
          d.industry,
          d.application,
          d.type,
          d.region,
          d.topic,
          d.speechStyle,
          d.environment,
          d.device,
        ]
          .join(" ")
          .toLowerCase()
          .includes(q)
      )
    }
    return list
  }, [
    allDatasets,
    query,
    activeIndustry,
    activeLanguage,
    activeApplication,
    activeType,
    activeRegion,
    activeTopic,
    activeStyle,
    activeEnvironment,
    activeDevice,
  ])

  const total = filtered.length
  const totalPages = Math.max(1, Math.ceil(total / pageSize))
  const pageItems = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  const resetPagination = () => setCurrentPage(1)

  const Pill = ({
    label,
    active,
    onClick,
  }: {
    label: string
    active: boolean
    onClick: () => void
  }) => (
    <button
      onClick={() => {
        onClick()
        resetPagination()
      }}
      className="outline-none"
      aria-pressed={active}
    >
      <Badge
        variant={active ? "secondary" : "outline"}
        className={active ? "rounded-full bg-neutral-900 text-white px-3 py-1" : "rounded-full px-3 py-1"}
      >
        {label}
      </Badge>
    </button>
  )

  const FilterGroup = ({
    label,
    items,
    activeValue,
    onToggle,
    limit = 12,
  }: {
    label: string
    items: readonly string[]
    activeValue: string | null
    onToggle: (v: string | null) => void
    limit?: number
  }) => {
    const [expanded, setExpanded] = useState(false)
    const visible = expanded ? items : items.slice(0, limit)
    return (
      <div>
        <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">{label}</div>
        <div className="flex flex-wrap gap-2 items-center">
          {visible.map((i) => (
            <Pill key={i} label={i} active={activeValue === i} onClick={() => onToggle(activeValue === i ? null : i)} />
          ))}
          {items.length > limit && (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="text-xs underline text-muted-foreground"
            >
              {expanded ? "Show less" : "Show more"}
            </button>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Page hero */}
      <section className="pt-10 md:pt-14">
        <Badge variant="outline" className="rounded-full px-3 py-1 text-xs md:text-sm inline-flex items-center gap-2">
          <Headphones className="h-3 w-3" /> Audio Datasets
        </Badge>
        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Explore Speech & Audio Corpora</h1>
        <p className="mt-3 text-muted-foreground leading-relaxed text-sm md:text-base lg:text-lg max-w-2xl">
          Filter high-quality multilingual audio datasets across industries, applications, and regions.
        </p>

        {/* Data type toggle */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {DATA_TYPES.map((t) => (
            <Pill key={t} label={t} active={t === activeTypeToggle} onClick={() => setActiveTypeToggle(t)} />
          ))}
        </div>
      </section>

      {/* Search */}
      <section className="mt-6">
        <div className="flex items-center gap-2 max-w-xl">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                resetPagination()
              }}
              placeholder="Search datasets by name, language, region..."
              className="pl-9"
              aria-label="Search datasets"
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters((v) => !v)}
            aria-expanded={showFilters}
            aria-controls="filters-section"
            className="shrink-0"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </section>

      {/* Filters */}
      {showFilters && (
      <section id="filters-section" className="mt-8 md:mt-10 space-y-6">
        {/* Primary filters */}
        <FilterGroup
          label="Industry"
          items={INDUSTRIES}
          activeValue={activeIndustry}
          onToggle={(v) => setActiveIndustry(v)}
          limit={8}
        />

        <FilterGroup
          label="Language"
          items={LANGUAGES}
          activeValue={activeLanguage}
          onToggle={(v) => setActiveLanguage(v)}
          limit={12}
        />

        <FilterGroup
          label="Application / Use-Case"
          items={APPLICATIONS}
          activeValue={activeApplication}
          onToggle={(v) => setActiveApplication(v)}
          limit={8}
        />

        {/* Secondary filters collapsed by default */}
        <details className="mt-2">
          <summary className="cursor-pointer text-sm text-muted-foreground">More Filters</summary>
          <div className="mt-4 space-y-6">
            <FilterGroup
              label="Type"
              items={TYPES}
              activeValue={activeType ?? null}
              onToggle={(v) => setActiveType(v as (typeof TYPES)[number] | null)}
              limit={6}
            />

            <FilterGroup
              label="Region / Geography"
              items={REGIONS}
              activeValue={activeRegion}
              onToggle={(v) => setActiveRegion(v)}
              limit={10}
            />

            <FilterGroup
              label="Topic"
              items={TOPICS}
              activeValue={activeTopic}
              onToggle={(v) => setActiveTopic(v)}
              limit={10}
            />

            <FilterGroup
              label="Speech Style"
              items={STYLES}
              activeValue={activeStyle ?? null}
              onToggle={(v) => setActiveStyle(v as (typeof STYLES)[number] | null)}
              limit={6}
            />

            <FilterGroup
              label="Recording Environment"
              items={ENVIRONMENTS}
              activeValue={activeEnvironment}
              onToggle={(v) => setActiveEnvironment(v)}
              limit={8}
            />

            <FilterGroup
              label="Recording Device"
              items={DEVICES}
              activeValue={activeDevice}
              onToggle={(v) => setActiveDevice(v)}
              limit={8}
            />
          </div>
        </details>
      </section>
      )}

      {/* Counts */}
      <section className="mt-6">
        <div className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{total}</span> datasets are found
        </div>
      </section>

      {/* Listings */}
      <section className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pageItems.map((d) => (
            <Card key={d.id} className="rounded-xl border border-border h-full flex flex-col">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-base md:text-lg font-semibold leading-tight">
                    {d.title}
                  </CardTitle>
                  <Link href={`/datasets/audio/${d.id}`} className="text-sm inline-flex items-center gap-1 hover:underline">
                    View Detail <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  {d.openSource && (
                    <Badge variant="secondary" className="rounded-full px-2 py-0.5 text-xs">Open-Source</Badge>
                  )}
                  <Badge variant="outline" className="rounded-full px-2 py-0.5 text-xs inline-flex items-center gap-1">
                    <Database className="h-3 w-3" /> View : {d.samples}
                  </Badge>
                  <Badge variant="outline" className="rounded-full px-2 py-0.5 text-xs inline-flex items-center gap-1">
                    <Globe className="h-3 w-3" /> {d.language}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <div>Industry: <span className="text-foreground">{d.industry}</span></div>
                  <div>Application: <span className="text-foreground">{d.application}</span></div>
                  <div>Type: <span className="text-foreground">{d.type}</span></div>
                  <div>Region: <span className="text-foreground">{d.region}</span></div>
                </div>
                <audio src={d.audioPreview} controls className="w-full mt-auto" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => {
            const page = i + 1
            const active = page === currentPage
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={active ? "rounded-full bg-neutral-900 text-white px-3 py-1 text-sm" : "rounded-full px-3 py-1 text-sm border"}
              >
                {page}
              </button>
            )
          })}
        </div>
      </section>

      {/* Why MD Datasets */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Why MD Datasets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="rounded-xl border border-border">
            <CardContent className="p-6 space-y-2">
              <ShieldCheck className="h-5 w-5" />
              <div className="font-semibold">Full Compliance</div>
              <p className="text-sm text-muted-foreground">ISO/IEC 27001 & ISO/IEC 27701:2019</p>
            </CardContent>
          </Card>
          <Card className="rounded-xl border border-border">
            <CardContent className="p-6 space-y-2">
              <Layers className="h-5 w-5" />
              <div className="font-semibold">Multiple Dimensions</div>
              <p className="text-sm text-muted-foreground">Audio, text, image, video</p>
            </CardContent>
          </Card>
          <Card className="rounded-xl border border-border">
            <CardContent className="p-6 space-y-2">
              <Headphones className="h-5 w-5" />
              <div className="font-semibold">Extensive Scope</div>
              <p className="text-sm text-muted-foreground">Conversational, scripted, spontaneous speech</p>
            </CardContent>
          </Card>
          <Card className="rounded-xl border border-border">
            <CardContent className="p-6 space-y-2">
              <CheckCircle className="h-5 w-5" />
              <div className="font-semibold">High Accuracy</div>
              <p className="text-sm text-muted-foreground">Quality assurance built in</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA / Contact */}
      <section className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t p-6">
        <div className="text-sm text-muted-foreground">
          No related data? <Link href="/contact" className="hover:underline">Contact us</Link>
        </div>
        <Link href="/contact" className="inline-flex">
          <Button className="rounded-full px-5" aria-label="Request quote for datasets">
            Request quote <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </section>
    </div>
  )
}