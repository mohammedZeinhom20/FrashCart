
import getItemCategory from "@/apis/getItemCategory";
import Image from "next/image";
import Link from "next/link";

export default async function CategoryDetails({params,}: {params: Promise<{ id: string }>;}) {
  const { id } = await params;

  const category = await getItemCategory(id);

  return (
    <main className="min-h-screen bg-[#f8faf9] px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* ================= BREADCRUMB ================= */}
        <div className="mb-6 flex items-center gap-2 text-sm">
          <Link
            href="/categories"
            className="flex items-center gap-2 text-slate-400 transition-colors hover:text-[#0aad0a]"
          >
            <i className="fa-solid fa-layer-group text-xs" />
            Categories
          </Link>

          <i className="fa-solid fa-chevron-right text-[9px] text-slate-300" />

          <span className="font-medium text-slate-600">
            {category.name}
          </span>
        </div>

        {/* ================= MAIN CARD ================= */}
        <section className="overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-sm">

          <div className="grid lg:grid-cols-2">

            {/* ================= IMAGE ================= */}
            <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-slate-50 p-8 md:min-h-[500px]">

              {/* Decorative Circles */}
              <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-green-100/60 blur-3xl" />

              <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-green-50 blur-3xl" />

              {/* Small Badge */}
              <div className="absolute left-6 top-6 z-20 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-[#0aad0a] shadow-sm backdrop-blur-sm">
                <i className="fa-solid fa-circle-check" />
                Category
              </div>

              <div className="relative z-10 h-64 w-full max-w-md md:h-80">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* ================= CONTENT ================= */}
            <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">

              {/* Label */}
              <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-[#0aad0a]">
                <span className="h-2 w-2 rounded-full bg-[#0aad0a]" />
                Product Category
              </div>

              {/* Title */}
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                {category.name}
              </h1>

              {/* Description */}
              <p className="mt-4 max-w-lg text-base leading-7 text-slate-500">
                Explore our collection of products available in the
                <span className="font-semibold text-slate-700">
                  {category.name}
                </span>
                category.
              </p>

              {/* ================= INFO ================= */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">

                {/* Slug */}
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="mb-2 flex items-center gap-2 text-xs font-medium text-slate-400">
                    <i className="fa-solid fa-link text-[#0aad0a]" />
                    Slug
                  </div>

                  <p className="truncate text-sm font-semibold text-slate-700">
                    {category.slug}
                  </p>
                </div>

                {/* ID */}
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="mb-2 flex items-center gap-2 text-xs font-medium text-slate-400">
                    <i className="fa-solid fa-fingerprint text-[#0aad0a]" />
                    Category ID
                  </div>

                  <p className="truncate text-xs font-medium text-slate-600">
                    {category._id}
                  </p>
                </div>

                {/* Created */}
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 sm:col-span-2">
                  <div className="mb-2 flex items-center gap-2 text-xs font-medium text-slate-400">
                    <i className="fa-solid fa-calendar-days text-[#0aad0a]" />
                    Created At
                  </div>

                  <p className="text-sm font-semibold text-slate-700">
                    {new Date(category.createdAt).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>
                </div>
              </div>

              {/* ================= ACTIONS ================= */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <Link
                    href={`/categories/${category._id}/subcategories`}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0aad0a] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-100"
                  >
                    <i className="fa-solid fa-layer-group" />
                    Explore Subcategories
                    <i className="fa-solid fa-arrow-right text-xs" />
                </Link>

                <Link
                  href="/categories"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 transition-all hover:border-green-200 hover:bg-green-50 hover:text-[#0aad0a]"
                >
                  <i className="fa-solid fa-arrow-left text-xs" />
                  Back
                </Link>

              </div>

            </div>
          </div>

          {/* ================= FOOTER ================= */}
          <div className="border-t border-slate-100 bg-slate-50/60 px-6 py-4 md:px-10">
            <div className="flex flex-wrap items-center justify-between gap-3">

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <i className="fa-solid fa-shield-halved text-[#0aad0a]" />
                Trusted category
              </div>

              <p className="text-xs text-slate-400">
                Last updated{" "}
                {new Date(category.updatedAt).toLocaleDateString("en-US")}
              </p>

            </div>
          </div>

        </section>
      </div>
    </main>
  );
}

