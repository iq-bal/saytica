import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import { DollarSign, Clock, Shield, Target, TrendingUp, CreditCard } from "lucide-react";

const financialData = {
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
};

export default function FinancialPage() {
  return <SolutionPageTemplate data={financialData} />;
}