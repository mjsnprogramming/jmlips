import { fetchPricelist } from "../../../lib/pricelist"
import PriceListClient from "../../components/pricelist/PriceListClient"

export default async function PriceListPage() {
  const data = await fetchPricelist()

  return <PriceListClient initialData={data} />
}