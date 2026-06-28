import OfferClient from "../../components/offer/OfferClientEN";
import { fetchTreatments } from "@/lib/allTreatments";

export default async function OfferPage() {
  const faqItems = [
    {
      id: 1,
      question: "Czy zabiegi są bolesne?",
      answer: "Każdy zabieg odczuwany jest indywidualnie...",
      order: 1,
    },
    {
      id: 2,
      question: "Jak długo utrzymuje się efekt?",
      answer: "Czas utrzymywania zależy od rodzaju zabiegu...",
      order: 2,
    },
  ];

  const treatments = await fetchTreatments("en");

  return (
    <OfferClient
      faqItems={faqItems}
      treatments={treatments}
    />
  );
}