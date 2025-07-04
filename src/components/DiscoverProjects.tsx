// أعلى الملف
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../app/globals.css';
import { FiArrowRight } from "react-icons/fi";
import discoverProjectsData from '@/data/discoverProjects';

// اضافة prop جديد
const DiscoverProjects = ({ onClickProject }: { onClickProject?: () => void }) => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-full py-8 bg-white'>
            {/* العنوان والنص */}
            <div className='flex flex-col justify-between items-center gap-2 w-full mb-8 px-4 sm:px-22'>
                <h1 className='text-[20px] sm:text-[24px] md:text-[28px] xl:text-[32px] 2xl:text-[34px]  font-600'>
                    استكشف مشاريع اخري
                </h1>
                <p className='text-[16px] xl:text-[18px] 2xl:text-[25px] sm:text-md text-center text-[#4C4C4C]'>
                    تعمل شرکة معمار للتطویر العقاري وإدارة المشروعات ﻋﻠﯽ تقدیم أفضل خدمات المقاولات التشیید والبناء
                </p>
            </div>

            {/* السلايدر */}
            <Swiper
                slidesPerView={5}
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
                        <div className="relative w-full aspect-[240/360] rounded-lg overflow-hidden">
                            <div className="absolute rounded-4xl text-[8px] p-1 right-1.5 md:text-[14px] xl:text[16px] 2xl:text-[20px] bg-white top-2 sm:right-2 z-10">
                                {slide.projectsCount}
                            </div>
                            <Image src={slide.imageSrc} alt={slide.city} fill className="object-cover" />
                        </div>
                        <div className="absolute z-10 bottom-0 text-white flex flex-row-reverse justify-between w-full p-1 ">
                            <div className="flex flex-col gap-0.5 p-1">
                                <p className="text-[7px] sm:text-[10px] md:text-[12px] xl:text-[16px] font-400 2xl:text-[18px]">{slide.city}</p>
                                <p className="text-[6px] sm:text-[8px] md:text-[10px] xl:text-[12px] font-400  2xl:text-[16px]">{slide.date}</p>
                            </div>

                            <button
                                onClick={onClickProject} // التفاعل المطلوب
                                className="w-6 h-6  lg:w-8 lg:h-8 xl:w-10 xl:h-10   2xl:w-12 2xl:h-12 flex items-center justify-center rounded-full bg-[#E37C35] text-white hover:bg-white hover:text-[#E37C35]"
                            >
                                <FiArrowRight className="text-[10px] sm:text-[10px] md:text-[12px] lg:text-[22px] 2xl:text-[284px] rotate-220" />
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default DiscoverProjects;
