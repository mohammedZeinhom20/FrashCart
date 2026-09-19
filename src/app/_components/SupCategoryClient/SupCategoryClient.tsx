
"use client";


import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SearchInput from "../SearchInput/SearchInput";
import { Categories } from "@/types/Categories.t";

export default function CategoryClient({
  data,
}: {
  data: Categories;
}) {
  const [search, setSearch] = useState("");

  const filteredCategories = data.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  
  return (
    <section className="min-h-screen bg-slate-50 px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="mb-8 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">

          {/* Header Content */}
          <div className="relative px-6 py-8 md:px-10 md:py-10">

            {/* Background Decoration */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-green-50 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              {/* Title */}
              <div>

                <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  Find What You
                  <span className="text-[#0aad0a]"> Love</span>
                </h1>

                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 md:text-base">
                  Explore our categories and discover products that match
                  your style and needs.
                </p>
              </div>

              {/* Stats */}
              <div className="flex w-fit items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#0aad0a] shadow-sm">
                  <i className="fa-solid fa-layer-group" />
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400">
                    Total Categories
                  </p>

                  <p className="mt-0.5 text-2xl font-bold text-slate-900">
                    {data.length}
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Search */}
          <div className="border-t border-slate-100 px-6 py-5 md:px-10">
            <SearchInput
              value={search}
              onChange={setSearch}
              placeholder="Search categories..."
            />
          </div>
        </div>

        {/* ================= SECTION HEADER ================= */}
        <div className="mb-5 flex items-end justify-between gap-4">

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Categories
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              {filteredCategories.length}{" "}
              {filteredCategories.length === 1
                ? "category"
                : "categories"}{" "}
              available
            </p>
          </div>

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="flex items-center gap-2 text-sm font-semibold text-[#0aad0a] transition-colors hover:text-green-700"
            >
              <i className="fa-solid fa-xmark text-xs" />
              Clear
            </button>
          )}
        </div>

        {/* ================= CATEGORIES ================= */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

            {filteredCategories.map((category) => (
                <article
                    key={category._id}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-green-100/40"
                  >
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden bg-slate-50 sm:h-44">
                      
                      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-green-100/50 blur-2xl transition-all duration-300 group-hover:bg-green-200/60" />

                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                        className="relative z-10 object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Link Only */}
                      <Link
                        href={`/categories/${category._id}`}
                        className="absolute right-3 top-3 z-20 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full bg-white/90 text-slate-500 opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:bg-[#0aad0a] group-hover:text-white group-hover:opacity-100"
                        aria-label={`View ${category.name}`}
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
                      </Link>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <h3 className="truncate text-sm font-bold text-slate-800 transition-colors duration-300 group-hover:text-[#0aad0a] sm:text-base">
                            {category.name}
                          </h3>
                        </div>

                        <Link href={`/categories/${category._id}/subcategories`}>
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all duration-300 group-hover:bg-green-50 group-hover:text-[#0aad0a]">
                            <i className="fa-solid fa-arrow-right text-[11px]" />
                          </div>
                        </Link>
                      </div>

                      <div className="mt-4 h-1 overflow-hidden rounded-full bg-slate-100">
                        <div className="h-full w-0 rounded-full bg-[#0aad0a] transition-all duration-500 group-hover:w-full" />
                      </div>
                    </div>
                  </article>
            ))}
          </div>
        ) : (

          /* ================= EMPTY STATE ================= */
          <div className="flex min-h-[360px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-white px-6 text-center">

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-slate-300">
              <i className="fa-solid fa-magnifying-glass text-xl" />
            </div>

            <h2 className="text-lg font-bold text-slate-800">
              No Categories Found
            </h2>

            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
             {"  We couldn't find a category matching "}
              <span className="font-semibold text-slate-600">
                {`"${search}"`}
              </span>
            </p>

            <button
              type="button"
              onClick={() => setSearch("")}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#0aad0a] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-green-700 hover:shadow-md"
            >
              <i className="fa-solid fa-rotate-left text-xs" />
              Show All Categories
            </button>

          </div>
        )}
      </div>
    </section>
  );
}

