"use client";

import { useState, useEffect, useCallback, forwardRef, useImperativeHandle } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, ExternalLink, Target, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

// TypeScript interfaces
export interface CaseStudy {
  id: string;
  clientName: string;
  clientLogo: string;
  quote: string;
  author: string;
  role: string;
  challenge: string;
  solution: string;
  result: string;
  caseStudyUrl: string;
}

interface CaseStudiesCarouselProps {
  caseStudies: CaseStudy[];
  autoplay?: boolean;
  autoplayInterval?: number;
  className?: string;
  onPrevious?: () => void;
  onNext?: () => void;
}

// Custom hook for carousel logic
const useCarousel = (totalItems: number, autoplay = false, interval = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoplay);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const pause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const play = useCallback(() => {
    setIsPlaying(true);
  }, []);

  // Autoplay effect
  useEffect(() => {
    if (!isPlaying || totalItems <= 1) return;

    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [isPlaying, goToNext, interval, totalItems]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  return {
    currentIndex,
    goToNext,
    goToPrev,
    goToSlide,
    pause,
    play,
    isPlaying,
  };
};

export const CaseStudiesCarousel: React.FC<CaseStudiesCarouselProps> = ({
  caseStudies,
  autoplay = false,
  autoplayInterval = 5000,
  className,
  onPrevious,
  onNext,
}) => {
  const {
    currentIndex,
    goToNext,
    goToPrev,
    goToSlide,
    pause,
    play,
  } = useCarousel(caseStudies.length, autoplay, autoplayInterval);

  // Expose navigation functions to parent through callbacks
  useEffect(() => {
    if (onPrevious) {
      // Store the function reference for parent to call
      (window as any).carouselPrevious = goToPrev;
    }
    if (onNext) {
      // Store the function reference for parent to call  
      (window as any).carouselNext = goToNext;
    }
  }, [goToPrev, goToNext, onPrevious, onNext]);

  if (!caseStudies || caseStudies.length === 0) {
    return null;
  }

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={pause}
      onMouseLeave={play}
      onFocus={pause}
      onBlur={play}
    >
      {/* Pagination Dots - positioned at bottom */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex gap-1">
        {caseStudies.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-200",
              index === currentIndex
                ? "bg-foreground"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Carousel Track */}
      <div className="overflow-hidden">
        <motion.div
          className="flex items-stretch min-h-[400px]"
          animate={{
            x: `calc(-${currentIndex * 80}% + ${currentIndex * 2}rem)`,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              className="flex-shrink-0 w-[80%] mr-8 h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card
                className="p-8 bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl h-full border-border"
                role="article"
                aria-label={`Case study: ${caseStudy.clientName}`}
                tabIndex={0}
              >
                <div className="grid md:grid-cols-2 gap-8 h-full relative">
                  {/* Vertical divider line */}
                  <div className="absolute left-1/2 top-4 bottom-4 w-px bg-border transform -translate-x-1/2 hidden md:block"></div>
                  
                  {/* Left Column - Quote */}
                  <div className="space-y-6 flex flex-col justify-between pr-4">
                    <div className="space-y-6">
                      <Quote className="h-8 w-8 text-muted-foreground" />
                      
                      <blockquote className="text-lg text-foreground leading-relaxed">
                        "{caseStudy.quote}"
                      </blockquote>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="font-semibold text-foreground">
                          {caseStudy.author}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {caseStudy.role}
                        </div>
                      </div>
                      
                      <div className="w-16 h-8 relative">
                        <Image
                          src={caseStudy.clientLogo}
                          alt={`${caseStudy.clientName} logo`}
                          fill
                          className="object-contain filter grayscale"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Case Snapshot */}
                  <div className="space-y-6 flex flex-col justify-between pl-4">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="h-4 w-4 text-muted-foreground" />
                          <h4 className="font-semibold text-foreground">Challenge</h4>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {caseStudy.challenge}
                        </p>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Lightbulb className="h-4 w-4 text-muted-foreground" />
                          <h4 className="font-semibold text-foreground">Solution</h4>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {caseStudy.solution}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="text-4xl font-bold text-foreground mb-2">
                        {caseStudy.result}
                      </div>
                      
                      <a
                        href={caseStudy.caseStudyUrl}
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Read case study
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Screen Reader Announcements */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        Slide {currentIndex + 1} of {caseStudies.length}: {caseStudies[currentIndex]?.clientName}
      </div>
    </div>
  );
};