
import getSingleProduct from "@/apis/singleProduct";
import AddBntCart from "@/app/_components/AddBtnCart/AddBntCart";
import ProductGallery from "@/app/_components/ProductGallery/ProductGallery";
import ReviewsSlider from "@/app/_components/ReviewsSlider/ReviewsSlider";
import { User } from "@/types/InProductDetails.t";
import Image from "next/image";
import Link from "next/link";



const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const data = await getSingleProduct(id);

  console.log(data);

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto w-full max-w-7xl px-5">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-slate-500">
          <Link href={`/products`}>Home</Link>  /  <Link href={`/categories`}>{data.category.name} </Link>  /
          <span className="text-slate-900">{data.title}</span>
        </div>

        {/* Product */}
        <section className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Images */}
          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <ProductGallery
              imageCover={data.imageCover}
              images={data.images}
              title={data.title}
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            {/* Brand */}
            <div className="mb-4 flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border bg-white">
                <Image
                  src={data.brand.image}
                  alt={data.brand.name}
                  fill
                  className="object-contain p-1"
                />
              </div>

              <span className="text-sm font-medium text-slate-500">
                {data.brand.name}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              {data.title}
            </h1>

            {/* Rating */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 text-amber-500">
                {"★".repeat(Math.round(data.ratingsAverage))}
                {"☆".repeat(5 - Math.round(data.ratingsAverage))}
              </div>

              <span className="text-sm font-medium text-slate-700">
                {data.ratingsAverage}
              </span>

              <span className="text-sm text-slate-400">
                ({data.ratingsQuantity} reviews)
              </span>
            </div>

            {/* Description */}
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="mb-3 font-semibold text-slate-900">
                Product Information
              </h2>

              <p className="whitespace-pre-line text-sm leading-7 text-slate-600">
                {data.description}
              </p>
            </div>

            {/* Category / Subcategory */}
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Category */}
              <div className="rounded-2xl border bg-white p-4">
                <p className="text-xs text-slate-400">Category</p>

                <div className="mt-2 flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-slate-100">
                    <Image
                      src={data.category.image}
                      alt={data.category.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <span className="font-medium text-slate-800">
                    {data.category.name}
                  </span>
                </div>
              </div>

              {/* Subcategory */}
              <div className="rounded-2xl border bg-white p-4">
                <p className="text-xs text-slate-400">Subcategory</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {data.subcategory.map((sub: User) => (
                    <span
                      key={sub._id}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {sub.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="mt-7">
              <span className="text-3xl font-bold text-slate-900">
                {data.price.toLocaleString()} EGP
              </span>
            </div>

            {/* Stock */}
            <div className="mt-4 flex flex-wrap gap-3">
              <div className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                ✓ {data.quantity} Available
              </div>

              <div className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600">
                {data.sold} Sold
              </div>
            </div>

            {/* Actions */}
            <div className="mt-7 flex gap-3">
              <AddBntCart
              id={data._id}
              className="flex h-13 w-13 items-center justify-center rounded-xl bg-[#0aad0a] text-white shadow-sm transition-all duration-200 hover:scale-105 hover:bg-[#088a08] disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
            >
              <i className="fa-solid fa-cart-plus text-xl" />
            </AddBntCart>

              <button
                aria-label="Add to wishlist"
                className="rounded-xl border  border-slate-200 bg-white px-5 text-xl transition hover:bg-slate-100"
              >
                ♡
              </button>
            </div>

            {/* Product Meta */}
            <div className="mt-7 grid grid-cols-2 gap-4 border-t pt-6">
              <div>
                <p className="text-xs text-slate-400">Product ID</p>
                <p className="mt-1 truncate text-sm font-medium text-slate-700">
                  {data._id}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Slug</p>
                <p className="mt-1 truncate text-sm font-medium text-slate-700">
                  {data.slug}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Created</p>
                <p className="mt-1 text-sm font-medium text-slate-700">
                  {new Date(data.createdAt).toLocaleDateString()}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Updated</p>
                <p className="mt-1 text-sm font-medium text-slate-700">
                  {new Date(data.updatedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="mt-14">
          {/* Header */}
          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium text-slate-400">
                Customer Feedback
              </p>

              <h2 className="mt-1 text-2xl font-bold text-slate-900">
                Reviews
              </h2>
            </div>

            <div className="rounded-2xl border bg-white px-5 py-3 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">
                  {data.ratingsAverage}
                </span>

                <span className="text-amber-500">★</span>

                <span className="text-sm text-slate-400">
                  from {data.ratingsQuantity} reviews
                </span>
              </div>
            </div>
          </div>

          {/* Reviews Grid */}
          <ReviewsSlider reviews={data.reviews} />
        </section>

        {/* Footer Info */}
        <section className="mt-10 rounded-3xl bg-[#0aad0a] p-6 text-white">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div>
              <p className="text-sm text-white/85">Rating</p>
              <p className="mt-1 text-xl font-bold">
                {data.ratingsAverage} / 5
              </p>
            </div>

            <div>
              <p className="text-sm text-white/85">Reviews</p>
              <p className="mt-1 text-xl font-bold">
                {data.ratingsQuantity}
              </p>
            </div>

            <div>
              <p className="text-sm text-white/85">Sold</p>
              <p className="mt-1 text-xl font-bold">{data.sold}</p>
            </div>

            <div>
              <p className="text-sm text-white/85">Stock</p>
              <p className="mt-1 text-xl font-bold">{data.quantity}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductDetails;

