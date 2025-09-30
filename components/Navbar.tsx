"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useTheme } from "@/lib/theme";
import {
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  ChevronRight,
  Globe,
  Briefcase,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Solutions data
const solutionsItems = [
  { title: "Translation & Localization", href: "/solutions/translation" },
  { title: "eLearning Localization", href: "/solutions/elearning" },
  { title: "Game Localization", href: "/solutions/gaming" },
  { title: "Data Collection", href: "/solutions/data-collection" },
  { title: "Website Localization", href: "/solutions/website" },
  { title: "Document Localization", href: "/solutions/documents" },
  { title: "Software Localization", href: "/solutions/software" },
  { title: "App Localization", href: "/solutions/apps" },
  { title: "Voiceover & Video Localization", href: "/solutions/voiceover" },
];

// Languages data (sample)
const languagesData = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "it", name: "Italian", flag: "🇮🇹" },
  { code: "pt", name: "Portuguese", flag: "🇵🇹" },
  { code: "ru", name: "Russian", flag: "🇷🇺" },
  { code: "zh", name: "Chinese", flag: "🇨🇳" },
  { code: "ja", name: "Japanese", flag: "🇯🇵" },
  { code: "ko", name: "Korean", flag: "🇰🇷" },
  { code: "ar", name: "Arabic", flag: "🇸🇦" },
  { code: "hi", name: "Hindi", flag: "🇮🇳" },
];

// Mobile accordion component
const MobileAccordion = ({
  title,
  children,
  icon: Icon,
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        aria-expanded={isOpen}
        aria-controls={`mobile-${title.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <div className="flex items-center gap-3">
          <Icon className="h-5 w-5" />
          {title}
        </div>
        <ChevronRight
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-90"
          )}
        />
      </button>
      <div
        id={`mobile-${title.toLowerCase().replace(/\s+/g, "-")}`}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        )}
      >
        <div className="pl-8 space-y-2">{children}</div>
      </div>
    </div>
  );
};

export default function Navbar() {
  const { currentTheme, toggleTheme, mounted } = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const navRef = useRef<HTMLElement>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus management for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Trap focus within mobile menu
      const focusableElements = document.querySelectorAll(
        '[data-mobile-menu] button, [data-mobile-menu] a, [data-mobile-menu] [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      firstElement?.focus();
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Technology", href: "/technology" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center space-x-2 font-bold text-xl text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-2 py-1"
              aria-label="Saytica Home"
            >
              <Globe className="h-6 w-6" />
              <span>Saytica</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink asChild>
                      <Link href={item.href} className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}

                {/* Solutions Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    <Briefcase className="mr-2 h-4 w-4" />
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] grid-cols-2 gap-3 p-6">
                      {solutionsItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        >
                          <div className="text-sm font-medium leading-none group-hover:underline">
                            {item.title}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Languages Dropdown */}
                <NavigationMenuItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-10 px-4 py-2"
                        aria-label="Select language"
                      >
                        <Globe className="mr-2 h-4 w-4" />
                        {languagesData.find((lang) => lang.code === selectedLanguage)?.flag}{" "}
                        {languagesData.find((lang) => lang.code === selectedLanguage)?.name}
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="w-56 max-h-80 overflow-y-auto"
                    >
                      <div className="grid grid-cols-1 gap-1 p-1">
                        {languagesData.map((language) => (
                          <DropdownMenuItem
                            key={language.code}
                            onClick={() => setSelectedLanguage(language.code)}
                            className="flex items-center gap-3 cursor-pointer"
                          >
                            <span className="text-lg">{language.flag}</span>
                            <span className="flex-1">{language.name}</span>
                            {selectedLanguage === language.code && (
                              <div className="h-2 w-2 rounded-full bg-primary" />
                            )}
                          </DropdownMenuItem>
                        ))}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="h-10 w-10 px-0"
              aria-label={`Switch to ${currentTheme === "light" ? "dark" : "light"} theme`}
            >
              {mounted && (
                <>
                  {currentTheme === "light" ? (
                    <Moon className="h-4 w-4 transition-all" />
                  ) : (
                    <Sun className="h-4 w-4 transition-all" />
                  )}
                </>
              )}
            </Button>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-10 w-10 px-0"
                    aria-label="Open mobile menu"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-full sm:w-80 p-0"
                  data-mobile-menu
                >
                  <SheetHeader className="border-b border-border/10 p-6">
                    <SheetTitle className="flex items-center gap-2 text-left">
                      <Globe className="h-5 w-5" />
                      Saytica
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col h-full">
                    <div className="flex-1 overflow-y-auto p-6">
                      <div className="space-y-1">
                        {navItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          >
                            {item.name}
                          </Link>
                        ))}

                        {/* Mobile Solutions Accordion */}
                        <MobileAccordion title="Solutions" icon={Briefcase}>
                          {solutionsItems.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </MobileAccordion>

                        {/* Mobile Languages Accordion */}
                        <MobileAccordion title="Languages" icon={Globe}>
                          <div className="grid grid-cols-1 gap-1">
                            {languagesData.map((language) => (
                              <button
                                key={language.code}
                                onClick={() => {
                                  setSelectedLanguage(language.code);
                                  setIsMobileMenuOpen(false);
                                }}
                                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-left w-full"
                              >
                                <span className="text-lg">{language.flag}</span>
                                <span className="flex-1">{language.name}</span>
                                {selectedLanguage === language.code && (
                                  <div className="h-2 w-2 rounded-full bg-primary" />
                                )}
                              </button>
                            ))}
                          </div>
                        </MobileAccordion>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}