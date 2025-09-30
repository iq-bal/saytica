"use client";

// Updated imports for localization-focused hero section
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// Updated icons for translation/localization theme
import { ArrowRight, Globe, Languages, FileText, Users, CheckCircle, Award } from "lucide-react";

/**
 * Modern hero section for localization/translation services (Andovar-style)
 * Updated from finance app to professional translation services
 * Features: Two-column layout, localization CTAs, client trust indicators, translation workflow mockup
 * Responsive: Side-by-side desktop, stacked mobile with professional styling
 */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20" aria-labelledby="hero-heading">
      {/* Background - Restyled to black & white theme (removed colored gradients) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-gray-100/30 dark:from-gray-900/50 dark:to-black" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge - Restyled to black & white theme */}
            <div className="flex justify-center lg:justify-start">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium rounded-full bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200 transition-colors dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700">
                <Globe className="w-4 h-4 mr-2" />
                80+ Languages & 2500+ Projects Delivered
              </Badge>
            </div>

            {/* Headline - Restyled to black & white theme (removed blue accent) */}
            <div className="space-y-4">
              <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white">
                Localization &{" "}
                <span className="text-gray-800 dark:text-gray-200">Translation</span>{" "}
                Solutions for Global Enterprises
              </h1>
              {/* Description - Updated to medium gray for black & white theme */}
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0">
                Delivering high-quality translations across legal, medical, technical & marketing domains. 
                80+ languages. Trusted by global brands worldwide.
              </p>
            </div>

            {/* CTA Buttons - Restyled to black & white theme */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 dark:bg-white dark:hover:bg-gray-100 dark:text-black"
              >
                Get a Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-800 hover:bg-gray-100 text-gray-800 px-8 py-3 rounded-2xl font-semibold text-lg group transition-all duration-200 dark:border-gray-300 dark:hover:bg-gray-800 dark:text-gray-300 dark:hover:text-white"
              >
                View Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>

            {/* Trust Indicators - Restyled to black & white theme */}
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                {/* Avatar Group - Restyled to grayscale */}
                <div className="flex -space-x-3">
                  <Avatar className="border-2 border-white w-10 h-10 hover:scale-110 transition-transform duration-200 dark:border-gray-800">
                    <AvatarFallback className="bg-gray-100 text-gray-700 text-sm font-medium dark:bg-gray-800 dark:text-gray-300">
                      GL
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-white w-10 h-10 hover:scale-110 transition-transform duration-200 dark:border-gray-800">
                    <AvatarFallback className="bg-gray-200 text-gray-800 text-sm font-medium dark:bg-gray-700 dark:text-gray-200">
                      MT
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-white w-10 h-10 hover:scale-110 transition-transform duration-200 dark:border-gray-800">
                    <AvatarFallback className="bg-gray-300 text-gray-900 text-sm font-medium dark:bg-gray-600 dark:text-gray-100">
                      TL
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-white w-10 h-10 hover:scale-110 transition-transform duration-200 dark:border-gray-800">
                    <AvatarFallback className="bg-gray-400 text-white text-sm font-medium dark:bg-gray-500 dark:text-gray-100">
                      LS
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-white w-10 h-10 hover:scale-110 transition-transform duration-200 dark:border-gray-800">
                    <AvatarFallback className="bg-gray-500 text-white text-sm font-medium dark:bg-gray-400 dark:text-gray-900">
                      CS
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                {/* Social Proof Text - Restyled to grayscale */}
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-black dark:text-white">200+</span> Trusted by clients globally
                </div>
              </div>

              {/* Partner Logos - Enhanced grayscale styling for black & white theme */}
              <div className="pt-4">
                <p className="text-xs text-gray-500 mb-4 uppercase tracking-wider dark:text-gray-400">
                  Trusted by global enterprises
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-6 opacity-70">
                  <img 
                    src="/slack.png" 
                    alt="Slack" 
                    className="h-8 w-auto grayscale hover:grayscale hover:opacity-100 transition-all duration-200 filter contrast-125" 
                    title="Slack"
                  />
                  <img 
                    src="/zoom.png" 
                    alt="Zoom" 
                    className="h-8 w-auto grayscale hover:grayscale hover:opacity-100 transition-all duration-200 filter contrast-125" 
                    title="Zoom"
                  />
                  <img 
                    src="/airbnb.png" 
                    alt="Airbnb" 
                    className="h-8 w-auto grayscale hover:grayscale hover:opacity-100 transition-all duration-200 filter contrast-125" 
                    title="Airbnb"
                  />
                  <img 
                    src="/envato.png" 
                    alt="Envato" 
                    className="h-8 w-auto grayscale hover:grayscale hover:opacity-100 transition-all duration-200 filter contrast-125" 
                    title="Envato"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Translation/Localization Workflow Visualization - Restyled to black & white theme */}
          <div className="relative">
            {/* Floating background elements - Restyled to grayscale */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gray-200/20 rounded-full blur-3xl dark:bg-gray-800/20" />
            <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-gray-300/30 rounded-full blur-3xl dark:bg-gray-700/30" />
            
            {/* Main visualization card - Restyled to black & white theme */}
            <Card className="relative backdrop-blur-sm bg-white/80 border-gray-200/50 shadow-2xl rounded-3xl p-8 hover:shadow-3xl transition-all duration-300 dark:bg-gray-900/80 dark:border-gray-700/50">
              {/* Browser-style header - Restyled to grayscale */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200/50 dark:border-gray-700/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-gray-400" />
                  <div className="w-3 h-3 rounded-full bg-gray-500" />
                  <div className="w-3 h-3 rounded-full bg-gray-600" />
                </div>
                <div className="flex-1 text-center">
                  <div className="text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1 inline-block dark:bg-gray-800 dark:text-gray-400">
                    Translation Management Platform
                  </div>
                </div>
              </div>

              {/* Translation workflow visualization - Restyled to black & white theme */}
              <div className="space-y-6">
                {/* Project overview card - Restyled to grayscale gradient */}
                <div className="bg-gradient-to-r from-gray-800 to-black rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Globe className="w-6 h-6" />
                      <div>
                        <h3 className="font-semibold text-lg">Global Project</h3>
                        <p className="text-gray-300 text-sm">Legal Document Translation</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">85%</div>
                      <div className="text-gray-300 text-sm">Complete</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-600/30 rounded-full h-2">
                    <div className="bg-white rounded-full h-2 w-[85%] transition-all duration-500" />
                  </div>
                </div>

                {/* Language stats grid - Restyled to grayscale */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200/50 dark:bg-gray-800/50 dark:border-gray-700/50">
                    <div className="flex items-center gap-3 mb-2">
                      <Languages className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Languages</span>
                    </div>
                    <div className="text-2xl font-bold text-black dark:text-white">24</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Active translations</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200/50 dark:bg-gray-800/50 dark:border-gray-700/50">
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Documents</span>
                    </div>
                    <div className="text-2xl font-bold text-black dark:text-white">156</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Files processed</div>
                  </div>
                </div>

                {/* Team collaboration section - Restyled to grayscale */}
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200/50 dark:bg-gray-800/50 dark:border-gray-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Translation Team</span>
                    </div>
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-gray-500 border-2 border-white dark:border-gray-800" />
                      <div className="w-6 h-6 rounded-full bg-gray-600 border-2 border-white dark:border-gray-800" />
                      <div className="w-6 h-6 rounded-full bg-gray-700 border-2 border-white dark:border-gray-800" />
                      <div className="w-6 h-6 rounded-full bg-black border-2 border-white flex items-center justify-center text-white text-xs font-bold dark:border-gray-800">
                        +5
                      </div>
                    </div>
                  </div>
                  
                  {/* Quality metrics - Restyled to grayscale */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Quality Score</span>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-gray-600" />
                        <span className="font-medium text-black dark:text-white">98.5%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Delivery Time</span>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-gray-600" />
                        <span className="font-medium text-black dark:text-white">On Schedule</span>
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