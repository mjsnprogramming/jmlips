import OfferClient from "../../components/offer/OfferClient";
import { fetchTreatments } from "@/lib/allTreatments";
import { fetchFAQ } from "@/lib/faq";

type Props = {
  searchParams?: { treatment?: string | string[] };
};

export default async function OfferPage({ searchParams }: Props) {
  const faqItems = await fetchFAQ("en");
  const treatments = await fetchTreatments("en");
  const treatment = searchParams?.treatment;

  return (
    <OfferClient
      lang="en"
      faqItems={faqItems}
      treatments={treatments}
      initialTreatment={Array.isArray(treatment) ? treatment[0] : treatment}
    />
  );
}
