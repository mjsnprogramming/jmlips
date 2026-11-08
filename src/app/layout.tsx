import "./globals.css";
import type { Metadata } from "next";
import HeaderComponent from "./components/HeaderComponent/page";
import FooterComponent from "./components/FooterComponent/page";
import HtmlLang from "./components/HtmlLang";
import { SITE_NAME, SITE_URL, SITE_URL_CONFIGURED, businessJsonLd } from "@/lib/seo";

import { Inter, Dancing_Script, Quicksand } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin", "latin-ext"],
  weight: ["600"],
  variable: "--font-dancing",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Bez prawdziwej domeny (wersja testowa) strona nie jest indeksowana.
  robots: SITE_URL_CONFIGURED ? undefined : { index: false, follow: false },
  title: {
    default: "JM Studio – medycyna estetyczna Lublin i Zamość",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Gabinet medycyny estetycznej JM Studio – Julia Majewska. Lublin (ul. Szafirowa 7A) i Zamość.",
  applicationName: SITE_NAME,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
  lang="pl"
  className={`${inter.variable} ${dancing.variable} ${quicksand.variable}`}
>
      <body className="bg-white text-black font-sans">
        <HtmlLang />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd()) }}
        />
        <HeaderComponent />
        <main>{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}