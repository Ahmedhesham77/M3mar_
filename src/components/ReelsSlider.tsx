import React, { useRef } from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaLongArrowAltRight } from "react-icons/fa";
import SwiperCore from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import slideData from '@/data/slideData';



const ReelsSlider = () => {
    const swiperRef = useRef<SwiperCore | null>(null);

    return (
        <div>

            <Swiper
                slidesPerView={4}
                spaceBetween={5}
                pagination={{ clickable: true }}
                breakpoints={{

                    320: { slidesPerView: 3, spaceBetween: 10 },
                    550: { slidesPerView: 4, spaceBetween: 10 },
                    1024: { slidesPerView: 4, spaceBetween: 20 },
                    1100: { slidesPerView: 5, spaceBetween: 10 },
                }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="mySwiper px-18"
            >
                {slideData.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full aspect-[2/3] rounded-lg md:rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden">
                            <div className="absolute rounded-4xl text-[9px] p-1 right-1 md:text-[14px] 2xl:text-[20px] bg-white top-1 sm:right-3 sm:top-3 z-10">
                                {slide.projectsCount}
                            </div>
                            <Image src={slide.imageSrc} alt={slide.city} fill className="object-cover" />
                        </div>
                        <div className="absolute z-10 bottom-0 text-white flex flex-row-reverse justify-between items-center w-full p-1 ">
                            <div className="flex flex-col gap-1">
                                <p className="text-[8px] sm:text-[10px] md:text-[10px] 2xl:text-[18px]">{slide.city}</p>
                                <p className="text-[8px] sm:text-[10px] md:text-[10px] 2xl:text-[18px]">{slide.date}</p>
                            </div>
                            <button className="w-6 h-6  lg:w-8 lg:h-8 xl:w-10 xl:h-10   2xl:w-12 2xl:h-12 flex items-center justify-center rounded-full bg-[#E37C35] text-white hover:bg-white hover:text-[#E37C35]">
                                <FaLongArrowAltRight className="text-[10px] sm:text-[10px] md:text-[12px] lg:text-[18px] 2xl:text-[28px] rotate-330" />
                            </button>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>
        </div>
    );
};

export default ReelsSlider;
