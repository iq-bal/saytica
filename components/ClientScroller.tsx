'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/lib/theme';
import { BottomLeftDecoration, BottomRightDecoration } from '@/components/ui/corner-decoration';

export default function ClientScroller() {
  const { currentTheme, mounted } = useTheme();

  // Theme-aware logo paths
  const getLogoPath = (logoName: string) => {
    // Always use light theme during SSR and initial render to prevent hydration mismatch
    if (!mounted) {
      return `/client_logo_light/${logoName}`;
    }
    const themeFolder = currentTheme === 'dark' ? 'client_logo_dark' : 'client_logo_light';
    return `/${themeFolder}/${logoName}`;
  };

  // Client logos data - using theme-aware paths
  const clientLogos = [
    { name: 'Airbnb', src: getLogoPath('airbnb.png') },
    { name: 'Envato', src: getLogoPath('envato.png') },
    { name: 'Slack', src: getLogoPath('slack.png') },
    { name: 'Zoom', src: getLogoPath('zoom.png') },
    { name: 'Airbnb', src: getLogoPath('airbnb.png') },
    { name: 'Envato', src: getLogoPath('envato.png') },
    { name: 'Slack', src: getLogoPath('slack.png') },
    { name: 'Zoom', src: getLogoPath('zoom.png') },
    { name: 'Airbnb', src: getLogoPath('airbnb.png') },
    { name: 'Envato', src: getLogoPath('envato.png') },
    { name: 'Slack', src: getLogoPath('slack.png') },
    { name: 'Zoom', src: getLogoPath('zoom.png') },
  ];

  return (
    <section 
      className="relative py-16 px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" 
      aria-labelledby="clients-heading"
    >
      {/* Corner Decorations */}
      <BottomLeftDecoration variant="organic" />
      <BottomRightDecoration variant="geometric" />
      
      {/* Container with consistent spacing following navbar/footer pattern */}
      <div className="max-w-7xl mx-auto">
        
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 
            id="clients-heading" 
            className="text-2xl lg:text-3xl font-bold text-foreground mb-4"
          >
            Trusted by Global Brands
          </h2>
          <p className="text-muted-foreground">
            Leading companies worldwide rely on our translation expertise
          </p>
        </div>

        {/* Infinite scroll container */}
        <div className="relative overflow-hidden bg-muted/20 rounded-2xl group">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background/95 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background/95 to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling logos container - Using Tailwind animate-pulse as base and custom transform */}
          <div 
            className="flex items-center py-8 group-hover:[animation-play-state:paused]"
            style={{
              width: 'fit-content',
              animation: 'marquee 30s linear infinite',
            }}
          >
            {clientLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 mx-8 lg:mx-12 group/logo cursor-pointer"
              >
                {/* Logo container with hover effects */}
                <div className="relative w-24 h-16 lg:w-32 lg:h-20 flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo - trusted translation client`}
                    width={128}
                    height={80}
                    className="max-w-full max-h-full object-contain filter grayscale opacity-60 hover:opacity-80 transition-all duration-300 group-hover/logo:scale-110"
                    priority={index < 4} // Prioritize first 4 logos for performance
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional info below */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Join 1000+ companies that trust our translation services
          </p>
        </div>
      </div>

      {/* Inline styles for the marquee animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          @media (max-width: 768px) {
            [style*="animation: marquee"] {
              animation: marquee 20s linear infinite !important;
            }
          }
        `
      }} />
    </section>
  );
}