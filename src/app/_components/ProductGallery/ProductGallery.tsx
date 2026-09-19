"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ProductGalleryProps {
  imageCover: string;
  images: string[];
  title: string;
}

const ProductGallery = ({
  imageCover,
  images,
  title,
}: ProductGalleryProps) => {
  const allImages = [imageCover, ...images];

  const [activeIndex, setActiveIndex] = useState(0);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;

      // Don't change image while typing
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT"
      ) {
        return;
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev === allImages.length - 1 ? 0 : prev + 1
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === 0 ? allImages.length - 1 : prev - 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [allImages.length]);

  return (
    <div className="w-full rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">

      {/* ================= Main Image ================= */}
      <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl bg-slate-50">
        <Image
          key={allImages[activeIndex]}
          src={allImages[activeIndex]}
          alt={title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 55vw"
          className="object-contain p-8 transition-all duration-500"
        />

        {/* Counter */}
        <div className="absolute bottom-4 right-4 z-10 rounded-full bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
          {activeIndex + 1} / {allImages.length}
        </div>
      </div>

      {/* ================= Thumbnails ================= */}
      <div className="mt-5">
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-6">
          {allImages.map((image, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View image ${index + 1}`}
                className={`relative aspect-square w-full overflow-hidden rounded-xl bg-slate-50 transition-all duration-300 ${
                  isActive
                    ? "border-2 border-slate-900 ring-2 ring-slate-200"
                    : "border border-slate-200 hover:border-slate-400"
                }`}
              >
                <Image
                  src={image}
                  alt={`${title} thumbnail ${index + 1}`}
                  fill
                  sizes="120px"
                  className="object-contain p-2"
                />


              </button>
            );
          })}
        </div>
      </div>

      {/* ================= Footer ================= */}

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
            <p className="text-sm font-medium text-slate-700">
                Product Gallery
            </p>

            <p className="text-sm text-slate-400">
                {allImages.length} Images
            </p>
        </div>

    </div>
  );
};

export default ProductGallery;