import { ArrowRight, Mail, Phone, Instagram, Linkedin, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <section className="relative bg-background text-foreground py-16">
      <div className="w-full">
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Contact Us</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl md:max-w-3xl">
            We’re here to help. Reach out via live chat or send us a message — we’ll get back within 24 hours.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Info + Live Chat */}
          <div className="bg-muted rounded-xl shadow-sm p-8 border border-border">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Let’s talk</h2>
              <p className="text-muted-foreground">
                Our team is available Monday–Friday, 9am–6pm. For urgent assistance, use Live Chat.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:hello@saytica.com"
                  className="flex items-center gap-3 text-primary hover:underline"
                >
                  <Mail size={18} /> hello@saytica.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-primary hover:underline"
                >
                  <Phone size={18} /> +1 (234) 567-890
                </a>
              </div>

              <div className="pt-2">
                <Button
                  className="rounded-full px-5 py-2 bg-gradient-to-r from-foreground to-foreground/90 text-background hover:from-foreground/90 hover:to-foreground/80 hover:shadow-lg hover:scale-[1.02] transition duration-200"
                >
                  Live Chat
                  <span className="ml-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-white ring-1 ring-black/10 dark:ring-white/15">
                    <ArrowRight size={14} className="text-black" />
                  </span>
                </Button>
              </div>

              {/* Social icons in left column */}
              <div className="pt-6">
                <div className="flex items-center gap-3">
                  <a
                    aria-label="Instagram"
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground hover:text-primary border border-border shadow-sm hover:shadow-md"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    aria-label="LinkedIn"
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground hover:text-primary border border-border shadow-sm hover:shadow-md"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    aria-label="Twitter"
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground hover:text-primary border border-border shadow-sm hover:shadow-md"
                  >
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <Card className="rounded-xl shadow-sm border border-border">
            <CardContent className="p-6 md:p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground" htmlFor="firstName">First Name</label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground" htmlFor="lastName">Last Name</label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground" htmlFor="email">Email</label>
                  <Input id="email" type="email" placeholder="john.doe@email.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground" htmlFor="message">Message</label>
                  <Textarea id="message" placeholder="Write your message..." className="min-h-[140px]" />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full md:w-auto px-5 py-2 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 hover:shadow-lg hover:scale-[1.02] transition duration-200"
                  >
                    Send Message
                    <span className="ml-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-white ring-1 ring-black/10 dark:ring-white/15">
                      <ArrowRight size={14} className="text-black" />
                    </span>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
      </div>
      </div>
    </section>
  );
}