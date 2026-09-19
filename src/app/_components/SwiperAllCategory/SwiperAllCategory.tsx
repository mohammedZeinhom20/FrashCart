"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard } from "swiper/modules";

import "swiper/css";
import { Categories } from "@/types/Categories.t";

const SwiperAllCategory = ({ categories}:{categories :Categories}) => {
  return (
    <Swiper
      modules={[Keyboard, Autoplay]}
      keyboard={{
        enabled: true,
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      spaceBetween={0}
      loop={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      

    >
      {categories.map((category) => (
        <SwiperSlide key={category._id}>
          <Image
            className="w-full h-60 object-cover"
            src={category.image}
            alt={category.name}
            width={250}
            height={250}
            sizes="(max-width:640px) 100vw,(max-width:768px) 50vw,(max-width:1024px) 33vw,25vw"
            
          />

          <p className="bg-green-700 text-white text-center py-2 font-bold">
            {category.name}
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperAllCategory;