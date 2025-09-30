import React from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Globe, Users, Award, TrendingUp } from 'lucide-react';
import { TopLeftDecoration, BottomRightDecoration } from '@/components/ui/corner-decoration';

export default function AboutSection() {
  return (
    <section 
      className="relative py-20 px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" 
      aria-labelledby="about-heading"
    >
      {/* Corner Decorations */}
      <TopLeftDecoration variant="geometric" />
      <BottomRightDecoration variant="organic" />
      
      {/* Container with consistent spacing following navbar/footer pattern */}
      <div className="max-w-7xl mx-auto">
        {/* Two-column responsive layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Image/Illustration (previously right) */}
          <div className="relative">
            {/* Floating background elements for visual interest */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-muted/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-muted/30 rounded-full blur-3xl" />
            
            {/* Main image card with semantic tokens */}
            <Card className="relative backdrop-blur-sm bg-card/80 border-border/50 shadow-2xl rounded-3xl p-8 hover:shadow-3xl transition-all duration-300">
              {/* Placeholder for team collaboration illustration */}
              <div className="aspect-square bg-muted/30 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  {/* Visual representation of global collaboration */}
                  <div className="flex justify-center space-x-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <Globe className="w-8 h-8 text-primary" />
                    </div>
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  {/* Descriptive text */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">Global Team</h3>
                    <p className="text-sm text-muted-foreground">
                      Diverse experts working together across continents
                    </p>
                  </div>
                  
                  {/* Connection lines visualization */}
                  <div className="flex justify-center items-center space-x-2">
                    <div className="w-3 h-3 bg-primary/40 rounded-full" />
                    <div className="w-8 h-0.5 bg-border" />
                    <div className="w-3 h-3 bg-primary/60 rounded-full" />
                    <div className="w-8 h-0.5 bg-border" />
                    <div className="w-3 h-3 bg-primary/80 rounded-full" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Right Column - Content (previously left) */}
          <div className="space-y-8">
            {/* Section label - small, uppercase, muted */}
            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              About Us
            </div>
            
            {/* Headline - bold, black using semantic tokens */}
            <h2 
              id="about-heading" 
              className="text-4xl lg:text-5xl font-bold text-foreground leading-tight"
            >
              Our Journey in Translation & Localization
            </h2>
            
            {/* Description paragraph - medium gray using semantic tokens */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              With decades of experience, we help global businesses adapt their content across 
              languages and cultures with accuracy and impact. Our commitment to excellence 
              drives every project we undertake.
            </p>
            
            {/* Stats grid - 2x2 layout */}
            <div className="space-y-6">
              <Separator className="bg-border/50" />
              
              {/* Stats grid with semantic tokens for black & white theme */}
              <div className="grid grid-cols-2 gap-6">
                {/* Stat 1 - Languages */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">80+</div>
                      <div className="text-sm text-muted-foreground">Languages</div>
                    </div>
                  </div>
                </div>
                
                {/* Stat 2 - Projects */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">1000+</div>
                      <div className="text-sm text-muted-foreground">Projects</div>
                    </div>
                  </div>
                </div>
                
                {/* Stat 3 - Experience */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">20+</div>
                      <div className="text-sm text-muted-foreground">Years</div>
                    </div>
                  </div>
                </div>
                
                {/* Stat 4 - Satisfaction */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">99%</div>
                      <div className="text-sm text-muted-foreground">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}