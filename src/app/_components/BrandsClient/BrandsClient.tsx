"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Brands } from "@/types/Brands.t";
import SearchInput from "../SearchInput/SearchInput";





export default function BrandsClient({data}: {data: Brands;}) {
  const [search, setSearch] = useState("");

  const filteredBrands = data.filter((brand) =>
    brand.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>

            <h1 className="text-3xl font-bold text-slate-900">
              Explore Brands
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Discover products from your favorite brands.
            </p>
          </div>

          <div className="flex w-fit items-center gap-3 rounded-2xl border border-green-100 bg-white px-5 py-3 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <i className="fa-solid fa-layer-group" />
            </div>

            <div>
              <p className="text-xs text-slate-400">
                Total Brands
              </p>

              <p className="text-lg font-bold text-slate-800">
                {data.length}
              </p>
            </div>
          </div>
        </div>

        {/* Search */}
        <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search brands..."
          />

        {/* Brands */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">

          {filteredBrands.map((brand) => (
            <div
              key={brand._id}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-green-100/40"
            >

              {/* Hover Line */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />

              {/* Logo */}
              <div className="flex h-32 items-center justify-center rounded-xl bg-slate-50 transition group-hover:bg-green-50">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={200}
                  height={200}
                  className="h-20 w-32 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Info */}
              <div className="mt-4 flex items-center justify-between gap-2">

                <div className="min-w-0">
                  <h2 className="truncate font-bold text-slate-800">
                    {brand.name}
                  </h2>

                  <p className="mt-1 truncate text-xs text-slate-400">
                    {brand.slug}
                  </p>
                </div>

                <Link href={`/brands/${brand._id}`}>
  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all group-hover:bg-green-500 group-hover:text-white">
    <i className="fa-solid fa-arrow-right text-sm" />
  </div>
                </Link>

              </div>
            </div>
          ))}

        </div>

        {/* Empty */}
        {filteredBrands.length === 0 && (
          <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white">
            <i className="fa-solid fa-magnifying-glass mb-4 text-3xl text-slate-300" />

            <h2 className="font-bold text-slate-800">
              No brands found
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Try searching for another brand.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}