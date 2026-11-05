import PortfolioClient from "@/app/components/portfolio/PortfolioClient";
import { fetchPortfolio } from "@/lib/portfolio";

import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("portfolio", "en");

export default async function PortfolioPage() {
  const imagesByCategory = await fetchPortfolio();

  return <PortfolioClient lang="en" imagesByCategory={imagesByCategory} />;
}
