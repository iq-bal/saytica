import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import { Globe, Users, Clock, Shield, Target, TrendingUp } from "lucide-react";

const translationData = {
  title: "Translation & Localization",
  subtitle: "Break Language Barriers, Build Global Connections",
  description: "Professional translation and localization services that help your business communicate effectively across cultures and markets worldwide.",
  features: [
    {
      title: "Native Linguists",
      description: "Work with certified native speakers who understand cultural nuances and local market preferences.",
      icon: <Users className="h-6 w-6 text-primary" />
    },
    {
      title: "Quality Assurance",
      description: "Multi-step quality control process ensures accuracy and consistency across all translations.",
      icon: <Shield className="h-6 w-6 text-primary" />
    },
    {
      title: "Fast Turnaround",
      description: "Efficient workflows and dedicated project managers deliver results on time, every time.",
      icon: <Clock className="h-6 w-6 text-primary" />
    },
    {
      title: "Cultural Adaptation",
      description: "Beyond translation - we adapt your content to resonate with local cultures and customs.",
      icon: <Globe className="h-6 w-6 text-primary" />
    },
    {
      title: "Industry Expertise",
      description: "Specialized knowledge across healthcare, legal, technical, marketing, and more.",
      icon: <Target className="h-6 w-6 text-primary" />
    },
    {
      title: "Scalable Solutions",
      description: "From single documents to enterprise-level projects, we scale to meet your needs.",
      icon: <TrendingUp className="h-6 w-6 text-primary" />
    }
  ],
  benefits: [
    {
      title: "Expand Global Reach",
      description: "Enter new markets with confidence, knowing your message resonates with local audiences."
    },
    {
      title: "Maintain Brand Consistency",
      description: "Preserve your brand voice and values across all languages and cultures."
    },
    {
      title: "Reduce Time to Market",
      description: "Accelerate international launches with our streamlined localization process."
    },
    {
      title: "Increase Customer Engagement",
      description: "Connect with customers in their native language for higher engagement and conversion rates."
    },
    {
      title: "Ensure Compliance",
      description: "Meet local regulatory requirements with accurate legal and technical translations."
    },
    {
      title: "Cost-Effective Solutions",
      description: "Optimize your localization budget with our efficient processes and technology."
    }
  ],
  process: [
    {
      step: 1,
      title: "Project Analysis",
      description: "We analyze your content, target markets, and specific requirements to create a customized strategy."
    },
    {
      step: 2,
      title: "Expert Assignment",
      description: "Native linguists with relevant industry expertise are assigned to your project."
    },
    {
      step: 3,
      title: "Translation & Review",
      description: "Professional translation followed by thorough quality assurance and cultural adaptation."
    },
    {
      step: 4,
      title: "Delivery & Support",
      description: "Final delivery with ongoing support and revisions as needed."
    }
  ],
  stats: [
    { label: "Languages Supported", value: "100+" },
    { label: "Projects Completed", value: "50K+" },
    { label: "Client Satisfaction", value: "99%" },
    { label: "Average Turnaround", value: "24hrs" }
  ],
  testimonial: {
    quote: "Saytica's translation services helped us expand into 15 new markets. Their cultural expertise made all the difference in our global success.",
    author: "Sarah Johnson",
    company: "Global Tech Solutions",
    rating: 5
  }
};

export default function TranslationPage() {
  return <SolutionPageTemplate data={translationData} />;
}