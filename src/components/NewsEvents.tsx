'use client';
import React, { useRef } from 'react'
import Image from 'next/image'
import { CiCalendarDate } from "react-icons/ci";
import { useRouter } from 'next/navigation';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

import "swiper/css";
import "./style.css";

const chunkArray = <T,>(arr: T[], size: number): T[][] => {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
};

interface ReusableSectionProps {
    unitsPerSlide?: number;
    news: {
        id: number;
        name: string;
        img: string;
        date: string;

    }[];
}

const NewsEvents = ({
    unitsPerSlide = 6,
    news = [],
}: ReusableSectionProps) => {
    const router = useRouter();

    const unitSlides = chunkArray(news, unitsPerSlide);
    const swiperRef = useRef<SwiperCore | null>(null);
    return (
        <section >

            {/* grid system  */}
            <Swiper
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}

                className="mySwiper">
                {unitSlides.map((unitChunk, index) => (
                    <SwiperSlide key={index}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  ">
                            {unitChunk.map((unit) => (
                                <div key={unit.id} className='flex flex-col gap-1'>
                                    <div className="relative w-full h-58 md:h-78 2xl:h-120 rounded-xl overflow-hidden ">
                                        <Image src={unit.img} alt="مشروع" fill className="object-cover" />
                                        <div className="absolute rounded-2xl  inset-0 bg-black/40  h-full  z-10 flex flex-col justify-end p-3 text-white">
                                            <div className="flex flex-row-reverse justify-between text-[9px] sm:text-[12px] md:text-[14px] font-semibold">
                                                <p className='text-[12px] sm:text-[14px] md:text-[16px] 2xl:text-[22px]' >{unit.name}</p>
                                            </div>
                                            <div className="flex  items-center rounded-2xl  border-white w-fit px-2 py-1 gap-1 mt-1 self-end text-[9px] sm:text-xs">

                                                <p className='text-[10px] sm:text-[12px] md:text-[14px] 2xl:text-[22px]'>{unit.date}</p>
                                                <CiCalendarDate className="text-white text-sm 2xl:text-[22px]" />
                                            </div>
                                            <button className='w-full flex justify-center gap-1 items-center  rounded-2xl py-3 mx-auto bg-white text-[#E37C35]  hover:bg-[#E37C35] hover:text-white transition duration-200 mt-2'
                                                onClick={() => router.push(`/single-news-page/${unit.id}?title=${encodeURIComponent(unit.name)}&date=${encodeURIComponent(unit.date)}`)}>
                                                <p className='text-[8px] sm:text-[12px] md:text-[14px] font-semibold 2xl:text-[20px]'>اقرأ المزيد</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}


                <div className='flex items-center gap-2 justify-center md:justify-end px-15 mt-4'>
                    <button onClick={() => swiperRef.current?.slideNext()} className='rounded-full bg-[#E37C35] p-1 2xl:p-2 text-[16px] sm:text-[20px] 2xl:text-[28px] 2xl:w-12 2xl:h-12 text-white transition-all hover:bg-white hover:text-[#E37c35] duration-300'> <FiArrowLeft /></button>
                    <button onClick={() => swiperRef.current?.slidePrev()} className='rounded-full bg-[#E37C35] p-1 2xl:p-2 text-[16px] sm:text-[20px] 2xl:text-[28px] 2xl:w-12 2xl:h-12 text-white transition-all hover:bg-white hover:text-[#E37c35] duration-300'><FiArrowRight /></button>
                </div>
            </Swiper>


        </section>
    )

}

export default NewsEvents
