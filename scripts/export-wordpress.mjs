// Eksport treści z WordPressa do repozytorium (wersja strony bez WordPressa).
//
// Użycie (w folderze projektu, przy działającym lokalnym WordPressie):
//   npm run export-content -- http://jm-studio-cms.local
// Adres można też podać w pliku .env.local jako WORDPRESS_API_URL=...
//
// Co robi:
//  - pobiera wszystkie wpisy typów używanych przez stronę (z REST API),
//  - ściąga zdjęcia do public/images/cms/<typ>/ i podmienia adresy na lokalne,
//  - zapisuje treści do src/content/wordpress.generated.ts.
// Strona bez ustawionego WORDPRESS_API_URL czyta treści właśnie z tego pliku.

import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { extname, join } from "node:path";

const ROOT = process.cwd();
const IMAGES_DIR = join(ROOT, "public", "images", "cms");
const OUTPUT = join(ROOT, "src", "content", "wordpress.generated.ts");

// Typy wpisów i pola ACF, w których są zdjęcia.
const TYPES = {
  treatment: ["image"],
  alltreatments: ["image", "image2", "image3"],
  question: [],
  price_item: [],
  testimonial: ["image"],
  about: ["about_me_image", "certificate_1", "certificate_2"],
  certyfikat: ["zdjecie"],
  portfolio_item: ["image"],
};

function readEnvFile() {
  for (const name of [".env.local", ".env"]) {
    const path = join(ROOT, name);
    if (!existsSync(path)) continue;
    const match = readFileSync(path, "utf8").match(/^\s*WORDPRESS_API_URL\s*=\s*["']?([^"'\r\n]+)/m);
    if (match) return match[1];
  }
  return undefined;
}

const BASE = (process.argv[2] || process.env.WORDPRESS_API_URL || readEnvFile() || "")
  .trim()
  .replace(/\/+$/, "");

if (!BASE) {
  console.error("Podaj adres WordPressa, np.: npm run export-content -- http://jm-studio-cms.local");
  process.exit(1);
}

async function getJson(url) {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error(`${res.status} ${res.statusText} – ${url}`);
    error.status = res.status;
    throw error;
  }
  return { data: await res.json(), headers: res.headers };
}

/** Wszystkie wpisy danego typu (z obsługą wielu stron wyników). */
async function fetchAll(type) {
  const items = [];
  for (let page = 1; ; page++) {
    const { data, headers } = await getJson(`${BASE}/wp-json/wp/v2/${type}?per_page=100&page=${page}`);
    if (!Array.isArray(data)) break;
    items.push(...data);
    const totalPages = Number(headers.get("x-wp-totalpages") || 1);
    if (page >= totalPages) break;
  }
  return items;
}

const downloaded = new Map();
let imageCount = 0;

/** Zwraca adres źródłowy zdjęcia z wartości pola ACF (ID, URL albo obiekt). */
async function resolveImageSource(value) {
  if (typeof value === "number") {
    const { data } = await getJson(`${BASE}/wp-json/wp/v2/media/${value}`);
    return data?.source_url || null;
  }
  if (typeof value === "string" && /^https?:\/\//.test(value.trim())) return value.trim();
  if (value && typeof value === "object" && typeof value.url === "string") return value.url;
  return null;
}

/** Ściąga zdjęcie do public/images/cms/<typ>/ i zwraca jego lokalny adres. */
async function downloadImage(type, value) {
  let source;
  try {
    source = await resolveImageSource(value);
  } catch (error) {
    console.warn(`  ! nie udało się odczytać zdjęcia (${type}): ${error.message}`);
    return null;
  }
  if (!source) return null;
  if (downloaded.has(source)) return downloaded.get(source);

  const res = await fetch(source);
  if (!res.ok) {
    console.warn(`  ! nie udało się pobrać ${source} (${res.status})`);
    return null;
  }

  const url = new URL(source);
  const ext = (extname(url.pathname) || ".jpg").toLowerCase();
  const base = decodeURIComponent(url.pathname.split("/").pop() || "zdjecie")
    .replace(/\.[^.]+$/, "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-zA-Z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase()
    .slice(0, 60);

  const dir = join(IMAGES_DIR, type);
  mkdirSync(dir, { recursive: true });
  imageCount += 1;
  const fileName = `${String(imageCount).padStart(3, "0")}-${base || "zdjecie"}${ext}`;
  writeFileSync(join(dir, fileName), Buffer.from(await res.arrayBuffer()));

  const localPath = `/images/cms/${type}/${fileName}`;
  downloaded.set(source, localPath);
  return localPath;
}

/** Zostawia tylko pola potrzebne stronie: id, slug, acf. */
async function prepareItem(type, item) {
  const acf = { ...(item.acf || {}) };
  for (const field of TYPES[type]) {
    if (acf[field] === undefined || acf[field] === null || acf[field] === false || acf[field] === "") continue;
    acf[field] = (await downloadImage(type, acf[field])) ?? "";
  }
  return { id: item.id, slug: item.slug, acf };
}

console.log(`Eksport z ${BASE}`);

// Zdjęcia z poprzedniego eksportu są zastępowane nowymi.
rmSync(IMAGES_DIR, { recursive: true, force: true });

const content = {};
for (const type of Object.keys(TYPES)) {
  try {
    const items = await fetchAll(type);
    content[type] = [];
    for (const item of items) content[type].push(await prepareItem(type, item));
    console.log(`  ${type}: ${content[type].length}`);
  } catch (error) {
    if (error.status === 404 || error.status === 400) {
      content[type] = [];
      console.log(`  ${type}: brak tego typu w WordPressie (pominięto)`);
    } else {
      console.error(`\nBłąd przy pobieraniu "${type}": ${error.message}`);
      console.error("Nic nie zostało zapisane. Sprawdź, czy WordPress działa i adres jest poprawny.");
      process.exit(1);
    }
  }
}

mkdirSync(join(ROOT, "src", "content"), { recursive: true });
writeFileSync(
  OUTPUT,
  `// Plik generowany przez scripts/export-wordpress.mjs – nie edytować ręcznie.
// Treści strony w wersji bez WordPressa (eksport z ${new Date().toISOString().slice(0, 10)}).

export const LOCAL_CONTENT: Record<string, any[]> = ${JSON.stringify(content, null, 2)};
`,
);

console.log(`\nGotowe: ${imageCount} zdjęć w public/images/cms, treści w src/content/wordpress.generated.ts`);
