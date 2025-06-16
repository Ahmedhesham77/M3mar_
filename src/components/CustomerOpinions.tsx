import React, { useRef } from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';

import { FaPlay } from "react-icons/fa6";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import SwiperCore from "swiper";
const CustomerOpinions = () => {
    const swiperRef = useRef<SwiperCore | null>(null);
    return (
        <div className='flex flex-col items-center justify-center w-full h-full bg-[#EBEAF466] mt-25 px-4 md:px-25 py-2 '>
            <div className='flex flex-row-reverse justify-between items-center w-full mb-8'>
                <div className='flex-col gap-1'>
                    <h2 className='text-xl sm:text-2xl md:text-3xl 2xl:text-[36px] md:font-[600] text-[#333333] mb-4 font-bold text-right'>آراء العملاء</h2>
                    <p className=' text-sm  md:text-lg  2xl:text-[22px] font-[400] text-gray-700 mb-8 px-4 text-right'>  تعمل شرکة معمار للتطویر العقاري وإدارة المشروعات ﻋﻠﯽ تقدیم أفضل خدمات المقاولات التشیید والبناء </p>

                </div>
                <button className='rounded-3xl border-1 border-[#E37C35] text-[#E37C35]  text-[8px] w-1/3 sm:text-[12px]  md:w-1/6 py-2 px-3 2xl:text-[22px] hover:text-white hover:bg-[#E37C35] transition-all duration-300'> عرض المزيد</button>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}

                className="mySwiper"
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                <SwiperSlide>
                    <div className="relative w-full  h-40 sm:h-68  md:h-68 lg:h-78 2xl:h-150 rounded-lg overflow-hidden">
                        <Image src="/CustomerOpinion3.svg" alt="السادات" fill className="object-cover" />
                    </div>
                    <div className='absolute top-1 left-1 p-1 sm:p-2 bg-white/20 rounded-full z-11'>
                        <div className=' rounded-full text-center p-0.5 text-[10px] sm:text-[14px] sm:p-1 2xl:p-4 2xl:text-[22px] bg-white/70'>
                            <FaPlay className=' text-[#E37C35] ' />
                        </div>
                    </div>
                    <div className='flex flex-col items-end justify-end p-2 rounded-2xl absolute bg-black/40 inset-0 z-10 text-end'>
                        <p className='text-[8px] sm:text-[12px] lg:text-[14px] 2xl:text-[22px] text-white font-semibold'>رأي عملاءنا.. في تسلم 3 مشاريع</p>
                        <p className='text-[8px] sm:text-[10px] lg:text-[12px] 2xl:text-[20px] text-white font-light'>12 نوفمبر 2025 02:30 مساءً</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full  h-40 sm:h-68  md:h-68 lg:h-78 2xl:h-150 rounded-lg overflow-hidden">
                        <Image src="/CustomerOpinion2.svg" alt="السادات" fill className="object-cover" />
                    </div>
                    <div className='absolute top-1 left-1 p-1 sm:p-2 bg-white/20 rounded-full z-11'>
                        <div className=' rounded-full text-center p-0.5 text-[10px] sm:text-[14px] sm:p-1 2xl:p-4 2xl:text-[22px] bg-white/70'>
                            <FaPlay className=' text-[#E37C35] ' />
                        </div>
                    </div>
                    <div className='flex flex-col items-end justify-end p-2 rounded-2xl absolute bg-black/40 inset-0 z-10 text-end'>
                        <p className='text-[8px] sm:text-[12px] lg:text-[14px] 2xl:text-[22px] text-white font-semibold'>رأي عملاءنا.. في تسلم 3 مشاريع</p>
                        <p className='text-[8px] sm:text-[10px] lg:text-[12px] 2xl:text-[20px] text-white font-light'>12 نوفمبر 2025 02:30 مساءً</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative w-full h-40 sm:h-68 md:h-68 lg:h-78 2xl:h-150 rounded-lg overflow-hidden">
                        <Image src="/CustomerOpinion1.svg" alt="السادات" fill className="object-cover" />
                    </div>
                    <div className='absolute top-1 left-1 p-1 sm:p-2 bg-white/20 rounded-full z-11'>
                        <div className=' rounded-full text-center p-0.5 text-[10px] sm:text-[14px] sm:p-1 2xl:p-4 2xl:text-[22px] bg-white/70'>
                            <FaPlay className=' text-[#E37C35] ' />
                        </div>
                    </div>
                    <div className='flex flex-col items-end justify-end p-2 rounded-2xl absolute bg-black/40 inset-0 z-10 text-end'>
                        <p className='text-[8px] sm:text-[12px] lg:text-[14px] 2xl:text-[22px] text-white font-semibold'>رأي عملاءنا.. في تسلم 3 مشاريع</p>
                        <p className='text-[8px] sm:text-[10px] lg:text-[12px] 2xl:text-[20px] text-white font-light'>12 نوفمبر 2025 02:30 مساءً</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full  h-40 sm:h-68  md:h-68 lg:h-78 2xl:h-150 rounded-lg overflow-hidden">
                        <Image src="/CustomerOpinion3.svg" alt="السادات" fill className="object-cover" />
                    </div>
                    <div className='absolute top-1 left-1 p-1 sm:p-2 bg-white/20 rounded-full z-11'>
                        <div className=' rounded-full text-center p-0.5 text-[10px] sm:text-[14px] sm:p-1 2xl:p-4 2xl:text-[22px] bg-white/70'>
                            <FaPlay className=' text-[#E37C35] ' />
                        </div>
                    </div>
                    <div className='flex flex-col items-end justify-end p-2 rounded-2xl absolute bg-black/40 inset-0 z-10 text-end'>
                        <p className='text-[8px] sm:text-[12px] lg:text-[14px] 2xl:text-[22px] text-white font-semibold'>رأي عملاءنا.. في تسلم 3 مشاريع</p>
                        <p className='text-[8px] sm:text-[10px] lg:text-[12px] 2xl:text-[20px] text-white font-light'>12 نوفمبر 2025 02:30 مساءً</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full  h-40 sm:h-68  md:h-68 lg:h-78 2xl:h-150 rounded-lg overflow-hidden">
                        <Image src="/CustomerOpinion2.svg" alt="السادات" fill className="object-cover" />
                    </div>
                    <div className='absolute top-1 left-1 p-1 sm:p-2 bg-white/20 rounded-full z-11'>
                        <div className=' rounded-full text-center p-0.5 text-[10px] sm:text-[14px] sm:p-1 2xl:p-4 2xl:text-[22px] bg-white/70'>
                            <FaPlay className=' text-[#E37C35] ' />
                        </div>
                    </div>
                    <div className='flex flex-col items-end justify-end p-2 rounded-2xl absolute bg-black/40 inset-0 z-10 text-end'>
                        <p className='text-[8px] sm:text-[12px] lg:text-[14px] 2xl:text-[22px] text-white font-semibold'>رأي عملاءنا.. في تسلم 3 مشاريع</p>
                        <p className='text-[8px] sm:text-[10px] lg:text-[12px] 2xl:text-[20px] text-white font-light'>12 نوفمبر 2025 02:30 مساءً</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative w-full h-40 sm:h-68 md:h-68 lg:h-78 2xl:h-150 rounded-lg overflow-hidden">
                        <Image src="/CustomerOpinion1.svg" alt="السادات" fill className="object-cover" />
                    </div>
                    <div className='absolute top-1 left-1 p-1 sm:p-2 bg-white/20 rounded-full z-11'>
                        <div className=' rounded-full text-center p-0.5 text-[10px] sm:text-[14px] 2xl:p-4 2xl:text-[22px] sm:p-1 bg-white/70'>
                            <FaPlay className=' text-[#E37C35] ' />
                        </div>
                    </div>
                    <div className='flex flex-col items-end justify-end p-2 rounded-2xl absolute bg-black/40 inset-0 z-10 text-end'>
                        <p className='text-[8px] sm:text-[12px] lg:text-[14px] 2xl:text-[22px] text-white font-semibold'>رأي عملاءنا.. في تسلم 3 مشاريع</p>
                        <p className='text-[8px] sm:text-[10px] lg:text-[12px] 2xl:text-[20px] text-white font-light'>12 نوفمبر 2025 02:30 مساءً</p>
                    </div>
                </SwiperSlide>


            </Swiper>

            <div className="flex flex-row-reverse gap-3 mt-4 self-center md:self-end bg-white ">
                <button onClick={() => swiperRef.current?.slideNext()} className='rounded-full bg-[#E37C35] p-1 2xl:p-2 text-[16px] sm:text-[20px] 2xl:text-[28px] 2xl:w-12 2xl:h-12 text-white transition-all hover:bg-white hover:text-[#E37c35] duration-300'><FiArrowRight /></button>
                <button onClick={() => swiperRef.current?.slidePrev()} className='rounded-full bg-[#E37C35] p-1 2xl:p-2 text-[16px] sm:text-[20px] 2xl:text-[28px] 2xl:w-12 2xl:h-12 text-white transition-all hover:bg-white hover:text-[#E37c35] duration-300'><FiArrowLeft /></button>
            </div>
        </div>
    )
}

export default CustomerOpinions
