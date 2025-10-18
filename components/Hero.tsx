"use client";

// Updated imports for localization-focused hero section
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useTheme } from "@/lib/theme";
import { TopLeftDecoration, TopRightDecoration } from "@/components/ui/corner-decoration";
// Updated icons for translation/localization theme
import { ArrowRight, Globe, Languages, FileText, Users, CheckCircle, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/**
 * Modern hero section for localization/translation services (Andovar-style)
 * Updated from finance app to professional translation services
 * Features: Two-column layout, localization CTAs, client trust indicators, translation workflow mockup
 * Responsive: Side-by-side desktop, stacked mobile with professional styling
 */
export default function Hero() {
  const { currentTheme, mounted } = useTheme();

  // Theme-aware logo paths - Updated to ensure proper theme detection
  const getLogoPath = (logoName: string) => {
    // Always use light theme during SSR and initial render to prevent hydration mismatch
    if (!mounted) {
      return `/client_logo_light/${logoName}`;
    }
    const themeFolder = currentTheme === 'dark' ? 'client_logo_dark' : 'client_logo_light';
    return `/${themeFolder}/${logoName}`;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-0 py-20" aria-labelledby="hero-heading">
      {/* Corner Decorations */}
      <TopLeftDecoration variant="geometric" />
      <TopRightDecoration variant="organic" />
      
      {/* Background - Updated to use semantic tokens for proper dark theme support */}
      <div className="absolute inset-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" />
      
      <div className="relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge - Updated to use semantic tokens for dark theme */}
            <div className="flex justify-center lg:justify-start">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium rounded-full bg-muted/50 text-muted-foreground border-border/50 hover:bg-muted transition-colors">
                <Globe className="w-4 h-4 mr-2" />
                80+ Languages & 2500+ Projects Delivered
              </Badge>
            </div>

            {/* Headline - Updated to use semantic tokens */}
            <div className="space-y-4">
              <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Localization &{" "}
                <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">Translation</span>{" "}
                Solutions for Global Enterprises
              </h1>
              {/* Description - Updated to use semantic tokens */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Delivering high-quality translations across legal, medical, technical & marketing domains. 
                80+ languages. Trusted by global brands worldwide.
              </p>
            </div>

            {/* CTA Buttons - Updated to use semantic button variants */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild className="px-8 py-4 text-lg font-semibold">
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="px-8 py-4 text-lg font-semibold">
                <Link href="/services">
                  View Services
                </Link>
              </Button>
            </div>

            {/* Trust Indicators - Updated to use semantic tokens */}
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                {/* Avatar Group - Updated to semantic tokens */}
                <div className="flex -space-x-3">
                  <Avatar className="border-2 border-background w-10 h-10 hover:scale-110 transition-transform duration-200">
                    <AvatarFallback className="bg-muted text-muted-foreground text-sm font-medium">
                      GL
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background w-10 h-10 hover:scale-110 transition-transform duration-200">
                    <AvatarFallback className="bg-muted text-muted-foreground text-sm font-medium">
                      MT
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background w-10 h-10 hover:scale-110 transition-transform duration-200">
                    <AvatarFallback className="bg-muted text-muted-foreground text-sm font-medium">
                      TL
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background w-10 h-10 hover:scale-110 transition-transform duration-200">
                    <AvatarFallback className="bg-muted text-muted-foreground text-sm font-medium">
                      LS
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background w-10 h-10 hover:scale-110 transition-transform duration-200">
                    <AvatarFallback className="bg-muted text-muted-foreground text-sm font-medium">
                      CS
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                {/* Social Proof Text - Updated to semantic tokens */}
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">200+</span> Trusted by clients globally
                </div>
              </div>

              {/* Partner Logos - Updated to use semantic tokens */}
              <div className="pt-4">
                <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
                  Trusted by global enterprises
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-6 opacity-70">
                  <Image
                    src={getLogoPath("slack.png")}
                    alt="Slack"
                    width={100}
                    height={32}
                    className="h-8 w-auto grayscale hover:grayscale hover:opacity-100 transition-all duration-200 filter contrast-125"
                    title="Slack"
                  />
                  <Image
                    src={getLogoPath("zoom.png")}
                    alt="Zoom"
                    width={100}
                    height={32}
                    className="h-8 w-auto grayscale hover:grayscale hover:opacity-100 transition-all duration-200 filter contrast-125"
                    title="Zoom"
                  />
                  <Image
                    src={getLogoPath("airbnb.png")}
                    alt="Airbnb"
                    width={100}
                    height={32}
                    className="h-8 w-auto grayscale hover:grayscale hover:opacity-100 transition-all duration-200 filter contrast-125"
                    title="Airbnb"
                  />
                  <Image
                    src={getLogoPath("envato.png")}
                    alt="Envato"
                    width={100}
                    height={32}
                    className="h-8 w-auto grayscale hover:grayscale hover:opacity-100 transition-all duration-200 filter contrast-125"
                    title="Envato"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Translation/Localization Workflow Visualization - Restyled to black & white theme */}
          <div className="relative">
            {/* Floating background elements - Updated to use semantic tokens */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-muted/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-muted/30 rounded-full blur-3xl" />
            
            {/* Main visualization card - Updated to use semantic tokens following footer pattern */}
            <Card className="relative backdrop-blur-sm bg-card/80 border-border/50 shadow-2xl rounded-3xl p-8 hover:shadow-3xl transition-all duration-300">
              {/* Browser-style header - Updated to use semantic tokens */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/40" />
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/60" />
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/80" />
                </div>
                <div className="flex-1 text-center">
                  <div className="text-xs text-muted-foreground bg-muted rounded-full px-3 py-1 inline-block">
                    Translation Management Platform
                  </div>
                </div>
              </div>

              {/* Translation workflow visualization - Updated to use semantic tokens */}
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl border border-border/30">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Languages className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">Source Text</div>
                      <div className="text-xs text-muted-foreground">English</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </div>
                
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl border border-border/30">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Globe className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">Translated</div>
                      <div className="text-xs text-muted-foreground">Spanish, French, German</div>
                    </div>
                  </div>
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>

                {/* Project overview card - Updated to use semantic tokens */}
                <div className="bg-gradient-to-r from-primary/90 to-primary rounded-2xl p-6 text-primary-foreground">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Globe className="w-6 h-6" />
                      <div>
                        <h3 className="font-semibold text-lg">Global Project</h3>
                        <p className="text-primary-foreground/70 text-sm">Legal Document Translation</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">85%</div>
                      <div className="text-primary-foreground/70 text-sm">Complete</div>
                    </div>
                  </div>
                  <div className="w-full bg-primary-foreground/20 rounded-full h-2">
                    <div className="bg-primary-foreground rounded-full h-2 w-[85%] transition-all duration-500" />
                  </div>
                </div>

                {/* Language stats grid - Updated to use semantic tokens */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/50 rounded-xl p-4 border border-border/30">
                    <div className="flex items-center gap-3 mb-2">
                      <Languages className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm font-medium text-foreground">Languages</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">24</div>
                    <div className="text-xs text-muted-foreground">Active translations</div>
                  </div>
                  
                  <div className="bg-muted/50 rounded-xl p-4 border border-border/30">
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm font-medium text-foreground">Documents</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">156</div>
                    <div className="text-xs text-muted-foreground">Files processed</div>
                  </div>
                </div>

                {/* Team collaboration section - Updated to use semantic tokens */}
                <div className="bg-muted/30 rounded-xl p-4 border border-border/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm font-medium text-foreground">Translation Team</span>
                    </div>
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-primary/20 border-2 border-background" />
                      <div className="w-6 h-6 rounded-full bg-primary/20 border-2 border-background" />
                      <div className="w-6 h-6 rounded-full bg-primary/20 border-2 border-background" />
                      <div className="w-6 h-6 rounded-full bg-muted border-2 border-background flex items-center justify-center text-muted-foreground text-xs font-bold">
                        +5
                      </div>
                    </div>
                  </div>
                  
                  {/* Quality metrics - Updated to use semantic tokens */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Quality Score</span>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="font-medium text-foreground">98.5%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Delivery Time</span>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="font-medium text-foreground">On Schedule</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}