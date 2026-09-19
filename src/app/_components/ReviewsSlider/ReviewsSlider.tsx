"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

interface ReviewUser {
  _id: string;
  name: string;
}

interface Review {
  _id: string;
  user: ReviewUser;
  rating: number;
  review: string;
  createdAt: string;
}

interface ReviewsSliderProps {
  reviews: Review[];
}

const ReviewsSlider = ({ reviews }: ReviewsSliderProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  if (!reviews || reviews.length === 0) {
    return (
      <div className="flex min-h-40 items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white">
        <div className="text-center">
          <i className="fa-regular fa-comment-dots mb-2 text-2xl text-slate-300" />

          <p className="text-sm text-slate-500">
            No reviews yet
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">

      {/* Reviews Slider */}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Pagination, Autoplay]}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        className="reviews-swiper !pb-12"
      >
        {reviews.map((review) => (
          <SwiperSlide
            key={review._id}
            className="!h-auto"
          >
            <article className="h-full rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">

              {/* User */}
              <div className="flex items-center justify-between gap-3">

                <div className="flex min-w-0 items-center gap-3">

                  {/* Avatar */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-slate-300/35 font-semibold text-black">
                    {review.user.name.charAt(0).toUpperCase()}
                  </div>

                  {/* User Info */}
                  <div className="min-w-0">
                    <h3 className="truncate font-semibold text-slate-900">
                      {review.user.name}
                    </h3>

                    <p className="text-xs text-slate-400">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </p>
                  </div>

                </div>

                {/* Rating */}
                <div className="flex shrink-0 gap-0.5 text-xs text-amber-500">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <i
                      key={index}
                      className={
                        index < review.rating
                          ? "fa-solid fa-star"
                          : "fa-regular fa-star"
                      }
                    />
                  ))}
                </div>

              </div>

              {/* Review */}
              <p className="mt-4 wrap-break-word leading-7 text-slate-600">
                {review.review}
              </p>

            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="mt-2 flex items-center justify-center gap-3">

        {/* Previous */}
        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-200 hover:border-[#0aad0a] hover:bg-[#0aad0a] hover:text-white"
          aria-label="Previous review"
        >
          <i className="fa-solid fa-arrow-left text-sm" />
        </button>

        {/* Next */}
        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-200 hover:border-[#0aad0a] hover:bg-[#0aad0a] hover:text-white"
          aria-label="Next review"
        >
          <i className="fa-solid fa-arrow-right text-sm" />
        </button>

      </div>
    </div>
  );
};

export default ReviewsSlider;