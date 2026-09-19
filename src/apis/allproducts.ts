export default async function getAllProducts() {
  const firstResponse = await fetch(
    "https://ecommerce.routemisr.com/api/v1/products?limit=40"
  );

  if (!firstResponse.ok) {
    throw new Error("Failed to fetch products");
  }

  const firstData = await firstResponse.json();

  const totalPages = firstData.metadata.numberOfPages;

  let allProducts = [...firstData.data];

  for (let page = 2; page <= totalPages; page++) {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products?limit=40&page=${page}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch products page ${page}`);
    }

    const data = await response.json();

    allProducts = [...allProducts, ...data.data];
  }

  return allProducts;
}