const stories = {
  pl: {
    eyebrow: "O mnie",
    title: "Moja droga do JM Studio",
    intro: "Wszystko zaczyna się od decyzji, by zrobić pierwszy krok.",
    journey: [
      "Moja droga do miejsca, w którym jestem dzisiaj, wymagała cierpliwości, zaangażowania i wielu godzin nauki. Zależało mi na tym, aby rozwijać się w branży beauty, dlatego od początku wiedziałam, że chcę inwestować w siebie i stopniowo budować własną markę.",
      "Jednym z kroków na tej drodze był wyjazd do Holandii, gdzie pracowałam, aby odłożyć środki na dalszy rozwój i realizację swoich planów. Był to dla mnie ważny etap, który nauczył mnie, że na efekty trzeba czasem poczekać, a cele osiąga się dzięki konsekwencji i małym krokom podejmowanym każdego dnia.",
    ],
    trustTitle: "Cierpliwość, zaufanie i relacje",
    trust: [
      "Po ponad trzech latach pracy z klientami wiem, że w branży beauty liczy się znacznie więcej niż sam efekt wykonanego zabiegu. Równie ważne są zaufanie, poczucie bezpieczeństwa i atmosfera, w której każda osoba może czuć się swobodnie.",
      "Chcę, abyś podczas wizyty wiedziała, na czym polega zabieg, jakie są jego poszczególne etapy i czego możesz się spodziewać. Dlatego chętnie wyjaśniam cały proces i odpowiadam na pytania. Zależy mi na tym, abyś czuła się zaopiekowana i świadomie podejmowała decyzje dotyczące swojej skóry.",
      "Wiem też, że zaufania nie buduje się w jeden dzień. Buduje się je podczas każdej wizyty, poprzez szczerość, uważność i dbałość o szczegóły.",
    ],
    growthTitle: "Rozwój, który nie ma końca",
    growth: [
      "Wierzę, że w tej branży nigdy nie można powiedzieć, że wie się już wszystko. Za mną ponad 20 szkoleń z zakresu kosmetologii i medycyny estetycznej, w tym zagadnień związanych z powikłaniami i pierwszą pomocą.",
      "Obecnie kończę studia pielęgniarskie, a kolejnym krokiem są dla mnie studia magisterskie i następne szkolenia. Stawiam sobie kolejne cele, ponieważ chcę stale poszerzać wiedzę i rozwijać swoje umiejętności.",
      "To właśnie świadomość, że wciąż mogę się uczyć i osiągać więcej, daje mi największą motywację.",
    ],
    closing:
      "JM Studio to dla mnie coś więcej niż miejsce wykonywania zabiegów. To marka, którą buduję krok po kroku — z pasją, cierpliwością i szacunkiem do każdej osoby, która mi zaufa.",
  },
  en: {
    eyebrow: "About me",
    title: "My journey to JM Studio",
    intro: "It all begins with deciding to take the first step.",
    journey: [
      "Getting to where I am today took patience, commitment, and many hours of learning. I wanted to grow in the beauty industry, so from the beginning I knew I wanted to invest in myself and build my own brand step by step.",
      "One step along the way was moving to the Netherlands, where I worked to save money for further training and to bring my plans to life. It was an important chapter that taught me that results sometimes take time, and that goals are reached through consistency and the small steps we take every day.",
    ],
    trustTitle: "Patience, trust, and connection",
    trust: [
      "After more than three years of working with clients, I know that beauty is about much more than the result of a treatment. Trust, a sense of safety, and an atmosphere where everyone can feel at ease matter just as much.",
      "I want you to understand what your treatment involves, each step of the process, and what to expect during your visit. I’m always happy to explain and answer your questions. It matters to me that you feel cared for and can make informed decisions about your skin.",
      "I also know that trust is not built in a day. It grows with every visit, through honesty, attentiveness, and care for the details.",
    ],
    growthTitle: "Always growing",
    growth: [
      "I believe there is always more to learn in this field. I have completed more than 20 courses in cosmetology and aesthetic medicine, including training related to complications and first aid.",
      "I am currently completing my nursing degree, with a master’s degree and further training as my next steps. I keep setting new goals because I want to continue expanding my knowledge and developing my skills.",
      "Knowing that I can keep learning and achieving more is what motivates me most.",
    ],
    closing:
      "JM Studio is more than a place where I provide treatments. It is a brand I am building step by step—with passion, patience, and respect for every person who puts their trust in me.",
  },
};

export default function Philosophy({ language = "pl" }) {
  const copy = language.toLowerCase().startsWith("en") ? stories.en : stories.pl;

  return (
    <section
      aria-labelledby="jm-story-title"
      className="bg-white px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16">
          <header className="md:pt-2">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-brand-light">
              {copy.eyebrow}
            </p>
            <h2
              className="text-4xl font-semibold leading-tight tracking-tight text-[#2f2924] sm:text-5xl"
              id="jm-story-title"
            >
              {copy.title}
            </h2>
            <p className="mt-7 max-w-md text-xl leading-8 text-[#6e5a48] sm:text-2xl sm:leading-9">
              {copy.intro}
            </p>
          </header>

          <div className="max-w-3xl space-y-10 text-base leading-8 text-gray-600 sm:text-lg sm:leading-9">
            <div className="space-y-5">
              {copy.journey.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <section aria-labelledby="jm-story-trust" className="space-y-4">
              <h3
                className="text-2xl font-semibold tracking-tight text-[#2f2924]"
                id="jm-story-trust"
              >
                {copy.trustTitle}
              </h3>
              {copy.trust.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <section aria-labelledby="jm-story-growth" className="space-y-4">
              <h3
                className="text-2xl font-semibold tracking-tight text-[#2f2924]"
                id="jm-story-growth"
              >
                {copy.growthTitle}
              </h3>
              {copy.growth.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <p className="border-t border-[#eadbc9] pt-7 font-medium text-[#5c4938]">
              {copy.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
