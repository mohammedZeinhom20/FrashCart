
const Loading = () => {
  return (
    <section className="min-h-screen bg-slate-50 px-4 py-8 animate-pulse">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

          <div>
            {/* Title */}
            <div className="h-9 w-72 rounded-lg bg-slate-200" />

            {/* Description */}
            <div className="mt-3 h-4 w-96 max-w-full rounded bg-slate-200" />
          </div>


          {/* Total Categories */}
          <div className="flex w-fit items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">

            <div className="h-10 w-10 rounded-xl bg-slate-200" />

            <div className="space-y-2">
              <div className="h-3 w-24 rounded bg-slate-200" />

              <div className="h-5 w-10 rounded bg-slate-200" />
            </div>

          </div>

        </div>


        {/* Search */}
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          {/* Search Input */}
          <div className="h-12 w-full rounded-xl border border-slate-200 bg-white sm:max-w-md" />

          {/* Showing */}
          <div className="h-4 w-32 rounded bg-slate-200" />

        </div>


        {/* Categories */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">

          {Array.from({ length: 24 }).map((_, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4"
            >

            


              {/* Category Info */}
              <div className="flex items-center justify-between gap-2">

                <div className="min-w-0 flex-1 space-y-2">

                  {/* Category Name */}
                  <div className="h-5 w-32 rounded bg-slate-200" />

                  {/* Slug */}
                  <div className="h-3 w-40 rounded bg-slate-200" />

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

