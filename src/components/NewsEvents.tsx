'use client';
import React, { useRef } from 'react'
import Image from 'next/image'
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
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4  ">
                            {unitChunk.map((unit) => (
                                <div key={unit.id} className='flex flex-col gap-1'>
                                    <div className="relative w-full aspect-[398/420] rounded-2xl sm:rounded-4xl overflow-hidden ">
                                        <Image src={unit.img} alt="مشروع" fill className="object-cover" />
                                        <div className="absolute   inset-0 bg-black/40  h-full  z-10 flex flex-col justify-end p-3 text-white">
                                            <div className="flex flex-row-reverse justify-between text-[9px] sm:text-[12px] md:text-[14px] font-500">
                                                <p className='text-[12px] sm:text-[14px] md:text-[16px] xl:text-[24px] 2xl:text-[26px]' >{unit.name}</p>
                                            </div>
                                            <div className="flex  items-center rounded-2xl  border-white w-fit px-2   gap-1 sm:mt-1 self-end ">

                                                <p className='text-[10px] sm:text-[12px] md:text-[14px] xl:text-[16px] 2xl:text-[20px] font-400'>{unit.date}</p>

                                            </div>
                                            <button className='w-full flex justify-center items-center  rounded-4xl py-2 sm:py-4 mx-auto bg-white text-[#E37C35]  hover:bg-[#E37C35] hover:text-white transition duration-200 mt-2'
                                                onClick={() => router.push(`/single-news-page/${unit.id}?title=${encodeURIComponent(unit.name)}&date=${encodeURIComponent(unit.date)}`)}>
                                                <p className='text-[10px] sm:text-[12px] md:text-[14px]  xl:text-[20px] font-500  '>اقرأ المزيد</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}


                <div className='flex items-center gap-2 justify-center md:justify-end px-15 mt-4'>
                    <button onClick={() => swiperRef.current?.slideNext()} className='rounded-full bg-[#E37C35] p-1 text-white text-[16px] flex justify-center items-center sm:text-[20px] lg:w-10 lg:h-10  2xl:text-[28px] 2xl:w-12 2xl:h-12 2xl:p-2  transition-all hover:bg-white hover:text-[#E37c35] duration-300'> < FiArrowLeft /></button>
                    <button onClick={() => swiperRef.current?.slidePrev()} className='rounded-full bg-[#E37C35] p-1 text-white text-[16px] flex justify-center items-center sm:text-[20px] lg:w-10 lg:h-10  2xl:text-[28px] 2xl:w-12 2xl:h-12 2xl:p-2  transition-all hover:bg-white hover:text-[#E37c35] duration-300'><FiArrowRight /></button>
                </div>
            </Swiper>


        </section>
    )

}

export default NewsEvents
