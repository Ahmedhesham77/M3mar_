import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../app/globals.css';
import { FaLongArrowAltRight } from 'react-icons/fa';
import discoverProjectsData from '@/data/discoverProjects';

const DiscoverProjects = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-full py-8 bg-white'>
            <div className='flex flex-col justify-between items-center gap-2 w-full mb-8 px-4 sm:px-22'>
                <h1 className='text-[20px] xl:text-[25px] 2xl:text-[30px] sm:text-xl font-bold'>
                    استكشف مشاريع اخري
                </h1>
                <p className='text-[16px] xl:text-[20px] 2xl:text-[25px] sm:text-md text-center text-[#333333]'>
                    تعمل شرکة معمار للتطویر العقاري وإدارة المشروعات ﻋﻠﯽ تقدیم أفضل خدمات المقاولات التشیید والبناء
                </p>
            </div>

            <Swiper
                slidesPerView={4}
                spaceBetween={5}
                pagination={{ clickable: true }}
                breakpoints={{
                    320: { slidesPerView: 3, spaceBetween: 10 },
                    440: { slidesPerView: 4, spaceBetween: 10 },
                    640: { slidesPerView: 5, spaceBetween: 10 },
                    768: { slidesPerView: 5, spaceBetween: 20 },
                    1024: { slidesPerView: 5, spaceBetween: 20 },
                }}
                className="mySwiper px-18"
            >
                {discoverProjectsData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-40 sm:h-48 md:h-48 lg:h-74  2xl:h-130 rounded-lg overflow-hidden">
                            <div className="absolute rounded-4xl text-[8px] p-1 right-1.5 md:text-[14px] 2xl:text-[20px] bg-white top-2 sm:right-2 z-10">
                                {slide.projectsCount}
                            </div>
                            <Image src={slide.imageSrc} alt={slide.city} fill className="object-cover" />
                        </div>
                        <div className="absolute z-10 bottom-0 text-white flex flex-row-reverse justify-between w-full p-1 ">
                            <div className="flex flex-col gap-1">
                                <p className="text-[6px] md:text-[12px] xl:text-[16px] 2xl:text-[18px]">{slide.city}</p>
                                <p className="text-[4px] md:text-[10px] xl:text-[14px] 2xl:text-[16px]">{slide.date}</p>
                            </div>
                            <button className="w-4 sm:w-6 sm:h-6 md:w-8 h-4 md:h-8 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 flex items-center justify-center rounded-full bg-[#E37C35] text-white hover:bg-white hover:text-[#E37C35]">
                                <FaLongArrowAltRight className="text-[12px]  sm:text-[10px] md:text-[12px] 2xl:text-[28px] rotate-225" />
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default DiscoverProjects;
