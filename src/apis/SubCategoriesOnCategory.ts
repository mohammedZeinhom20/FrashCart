import { ItemSupCategory } from "@/types/ItemSupCategory";

interface SubCategoriesResponse {
  results: number;
  data: ItemSupCategory[];
}

export default async function getSubCategoriesOnCategory(
  id: string
): Promise<SubCategoriesResponse> {
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch subcategories");
  }

  return response.json();
}