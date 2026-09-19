

const Loading = () => {
  return (
    <main className="min-h-screen bg-slate-50 py-10"> 
    <div className="md:w-[80%]  mx-auto w-full my-10 px-5 md:px-0 animate-pulse">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between mb-5 items-center">
        <div className="w-full">
          <div className="h-9 w-48 bg-slate-200 rounded-md" />
          <div className="h-4 w-64 bg-slate-200 rounded-md mt-3" />
        </div>

        {/* Revenue Skeleton */}
        <div className="flex w-full md:w-[380px] mt-5 md:mt-0 p-5 bg-slate-100/60 rounded-xl gap-4">
          <div className="h-12 w-12 rounded-full bg-slate-200 shrink-0" />

          <div className="flex-1 space-y-3">
            <div className="flex justify-between">
              <div className="h-4 w-24 bg-slate-200 rounded" />
              <div className="h-4 w-20 bg-slate-200 rounded" />
            </div>

            <div className="flex justify-between">
              <div className="h-4 w-32 bg-slate-200 rounded" />
              <div className="h-4 w-20 bg-slate-200 rounded" />
            </div>

            <div className="border-t border-slate-200 pt-3 flex justify-between">
              <div className="h-4 w-28 bg-slate-200 rounded" />
              <div className="h-5 w-24 bg-slate-200 rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-5">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center p-5 bg-slate-100/60 rounded-xl gap-4"
          >
            {/* Icon */}
            <div className="h-12 w-12 rounded-full bg-slate-200 shrink-0" />

            <div className="space-y-2">
              {/* Title */}
              <div className="h-4 w-24 bg-slate-200 rounded" />

              {/* Number */}
              <div className="h-8 w-12 bg-slate-200 rounded" />

              {/* Description */}
              <div className="h-3 w-28 bg-slate-200 rounded" />
            </div>
          </div>
        ))}
      </div>

      {/* Orders */}
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="p-5 bg-slate-100/60 rounded-lg mb-5 grid grid-cols-1 lg:grid-cols-2"
        >
          {/* Left Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Order Info */}
            <div className="my-5 flex gap-3">
              <div className="h-12 w-12 rounded-full bg-slate-200 shrink-0" />

              <div className="space-y-3">
                <div className="h-5 w-40 bg-slate-200 rounded" />

                <div className="h-4 w-48 bg-slate-200 rounded" />
              </div>
            </div>

            {/* Products */}
            <div>
              <div className="flex gap-2 mb-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-14 w-14 rounded-lg bg-slate-200"
                  />
                ))}
              </div>

              <div className="h-4 w-24 bg-slate-200 rounded mb-2" />
              <div className="h-4 w-20 bg-slate-200 rounded" />
            </div>
          </div>

          {/* Right Side */}
          <div className="md:flex md:justify-between md:items-center lg:flex-col lg:justify-start lg:items-end">
            {/* Price */}
            <div className="h-8 w-32 bg-slate-200 rounded my-2" />

            {/* Payment */}
            <div className="h-10 w-24 bg-slate-200 rounded-full my-3" />

            {/* Status */}
            <div className="h-10 w-24 bg-slate-200 rounded-full" />
          </div>
        </div>
      ))}
    </div>
    </main>
  );
};

export default Loading;

