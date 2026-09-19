

import getAllCategory from "@/apis/allCategory";
import SupCategoryClient from "@/app/_components/SupCategoryClient/SupCategoryClient";







export default async function SupCategory() {
  const data = await getAllCategory();
  console.log(data);
  
  return <SupCategoryClient data={data} />;
}