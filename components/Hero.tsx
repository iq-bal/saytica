"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, TrendingUp, DollarSign, CreditCard, PieChart } from "lucide-react";

/**
 * Modern hero section for finance app
 * Features: Two-column layout, CTAs, trust indicators, device mockup
 * Responsive: Side-by-side desktop, stacked mobile
 */
export default function Hero() {
  // Trust indicator avatars (placeholder data)
  const trustAvatars = [
    { id: 1, name: "Sarah Chen", image: "", fallback: "SC" },
    { id: 2, name: "Mike Johnson", image: "", fallback: "MJ" },
    { id: 3, name: "Emma Davis", image: "", fallback: "ED" },
    { id: 4, name: "Alex Kim", image: "", fallback: "AK" },
    { id: 5, name: "Lisa Wang", image: "", fallback: "LW" }
  ];

  // Partner logos (placeholder - would be actual logo images)
  const partnerLogos = [
    { name: "Slack", logo: "S" },
    { name: "Zoom", logo: "Z" },
    { name: "Airbnb", logo: "A" },
    { name: "Spotify", logo: "♪" },
    { name: "Envato", logo: "E" }
  ];

  return (
    <section 
      className="relative bg-background py-16 md:py-24 lg:py-32"
      aria-labelledby="hero-headline"
    >
      <div className="container mx-auto px-4">
        {/* Main two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <Badge 
                variant="secondary" 
                className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 text-sm font-medium rounded-full"
              >
                <span className="mr-2 text-xs">✨</span>
                New: Multi-currency account
              </Badge>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 
                id="hero-headline"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              >
                All in one App{" "}
                <span className="text-primary">finance</span>{" "}
                for your business
              </h1>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Streamline your business finances with our comprehensive platform. 
                Manage payments, track expenses, and grow your business with confidence.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Try for Free
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="border-2 border-border hover:bg-accent px-8 py-3 rounded-2xl font-semibold text-lg group transition-all duration-200"
              >
                Preview
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                {/* Avatar Group */}
                <div className="flex -space-x-3">
                  {trustAvatars.map((user) => (
                    <Avatar 
                      key={user.id} 
                      className="border-2 border-background w-10 h-10 hover:scale-110 transition-transform duration-200"
                    >
                      <AvatarImage src={user.image} alt={user.name} />
                      <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium">
                        {user.fallback}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                
                {/* Social Proof Text */}
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">12k+</span> Used by teams and professionals
                </div>
              </div>

              {/* Partner Logos */}
              <div className="pt-4">
                <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
                  Trusted by leading companies
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-6 opacity-60">
                  {partnerLogos.map((partner) => (
                    <div 
                      key={partner.name}
                      className="flex items-center justify-center w-12 h-12 bg-muted rounded-lg text-muted-foreground font-bold text-lg hover:opacity-100 transition-opacity duration-200"
                      title={partner.name}
                    >
                      {partner.logo}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Mockup */}
          <div className="relative">
            <Card className="bg-background/60 backdrop-blur-sm border border-border/50 shadow-2xl rounded-3xl p-8 hover:shadow-3xl transition-all duration-300">
              
              {/* Device Mockup Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-xs text-muted-foreground">Business Dashboard</div>
              </div>

              {/* Balance Card */}
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 text-primary-foreground mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    <span className="text-sm opacity-90">Total Balance</span>
                  </div>
                  <TrendingUp className="h-5 w-5 opacity-90" />
                </div>
                <div className="text-3xl font-bold mb-2">$124,592.00</div>
                <div className="text-sm opacity-90">+12.5% from last month</div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-muted/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span className="text-xs text-muted-foreground">Income</span>
                  </div>
                  <div className="text-lg font-semibold">$45,280</div>
                </div>
                <div className="bg-muted/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <PieChart className="h-4 w-4 text-blue-600" />
                    <span className="text-xs text-muted-foreground">Expenses</span>
                  </div>
                  <div className="text-lg font-semibold">$28,450</div>
                </div>
              </div>

              {/* Chart Visualization (Simplified) */}
              <div className="bg-muted/30 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium">Monthly Overview</span>
                  <span className="text-xs text-muted-foreground">Last 6 months</span>
                </div>
                
                {/* Simple Bar Chart */}
                <div className="flex items-end justify-between h-20 gap-2">
                  {[40, 65, 45, 80, 60, 90].map((height, index) => (
                    <div 
                      key={index}
                      className="bg-primary/60 rounded-t-sm flex-1 transition-all duration-300 hover:bg-primary/80"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}