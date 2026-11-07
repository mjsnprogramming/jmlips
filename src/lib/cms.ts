import { LOCAL_CONTENT } from "@/content/wordpress.generated"

const env = (globalThis as any).process?.env as Record<string, string | undefined> | undefined

/** Adres WordPressa bez końcowego "/" albo "" (wersja bez WordPressa). */
export const WP_BASE_URL = env?.WORDPRESS_API_URL?.trim().replace(/\/+$/, "") ?? ""

/**
 * Źródło treści strony:
 *  - ustawiony WORDPRESS_API_URL → treści na żywo z WordPressa,
 *  - brak → treści z eksportu w repo (src/content/wordpress.generated.ts,
 *    tworzonego przez `npm run export-content`).
 */
export const USE_WORDPRESS = Boolean(WP_BASE_URL)

/**
 * Wszystkie wpisy danego typu. Zwraca null przy błędzie WordPressa –
 * wtedy wywołujący pokazuje dane zapasowe (strona nigdy się nie wywraca).
 */
export async function fetchCollection<T>(type: string, query = ""): Promise<T[] | null> {
  if (!USE_WORDPRESS) return (LOCAL_CONTENT[type] ?? []) as T[]

  try {
    const res = await fetch(`${WP_BASE_URL}/wp-json/wp/v2/${type}?per_page=100${query}`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return null
    const data = await res.json()
    return Array.isArray(data) ? (data as T[]) : null
  } catch (error) {
    console.error(`Nie udało się pobrać "${type}" z WordPressa:`, error)
    return null
  }
}
