"use client";

import React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/lib/theme";
import { 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

/**
 * Modern, responsive footer component with glass effect styling
 * Features: Brand section, Quick Links, Contact info, Company links
 * Responsive: 4-col desktop, 2-col tablet, stacked mobile
 */
export default function Footer() {
  const { theme } = useTheme();

  // Social media links with icons and accessibility labels
  const socialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/saytica",
      icon: Twitter,
      label: "Follow Saytica on Twitter"
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/saytica",
      icon: Linkedin,
      label: "Connect with Saytica on LinkedIn"
    },
    {
      name: "Facebook",
      href: "https://facebook.com/saytica",
      icon: Facebook,
      label: "Like Saytica on Facebook"
    },
    {
      name: "Instagram",
      href: "https://instagram.com/saytica",
      icon: Instagram,
      label: "Follow Saytica on Instagram"
    }
  ];

  // Quick navigation links
  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Language Solutions", href: "/solutions" },
    { name: "Our Work", href: "/work" },
    { name: "Blog", href: "/blog" }
  ];

  // Company legal links
  const companyLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" }
  ];

  return (
    <footer className="mt-auto bg-background/80 backdrop-blur-md border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content with responsive grid */}
        <Card className="bg-background/60 backdrop-blur-sm border-0 shadow-none rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Saytica</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[240px]">
                Innovative language solutions for global communication and digital transformation.
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-4 pt-2">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      aria-label={social.label}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md p-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconComponent className="h-5 w-5" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
              <nav aria-label="Footer navigation">
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    123 Innovation Drive<br />
                    Tech City, TC 12345
                  </p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <Link
                    href="mailto:hello@saytica.com"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
                  >
                    hello@saytica.com
                  </Link>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <Link
                    href="tel:+1234567890"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
                  >
                    +1 (234) 567-8900
                  </Link>
                </div>
              </div>
            </div>

            {/* Company Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Company</h4>
              <nav aria-label="Legal navigation">
                <ul className="space-y-3">
                  {companyLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </Card>

        {/* Footer bottom with separator */}
        <div className="mt-8">
          <Separator className="mb-6 opacity-50" />
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Saytica. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}