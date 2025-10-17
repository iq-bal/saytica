import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import { Gamepad2, Users, Clock, Shield, Zap, Target, CheckCircle, TrendingUp, Joystick } from "lucide-react";

const gamingData = {
  title: "Game Localization",
  subtitle: "Level Up Your Global Gaming Experience",
  description: "Comprehensive game localization services that bring your games to life for players worldwide, maintaining the excitement and immersion across all cultures.",
  features: [
    {
      title: "Gaming Expertise",
      description: "Specialized translators who understand gaming terminology, mechanics, and player psychology.",
      icon: <Gamepad2 className="h-6 w-6 text-primary" />
    },
    {
      title: "Voice Acting",
      description: "Professional voice actors and dubbing services for character dialogue and narration.",
      icon: <Users className="h-6 w-6 text-primary" />
    },
    {
      title: "UI/UX Localization",
      description: "Adapt user interfaces, menus, and HUD elements for different languages and cultures.",
      icon: <Target className="h-6 w-6 text-primary" />
    },
    {
      title: "Cultural Sensitivity",
      description: "Navigate cultural taboos and preferences to ensure global market acceptance.",
      icon: <Shield className="h-6 w-6 text-primary" />
    },
    {
      title: "Platform Optimization",
      description: "Optimize for different gaming platforms including PC, console, and mobile devices.",
      icon: <Zap className="h-6 w-6 text-primary" />
    },
    {
      title: "Rapid Turnaround",
      description: "Meet tight release schedules with efficient workflows and dedicated gaming teams.",
      icon: <Clock className="h-6 w-6 text-primary" />
    }
  ],
  benefits: [
    {
      title: "Expand Player Base",
      description: "Reach millions of new players in international markets with localized gaming experiences."
    },
    {
      title: "Increase Revenue",
      description: "Boost sales and in-game purchases with culturally relevant content and marketing."
    },
    {
      title: "Maintain Immersion",
      description: "Preserve the gaming experience and emotional connection across all languages."
    },
    {
      title: "Faster Launch",
      description: "Simultaneous global releases with our streamlined localization pipeline."
    },
    {
      title: "Community Building",
      description: "Foster local gaming communities with culturally appropriate content and communication."
    },
    {
      title: "Competitive Edge",
      description: "Stand out in crowded markets with superior localization quality."
    }
  ],
  process: [
    {
      step: 1,
      title: "Game Analysis",
      description: "Deep dive into game mechanics, story, characters, and target audience preferences."
    },
    {
      step: 2,
      title: "Localization Kit",
      description: "Create comprehensive style guides and terminology databases for consistent translation."
    },
    {
      step: 3,
      title: "Translation & Audio",
      description: "Translate text, record voice acting, and adapt visual elements for target markets."
    },
    {
      step: 4,
      title: "Testing & Polish",
      description: "Extensive linguistic and functional testing to ensure flawless gaming experience."
    }
  ],
  stats: [
    { label: "Games Localized", value: "500+" },
    { label: "Languages Supported", value: "80+" },
    { label: "Voice Hours Recorded", value: "50K+" },
    { label: "Player Satisfaction", value: "97%" }
  ],
  testimonial: {
    quote: "Saytica's game localization helped us achieve 300% higher engagement in Asian markets. Players love the authentic cultural adaptations.",
    author: "Alex Rodriguez",
    company: "Pixel Studios",
    rating: 5
  }
};

export default function GamingPage() {
  return <SolutionPageTemplate data={gamingData} />;
}