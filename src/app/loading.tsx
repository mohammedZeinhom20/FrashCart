import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="w-full md:w-[80%] mx-auto my-10 px-5 md:px-0">
      {/* Main Slider */}
      <div className="mb-10 flex flex-col lg:flex-row gap-4 rounded-2xl overflow-hidden">
        <div className="w-full lg:w-2/3">
          <Skeleton className="w-full h-[220px] md:h-[300px] lg:h-[400px] rounded-2xl" />
        </div>

        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <Skeleton className="w-full h-[190px] lg:h-[192px] rounded-2xl" />
          <Skeleton className="w-full h-[190px] lg:h-[192px] rounded-2xl" />
        </div>
      </div>

      {/* Categories Skeleton */}
      <div className="mb-10  rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx}>
              <Skeleton className="w-full h-60 bg-gray-300  animate-pulse" />
              <Skeleton className="w-full h-10 rounded-none animate-pulse"  />
            </div>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="flex flex-wrap">
        {Array.from({ length: 8 }).map((_, idx) => (
          <div
            key={idx}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3"
          >
            <Card className="p-2 gap-0">
              <CardHeader className="px-0 mb-2">
                <Skeleton className="w-full h-70 rounded-md" />
              </CardHeader>

              <CardContent className="px-2 m-0 mb-2">
                <Skeleton className="h-4 w-24 mb-3 rounded-full" />
                <Skeleton className="h-5 w-full mb-2 rounded-full" />
              </CardContent>

              <CardFooter className="px-2 py-3">
                <div className="w-full flex justify-between items-center">
                  <Skeleton className="h-4 w-16 rounded-full" />
                  <Skeleton className="h-4 w-10 rounded-full" />

                  <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-8 rounded-full" />
                    <Skeleton className="h-4 w-4 rounded-full" />
                  </div>
                </div>
              </CardFooter>

              <div className="px-2 pb-2">
                <Button
                  disabled
                  className="w-full h-11 pointer-events-none"
                >
                  <Skeleton className="h-5 w-28 rounded-full" />
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}