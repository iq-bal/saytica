import Link from "next/link";
import { Headphones, Globe, Download, Database, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type DatasetDetails = {
  id: string;
  title: string;
  sourceUrl: string;
  licenseNote: string;
  downloadUrl: string;
  language: string;
  recordingEnvironment: string;
  duration: string;
  contentDescription: string;
  fileFormat: string;
  speechParameters: string;
  equipment: string;
  applicationField: string;
  sensitiveItems: string;
  copyrightOwner: string;
  openSourceDuration?: string;
  audioPreview?: string;
  related?: Array<{ title: string; href: string }>;
};

// Example dataset (you can fetch dynamically)
const MDT_AB012: DatasetDetails = {
  id: "mdt-ab012",
  title: "MDT-AB012 Mandarin Chinese Conversational Speech Recognition Corpus",
  sourceUrl: "#",
  licenseNote: "Open Source Training Datasets Terms of Use apply to this dataset.",
  downloadUrl: "#",
  language: "Mandarin Chinese",
  recordingEnvironment: "Indoor Environments",
  duration: "1,000 h",
  contentDescription: "Spontaneous Conversation Based on a Given Topic",
  fileFormat: "WAV, TXT",
  speechParameters: "16 kHz / Mono / 16 bits",
  equipment: "Mobile",
  applicationField: "ASR",
  sensitiveItems: "nil",
  copyrightOwner: "Magic Data",
  openSourceDuration: "4.21 h",
  related: [
    {
      title: "MDT-AF054 Tianjin Dialect Conversational Speech Corpus",
      href: "/data/audio-datasets/mdt-af054",
    },
    {
      title:
        "MDT-AE046 Guangzhou Cantonese Conversational Speech Corpus—Telephony",
      href: "/data/audio-datasets/mdt-ae046",
    },
  ],
};

function getDatasetDetails(slug: string): DatasetDetails {
  if (["mdt-ab012", "mdt-asr-b012", "mdt-2"].includes(slug.toLowerCase())) {
    return MDT_AB012;
  }
  return MDT_AB012; // fallback
}

// Dummy listing dataset card generator for coherent related/sample sections
type ListingDataset = {
  id: string;
  title: string;
  openSource?: boolean;
  samples: number;
  language: string;
  industry: string;
  application: string;
  type: "Training Set" | "Test Set";
  region: string;
  audioPreview?: string;
};

function makeDummyListing(title: string, language = "Mandarin Chinese"): ListingDataset {
  return {
    id: "mdt-sample",
    title,
    openSource: true,
    samples: 1234,
    language,
    industry: "Smart Home",
    application: "Smart Home Controls",
    type: "Training Set",
    region: "China",
    audioPreview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  };
}

export default async function AudioDatasetDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = getDatasetDetails(slug);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-muted/20">
      {/* Sticky Breadcrumb */}
      <div className="sticky top-0 z-10 backdrop-blur-md border-b border-border/50 px-4 py-3 flex items-center justify-between">
        <nav className="text-sm text-muted-foreground flex items-center space-x-2">
          <Link href="/data/audio-datasets" className="hover:text-foreground">
            Audio Datasets
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">{d.id.toUpperCase()}</span>
        </nav>

        <div className="flex items-center space-x-2">
          <Link href={d.sourceUrl} target="_blank">
            <Button variant="outline" size="sm" className="rounded-full">
              <Globe className="w-4 h-4 mr-1" /> Source
            </Button>
          </Link>
          <Link href={d.downloadUrl} target="_blank">
            <Button size="sm" className="rounded-full">
              <Download className="w-4 h-4 mr-1" /> Download
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1 text-sm">
          <Headphones className="w-4 h-4" /> Audio Dataset Detail
        </div>

        <h1 className="mt-5 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          {d.title}
        </h1>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <Badge variant="secondary">{d.language}</Badge>
          <Badge variant="outline">{d.recordingEnvironment}</Badge>
          <Badge variant="outline">Duration: {d.duration}</Badge>
          {d.openSourceDuration && (
            <Badge variant="outline">Open Source: {d.openSourceDuration}</Badge>
          )}
        </div>
      </section>

      {/* Dataset Information (table layout) */}
      <section className="max-w-6xl mx-auto px-6 mb-12">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">Dataset Information</h2>
        <div className="overflow-x-auto rounded-xl border border-border bg-card/60 backdrop-blur">
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-border">
                <th className="w-1/3 text-left p-3 font-medium">License / Open Source Notice</th>
                <td className="p-3 text-muted-foreground">{d.licenseNote}</td>
              </tr>
              <tr className="border-b border-border">
                <th className="w-1/3 text-left p-3 font-medium">Recording Environment</th>
                <td className="p-3 text-muted-foreground">{d.recordingEnvironment}</td>
              </tr>
              <tr className="border-b border-border">
                <th className="w-1/3 text-left p-3 font-medium">Duration</th>
                <td className="p-3 text-muted-foreground">{d.duration}</td>
              </tr>
              <tr className="border-b border-border">
                <th className="w-1/3 text-left p-3 font-medium">Data Content</th>
                <td className="p-3 text-muted-foreground">{d.contentDescription}</td>
              </tr>
              <tr className="border-b border-border">
                <th className="w-1/3 text-left p-3 font-medium">File Format</th>
                <td className="p-3 text-muted-foreground">{d.fileFormat}</td>
              </tr>
              <tr className="border-b border-border">
                <th className="w-1/3 text-left p-3 font-medium">Speech Parameters</th>
                <td className="p-3 text-muted-foreground">{d.speechParameters}</td>
              </tr>
              <tr className="border-b border-border">
                <th className="w-1/3 text-left p-3 font-medium">Recording Equipment</th>
                <td className="p-3 text-muted-foreground">{d.equipment}</td>
              </tr>
              <tr className="border-b border-border">
                <th className="w-1/3 text-left p-3 font-medium">Field of Application</th>
                <td className="p-3 text-muted-foreground">{d.applicationField}</td>
              </tr>
              <tr className="border-b border-border">
                <th className="w-1/3 text-left p-3 font-medium">Data Sensitive Items</th>
                <td className="p-3 text-muted-foreground">{d.sensitiveItems}</td>
              </tr>
              <tr className="border-b border-border">
                <th className="w-1/3 text-left p-3 font-medium">Copyright Owner</th>
                <td className="p-3 text-muted-foreground">{d.copyrightOwner}</td>
              </tr>
              {d.openSourceDuration && (
                <tr>
                  <th className="w-1/3 text-left p-3 font-medium">Open Source Duration</th>
                  <td className="p-3 text-muted-foreground">{d.openSourceDuration}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Sample: show a dummy dataset card */}
      <section className="max-w-6xl mx-auto px-6 mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-2">
          <Database className="w-5 h-5" /> Sample
        </h2>
        {(() => {
          const sample = makeDummyListing("MDT-SAMPLE Dummy Conversational Speech Corpus", d.language);
          return (
            <Card className="rounded-xl border border-border h-full">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-base md:text-lg font-semibold leading-tight">
                    {sample.title}
                  </CardTitle>
                  <span className="text-sm inline-flex items-center gap-1 text-muted-foreground">
                    Sample <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  {sample.openSource && (
                    <Badge variant="secondary" className="rounded-full px-2 py-0.5 text-xs">Open-Source</Badge>
                  )}
                  <Badge variant="outline" className="rounded-full px-2 py-0.5 text-xs inline-flex items-center gap-1">
                    <Database className="h-3 w-3" /> View : {sample.samples}
                  </Badge>
                  <Badge variant="outline" className="rounded-full px-2 py-0.5 text-xs inline-flex items-center gap-1">
                    <Globe className="h-3 w-3" /> {sample.language}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <div>Industry: <span className="text-foreground">{sample.industry}</span></div>
                  <div>Application: <span className="text-foreground">{sample.application}</span></div>
                  <div>Type: <span className="text-foreground">{sample.type}</span></div>
                  <div>Region: <span className="text-foreground">{sample.region}</span></div>
                </div>
                <audio src={sample.audioPreview} controls className="w-full mt-auto" />
              </CardContent>
            </Card>
          );
        })()}
      </section>

      {/* Related Datasets (use listing cards for coherence) */}
      {d.related && d.related.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <h2 className="text-xl md:text-2xl font-semibold mb-5">Related Datasets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {d.related.map((r, idx) => {
              const langCycle = ["Mandarin Chinese", "Cantonese", "English"];
              const rel = makeDummyListing(r.title, langCycle[idx % langCycle.length]);
              return (
                <Card key={idx} className="rounded-xl border border-border h-full flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-3">
                      <CardTitle className="text-base md:text-lg font-semibold leading-tight">
                        {rel.title}
                      </CardTitle>
                      <Link href={r.href} className="text-sm inline-flex items-center gap-1 hover:underline">
                        View Detail <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      {rel.openSource && (
                        <Badge variant="secondary" className="rounded-full px-2 py-0.5 text-xs">Open-Source</Badge>
                      )}
                      <Badge variant="outline" className="rounded-full px-2 py-0.5 text-xs inline-flex items-center gap-1">
                        <Database className="h-3 w-3" /> View : {rel.samples}
                      </Badge>
                      <Badge variant="outline" className="rounded-full px-2 py-0.5 text-xs inline-flex items-center gap-1">
                        <Globe className="h-3 w-3" /> {rel.language}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                      <div>Industry: <span className="text-foreground">{rel.industry}</span></div>
                      <div>Application: <span className="text-foreground">{rel.application}</span></div>
                      <div>Type: <span className="text-foreground">{rel.type}</span></div>
                      <div>Region: <span className="text-foreground">{rel.region}</span></div>
                    </div>
                    <audio src={rel.audioPreview} controls className="w-full mt-auto" />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      )}

      {/* Why Choose MD Datasets section removed for coherence */}

      {/* Footer CTA */}
      <footer className="border-t border-border/60 py-8 px-6 text-center">
        <p className="text-sm text-muted-foreground mb-4">
          Can't find what you’re looking for?{" "}
          <Link href="/contact" className="underline hover:text-foreground">
            Contact us
          </Link>
        </p>
        <Button asChild className="rounded-full px-6">
          <Link href="/contact">Request a Quote</Link>
        </Button>
      </footer>
    </div>
  );
}
