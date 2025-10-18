import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import { Megaphone, Users, Clock, Shield, Target, BarChart } from "lucide-react";

const marketingData = {
  title: "Marketing Localization",
  subtitle: "Speak Your Customers' Language, Win Their Hearts",
  description: "Transform your marketing campaigns for global audiences with culturally resonant messaging that drives engagement and conversions across all markets.",
  features: [
    {
      title: "Creative Adaptation",
      description: "Transcreation services that maintain brand voice while resonating with local audiences.",
      icon: <Megaphone className="h-6 w-6 text-primary" />
    },
    {
      title: "Cultural Intelligence",
      description: "Deep understanding of local market preferences, trends, and consumer behavior.",
      icon: <Users className="h-6 w-6 text-primary" />
    },
    {
      title: "Multi-Channel Support",
      description: "Localize across all marketing channels including digital, print, social, and video.",
      icon: <Target className="h-6 w-6 text-primary" />
    },
    {
      title: "Brand Consistency",
      description: "Maintain brand identity and messaging consistency across all localized markets.",
      icon: <Shield className="h-6 w-6 text-primary" />
    },
    {
      title: "Campaign Optimization",
      description: "Data-driven insights to optimize campaigns for maximum local market impact.",
      icon: <BarChart className="h-6 w-6 text-primary" />
    },
    {
      title: "Rapid Deployment",
      description: "Fast turnaround times to meet tight campaign deadlines and market opportunities.",
      icon: <Clock className="h-6 w-6 text-primary" />
    }
  ],
  benefits: [
    {
      title: "Higher Conversion Rates",
      description: "Culturally relevant messaging drives significantly higher engagement and conversions."
    },
    {
      title: "Brand Trust",
      description: "Build authentic connections with local audiences through culturally appropriate communication."
    },
    {
      title: "Market Penetration",
      description: "Accelerate market entry with campaigns that resonate from day one."
    },
    {
      title: "ROI Optimization",
      description: "Maximize marketing spend efficiency with targeted, localized messaging."
    },
    {
      title: "Competitive Advantage",
      description: "Stand out from competitors with superior cultural adaptation and local relevance."
    },
    {
      title: "Global Consistency",
      description: "Maintain unified brand experience while adapting to local market needs."
    }
  ],
  process: [
    {
      step: 1,
      title: "Market Research",
      description: "Analyze target markets, consumer behavior, and competitive landscape for strategic insights."
    },
    {
      step: 2,
      title: "Creative Strategy",
      description: "Develop culturally appropriate messaging strategies that align with brand objectives."
    },
    {
      step: 3,
      title: "Content Creation",
      description: "Transcreate and adapt all marketing materials for maximum local market impact."
    },
    {
      step: 4,
      title: "Launch & Optimize",
      description: "Deploy campaigns and continuously optimize based on performance data and feedback."
    }
  ],
  stats: [
    { label: "Campaigns Localized", value: "5K+" },
    { label: "Markets Reached", value: "120+" },
    { label: "Conversion Increase", value: "250%" },
    { label: "Brand Satisfaction", value: "98%" }
  ],
  testimonial: {
    quote: "Our localized campaigns with Saytica achieved 4x higher engagement rates. They truly understand how to connect with local audiences.",
    author: "Maria Gonzalez",
    company: "Global Brands Inc.",
    rating: 5
  }
};

export default function MarketingPage() {
  return <SolutionPageTemplate data={marketingData} />;
}