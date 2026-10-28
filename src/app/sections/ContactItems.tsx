const BOOKSY_URL = "#"; // Podmień na właściwy adres Booksy, gdy będzie dostępny.

const CONTACT_ITEMS = [
  {
    label: "Adres",
    value: "ul. Wieniawska 8",
    second: "20-400 Lublin",
    action: "Otwórz w mapach",
    href: "https://maps.google.com/?q=Wieniawska+8+Lublin",
    icon: "location",
  },
  {
    label: "Instagram",
    value: "@julia_majewska_studio",
    second: "Napisz wiadomość",
    action: "Otwórz Instagram",
    href: "https://www.instagram.com/julia_majewska_studio/",
    icon: "instagram",
  },
  {
    label: "Booksy",
    value: "Umów wizytę online",
    second: "Rezerwacja 24/7",
    action: "Otwórz Booksy",
    href: BOOKSY_URL,
    icon: "calendar",
  },
] as const;

function ContactIcon({ name }: { name: (typeof CONTACT_ITEMS)[number]["icon"] }) {
  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <rect
          x="3.5"
          y="3.5"
          width="17"
          height="17"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle cx="17.7" cy="6.6" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (name === "calendar") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <rect
          x="3.5"
          y="5"
          width="17"
          height="15.5"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M7.5 3.5v3M16.5 3.5v3M4 9.5h16"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M19 10.2c0 5-7 11-7 11s-7-6-7-11a7 7 0 1 1 14 0Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle
        cx="12"
        cy="10"
        r="2.2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export default function ContactItems() {
  return (
    <section className="bg-[#fbf9f6] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.28em] text-[#a77b50] sm:text-sm">
          Kontakt i rezerwacje{" "}
          <span className="h-px w-12 bg-[#c8a987]" aria-hidden="true" />
        </p>
        <h2 className="mb-7 font-serif text-3xl font-normal leading-tight tracking-[-0.035em] text-[#171513] sm:mb-8 sm:text-4xl lg:text-[2.55rem]">
          Skontaktuj się w wygodny dla siebie sposób.
        </h2>

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {CONTACT_ITEMS.map((item) => {
            const isPlaceholder = item.href === "#";

            return (
              <a
                key={item.label}
                href={item.href}
                target={isPlaceholder ? undefined : "_blank"}
                rel={isPlaceholder ? undefined : "noreferrer"}
                aria-label={`${item.action}: ${item.label}`}
                className="group rounded-xl border border-[#e9ddd0] bg-[#fbf9f6] p-5 transition-colors hover:border-[#cbb397] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a77b50] motion-reduce:transition-none sm:p-6 lg:p-7"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f2ece4] text-[#a77b50]">
                    <ContactIcon name={item.icon} />
                  </span>
                  <div className="min-w-0 pt-1">
                    <h3 className="text-lg font-medium text-[#201d1a]">
                      {item.label}
                    </h3>
                    <p className="mt-2 break-words text-sm leading-6 text-[#393531]">
                      {item.value}
                    </p>
                    <p className="text-sm leading-6 text-[#706963]">
                      {item.second}
                    </p>
                    <p className="mt-5 inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.13em] text-[#986b41] sm:mt-6">
                      {item.action}
                      <span
                        className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}