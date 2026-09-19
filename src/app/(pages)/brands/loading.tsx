
const Loading = () => {
  return (
    <section className="min-h-screen bg-slate-50 px-4 py-8 animate-pulse">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

          <div>
            {/* Title */}
            <div className="h-9 w-56 rounded-lg bg-slate-200" />

            {/* Description */}
            <div className="mt-3 h-4 w-72 rounded bg-slate-200" />
          </div>

          {/* Total Brands */}
          <div className="flex w-fit items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">

            <div className="h-10 w-10 rounded-xl bg-slate-200" />

            <div className="space-y-2">
              <div className="h-3 w-20 rounded bg-slate-200" />
              <div className="h-5 w-10 rounded bg-slate-200" />
            </div>

          </div>
        </div>


        {/* Search */}
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          {/* Search Input */}
          <div className="h-12 w-full rounded-xl border border-slate-200 bg-white sm:max-w-md" />

          {/* Showing */}
          <div className="h-4 w-28 rounded bg-slate-200" />

        </div>


        {/* Brands */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">

          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4"
            >

              {/* Logo */}
              <div className="flex h-32 items-center justify-center rounded-xl bg-slate-100">

                <div className="h-20 w-32 rounded-lg bg-slate-200" />

              </div>


              {/* Info */}
              <div className="mt-4 flex items-center justify-between gap-2">

                <div className="min-w-0 flex-1 space-y-2">

                  {/* Brand Name */}
                  <div className="h-5 w-24 rounded bg-slate-200" />

                  {/* Slug */}
                  <div className="h-3 w-32 rounded bg-slate-200" />

                </div>


                {/* Arrow */}
                <div className="h-9 w-9 shrink-0 rounded-full bg-slate-200" />

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Loading;

