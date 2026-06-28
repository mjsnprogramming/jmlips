import OfferClient from "../../components/offer/OfferClient";
import { fetchTreatments } from "@/lib/allTreatments";
import { fetchFAQ } from "@/lib/faq";
export default async function OfferPage() {
const faqItems = await fetchFAQ("pl")

  const treatments = await fetchTreatments("pl");
console.log(faqItems)
  return (
    <OfferClient
      faqItems={faqItems}
      treatments={treatments}
    />
  );
}