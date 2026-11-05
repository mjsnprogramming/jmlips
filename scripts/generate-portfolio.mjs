// Tworzy listę zdjęć portfolio z folderów public/images/portfolio/<zabieg>/.
//
// Jak dodać zdjęcie: wrzuć plik (jpg, jpeg, png, webp, avif) do folderu zabiegu.
// Kolejność = kolejność nazw plików, np. 01-ania.jpg, 02-kasia.jpg.
// Skrypt uruchamia się sam przed `npm run dev` i `npm run build`
// (można też ręcznie: `npm run portfolio`). Wynik: src/lib/portfolio.generated.ts
import { existsSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const PORTFOLIO_DIR = join(ROOT, "public", "images", "portfolio");
const OUTPUT = join(ROOT, "src", "lib", "portfolio.generated.ts");
const IMAGE_EXT = /\.(jpe?g|png|webp|avif)$/i;

const result = {};

const categories = existsSync(PORTFOLIO_DIR) ? readdirSync(PORTFOLIO_DIR).sort() : [];

for (const category of categories) {
  const dir = join(PORTFOLIO_DIR, category);
  if (!statSync(dir).isDirectory()) continue;

  result[category] = readdirSync(dir)
    .filter((file) => IMAGE_EXT.test(file))
    .sort((a, b) => a.localeCompare(b, "pl", { numeric: true }))
    .map((file) => `/images/portfolio/${encodeURIComponent(category)}/${encodeURIComponent(file)}`);
}

const content = `// Plik generowany automatycznie przez scripts/generate-portfolio.mjs – nie edytować ręcznie.
// Zdjęcia dodaje się, wrzucając pliki do public/images/portfolio/<zabieg>/.

export const CODE_PORTFOLIO_IMAGES: Record<string, string[]> = ${JSON.stringify(result, null, 2)};
`;

writeFileSync(OUTPUT, content);

const total = Object.values(result).reduce((sum, list) => sum + list.length, 0);
console.log(`portfolio: ${total} zdjęć w ${Object.keys(result).length} kategoriach`);
