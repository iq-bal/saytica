import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Play, Star, ArrowRightCircle, User } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="bg-background text-foreground">
      
      <main className="w-full py-16 space-y-16">
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

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: Heading */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              <span className="block">Empowering your</span>
              <span className="block">success</span>
              <span className="block text-muted-foreground">with our</span>
              <span className="block text-muted-foreground">solutions</span>
            </h2>
          </div>

          {/* Right: 2x2 Stats Grid */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-10">
            <div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">15k</div>
              <div className="mt-2 text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground">Global Downloads</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">$20M</div>
              <div className="mt-2 text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground">Return Investment</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">200+</div>
              <div className="mt-2 text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground">5-Star Reviews</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">500</div>
              <div className="mt-2 text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground">Projects Completed</div>
            </div>
          </div>
        </section>

        {/* Testimonial Quote */}
        <section>
          <p className="max-w-6xl text-left text-xl md:text-2xl leading-relaxed">
            <span className=" text-foreground font-medium">Struggling to stay organized, our users found the perfect solution with TaskZen.</span>
            <span className=" text-foreground font-medium">By simplifying task management and boosting team collaboration, they’ve achieved more in less time.</span>
            <span className="block text-muted-foreground">Join thousands who’ve transformed chaos into productivity</span>
          </p>
        </section>

        {/* Discover Section (Video Hero) */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span>Discover our </span>
              <span className="text-muted-foreground">TaskZen</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Unleash the full potential of task management with TaskZen. Organize, collaborate, and achieve more with ease.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-border bg-muted shadow-sm">
            {/* Background media area */}
            <div className="aspect-video w-full bg-muted" />

            {/* Overlay brand text */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <span className="text-white/90 font-bold tracking-tight leading-none text-[14vw] md:text-[10vw]">
                TaskZen
              </span>
            </div>

            {/* Center play button */}
            <button
              aria-label="Play video"
              className="absolute inset-0 m-auto h-14 w-14 rounded-full bg-background/80 backdrop-blur flex items-center justify-center shadow-sm border border-border hover:scale-105 transition"
            >
              <Play className="text-foreground" size={22} />
            </button>
          </div>
        </section>

        {/* Faces of Innovation (Inline Team Section) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                <span>The Faces of </span>
                <span className="text-muted-foreground">Innovation</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Leverage the power of advanced technology to streamline operations and drive growth. Stay ahead with innovative solutions built for the future.
              </p>
            </div>
            <Button className="rounded-full h-9 px-4">View all</Button>
          </div>

          <ul role="list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { id: "annette", name: "Annette Black", role: "Founder", image: "/testimonials/michael.avif" },
              { id: "courtney", name: "Courtney Henry", role: "Web Developer", image: "/testimonials/james.avif" },
              { id: "jacob", name: "Jacob Jones", role: "UI Designer", image: "/testimonials/sarah.avif" },
            ].map((m) => (
              <li key={m.id} role="listitem">
                <Card className="rounded-2xl border-0 bg-transparent shadow-none hover:shadow-none hover:scale-105 transition duration-200 focus-within:ring-0">
                  {/* Image */}
                  <div className="relative block w-full overflow-hidden rounded-2xl aspect-[4/3]">
                    {m.image ? (
                      <Image
                        src={m.image}
                        alt={`${m.name} – ${m.role}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-muted">
                        <User className="text-muted-foreground" />
                      </div>
                    )}
                  </div>

                  <CardContent className="px-0 pt-3 pb-0">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="font-semibold text-lg">{m.name}</div>
                        <div className="text-sm text-muted-foreground">{m.role}</div>
                      </div>
                      <button
                        type="button"
                        aria-label={`View profile of ${m.name}`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur text-foreground hover:bg-background hover:shadow-md transition"
                      >
                        <ArrowRightCircle size={18} />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </section>

        {/* Testimonials / Reviews Section */}
        <section className="space-y-6">
          {/* Heading row */}
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                <span>Loved by </span>
                <span className="text-muted-foreground">teams</span>
                <span> around</span>
                <br className="hidden md:block" />
                <span>the world</span>
              </h2>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <Avatar className="h-8 w-8 ring-2 ring-background">
                    <AvatarImage src="/testimonials/emily.avif" alt="Emily" />
                    <AvatarFallback>EM</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8 ring-2 ring-background">
                    <AvatarImage src="/testimonials/james.avif" alt="James" />
                    <AvatarFallback>JA</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8 ring-2 ring-background">
                    <AvatarImage src="/testimonials/lisa.avif" alt="Lisa" />
                    <AvatarFallback>LI</AvatarFallback>
                  </Avatar>
                </div>
                <span className="text-sm text-muted-foreground">10k Reviews</span>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                id: "ralph",
                name: "Ralph Edwards",
                email: "tim.jennings@example.com",
                avatar: "/testimonials/michael.avif",
                text:
                  "We tried several tools before, but nothing matched this one. The collaboration features are seamless, and the reminders keep us on track.",
              },
              {
                id: "courtney",
                name: "Courtney Henry",
                email: "courtney.henry@example.com",
                avatar: "/testimonials/james.avif",
                text:
                  "We tried several tools before, but nothing matched this one. The collaboration features are seamless, and the reminders keep us on track. It's helped us meet deadlines consistently while reducing stress!",
              },
              {
                id: "jenny",
                name: "Jenny Wilson",
                email: "felicia.reid@example.com",
                avatar: "/testimonials/sarah.avif",
                text:
                  "We tried several tools before, but nothing matched this one. The collaboration features are seamless, and the reminders keep us on track.",
              },
            ].map((r) => (
              <Card key={r.id} className="rounded-2xl border border-border bg-card text-card-foreground shadow-sm">
                <CardContent className="p-6 space-y-4">
                  {/* Rating */}
                  <div className="flex items-center gap-1 text-primary">
                    {[0, 1, 2, 3].map((i) => (
                      <Star key={i} size={16} className="fill-current" />
                    ))}
                    <Star size={16} className="opacity-60" />
                  </div>

                  {/* Quote */}
                  <p className="text-muted-foreground text-sm leading-relaxed">{r.text}</p>

                  {/* Reviewer */}
                  <div className="flex items-center gap-3 pt-2">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={r.avatar} alt={r.name} />
                      <AvatarFallback>{r.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-0">
                      <div className="font-medium text-sm">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.email}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </section>
  );
}