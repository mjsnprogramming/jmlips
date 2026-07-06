import OfferClient from "../../components/offer/OfferClientEN";
import { fetchTreatments } from "@/lib/allTreatments";
import { fetchFAQ } from "@/lib/faq";
export default async function OfferPage() {
const faqItems = await fetchFAQ("en")

  const treatments = await fetchTreatments("en");
console.log(faqItems)
  return (
    <OfferClient
      faqItems={faqItems}
      treatments={treatments}
    />
  );
}