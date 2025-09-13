
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Treatment from "../../../components/Treatments"; 
import { getAllSlugs, getTreatmentBySlug } from "@/lib/treatments";

type Params = { slug: string };

export function generateStaticParams() {
  return getAllSlugs();
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const t = getTreatmentBySlug(params.slug);
  if (!t) return { title: "Zabieg — nie znaleziono" };
  return {
    title: `${t.title} – JM Studio`,
    description: t.excerpt ?? t.description.slice(0, 140),
  };
}

export default function Page({ params }: { params: Params }) {
  const t = getTreatmentBySlug(params.slug);
  if (!t) notFound();
  return <Treatment data={t} />;
}

