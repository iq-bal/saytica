import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import { Scale, Users, Clock, Shield, Zap, Target, CheckCircle, TrendingUp, FileText } from "lucide-react";

const legalData = {
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
};

export default function LegalPage() {
  return <SolutionPageTemplate data={legalData} />;
}