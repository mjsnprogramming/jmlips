import OfferClient from "../../components/offer/OfferClient";
import { fetchTreatments } from "@/lib/allTreatments";
import { fetchFAQ } from "@/lib/faq";

import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("offer", "pl");

type Props = {
  searchParams?: { treatment?: string | string[] };
};

export default async function OfferPage({ searchParams }: Props) {
  const faqItems = await fetchFAQ("pl");
  const treatments = await fetchTreatments("pl");
  const treatment = searchParams?.treatment;

  return (
    <OfferClient
      faqItems={faqItems}
      treatments={treatments}
      initialTreatment={Array.isArray(treatment) ? treatment[0] : treatment}
    />
  );
}
