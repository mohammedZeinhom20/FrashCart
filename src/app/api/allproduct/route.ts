import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const firstRes = await fetch(
      "https://ecommerce.routemisr.com/api/v1/products?limit=40"
    );

    const firstData = await firstRes.json();

    const totalPages = firstData.metadata.numberOfPages;

    let allProducts = [...firstData.data];

    // Get remaining pages
    for (let page = 2; page <= totalPages; page++) {
      const res = await fetch(
        `https://ecommerce.routemisr.com/api/v1/products?limit=40&page=${page}`
      );

      const data = await res.json();

      allProducts = [...allProducts, ...data.data];
    }

    return NextResponse.json({
      results: allProducts.length,
      data: allProducts,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch products" },
      { status: 500 }
    );
  }
}