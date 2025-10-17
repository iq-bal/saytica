import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import { GraduationCap, Users, Clock, Shield, Zap, Target, CheckCircle, TrendingUp, BookOpen } from "lucide-react";

const elearningData = {
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
};

export default function ElearningPage() {
  return <SolutionPageTemplate data={elearningData} />;
}