'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Hash, ChevronRight } from 'lucide-react'

interface Section {
  id: string
  title: string
  level: number
}

interface SectionSelectorProps {
  content: string
}

export default function SectionSelector({ content }: SectionSelectorProps) {
  const [sections, setSections] = useState<Section[]>([])
  const [activeSection, setActiveSection] = useState<string>('')

  // Extract headings from content
  useEffect(() => {
    const extractSections = () => {
      const headingRegex = /^(#{1,3})\s+(.+)$/gm
      const matches = Array.from(content.matchAll(headingRegex))
      
      const extractedSections: Section[] = matches.map((match) => {
        const level = match[1].length
        const title = match[2].trim()
        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
        
        return {
          id,
          title,
          level
        }
      })
      
      setSections(extractedSections)
    }

    extractSections()
  }, [content])

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const headings = sections.map(section => 
        document.getElementById(section.id)
      ).filter(Boolean)

      let currentSection = ''
      
      for (const heading of headings) {
        if (heading) {
          const rect = heading.getBoundingClientRect()
          if (rect.top <= 100) {
            currentSection = heading.id
          }
        }
      }
      
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const yOffset = -80 // Offset for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      })
    }
  }

  if (sections.length === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <Card className="p-6 bg-gradient-to-br from-background to-muted/20 border-border/50">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <Hash className="h-4 w-4 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground">Table of Contents</h3>
        </div>
        
        <div className="space-y-1">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => scrollToSection(section.id)}
              className={`
                w-full text-left p-3 rounded-lg transition-all duration-200 group relative
                ${activeSection === section.id 
                  ? 'bg-primary/10 text-primary' 
                  : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
                }
                ${section.level === 2 ? 'ml-0' : section.level === 3 ? 'ml-4' : 'ml-0'}
              `}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {section.level === 3 && (
                    <div className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                  )}
                  <span className={`
                    ${section.level === 2 ? 'text-sm font-medium' : 'text-sm'}
                    line-clamp-1
                  `}>
                    {section.title}
                  </span>
                </div>
                
                <ChevronRight className={`
                  h-3 w-3 transition-transform duration-200
                  ${activeSection === section.id ? 'text-primary' : 'text-muted-foreground/60'}
                  group-hover:translate-x-1
                `} />
              </div>
            </motion.button>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-border/50">
          <Badge variant="secondary" className="text-xs">
            {sections.length} section{sections.length !== 1 ? 's' : ''}
          </Badge>
        </div>
      </Card>
    </motion.div>
  )
}