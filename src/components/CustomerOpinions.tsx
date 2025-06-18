import React, { useRef } from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';

import { FaPlay } from "react-icons/fa6";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import SwiperCore from "swiper";
import slides from '@/data/customerSilder';
const CustomerOpinions = () => {
    const swiperRef = useRef<SwiperCore | null>(null);
    return (
        <div className='flex flex-col items-center justify-center w-full h-full bg-[#EBEAF466] mt-10  px-4 py-8 sm:px-8 md:px-10 lg:px-25 '>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center md:items-baseline w-full mb-8'>
                <div className='flex-col items-center justify-center gap-1'>
                    <h2 className='text-xl sm:text-2xl md:text-2xl 2xl:text-[36px] md:font-[600] text-[#333333] mb-4 font-bold text-center md:text-right'>آراء العملاء</h2>
                    <p className=' text-sm  md:text-[14px] lg:text-[18px] 2xl:text-[22px] font-[400] text-gray-700 mb-8 px-4 text-center md:text-right'>  تعمل شرکة معمار للتطویر العقاري وإدارة المشروعات ﻋﻠﯽ تقدیم أفضل خدمات المقاولات التشیید والبناء </p>

                </div>
                <button className=" rounded-4xl px-7 py-3 text-[12px] w-40   xl:py-4    md:text-[12px] xl:text-[16px] xl:w-45 2xl:text-[20px] border-[#E37C35] border-2 text-[#E37C35] transition-all hover:text-white hover:bg-[#E37C35] duration-300">    عرض المزيد </button>
            </div>
            <Swiper
                slidesPerView={2}
                breakpoints={{

                    320: { slidesPerView: 2, spaceBetween: 10 },
                    550: { slidesPerView: 3, spaceBetween: 10 },

                }}
                spaceBetween={10}
                pagination={{ clickable: true }}
                className="mySwiper"
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full aspect-[405/420] rounded-lg overflow-hidden">
                            <Image src={slide.image} alt={slide.title} fill className="object-cover" />
                        </div>

                        <div className='absolute top-1 left-1 p-1 sm:p-2 bg-white/20 rounded-full z-11'>
                            <div className='rounded-full text-center p-0.5 text-[10px] sm:text-[14px] sm:p-1 2xl:p-4 2xl:text-[22px] bg-white/70'>
                                <FaPlay className='text-[#E37C35]' />
                            </div>
                        </div>

                        <div className='flex flex-col items-end justify-end p-2 rounded-2xl absolute bg-black/40 inset-0 z-10 text-end'>
                            <p className='text-[8px] sm:text-[12px] lg:text-[14px] 2xl:text-[22px] text-white font-semibold'>
                                {slide.title}
                            </p>
                            <p className='text-[8px] sm:text-[10px] lg:text-[12px] 2xl:text-[20px] text-white font-light'>
                                {slide.date}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


            <div className="flex flex-row-reverse gap-3 mt-4 self-center md:self-end bg-white ">
                <button onClick={() => swiperRef.current?.slideNext()} className='rounded-full bg-[#E37C35] p-1 2xl:p-2 text-[16px] sm:text-[20px] 2xl:text-[28px] 2xl:w-12 2xl:h-12 text-white transition-all hover:bg-white hover:text-[#E37c35] duration-300'><FiArrowRight /></button>
                <button onClick={() => swiperRef.current?.slidePrev()} className='rounded-full bg-[#E37C35] p-1 2xl:p-2 text-[16px] sm:text-[20px] 2xl:text-[28px] 2xl:w-12 2xl:h-12 text-white transition-all hover:bg-white hover:text-[#E37c35] duration-300'><FiArrowLeft /></button>
            </div>
        </div>
    )
}

export default CustomerOpinions
