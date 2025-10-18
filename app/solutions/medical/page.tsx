import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import { Heart, Clock, Shield, Zap, Target, Stethoscope } from "lucide-react";

const medicalData = {
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
};

export default function MedicalPage() {
  return <SolutionPageTemplate data={medicalData} />;
}