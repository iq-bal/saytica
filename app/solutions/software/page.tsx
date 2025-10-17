import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import { Code, Users, Clock, Shield, Zap, Target, CheckCircle, TrendingUp, Monitor } from "lucide-react";

const softwareData = {
  title: "Software Localization",
  subtitle: "Code Once, Deploy Globally",
  description: "Comprehensive software localization services that make your applications accessible and user-friendly for global markets while maintaining technical integrity.",
  features: [
    {
      title: "Technical Expertise",
      description: "Engineers and linguists who understand software architecture and development workflows.",
      icon: <Code className="h-6 w-6 text-primary" />
    },
    {
      title: "UI/UX Adaptation",
      description: "Adapt user interfaces for different languages, including RTL support and text expansion.",
      icon: <Monitor className="h-6 w-6 text-primary" />
    },
    {
      title: "API Integration",
      description: "Seamless integration with your development pipeline and continuous localization workflows.",
      icon: <Target className="h-6 w-6 text-primary" />
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive testing including functional, linguistic, and cosmetic quality checks.",
      icon: <Shield className="h-6 w-6 text-primary" />
    },
    {
      title: "Agile Support",
      description: "Flexible workflows that adapt to your development cycles and release schedules.",
      icon: <Zap className="h-6 w-6 text-primary" />
    },
    {
      title: "Real-time Updates",
      description: "Continuous localization with real-time updates as your software evolves.",
      icon: <Clock className="h-6 w-6 text-primary" />
    }
  ],
  benefits: [
    {
      title: "Global Market Access",
      description: "Expand your software reach to international markets with native language support."
    },
    {
      title: "User Experience",
      description: "Provide intuitive, culturally appropriate interfaces that users love."
    },
    {
      title: "Faster Time-to-Market",
      description: "Simultaneous global releases with integrated localization workflows."
    },
    {
      title: "Reduced Costs",
      description: "Efficient processes that minimize localization overhead and maintenance."
    },
    {
      title: "Scalable Solutions",
      description: "Localization infrastructure that grows with your software and user base."
    },
    {
      title: "Technical Compliance",
      description: "Meet local technical standards and accessibility requirements."
    }
  ],
  process: [
    {
      step: 1,
      title: "Technical Assessment",
      description: "Analyze your software architecture, identify localization requirements, and plan integration."
    },
    {
      step: 2,
      title: "Internationalization",
      description: "Prepare your codebase for localization with proper string externalization and formatting."
    },
    {
      step: 3,
      title: "Translation & Testing",
      description: "Translate content and conduct comprehensive testing across all target platforms."
    },
    {
      step: 4,
      title: "Deployment & Support",
      description: "Deploy localized versions and provide ongoing support for updates and maintenance."
    }
  ],
  stats: [
    { label: "Applications Localized", value: "2K+" },
    { label: "Code Commits", value: "100K+" },
    { label: "Bug-Free Releases", value: "99.5%" },
    { label: "Developer Satisfaction", value: "96%" }
  ],
  testimonial: {
    quote: "Saytica's software localization helped us expand to 15 new markets seamlessly. Their technical expertise is unmatched.",
    author: "Sarah Kim",
    company: "TechFlow Solutions",
    rating: 5
  }
};

export default function SoftwarePage() {
  return <SolutionPageTemplate data={softwareData} />;
}