const ProductDetailsLoading = () => {
  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto w-full max-w-7xl px-5">
        
        {/* Breadcrumb Skeleton */}
        <div className="mb-8 flex items-center gap-2">
          <div className="h-4 w-12 animate-pulse rounded bg-slate-200" />
          <div className="h-4 w-2 animate-pulse rounded bg-slate-200" />
          <div className="h-4 w-32 animate-pulse rounded bg-slate-200" />
          <div className="h-4 w-2 animate-pulse rounded bg-slate-200" />
          <div className="h-4 w-48 animate-pulse rounded bg-slate-200" />
        </div>

        {/* Product Section */}
        <section className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          
          {/* Gallery Skeleton */}
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            
            {/* Main Image */}
            <div className="aspect-square w-full animate-pulse rounded-2xl bg-slate-200" />

            {/* Thumbnails */}
            <div className="mt-5 flex gap-3 overflow-hidden">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-square w-20 shrink-0 animate-pulse rounded-xl bg-slate-200"
                />
              ))}
            </div>

            {/* Gallery Footer */}
            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
              <div className="h-4 w-28 animate-pulse rounded bg-slate-200" />
              <div className="h-4 w-16 animate-pulse rounded bg-slate-200" />
            </div>
          </div>

          {/* Product Details Skeleton */}
          <div className="flex flex-col justify-center">
            
            {/* Brand */}
            <div className="mb-4 flex items-center gap-3">
              <div className="h-10 w-10 animate-pulse rounded-full bg-slate-200" />

              <div className="h-4 w-24 animate-pulse rounded bg-slate-200" />
            </div>

            {/* Title */}
            <div className="space-y-3">
              <div className="h-10 w-full max-w-xl animate-pulse rounded-lg bg-slate-200" />
              <div className="h-10 w-3/4 max-w-lg animate-pulse rounded-lg bg-slate-200" />
            </div>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-3">
              <div className="h-5 w-28 animate-pulse rounded bg-slate-200" />
              <div className="h-5 w-10 animate-pulse rounded bg-slate-200" />
              <div className="h-5 w-24 animate-pulse rounded bg-slate-200" />
            </div>

            {/* Description */}
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
              <div className="mb-4 h-5 w-40 animate-pulse rounded bg-slate-200" />

              <div className="space-y-3">
                <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
                <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
                <div className="h-4 w-5/6 animate-pulse rounded bg-slate-200" />
                <div className="h-4 w-2/3 animate-pulse rounded bg-slate-200" />
              </div>
            </div>

            {/* Category / Subcategory */}
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              
              <div className="rounded-2xl border bg-white p-4">
                <div className="h-3 w-20 animate-pulse rounded bg-slate-200" />

                <div className="mt-3 flex items-center gap-3">
                  <div className="h-10 w-10 animate-pulse rounded-lg bg-slate-200" />
                  <div className="h-4 w-28 animate-pulse rounded bg-slate-200" />
                </div>
              </div>

              <div className="rounded-2xl border bg-white p-4">
                <div className="h-3 w-24 animate-pulse rounded bg-slate-200" />

                <div className="mt-3 flex gap-2">
                  <div className="h-7 w-24 animate-pulse rounded-full bg-slate-200" />
                  <div className="h-7 w-20 animate-pulse rounded-full bg-slate-200" />
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="mt-7">
              <div className="h-9 w-40 animate-pulse rounded-lg bg-slate-200" />
            </div>

            {/* Stock */}
            <div className="mt-4 flex gap-3">
              <div className="h-10 w-32 animate-pulse rounded-full bg-slate-200" />
              <div className="h-10 w-24 animate-pulse rounded-full bg-slate-200" />
            </div>

            {/* Actions */}
            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="h-12 animate-pulse rounded-xl bg-slate-200" />
              <div className="h-12 animate-pulse rounded-xl bg-slate-200" />
            </div>

            {/* Product Meta */}
            <div className="mt-7 grid grid-cols-2 gap-4 border-t pt-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index}>
                  <div className="h-3 w-20 animate-pulse rounded bg-slate-200" />
                  <div className="mt-2 h-4 w-28 animate-pulse rounded bg-slate-200" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Skeleton */}
        <section className="mt-14">
          
          {/* Header */}
          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="h-4 w-32 animate-pulse rounded bg-slate-200" />

              <div className="mt-2 h-8 w-28 animate-pulse rounded bg-slate-200" />
            </div>

            <div className="rounded-2xl border bg-white px-5 py-3">
              <div className="h-5 w-40 animate-pulse rounded bg-slate-200" />
            </div>
          </div>

          {/* Reviews */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 animate-pulse rounded-full bg-slate-200" />

                    <div className="space-y-2">
                      <div className="h-4 w-28 animate-pulse rounded bg-slate-200" />
                      <div className="h-3 w-20 animate-pulse rounded bg-slate-200" />
                    </div>
                  </div>

                  <div className="h-4 w-20 animate-pulse rounded bg-slate-200" />
                </div>

                <div className="mt-5 space-y-3">
                  <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
                  <div className="h-4 w-5/6 animate-pulse rounded bg-slate-200" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Stats Skeleton */}
        <section className="mt-10 rounded-3xl bg-slate-200 p-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index}>
                <div className="h-4 w-16 animate-pulse rounded bg-slate-300" />
                <div className="mt-2 h-7 w-20 animate-pulse rounded bg-slate-300" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductDetailsLoading;