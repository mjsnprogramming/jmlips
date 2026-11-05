"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Ustawia <html lang> na "en" na stronach /en – układ główny jest wspólny dla obu języków. */
export default function HtmlLang() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = pathname.startsWith("/en") ? "en" : "pl";
  }, [pathname]);

  return null;
}
