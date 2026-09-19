const Loading = () => {
  return (
    <main className="min-h-screen bg-[#f6f8f7] py-8 md:py-12">
      <div className="container mx-auto px-4">

        {/* ================= HEADER SKELETON ================= */}
        <section className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="h-9 w-44 animate-pulse rounded-lg bg-slate-200" />

            <div className="mt-3 h-4 w-64 animate-pulse rounded-md bg-slate-200" />
          </div>

          {/* Products Count */}
          <div className="flex w-fit items-center gap-3 rounded-2xl border border-slate-100 bg-white px-5 py-3 shadow-sm">
            <div className="h-10 w-10 animate-pulse rounded-xl bg-slate-200" />

            <div>
              <div className="h-3 w-20 animate-pulse rounded bg-slate-200" />

              <div className="mt-2 h-5 w-16 animate-pulse rounded bg-slate-200" />
            </div>
          </div>
        </section>

        {/* ================= PRODUCTS GRID ================= */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.035)]"
            >
              {/* ================= IMAGE ================= */}
              <div className="relative aspect-square animate-pulse bg-slate-200">
                {/* Fake Badge */}
                <div className="absolute left-3 top-3 h-7 w-20 rounded-full bg-slate-300" />

                {/* Fake Wishlist */}
                <div className="absolute right-3 top-3 h-9 w-9 rounded-full bg-slate-300" />

                {/* Fake Gallery */}
                <div className="absolute bottom-3 left-3 h-6 w-10 rounded-lg bg-slate-300" />
              </div>

              {/* ================= CONTENT ================= */}
              <div className="p-4">

                {/* Category */}
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-6 w-24 animate-pulse rounded-md bg-slate-200" />
                  <div className="h-3 w-16 animate-pulse rounded bg-slate-200" />
                </div>

                {/* Title */}
                <div className="h-5 w-[85%] animate-pulse rounded-md bg-slate-200" />

                {/* Rating */}
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-4 w-10 animate-pulse rounded bg-slate-200" />
                  <div className="h-3 w-12 animate-pulse rounded bg-slate-200" />
                </div>

                {/* Brand */}
                <div className="mt-3 flex items-center gap-2.5">
                  {/* Brand Image */}
                  <div className="h-9 w-9 shrink-0 animate-pulse rounded-lg bg-slate-200" />

                  {/* Brand Info */}
                  <div className="min-w-0 flex-1">
                    <div className="h-2.5 w-10 animate-pulse rounded bg-slate-200" />

                    <div className="mt-2 h-3 w-24 animate-pulse rounded bg-slate-200" />
                  </div>
                </div>

                {/* Divider */}
                <div className="my-3 h-px bg-slate-100" />

                {/* Price + Cart */}
                <div className="flex items-center justify-between">
                  <div className="h-6 w-24 animate-pulse rounded-md bg-slate-200" />

                  <div className="h-10 w-10 animate-pulse rounded-xl bg-slate-200" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Loading;