import "./globals.css";
import type { Metadata } from "next";
import HeaderComponent from "./components/HeaderComponent/page";
import FooterComponent from "./components/FooterComponent/page";

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
  title: "JM Studio",
  description: "Gabinet medycyny estetycznej - Julia Majewska Studio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
  lang="pl"
  className={`${inter.variable} ${dancing.variable} ${quicksand.variable}`}
>
      <body className="bg-white text-black font-sans">
        <HeaderComponent />
        <main>{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}