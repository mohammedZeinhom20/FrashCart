import getAllBrands from "@/apis/allbrands";
import BrandsClient from "@/app/_components/BrandsClient/BrandsClient";




export default async function BrandsPage() {
  const data = await getAllBrands();
  return <BrandsClient data={data} />;
}