import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions - Saytica",
  description: "Professional translation and localization solutions for global businesses",
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}