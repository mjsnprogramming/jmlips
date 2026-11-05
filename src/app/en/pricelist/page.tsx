import { fetchPricelist } from "@/lib/pricelist"
import PriceListClient from "../../components/pricelist/PriceListClient"

import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("pricelist", "en");

export default async function PriceListPage() {
  const data = await fetchPricelist("en")

  return <PriceListClient initialData={data} lang="en" />
}