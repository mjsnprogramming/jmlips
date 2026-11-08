import { CERTIFICATES } from "@/content/certificates"

export type AboutData = {
  /** Zdjęcie w sekcji "O mnie"; puste = public/images/about.png. */
  about_me_image: string
  certificate_1: string
  certificate_2: string
  certificates: string[]
}

/** Dane strony "O mnie": dwa pierwsze certyfikaty są duże, pozostałe trafiają do galerii. */
export async function fetchAboutData(): Promise<AboutData> {
  const [first = "", second = "", ...rest] = CERTIFICATES.filter(Boolean)
  return { about_me_image: "", certificate_1: first, certificate_2: second, certificates: rest }
}
