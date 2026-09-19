"use client"
import React from 'react'

import banner from "../../../../public/screens/slider/grocery-banner.png"
import banner2 from "../../../../public/screens/slider/grocery-banner-2.jpeg"

import slider from "../../../../public/screens/slider/slider-image-1.jpeg"
import slider2 from "../../../../public/screens/slider/slider-image-2.jpeg"
import slider3 from "../../../../public/screens/slider/slider-image-3.jpeg"
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Keyboard } from 'swiper/modules'

const MainSlider = () => {
  return (
    <div className='mb-10 flex flex-col lg:flex-row rounded-2xl overflow-hidden'>
        <div className='w-full lg:w-2/3'>
          <Swiper
          modules={[Keyboard ,Autoplay]}
            keyboard={{
              enabled: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              waitForTransition: false,
            }}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            
          >
            <SwiperSlide>
              <Image className='h-auto w-full aspect-[16/9]  object-cover ' priority src={slider} alt='slider' sizes="(max-width:1024px) 100vw, 66vw"/>
            </SwiperSlide>
            <SwiperSlide>
              <Image className='h-auto w-full aspect-[16/9] object-cover' src={slider2} alt='slider' sizes="(max-width:1024px) 100vw, 66vw" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className=' h-auto w-full aspect-[16/9] object-cover' src={slider3} alt='slider' sizes="(max-width:1024px) 100vw, 66vw" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className='w-full lg:w-1/3'>
        <Image className=' h-auto w-full aspect-[16/9]  object-cover' loading="eager" src={banner2} alt='banner2'sizes="(max-width:1024px) 100vw, 33vw" />
        <Image className=' h-auto w-full aspect-[16/9]  object-cover' loading="eager"  src={banner} alt='banner' sizes="(max-width:1024px) 100vw, 33vw" />
        </div>

    </div>
  )
}

export default MainSlider