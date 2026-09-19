import getAllProducts from "@/apis/allproducts";
import { Product } from "@/types/product.t";
import Image from "next/image";
import Link from "next/link";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import AddBntCart from "@/app/_components/AddBtnCart/AddBntCart";

interface ProductsProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

const Products = async ({ searchParams }: ProductsProps) => {
  const params = await searchParams;

  const currentPage = Number(params.page) || 1;

  const data: Product[] = await getAllProducts();

  // ================= PAGINATION =================
  const productsPerPage = 8;

  const totalPages = Math.ceil(data.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;

  const currentProducts = data.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <main className="min-h-screen  bg-slate-50 py-8 md:py-12">
      <div className="container mx-auto px-4">

        {/* ================= HEADER ================= */}
        <section className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              All Products
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Browse our latest collection
            </p>
          </div>

          <div className="flex w-fit items-center gap-3 rounded-2xl border border-green-100 bg-white px-5 py-3 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <i className="fa-solid fa-layer-group" />
            </div>

            <div>
              <p className="text-xs text-slate-400">
                All Products
              </p>

              <p className="text-lg font-bold text-slate-800">
                {data.length} items
              </p>
            </div>
          </div>
        </section>

        {/* ================= PRODUCTS GRID ================= */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {currentProducts.map((product: Product) => {
            const badge =
              product.sold > 1000
                ? "Popular"
                : product.sold  <1000
                  ? "Trending"
                  : null;

            return (
              <article
                key={product._id}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.035)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]"
              >
                {/* ================= IMAGE ================= */}
                
                  <div className="relative aspect-square overflow-hidden bg-[#f8f9f9]">

                    <Image
                      src={product.imageCover}
                      alt={product.title}
                      fill
                      sizes="
                        (max-width: 640px) 100vw,
                        (max-width: 1024px) 50vw,
                        (max-width: 1280px) 33vw,
                        25vw
                      "
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Badge */}
                    {badge && (
                      <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#21313c] shadow-sm backdrop-blur">
                        <i className="fa-solid fa-fire text-[#0aad0a]" />
                        {badge}
                      </div>
                    )}

                    {/* Wishlist */}
                    <button
                      type="button"
                      aria-label="Add to wishlist"
                      className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-slate-400 shadow-sm backdrop-blur transition-all hover:bg-[#0aad0a] hover:text-white"
                    >
                      <i className="fa-regular fa-heart text-xs" />
                    </button>
                    <Link
                      href={`/productDetails/${product._id}`}
                      className="absolute right-3 top-15 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-slate-400 shadow-sm backdrop-blur transition-all hover:bg-[#0aad0a] hover:text-white"
                    >
                      <i className="fa-regular fa-eye"></i>
                    </Link>

                    {/* Gallery */}
                    {product.images?.length > 0 && (
                      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-lg bg-black/55 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur">
                        <i className="fa-regular fa-images" />
                        {product.images.length}
                      </div>
                    )}
                  </div>

                {/* ================= CONTENT ================= */}
                <div className="p-4">

                  {/* Category */}
                  <div className="mb-2 flex items-center gap-2">
                    <span className="max-w-[60%] truncate rounded-md bg-[#eaf8ea] px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-[#0aad0a]">
                      {product.category.name}
                    </span>

                    {product.subcategory?.[0]?.name && (
                      <span className="max-w-[35%] truncate text-[9px] font-medium text-slate-400">
                        {product.subcategory[0].name}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <Link href={`/productDetails/${product._id}`}>
                    <h2 className="line-clamp-1 text-[15px] font-bold leading-5 text-[#21313c] transition-colors group-hover:text-[#0aad0a]">
                      {product.title}
                    </h2>
                  </Link>

                  {/* Rating */}
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-star text-[11px] text-[#ffc107]" />

                      <span className="text-xs font-bold text-[#21313c]">
                        {product.ratingsAverage.toFixed(1)}
                      </span>
                    </div>

                    <span className="text-[10px] text-slate-400">
                      ({product.ratingsQuantity})
                    </span>
                  </div>

                  {/* ================= BRAND ================= */}
                  <div className="mt-3 flex min-w-0 items-center gap-2.5">

                    {/* Brand Image */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white p-1 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                      <Image
                        src={product.brand.image}
                        alt={product.brand.name}
                        width={36}
                        height={36}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    {/* Brand Info */}
                    <div className="min-w-0 flex-1">
                      <p className="text-[9px] font-medium uppercase tracking-wider text-slate-400">
                        Brand
                      </p>

                      <p className="line-clamp-2 break-words text-[11px] font-bold leading-4 text-[#21313c]">
                        {product.brand.name}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-2 h-px bg-slate-100" />

                  {/* Price + Cart */}
                  <div className="flex items-center justify-between">

                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-extrabold text-[#21313c]">
                        {product.price.toLocaleString()}
                      </span>

                      <span className="text-[10px] font-semibold text-slate-400">
                        EGP
                      </span>
                    </div>

  
                    <AddBntCart
                      id={product._id}
                      className="group flex h-13 w-13 items-center justify-center rounded-xl bg-transparent p-0 shadow-none hover:bg-transparent"
                    >
              <span className="fa-stack text-xl transition-transform duration-200 group-hover:scale-110">
                        <i className="fa-solid fa-circle fa-stack-2x text-[#0aad0a]" />
                        <i className="fa-solid fa-cart-plus fa-stack-1x text-white" />
                      </span>
                    </AddBntCart>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ================= PAGINATION ================= */}
        <div className="mt-10">
          <Pagination>
            <PaginationContent>

              {/* Previous */}
              <PaginationItem>
                <PaginationPrevious
                  href={
                    currentPage > 1
                      ? `/products?page=${currentPage - 1}`
                      : "#"
                  }
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-40"
                      : ""
                  }
                />
              </PaginationItem>

              {/* Pages */}
              {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1;

                return (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href={`/products?page=${page}`}
                      isActive={currentPage === page}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              {/* Next */}
              <PaginationItem>
                <PaginationNext
                  href={
                    currentPage < totalPages
                      ? `/products?page=${currentPage + 1}`
                      : "#"
                  }
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-40"
                      : ""
                  }
                />
              </PaginationItem>

            </PaginationContent>
          </Pagination>
        </div>

      </div>
    </main>
  );
};

export default Products;