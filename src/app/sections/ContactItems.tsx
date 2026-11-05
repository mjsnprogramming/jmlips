import {
  ADDRESS,
  BOOKSY_URL,
  INSTAGRAM_CONTACT_HANDLE,
  INSTAGRAM_CONTACT_URL,
  MAPS_DIRECTIONS_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/links";

type Icon = "location" | "phone" | "instagram" | "calendar";

type ContactItem = {
  label: string;
  value: string;
  second: string;
  action: string;
  href: string;
  icon: Icon;
  external: boolean;
};

const COPY = {
  pl: {
    eyebrow: "Kontakt i rezerwacje",
    heading: "Skontaktuj się w wygodny dla siebie sposób.",
    newTab: "(otwiera się w nowej karcie)",
    items: [
      {
        label: "Adres",
        value: ADDRESS.street,
        second: `${ADDRESS.city} · ${ADDRESS.place}`,
        action: "Otwórz w mapach",
        href: MAPS_DIRECTIONS_URL,
        icon: "location",
        external: true,
      },
      {
        label: "Telefon",
        value: PHONE_DISPLAY,
        second: "Zadzwoń lub wyślij SMS",
        action: "Zadzwoń",
        href: PHONE_HREF,
        icon: "phone",
        external: false,
      },
      {
        label: "Instagram",
        value: INSTAGRAM_CONTACT_HANDLE,
        second: "Napisz wiadomość",
        action: "Otwórz Instagram",
        href: INSTAGRAM_CONTACT_URL,
        icon: "instagram",
        external: true,
      },
      {
        label: "Booksy",
        value: "Umów wizytę online",
        second: "Rezerwacja 24/7",
        action: "Otwórz Booksy",
        href: BOOKSY_URL,
        icon: "calendar",
        external: true,
      },
    ],
  },
  en: {
    eyebrow: "Contact and booking",
    heading: "Get in touch the way that suits you.",
    newTab: "(opens in a new tab)",
    items: [
      {
        label: "Address",
        value: ADDRESS.street,
        second: `${ADDRESS.city} · ${ADDRESS.place}`,
        action: "Open in maps",
        href: MAPS_DIRECTIONS_URL,
        icon: "location",
        external: true,
      },
      {
        label: "Phone",
        value: PHONE_DISPLAY,
        second: "Call or send a text",
        action: "Call",
        href: PHONE_HREF,
        icon: "phone",
        external: false,
      },
      {
        label: "Instagram",
        value: INSTAGRAM_CONTACT_HANDLE,
        second: "Send a message",
        action: "Open Instagram",
        href: INSTAGRAM_CONTACT_URL,
        icon: "instagram",
        external: true,
      },
      {
        label: "Booksy",
        value: "Book online",
        second: "Booking 24/7",
        action: "Open Booksy",
        href: BOOKSY_URL,
        icon: "calendar",
        external: true,
      },
    ],
  },
} satisfies Record<"pl" | "en", { eyebrow: string; heading: string; newTab: string; items: ContactItem[] }>;

function ContactIcon({ name }: { name: Icon }) {
  const common = { stroke: "currentColor", strokeWidth: 1.7 } as const;

  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" {...common} />
        <circle cx="12" cy="12" r="4" {...common} />
        <circle cx="17.7" cy="6.6" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (name === "calendar") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <rect x="3.5" y="5" width="17" height="15.5" rx="2" {...common} />
        <path d="M7.5 3.5v3M16.5 3.5v3M4 9.5h16" {...common} strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path
          d="M5.5 4h3l1.5 4-2 1.3a11 11 0 0 0 6.7 6.7L16 14l4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 3.5 6a2 2 0 0 1 2-2Z"
          {...common}
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path d="M19 10.2c0 5-7 11-7 11s-7-6-7-11a7 7 0 1 1 14 0Z" {...common} />
      <circle cx="12" cy="10" r="2.2" {...common} />
    </svg>
  );
}

export default function ContactItems({ lang = "pl" }: { lang?: "pl" | "en" }) {
  const copy = COPY[lang];

  return (
    <section className="bg-[#fbf9f6] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.28em] text-brand sm:text-sm">
          {copy.eyebrow} <span className="h-px w-12 bg-[#c8a987]" aria-hidden="true" />
        </p>
        <h2 className="mb-7 font-heading text-3xl font-normal leading-tight tracking-[-0.035em] text-[#171513] sm:mb-8 sm:text-4xl lg:text-[2.55rem]">
          {copy.heading}
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {copy.items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="group rounded-xl border border-[#e9ddd0] bg-[#fbf9f6] p-5 transition-colors hover:border-[#cbb397] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand motion-reduce:transition-none sm:p-6 lg:p-7"
            >
              <div className="flex items-start gap-4 sm:gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f2ece4] text-brand">
                  <ContactIcon name={item.icon} />
                </span>
                <div className="min-w-0 pt-1">
                  <h3 className="text-lg font-medium text-[#201d1a]">{item.label}</h3>
                  <p className="mt-2 break-words text-sm leading-6 text-[#393531]">{item.value}</p>
                  <p className="text-sm leading-6 text-[#706963]">{item.second}</p>
                  <p className="mt-5 inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.13em] text-brand sm:mt-6">
                    {item.action}
                    <span
                      className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                      aria-hidden="true"
                    >
                      →
                    </span>
                    {item.external && <span className="sr-only">{copy.newTab}</span>}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
