import getBrand from "@/apis/getbrands";
import Image from "next/image";


export default async function BrandDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const brand = await getBrand(id);

  return (
    <div >
        <h1 className='text-center font-bold text-5xl my-5'>{brand.name}</h1>
        <div className="mx-auto flex w-[90%] items-center justify-center">
            <Image
                src={brand.image}
                alt={brand.name}
                width={300}
                height={300}
                className="h-80 w-full object-contain"
            />
        </div>

    </div>
  );
}