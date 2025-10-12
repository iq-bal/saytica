import Link from "next/link";
import { Image as ImageIcon, Globe, Download, Database, ArrowRight } from "lucide-react";
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
  resolution: string;
  items: string;
  contentDescription: string;
  fileFormat: string;
  applicationField: string;
  sensitiveItems: string;
  copyrightOwner: string;
  openSourceItems?: string;
  related?: Array<{ title: string; href: string }>;
};

const MDT_IM_SAMPLE: DatasetDetails = {
  id: "mdt-img-1",
  title: "MDT-IM-001 Multilingual Image Corpus",
  sourceUrl: "#",
  licenseNote: "Open Source Training Datasets Terms of Use apply to this dataset.",
  downloadUrl: "#",
  language: "English",
  resolution: "1024x1024",
  items: "2M images",
  contentDescription: "Diverse images across objects, scenes, and domains.",
  fileFormat: "JPEG, PNG",
  applicationField: "Computer Vision",
  sensitiveItems: "nil",
  copyrightOwner: "Magic Data",
  openSourceItems: "50k images",
  related: [
    { title: "MDT-IM-002 Mandarin Chinese Image Corpus", href: "/data/image-datasets/mdt-img-2" },
    { title: "MDT-IM-003 Medical Imaging Corpus", href: "/data/image-datasets/mdt-img-3" },
  ],
};

function getDatasetDetails(slug: string): DatasetDetails {
  if (["mdt-img-1", "mdt-im-001", "mdt-im-sample"].includes(slug.toLowerCase())) {
    return MDT_IM_SAMPLE;
  }
  return {
    ...MDT_IM_SAMPLE,
    id: slug.toLowerCase(),
    title: `${slug.toUpperCase()} Image Corpus`,
  };
}

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
};

function makeDummyListing(title: string, language = "English"): ListingDataset {
  return {
    id: "mdt-img-sample",
    title,
    openSource: true,
    samples: 2000,
    language,
    industry: "Smart Devices",
    application: "Image Classification",
    type: "Training Set",
    region: "USA",
  };
}

export default async function ImageDatasetDetailPage({
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
          <Link href="/data/image-datasets" className="hover:text-foreground">
            Image Datasets
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
          <ImageIcon className="w-4 h-4" /> Image Dataset Detail
        </div>

        <h1 className="mt-5 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          {d.title}
        </h1>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <Badge variant="secondary">{d.language}</Badge>
          <Badge variant="outline">Resolution: {d.resolution}</Badge>
          <Badge variant="outline">Items: {d.items}</Badge>
          {d.openSourceItems && (
            <Badge variant="outline">Open Source: {d.openSourceItems}</Badge>
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
                <th className="w-1/3 text-left p-3 font-medium">Content Description</th>
                <td className="p-3 text-muted-foreground">{d.contentDescription}</td>
              </tr>
              <tr className="border-b border-border">
                <th className="w-1/3 text-left p-3 font-medium">File Format</th>
                <td className="p-3 text-muted-foreground">{d.fileFormat}</td>
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
          const sample = makeDummyListing("MDT-SAMPLE Dummy Image Corpus", d.language);
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
              </CardContent>
            </Card>
          );
        })()}
      </section>

      {/* Related Datasets */}
      {d.related && d.related.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <h2 className="text-xl md:text-2xl font-semibold mb-5">Related Datasets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {d.related.map((r, idx) => {
              const langCycle = ["English", "Mandarin Chinese", "German"];
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
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <footer className="border-t border-border/60 py-8 px-6 text-center">
        <p className="text-sm text-muted-foreground mb-4">
          Can&apos;t find what you&rsquo;re looking for?{" "}
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