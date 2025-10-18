import { notFound } from "next/navigation";
import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import { getSolutionData } from "../../../lib/solutions-data";

interface SolutionPageProps {
  params: {
    slug: string;
  };
}

export default function SolutionPage({ params }: SolutionPageProps) {
  const solutionData = getSolutionData(params.slug);

  if (!solutionData) {
    notFound();
  }

  return <SolutionPageTemplate data={solutionData} />;
}

// Generate static params for all available solutions
export async function generateStaticParams() {
  const slugs = [
    'translation',
    'elearning', 
    'gaming',
    'financial',
    'legal',
    'marketing',
    'medical',
    'software'
  ];

  return slugs.map((slug) => ({
    slug,
  }));
}