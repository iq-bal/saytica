interface BlogHeroProps {
  title?: string;
  description?: string;
}

export default function BlogHero({ 
  title = "Insights for Digital Growth",
  description = "Discover the latest trends, strategies and insights in digital marketing, technology, and business growth."
}: BlogHeroProps) {
  return (
    <section className="relative bg-background text-foreground pb-16 pt-20">
      <div className="absolute inset-0 z-0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {title}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}