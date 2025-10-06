import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Play, Star } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="bg-background text-foreground">
      
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-16 space-y-16">
        {/* Hero Section */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Fuel Your Business with Advanced Tech</h1>
            <p className="text-muted-foreground max-w-xl">
              Leverage the power of advanced technology to streamline operations and drive growth. Stay ahead with innovative solutions built for the future.
            </p>
            <div className="flex items-center gap-4">
              <Button className="rounded-full px-5">Get Started for Free</Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star size={16} className="text-primary" />
                <span>4.5 ⭐</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <Avatar className="ring-2 ring-background">
                  <AvatarImage src="/testimonials/emily.avif" alt="Emily" />
                  <AvatarFallback>EM</AvatarFallback>
                </Avatar>
                <Avatar className="ring-2 ring-background">
                  <AvatarImage src="/testimonials/james.avif" alt="James" />
                  <AvatarFallback>JA</AvatarFallback>
                </Avatar>
                <Avatar className="ring-2 ring-background">
                  <AvatarImage src="/testimonials/lisa.avif" alt="Lisa" />
                  <AvatarFallback>LI</AvatarFallback>
                </Avatar>
              </div>
              <span className="text-sm text-muted-foreground">12k+ Users</span>
            </div>
          </div>
          {/* Right */}
          <Card className="rounded-xl border border-border shadow-sm">
            <CardContent className="p-10">
              <div className="aspect-square w-full bg-muted rounded-xl" />
            </CardContent>
          </Card>
        </section>

        {/* Logo Strip */}
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {["TaskUs", "Taskrabbit", "Smartcat", "MailFlow", "ZenOps", "CloudKit"].map((l) => (
            <div key={l} className="flex items-center justify-center h-12 rounded-md bg-muted text-muted-foreground border border-border">
              <span className="text-sm">{l}</span>
            </div>
          ))}
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { k: "15k", v: "Global Downloads" },
            { k: "$20M", v: "Return Investment" },
            { k: "200+", v: "5-Star Reviews" },
            { k: "500", v: "Projects Completed" },
          ].map((s) => (
            <Card key={s.v} className="rounded-xl border border-border shadow-sm">
              <CardContent className="p-6">
                <div className="text-3xl font-bold tracking-tight">{s.k}</div>
                <div className="text-sm text-muted-foreground">{s.v}</div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Testimonial Quote */}
        <section>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto">
            “Struggling to stay organized, our users found the perfect solution with TaskZen...”
          </p>
        </section>

        {/* Discover Section (Video Hero) */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Discover our TaskZen</h2>
          <p className="text-muted-foreground max-w-2xl">
            Unleash the full potential of task management with TaskZen...
          </p>
          <div className="relative rounded-xl overflow-hidden border border-border bg-muted">
            <div className="aspect-video w-full" />
            <button
              aria-label="Play video"
              className="absolute inset-0 m-auto h-14 w-14 rounded-full bg-background/80 backdrop-blur flex items-center justify-center shadow-sm border border-border hover:scale-105 transition"
            >
              <Play className="text-foreground" size={22} />
            </button>
          </div>
        </section>

        {/* Faces of Innovation (Team Section) */}
        <section className="space-y-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">The Faces of Innovation</h2>
              <p className="text-muted-foreground max-w-2xl">
                Leverage the power of advanced technology to streamline operations and drive growth. Stay ahead with innovative solutions built for the future.
              </p>
            </div>
            <Button variant="outline" className="rounded-full">View All</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Annette Black", role: "Founder" },
              { name: "Courtney Henry", role: "Web Designer" },
              { name: "Jacob Jones", role: "UI Designer" },
              { name: "Eleanor Pena", role: "Product Manager" },
              { name: "Robert Fox", role: "Engineer" },
              { name: "Jenny Wilson", role: "Marketing Lead" },
            ].map((t) => (
              <Card key={t.name} className="rounded-xl border border-border shadow-sm hover:shadow-md hover:scale-[1.01] transition">
                <CardContent className="p-6 space-y-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="" alt={t.name} />
                    <AvatarFallback>{t.name.split(" ")[0].slice(0, 1)}{t.name.split(" ")[1]?.slice(0, 1)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials / Reviews Section */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Loved by teams around the world</h2>
            <p className="text-muted-foreground">10k+ Reviews</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="rounded-xl border border-border shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="" alt="Reviewer" />
                      <AvatarFallback>RV</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Reviewer Name</div>
                      <div className="flex items-center text-primary">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star key={idx} size={14} className="fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    “An incredible product that keeps our teams aligned and productive.”
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </section>
  );
}