import React from "react";
import { 
  Globe, 
  Users, 
  Clock, 
  Shield, 
  Target, 
  TrendingUp,
  GraduationCap,
  Zap,
  Gamepad2,
  DollarSign,
  CreditCard,
  Scale,
  CheckCircle,
  FileText,
  Megaphone,
  BarChart,
  Heart,
  Stethoscope,
  Code,
  Monitor
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Benefit {
  title: string;
  description: string;
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface SolutionData {
  title: string;
  subtitle: string;
  description: string;
  heroImage?: string;
  features: Feature[];
  benefits: Benefit[];
  process: ProcessStep[];
  stats: {
    label: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    company: string;
    rating: number;
  };
}

const solutionsData: Record<string, SolutionData> = {
  translation: {
    title: "Translation Services",
    subtitle: "Professional translation solutions for global communication",
    description: "Break down language barriers with our comprehensive translation services. We provide accurate, culturally-aware translations that maintain the original meaning and context across multiple languages.",
    features: [
      {
        icon: <Globe className="w-6 h-6" />,
        title: "Multi-Language Support",
        description: "Support for 100+ languages with native speaker expertise"
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "Expert Linguists",
        description: "Certified translators with domain-specific knowledge"
      },
      {
        icon: <Clock className="w-6 h-6" />,
        title: "Fast Turnaround",
        description: "Quick delivery without compromising quality"
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: "Quality Assurance",
        description: "Multi-tier review process for accuracy"
      }
    ],
    benefits: [
      {
        title: "Global Reach",
        description: "Expand your business to international markets with localized content"
      },
      {
        title: "Cultural Accuracy",
        description: "Culturally appropriate translations that resonate with target audiences"
      },
      {
        title: "Cost Effective",
        description: "Competitive pricing with transparent cost structure"
      }
    ],
    process: [
      {
        step: 1,
        title: "Content Analysis",
        description: "We analyze your content to understand context and requirements"
      },
      {
        step: 2,
        title: "Translation",
        description: "Expert linguists translate your content with cultural sensitivity"
      },
      {
        step: 3,
        title: "Quality Review",
        description: "Multiple review stages ensure accuracy and consistency"
      },
      {
        step: 4,
        title: "Delivery",
        description: "Final translated content delivered in your preferred format"
      }
    ],
    stats: [
      { label: "Languages Supported", value: "100+" },
      { label: "Words Translated", value: "50M+" },
      { label: "Accuracy Rate", value: "99.8%" },
      { label: "Support Available", value: "24/7" }
    ],
    testimonial: {
      quote: "Their translation services helped us expand to 15 new markets. The quality and cultural accuracy are exceptional.",
      author: "Maria Rodriguez",
      company: "GlobalTech Solutions",
      rating: 5
    }
  },

  elearning: {
    title: "eLearning Localization",
    subtitle: "Make Learning Universal, Keep Knowledge Local",
    description: "Transform your educational content for global audiences while maintaining pedagogical effectiveness and cultural relevance across different markets.",
    features: [
      {
        title: "Educational Expertise",
        description: "Specialized linguists with educational backgrounds ensure pedagogical accuracy and effectiveness.",
        icon: <GraduationCap className="h-6 w-6 text-primary" />
      },
      {
        title: "Interactive Content",
        description: "Localize multimedia elements, quizzes, simulations, and interactive learning modules.",
        icon: <Zap className="h-6 w-6 text-primary" />
      },
      {
        title: "LMS Integration",
        description: "Seamless integration with popular Learning Management Systems and educational platforms.",
        icon: <Target className="h-6 w-6 text-primary" />
      },
      {
        title: "Cultural Adaptation",
        description: "Adapt learning scenarios, examples, and case studies to local cultural contexts.",
        icon: <Users className="h-6 w-6 text-primary" />
      },
      {
        title: "Quality Assurance",
        description: "Rigorous testing ensures all interactive elements function correctly in target languages.",
        icon: <Shield className="h-6 w-6 text-primary" />
      },
      {
        title: "Rapid Deployment",
        description: "Efficient workflows enable quick course launches in multiple markets simultaneously.",
        icon: <Clock className="h-6 w-6 text-primary" />
      }
    ],
    benefits: [
      {
        title: "Global Learning Access",
        description: "Make education accessible to learners worldwide in their native languages."
      },
      {
        title: "Improved Learning Outcomes",
        description: "Culturally relevant content increases engagement and knowledge retention."
      },
      {
        title: "Faster Market Entry",
        description: "Launch educational programs in new markets quickly and efficiently."
      },
      {
        title: "Consistent Quality",
        description: "Maintain educational standards and learning objectives across all languages."
      },
      {
        title: "Cost Optimization",
        description: "Leverage existing content investments across multiple markets."
      },
      {
        title: "Compliance Ready",
        description: "Meet local educational standards and regulatory requirements."
      }
    ],
    process: [
      {
        step: 1,
        title: "Content Analysis",
        description: "Comprehensive review of learning objectives, content types, and target audience requirements."
      },
      {
        step: 2,
        title: "Localization Strategy",
        description: "Develop culturally appropriate learning scenarios and adapt pedagogical approaches."
      },
      {
        step: 3,
        title: "Multimedia Localization",
        description: "Translate and adapt text, audio, video, and interactive elements for target markets."
      },
      {
        step: 4,
        title: "Testing & Deployment",
        description: "Thorough quality testing followed by seamless deployment to your learning platform."
      }
    ],
    stats: [
      { label: "Courses Localized", value: "10K+" },
      { label: "Learning Hours", value: "1M+" },
      { label: "Student Satisfaction", value: "98%" },
      { label: "Platform Integrations", value: "50+" }
    ],
    testimonial: {
      quote: "Our global training program reached 200% more learners after localizing with Saytica. The cultural adaptations made learning truly engaging.",
      author: "Dr. Michael Chen",
      company: "EduTech International",
      rating: 5
    }
  },

  gaming: {
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
  },

  financial: {
    title: "Financial Services Localization",
    subtitle: "Navigate Global Financial Markets with Precision",
    description: "Specialized financial translation and localization services ensuring regulatory compliance, cultural sensitivity, and market-specific adaptation for financial institutions worldwide.",
    features: [
      {
        title: "Financial Expertise",
        description: "Certified financial translators with deep knowledge of banking, investment, and insurance sectors.",
        icon: <DollarSign className="h-6 w-6 text-primary" />
      },
      {
        title: "Regulatory Compliance",
        description: "Full compliance with local financial regulations, reporting standards, and disclosure requirements.",
        icon: <Shield className="h-6 w-6 text-primary" />
      },
      {
        title: "Market Intelligence",
        description: "Deep understanding of local financial markets, products, and consumer preferences.",
        icon: <TrendingUp className="h-6 w-6 text-primary" />
      },
      {
        title: "Digital Banking",
        description: "Comprehensive localization for mobile banking apps, fintech platforms, and digital services.",
        icon: <CreditCard className="h-6 w-6 text-primary" />
      },
      {
        title: "Risk Management",
        description: "Accurate translation of risk disclosures, compliance documents, and regulatory filings.",
        icon: <Target className="h-6 w-6 text-primary" />
      },
      {
        title: "Real-time Support",
        description: "Rapid turnaround for time-sensitive financial communications and market announcements.",
        icon: <Clock className="h-6 w-6 text-primary" />
      }
    ],
    benefits: [
      {
        title: "Regulatory Compliance",
        description: "Ensure all financial communications meet local regulatory standards and requirements."
      },
      {
        title: "Market Trust",
        description: "Build customer confidence with accurate, culturally appropriate financial communication."
      },
      {
        title: "Global Expansion",
        description: "Enter new financial markets with compliant, localized products and services."
      },
      {
        title: "Risk Mitigation",
        description: "Reduce compliance risks with accurate financial translations and disclosures."
      },
      {
        title: "Customer Engagement",
        description: "Improve customer experience with localized financial products and communications."
      },
      {
        title: "Competitive Advantage",
        description: "Stand out in local markets with superior financial localization and cultural adaptation."
      }
    ],
    process: [
      {
        step: 1,
        title: "Financial Analysis",
        description: "Comprehensive review of financial products, regulatory requirements, and market conditions."
      },
      {
        step: 2,
        title: "Compliance Mapping",
        description: "Map local regulatory requirements and ensure all translations meet compliance standards."
      },
      {
        step: 3,
        title: "Expert Translation",
        description: "Precise financial translation by certified experts with relevant sector experience."
      },
      {
        step: 4,
        title: "Regulatory Review",
        description: "Final compliance validation and quality assurance by financial regulatory experts."
      }
    ],
    stats: [
      { label: "Financial Documents", value: "100K+" },
      { label: "Regulatory Filings", value: "5K+" },
      { label: "Compliance Rate", value: "100%" },
      { label: "Financial Institutions", value: "200+" }
    ],
    testimonial: {
      quote: "Saytica's financial localization enabled our global expansion while maintaining full regulatory compliance in every market.",
      author: "Robert Chen",
      company: "Global Financial Group",
      rating: 5
    }
  },

  legal: {
    title: "Legal Document Localization",
    subtitle: "Navigate Global Legal Landscapes with Confidence",
    description: "Specialized legal translation and localization services ensuring accuracy, compliance, and cultural appropriateness for all your legal documentation needs.",
    features: [
      {
        title: "Legal Expertise",
        description: "Certified legal translators with deep understanding of international law and local regulations.",
        icon: <Scale className="h-6 w-6 text-primary" />
      },
      {
        title: "Compliance Assurance",
        description: "Ensure all documents meet local legal requirements and regulatory standards.",
        icon: <Shield className="h-6 w-6 text-primary" />
      },
      {
        title: "Document Security",
        description: "Highest levels of confidentiality and security for sensitive legal materials.",
        icon: <FileText className="h-6 w-6 text-primary" />
      },
      {
        title: "Jurisdictional Knowledge",
        description: "Expertise in legal systems across multiple jurisdictions and legal traditions.",
        icon: <Target className="h-6 w-6 text-primary" />
      },
      {
        title: "Quality Control",
        description: "Multi-tier review process including legal validation and linguistic accuracy checks.",
        icon: <CheckCircle className="h-6 w-6 text-primary" />
      },
      {
        title: "Urgent Support",
        description: "Expedited services for time-sensitive legal matters and court deadlines.",
        icon: <Clock className="h-6 w-6 text-primary" />
      }
    ],
    benefits: [
      {
        title: "Legal Compliance",
        description: "Ensure all documents meet local legal standards and regulatory requirements."
      },
      {
        title: "Risk Mitigation",
        description: "Reduce legal risks with accurate translations that preserve legal meaning and intent."
      },
      {
        title: "Global Operations",
        description: "Enable seamless international business operations with proper legal documentation."
      },
      {
        title: "Cost Efficiency",
        description: "Avoid costly legal disputes and delays with accurate, compliant translations."
      },
      {
        title: "Professional Trust",
        description: "Build confidence with clients and partners through professional legal communication."
      },
      {
        title: "Market Access",
        description: "Enter new markets with properly localized legal frameworks and documentation."
      }
    ],
    process: [
      {
        step: 1,
        title: "Legal Analysis",
        description: "Comprehensive review of documents and identification of legal requirements and challenges."
      },
      {
        step: 2,
        title: "Expert Assignment",
        description: "Match documents with certified legal translators specializing in relevant legal areas."
      },
      {
        step: 3,
        title: "Translation & Review",
        description: "Precise translation followed by legal validation and multi-tier quality assurance."
      },
      {
        step: 4,
        title: "Certification & Delivery",
        description: "Final certification and secure delivery of completed legal documents."
      }
    ],
    stats: [
      { label: "Legal Documents", value: "50K+" },
      { label: "Jurisdictions Covered", value: "100+" },
      { label: "Accuracy Rate", value: "99.9%" },
      { label: "Client Satisfaction", value: "99%" }
    ],
    testimonial: {
      quote: "Saytica's legal localization services helped us expand internationally with complete confidence in our legal compliance.",
      author: "James Patterson",
      company: "International Law Firm",
      rating: 5
    }
  },

  marketing: {
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
  },

  medical: {
    title: "Medical Localization",
    subtitle: "Bridging Healthcare Across Cultures and Languages",
    description: "Specialized medical translation and localization services ensuring patient safety, regulatory compliance, and cultural sensitivity in healthcare communications worldwide.",
    features: [
      {
        title: "Medical Expertise",
        description: "Certified medical translators with clinical backgrounds and specialized medical knowledge.",
        icon: <Stethoscope className="h-6 w-6 text-primary" />
      },
      {
        title: "Regulatory Compliance",
        description: "Full compliance with FDA, EMA, and other international medical regulatory standards.",
        icon: <Shield className="h-6 w-6 text-primary" />
      },
      {
        title: "Patient Safety",
        description: "Rigorous quality processes to ensure patient safety and accurate medical communication.",
        icon: <Heart className="h-6 w-6 text-primary" />
      },
      {
        title: "Clinical Trials",
        description: "Specialized support for clinical trial documentation and patient recruitment materials.",
        icon: <Target className="h-6 w-6 text-primary" />
      },
      {
        title: "Medical Devices",
        description: "Comprehensive localization for medical device interfaces, manuals, and training materials.",
        icon: <Zap className="h-6 w-6 text-primary" />
      },
      {
        title: "Urgent Care Support",
        description: "24/7 emergency translation services for critical medical situations and documentation.",
        icon: <Clock className="h-6 w-6 text-primary" />
      }
    ],
    benefits: [
      {
        title: "Patient Safety",
        description: "Ensure accurate medical communication that protects patient health and safety."
      },
      {
        title: "Regulatory Approval",
        description: "Accelerate market approval with compliant medical documentation and submissions."
      },
      {
        title: "Global Healthcare Access",
        description: "Make healthcare solutions accessible to diverse populations worldwide."
      },
      {
        title: "Clinical Accuracy",
        description: "Maintain medical precision and clinical accuracy across all languages and cultures."
      },
      {
        title: "Market Expansion",
        description: "Enter new healthcare markets with confidence in regulatory compliance."
      },
      {
        title: "Professional Trust",
        description: "Build trust with healthcare providers and patients through accurate medical communication."
      }
    ],
    process: [
      {
        step: 1,
        title: "Medical Assessment",
        description: "Thorough review of medical content, regulatory requirements, and target market needs."
      },
      {
        step: 2,
        title: "Expert Matching",
        description: "Assign certified medical translators with relevant clinical and therapeutic expertise."
      },
      {
        step: 3,
        title: "Translation & Validation",
        description: "Precise medical translation with clinical review and regulatory compliance validation."
      },
      {
        step: 4,
        title: "Quality Assurance",
        description: "Multi-tier medical review process ensuring accuracy, safety, and regulatory compliance."
      }
    ],
    stats: [
      { label: "Medical Documents", value: "25K+" },
      { label: "Clinical Trials", value: "500+" },
      { label: "Regulatory Approvals", value: "99.8%" },
      { label: "Healthcare Providers", value: "1K+" }
    ],
    testimonial: {
      quote: "Saytica's medical localization expertise helped us launch our medical device in 20 countries with full regulatory compliance.",
      author: "Dr. Emily Watson",
      company: "MedTech Innovations",
      rating: 5
    }
  },

  software: {
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
  },

  website: {
    title: "Website Development",
    subtitle: "Build Stunning Websites That Convert",
    description: "Create powerful, responsive websites that engage your audience and drive business growth with modern design and cutting-edge technology.",
    features: [
      {
        title: "Responsive Design",
        description: "Mobile-first approach ensuring perfect display across all devices and screen sizes.",
        icon: <Monitor className="h-6 w-6 text-primary" />
      },
      {
        title: "SEO Optimized",
        description: "Built-in SEO best practices to improve search engine rankings and visibility.",
        icon: <TrendingUp className="h-6 w-6 text-primary" />
      },
      {
        title: "Fast Performance",
        description: "Optimized for speed with advanced caching and performance optimization techniques.",
        icon: <Zap className="h-6 w-6 text-primary" />
      },
      {
        title: "User Experience",
        description: "Intuitive navigation and user-centered design for maximum engagement.",
        icon: <Users className="h-6 w-6 text-primary" />
      },
      {
        title: "Security First",
        description: "Enterprise-grade security measures to protect your website and user data.",
        icon: <Shield className="h-6 w-6 text-primary" />
      },
      {
        title: "24/7 Support",
        description: "Round-the-clock technical support and maintenance services.",
        icon: <Clock className="h-6 w-6 text-primary" />
      }
    ],
    benefits: [
      {
        title: "Increased Conversions",
        description: "Professionally designed websites that turn visitors into customers."
      },
      {
        title: "Brand Credibility",
        description: "Establish trust and credibility with a professional online presence."
      },
      {
        title: "Mobile Ready",
        description: "Reach customers on any device with fully responsive design."
      },
      {
        title: "Search Visibility",
        description: "Improve online visibility with SEO-optimized website structure."
      },
      {
        title: "Scalable Growth",
        description: "Websites that grow with your business needs and requirements."
      },
      {
        title: "Cost Effective",
        description: "Affordable solutions that deliver maximum return on investment."
      }
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Planning",
        description: "Understand your business goals, target audience, and project requirements."
      },
      {
        step: 2,
        title: "Design & Prototype",
        description: "Create wireframes and visual designs that align with your brand identity."
      },
      {
        step: 3,
        title: "Development & Testing",
        description: "Build your website using modern technologies with thorough testing."
      },
      {
        step: 4,
        title: "Launch & Support",
        description: "Deploy your website and provide ongoing maintenance and support."
      }
    ],
    stats: [
      { label: "Websites Built", value: "5,000+" },
      { label: "Client Satisfaction", value: "98%" },
      { label: "Average Load Time", value: "<2s" },
      { label: "Mobile Responsive", value: "100%" }
    ],
    testimonial: {
      quote: "Our new website increased conversions by 300%. The design is stunning and the performance is exceptional.",
      author: "David Chen",
      company: "TechStart Inc",
      rating: 5
    }
  },

  voiceover: {
    title: "Voiceover Services",
    subtitle: "Give Your Content a Professional Voice",
    description: "Professional voiceover services that bring your content to life with engaging, high-quality audio that resonates with your audience.",
    features: [
      {
        title: "Professional Voice Talent",
        description: "Access to experienced voice actors across multiple languages and styles.",
        icon: <Users className="h-6 w-6 text-primary" />
      },
      {
        title: "Studio Quality",
        description: "Professional recording studios with high-end equipment for crystal-clear audio.",
        icon: <Zap className="h-6 w-6 text-primary" />
      },
      {
        title: "Multiple Languages",
        description: "Native speakers available for voiceovers in 80+ languages worldwide.",
        icon: <Globe className="h-6 w-6 text-primary" />
      },
      {
        title: "Quick Turnaround",
        description: "Fast delivery times without compromising on quality or professionalism.",
        icon: <Clock className="h-6 w-6 text-primary" />
      },
      {
        title: "Custom Styles",
        description: "Tailored voice styles to match your brand personality and target audience.",
        icon: <Target className="h-6 w-6 text-primary" />
      },
      {
        title: "Quality Assurance",
        description: "Rigorous quality control process ensuring perfect audio delivery.",
        icon: <Shield className="h-6 w-6 text-primary" />
      }
    ],
    benefits: [
      {
        title: "Enhanced Engagement",
        description: "Professional voiceovers significantly increase audience engagement and retention."
      },
      {
        title: "Brand Consistency",
        description: "Maintain consistent brand voice across all your audio content."
      },
      {
        title: "Global Reach",
        description: "Connect with international audiences in their native languages."
      },
      {
        title: "Professional Image",
        description: "Elevate your brand image with high-quality, professional audio content."
      },
      {
        title: "Versatile Applications",
        description: "Perfect for commercials, e-learning, audiobooks, and corporate videos."
      },
      {
        title: "Cost Effective",
        description: "Professional results at competitive prices with transparent pricing."
      }
    ],
    process: [
      {
        step: 1,
        title: "Script Review",
        description: "Analyze your script and discuss voice style, tone, and delivery preferences."
      },
      {
        step: 2,
        title: "Voice Selection",
        description: "Choose from our diverse talent pool or audition voices for your project."
      },
      {
        step: 3,
        title: "Recording & Production",
        description: "Professional recording in studio-quality environments with expert direction."
      },
      {
        step: 4,
        title: "Delivery & Revisions",
        description: "Deliver final audio files with revision rounds to ensure complete satisfaction."
      }
    ],
    stats: [
      { label: "Projects Completed", value: "2,500+" },
      { label: "Voice Artists", value: "500+" },
      { label: "Languages Available", value: "80+" },
      { label: "Client Satisfaction", value: "99%" }
    ],
    testimonial: {
      quote: "The voiceover quality exceeded our expectations. Professional, clear, and delivered on time.",
      author: "Sarah Johnson",
      company: "MediaPro Studios",
      rating: 5
    }
  },

  "data-collection": {
    title: "Data Collection Services",
    subtitle: "Transform Raw Data Into Actionable Insights",
    description: "Comprehensive data collection and processing services that help you gather, organize, and analyze information to make informed business decisions.",
    features: [
      {
        title: "Multi-Source Collection",
        description: "Gather data from various sources including web scraping, surveys, and APIs.",
        icon: <Target className="h-6 w-6 text-primary" />
      },
      {
        title: "Data Quality Assurance",
        description: "Rigorous validation and cleaning processes to ensure data accuracy and reliability.",
        icon: <Shield className="h-6 w-6 text-primary" />
      },
      {
        title: "Real-Time Processing",
        description: "Live data collection and processing for up-to-date insights and analysis.",
        icon: <Zap className="h-6 w-6 text-primary" />
      },
      {
        title: "Custom Solutions",
        description: "Tailored data collection strategies designed for your specific business needs.",
        icon: <Users className="h-6 w-6 text-primary" />
      },
      {
        title: "Secure Handling",
        description: "Enterprise-grade security measures to protect sensitive data throughout the process.",
        icon: <CheckCircle className="h-6 w-6 text-primary" />
      },
      {
        title: "Scalable Infrastructure",
        description: "Robust systems that can handle large-scale data collection and processing.",
        icon: <TrendingUp className="h-6 w-6 text-primary" />
      }
    ],
    benefits: [
      {
        title: "Informed Decisions",
        description: "Make data-driven decisions with accurate, comprehensive information."
      },
      {
        title: "Competitive Advantage",
        description: "Stay ahead of competitors with superior market intelligence and insights."
      },
      {
        title: "Cost Efficiency",
        description: "Reduce operational costs through automated data collection processes."
      },
      {
        title: "Time Savings",
        description: "Free up valuable time by automating manual data gathering tasks."
      },
      {
        title: "Quality Insights",
        description: "Transform raw data into meaningful insights that drive business growth."
      },
      {
        title: "Compliance Ready",
        description: "Ensure data collection practices meet industry regulations and standards."
      }
    ],
    process: [
      {
        step: 1,
        title: "Requirements Analysis",
        description: "Understand your data needs, sources, and desired outcomes for the project."
      },
      {
        step: 2,
        title: "Collection Strategy",
        description: "Design optimal data collection methods and establish quality parameters."
      },
      {
        step: 3,
        title: "Data Gathering",
        description: "Execute collection processes with continuous monitoring and quality checks."
      },
      {
        step: 4,
        title: "Processing & Delivery",
        description: "Clean, organize, and deliver data in your preferred format with documentation."
      }
    ],
    stats: [
      { label: "Data Points Collected", value: "100M+" },
      { label: "Projects Completed", value: "1,500+" },
      { label: "Data Accuracy", value: "99.5%" },
      { label: "Processing Speed", value: "Real-time" }
    ],
    testimonial: {
      quote: "Their data collection services provided us with insights that increased our revenue by 40%. Exceptional quality and reliability.",
      author: "Michael Torres",
      company: "DataDriven Analytics",
      rating: 5
    }
  },

  documents: {
    title: "Document Processing",
    subtitle: "Streamline Your Document Workflows",
    description: "Professional document processing services that digitize, organize, and optimize your business documents for improved efficiency and accessibility.",
    features: [
      {
        title: "Digital Conversion",
        description: "Convert physical documents to digital formats with OCR and advanced scanning.",
        icon: <FileText className="h-6 w-6 text-primary" />
      },
      {
        title: "Document Organization",
        description: "Systematic categorization and indexing for easy document retrieval and management.",
        icon: <Target className="h-6 w-6 text-primary" />
      },
      {
        title: "Data Extraction",
        description: "Automated extraction of key information from documents using AI technology.",
        icon: <Zap className="h-6 w-6 text-primary" />
      },
      {
        title: "Quality Control",
        description: "Multi-level review process ensuring accuracy and completeness of processed documents.",
        icon: <Shield className="h-6 w-6 text-primary" />
      },
      {
        title: "Secure Processing",
        description: "Enterprise-grade security measures to protect confidential document information.",
        icon: <CheckCircle className="h-6 w-6 text-primary" />
      },
      {
        title: "Batch Processing",
        description: "Efficient handling of large document volumes with automated workflows.",
        icon: <TrendingUp className="h-6 w-6 text-primary" />
      }
    ],
    benefits: [
      {
        title: "Improved Efficiency",
        description: "Streamline document workflows and reduce manual processing time."
      },
      {
        title: "Better Organization",
        description: "Create searchable, organized digital document repositories."
      },
      {
        title: "Cost Reduction",
        description: "Eliminate physical storage costs and reduce administrative overhead."
      },
      {
        title: "Enhanced Security",
        description: "Protect important documents with digital backup and access controls."
      },
      {
        title: "Compliance Support",
        description: "Meet regulatory requirements with proper document management and retention."
      },
      {
        title: "Remote Access",
        description: "Access documents from anywhere with cloud-based storage solutions."
      }
    ],
    process: [
      {
        step: 1,
        title: "Document Assessment",
        description: "Evaluate document types, volumes, and processing requirements for your project."
      },
      {
        step: 2,
        title: "Processing Setup",
        description: "Configure workflows, quality standards, and security protocols for your documents."
      },
      {
        step: 3,
        title: "Digital Processing",
        description: "Execute scanning, OCR, data extraction, and quality control procedures."
      },
      {
        step: 4,
        title: "Delivery & Integration",
        description: "Deliver processed documents and integrate with your existing systems."
      }
    ],
    stats: [
      { label: "Documents Processed", value: "5M+" },
      { label: "Accuracy Rate", value: "99.8%" },
      { label: "Processing Speed", value: "10K/day" },
      { label: "Client Satisfaction", value: "97%" }
    ],
    testimonial: {
      quote: "Document processing with Saytica transformed our operations. We now have instant access to 20 years of records.",
      author: "Jennifer Liu",
      company: "Legal Associates Group",
      rating: 5
    }
  },

  apps: {
    title: "Mobile App Development",
    subtitle: "Build Apps That Users Love",
    description: "Create powerful, user-friendly mobile applications that engage your audience and drive business growth across iOS and Android platforms.",
    features: [
      {
        title: "Cross-Platform Development",
        description: "Build once, deploy everywhere with React Native and Flutter technologies.",
        icon: <Monitor className="h-6 w-6 text-primary" />
      },
      {
        title: "Native Performance",
        description: "Optimized performance that feels native on both iOS and Android devices.",
        icon: <Zap className="h-6 w-6 text-primary" />
      },
      {
        title: "User-Centered Design",
        description: "Intuitive interfaces designed with user experience and engagement in mind.",
        icon: <Users className="h-6 w-6 text-primary" />
      },
      {
        title: "Backend Integration",
        description: "Seamless integration with APIs, databases, and third-party services.",
        icon: <Target className="h-6 w-6 text-primary" />
      },
      {
        title: "Security & Privacy",
        description: "Enterprise-grade security measures to protect user data and app integrity.",
        icon: <Shield className="h-6 w-6 text-primary" />
      },
      {
        title: "App Store Optimization",
        description: "Optimize for app store visibility and downloads with ASO best practices.",
        icon: <TrendingUp className="h-6 w-6 text-primary" />
      }
    ],
    benefits: [
      {
        title: "Wider Reach",
        description: "Reach customers on their preferred mobile platforms with native app experiences."
      },
      {
        title: "Enhanced Engagement",
        description: "Increase user engagement with push notifications and personalized experiences."
      },
      {
        title: "Brand Loyalty",
        description: "Build stronger customer relationships through convenient mobile interactions."
      },
      {
        title: "Revenue Growth",
        description: "Generate new revenue streams through in-app purchases and subscriptions."
      },
      {
        title: "Competitive Edge",
        description: "Stay ahead of competitors with innovative mobile solutions."
      },
      {
        title: "Data Insights",
        description: "Gain valuable user insights through app analytics and user behavior tracking."
      }
    ],
    process: [
      {
        step: 1,
        title: "Strategy & Planning",
        description: "Define app objectives, target audience, and technical requirements for development."
      },
      {
        step: 2,
        title: "Design & Prototyping",
        description: "Create wireframes, UI designs, and interactive prototypes for user testing."
      },
      {
        step: 3,
        title: "Development & Testing",
        description: "Build your app with rigorous testing across devices and operating systems."
      },
      {
        step: 4,
        title: "Launch & Support",
        description: "Deploy to app stores and provide ongoing maintenance and feature updates."
      }
    ],
    stats: [
      { label: "Apps Developed", value: "1,200+" },
      { label: "App Store Rating", value: "4.8★" },
      { label: "Downloads Generated", value: "50M+" },
      { label: "Client Retention", value: "95%" }
    ],
    testimonial: {
      quote: "Our mobile app exceeded all expectations. User engagement increased by 400% and revenue grew by 250%.",
      author: "Alex Thompson",
      company: "RetailTech Solutions",
      rating: 5
    }
  }
};

export function getSolutionData(slug: string): SolutionData | null {
  return solutionsData[slug] || null;
}

export function getAllSolutionSlugs(): string[] {
  return [
    'translation',
    'elearning', 
    'gaming',
    'financial',
    'legal',
    'marketing',
    'medical',
    'software',
    'website',
    'voiceover',
    'data-collection',
    'documents',
    'apps'
  ];
}