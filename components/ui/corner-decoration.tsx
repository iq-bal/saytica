'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export type CornerPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export type DecorationVariant = 'circles' | 'triangles' | 'mixed' | 'arcs' | 'dots' | 'geometric' | 'organic';

interface CornerDecorationProps {
  position: CornerPosition;
  variant?: DecorationVariant;
  className?: string;
  animate?: boolean;
}

const decorationVariants = {
  circles: (position: CornerPosition, animate: boolean) => (
    <>
      {/* Large semi-circle */}
      <div 
        className={cn(
          "absolute w-32 h-32 rounded-full opacity-10",
          "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500",
          animate && "animate-pulse",
          position === 'top-left' && "-top-16 -left-16",
          position === 'top-right' && "-top-16 -right-16", 
          position === 'bottom-left' && "-bottom-16 -left-16",
          position === 'bottom-right' && "-bottom-16 -right-16"
        )}
      />
      {/* Medium circle */}
      <div 
        className={cn(
          "absolute w-20 h-20 rounded-full opacity-15",
          "bg-gradient-to-tr from-purple-400 to-blue-400",
          animate && "animate-bounce",
          position === 'top-left' && "top-8 left-8",
          position === 'top-right' && "top-8 right-8",
          position === 'bottom-left' && "bottom-8 left-8", 
          position === 'bottom-right' && "bottom-8 right-8"
        )}
        style={{ animationDelay: animate ? '0.5s' : undefined }}
      />
      {/* Small circle */}
      <div 
        className={cn(
          "absolute w-12 h-12 rounded-full opacity-20",
          "bg-gradient-to-bl from-pink-400 to-purple-400",
          animate && "animate-pulse",
          position === 'top-left' && "top-20 left-20",
          position === 'top-right' && "top-20 right-20",
          position === 'bottom-left' && "bottom-20 left-20",
          position === 'bottom-right' && "bottom-20 right-20"
        )}
        style={{ animationDelay: animate ? '1s' : undefined }}
      />
    </>
  ),

  triangles: (position: CornerPosition, animate: boolean) => (
    <>
      {/* Large triangle */}
      <div 
        className={cn(
          "absolute w-0 h-0 opacity-12",
          animate && "animate-pulse",
          position === 'top-left' && "-top-8 -left-8 border-l-[60px] border-l-transparent border-b-[60px] border-b-blue-400/20",
          position === 'top-right' && "-top-8 -right-8 border-r-[60px] border-r-transparent border-b-[60px] border-b-purple-400/20",
          position === 'bottom-left' && "-bottom-8 -left-8 border-l-[60px] border-l-transparent border-t-[60px] border-t-pink-400/20",
          position === 'bottom-right' && "-bottom-8 -right-8 border-r-[60px] border-r-transparent border-t-[60px] border-t-blue-400/20"
        )}
      />
      {/* Medium triangle */}
      <div 
        className={cn(
          "absolute w-0 h-0 opacity-15",
          animate && "animate-bounce",
          position === 'top-left' && "top-12 left-12 border-l-[40px] border-l-transparent border-b-[40px] border-b-purple-400/25",
          position === 'top-right' && "top-12 right-12 border-r-[40px] border-r-transparent border-b-[40px] border-b-pink-400/25",
          position === 'bottom-left' && "bottom-12 left-12 border-l-[40px] border-l-transparent border-t-[40px] border-t-blue-400/25",
          position === 'bottom-right' && "bottom-12 right-12 border-r-[40px] border-r-transparent border-t-[40px] border-t-purple-400/25"
        )}
        style={{ animationDelay: animate ? '0.3s' : undefined }}
      />
    </>
  ),

  arcs: (position: CornerPosition, animate: boolean) => (
    <>
      {/* Outer arc */}
      <div 
        className={cn(
          "absolute w-24 h-24 opacity-10",
          "bg-gradient-to-br from-blue-500 to-purple-500",
          animate && "animate-spin",
          position === 'top-left' && "-top-12 -left-12 rounded-br-full",
          position === 'top-right' && "-top-12 -right-12 rounded-bl-full",
          position === 'bottom-left' && "-bottom-12 -left-12 rounded-tr-full",
          position === 'bottom-right' && "-bottom-12 -right-12 rounded-tl-full"
        )}
        style={{ animationDuration: animate ? '20s' : undefined }}
      />
      {/* Inner arc */}
      <div 
        className={cn(
          "absolute w-16 h-16 opacity-15",
          "bg-gradient-to-tr from-purple-400 to-pink-400",
          animate && "animate-spin",
          position === 'top-left' && "-top-8 -left-8 rounded-br-full",
          position === 'top-right' && "-top-8 -right-8 rounded-bl-full", 
          position === 'bottom-left' && "-bottom-8 -left-8 rounded-tr-full",
          position === 'bottom-right' && "-bottom-8 -right-8 rounded-tl-full"
        )}
        style={{ 
          animationDuration: animate ? '15s' : undefined,
          animationDirection: animate ? 'reverse' : undefined
        }}
      />
    </>
  ),

  mixed: (position: CornerPosition, animate: boolean) => (
    <>
      {/* Circle */}
      <div 
        className={cn(
          "absolute w-20 h-20 rounded-full opacity-12",
          "bg-gradient-to-br from-blue-500 to-purple-500",
          animate && "animate-pulse",
          position === 'top-left' && "-top-10 -left-10",
          position === 'top-right' && "-top-10 -right-10",
          position === 'bottom-left' && "-bottom-10 -left-10",
          position === 'bottom-right' && "-bottom-10 -right-10"
        )}
      />
      {/* Rectangle */}
      <div 
        className={cn(
          "absolute w-12 h-8 opacity-15 rotate-12",
          "bg-gradient-to-r from-purple-400 to-pink-400",
          animate && "animate-bounce",
          position === 'top-left' && "top-8 left-8",
          position === 'top-right' && "top-8 right-8",
          position === 'bottom-left' && "bottom-8 left-8",
          position === 'bottom-right' && "bottom-8 right-8"
        )}
        style={{ animationDelay: animate ? '0.5s' : undefined }}
      />
      {/* Small triangle */}
      <div 
        className={cn(
          "absolute w-0 h-0 opacity-18",
          animate && "animate-pulse",
          position === 'top-left' && "top-16 left-16 border-l-[20px] border-l-transparent border-b-[20px] border-b-pink-400/30",
          position === 'top-right' && "top-16 right-16 border-r-[20px] border-r-transparent border-b-[20px] border-b-blue-400/30",
          position === 'bottom-left' && "bottom-16 left-16 border-l-[20px] border-l-transparent border-t-[20px] border-t-purple-400/30",
          position === 'bottom-right' && "bottom-16 right-16 border-r-[20px] border-r-transparent border-t-[20px] border-t-blue-400/30"
        )}
        style={{ animationDelay: animate ? '1s' : undefined }}
      />
    </>
  ),

  dots: (position: CornerPosition, animate: boolean) => (
    <>
      {/* Dot grid pattern */}
      {[...Array(9)].map((_, i) => {
        const row = Math.floor(i / 3);
        const col = i % 3;
        return (
          <div
            key={i}
            className={cn(
              "absolute w-2 h-2 rounded-full opacity-15",
              "bg-gradient-to-br from-blue-400 to-purple-400",
              animate && "animate-pulse"
            )}
            style={{ 
              animationDelay: animate ? `${i * 0.1}s` : undefined,
              top: position.includes('top') ? `${row * 12 + 8}px` : undefined,
              bottom: position.includes('bottom') ? `${row * 12 + 8}px` : undefined,
              left: position.includes('left') ? `${col * 12 + 8}px` : undefined,
              right: position.includes('right') ? `${col * 12 + 8}px` : undefined,
            }}
          />
        );
      })}
    </>
  ),

  geometric: (position: CornerPosition, animate: boolean) => (
    <>
      {/* Sharp hexagon */}
      <div 
        className={cn(
          "absolute w-16 h-16 opacity-12",
          "bg-gradient-to-br from-emerald-500 to-teal-500",
          animate && "animate-spin",
          position === 'top-left' && "-top-8 -left-8",
          position === 'top-right' && "-top-8 -right-8",
          position === 'bottom-left' && "-bottom-8 -left-8",
          position === 'bottom-right' && "-bottom-8 -right-8"
        )}
        style={{ 
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          animationDuration: animate ? '25s' : undefined
        }}
      />
      {/* Diamond shape */}
      <div 
        className={cn(
          "absolute w-12 h-12 opacity-15 rotate-45",
          "bg-gradient-to-tr from-cyan-400 to-emerald-400",
          animate && "animate-bounce",
          position === 'top-left' && "top-12 left-12",
          position === 'top-right' && "top-12 right-12",
          position === 'bottom-left' && "bottom-12 left-12",
          position === 'bottom-right' && "bottom-12 right-12"
        )}
        style={{ animationDelay: animate ? '0.4s' : undefined }}
      />
      {/* Sharp rectangle */}
      <div 
        className={cn(
          "absolute w-8 h-16 opacity-18 rotate-12",
          "bg-gradient-to-b from-teal-400 to-cyan-400",
          animate && "animate-pulse",
          position === 'top-left' && "top-20 left-4",
          position === 'top-right' && "top-20 right-4",
          position === 'bottom-left' && "bottom-20 left-4",
          position === 'bottom-right' && "bottom-20 right-4"
        )}
        style={{ animationDelay: animate ? '0.8s' : undefined }}
      />
    </>
  ),

  organic: (position: CornerPosition, animate: boolean) => (
    <>
      {/* Blob shape 1 */}
      <div 
        className={cn(
          "absolute w-20 h-20 opacity-10",
          "bg-gradient-to-br from-rose-500 to-orange-500",
          animate && "animate-pulse",
          position === 'top-left' && "-top-10 -left-10",
          position === 'top-right' && "-top-10 -right-10",
          position === 'bottom-left' && "-bottom-10 -left-10",
          position === 'bottom-right' && "-bottom-10 -right-10"
        )}
        style={{ 
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          animationDelay: animate ? '0.2s' : undefined
        }}
      />
      {/* Blob shape 2 */}
      <div 
        className={cn(
          "absolute w-14 h-14 opacity-15",
          "bg-gradient-to-tr from-amber-400 to-rose-400",
          animate && "animate-bounce",
          position === 'top-left' && "top-8 left-8",
          position === 'top-right' && "top-8 right-8",
          position === 'bottom-left' && "bottom-8 left-8",
          position === 'bottom-right' && "bottom-8 right-8"
        )}
        style={{ 
          borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%',
          animationDelay: animate ? '0.6s' : undefined
        }}
      />
      {/* Small organic shape */}
      <div 
        className={cn(
          "absolute w-10 h-8 opacity-20",
          "bg-gradient-to-bl from-orange-400 to-amber-400",
          animate && "animate-pulse",
          position === 'top-left' && "top-16 left-16",
          position === 'top-right' && "top-16 right-16",
          position === 'bottom-left' && "bottom-16 left-16",
          position === 'bottom-right' && "bottom-16 right-16"
        )}
        style={{ 
          borderRadius: '70% 30% 50% 50% / 30% 70% 50% 50%',
          animationDelay: animate ? '1.2s' : undefined
        }}
      />
    </>
  ),
};

export default function CornerDecoration({ 
  position, 
  variant = 'circles', 
  className,
  animate = true 
}: CornerDecorationProps) {
  return (
    <div 
      className={cn(
        "absolute inset-0 pointer-events-none overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {decorationVariants[variant](position, animate)}
    </div>
  );
}

// Export individual decoration components for specific use cases
export const TopLeftDecoration = ({ variant = 'circles', animate = true }: Omit<CornerDecorationProps, 'position'>) => (
  <CornerDecoration position="top-left" variant={variant} animate={animate} />
);

export const TopRightDecoration = ({ variant = 'circles', animate = true }: Omit<CornerDecorationProps, 'position'>) => (
  <CornerDecoration position="top-right" variant={variant} animate={animate} />
);

export const BottomLeftDecoration = ({ variant = 'circles', animate = true }: Omit<CornerDecorationProps, 'position'>) => (
  <CornerDecoration position="bottom-left" variant={variant} animate={animate} />
);

export const BottomRightDecoration = ({ variant = 'circles', animate = true }: Omit<CornerDecorationProps, 'position'>) => (
  <CornerDecoration position="bottom-right" variant={variant} animate={animate} />
);