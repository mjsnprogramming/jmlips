import OfferClient from "../../components/offer/OfferClient";

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

  return <OfferClient faqItems={faqItems} />;
}