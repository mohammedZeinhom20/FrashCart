import getSubCategoriesOnCategory from "@/apis/SubCategoriesOnCategory";
import { ItemSupCategory } from "@/types/ItemSupCategory";

const SubCategories = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const { data }: { data: ItemSupCategory[] } = await getSubCategoriesOnCategory(id);

  

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-6 text-2xl font-bold text-slate-800">
          Sub Categories
        </h1>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <div
              key={item._id}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-slate-800">
                {item.name}
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                {item.slug}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubCategories;