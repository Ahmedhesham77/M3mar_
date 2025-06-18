import React, { useRef } from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';

import { FiPhone } from "react-icons/fi";
import { PiHandbag } from "react-icons/pi";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import SwiperCore from "swiper";

const chunkArray = <T,>(arr: T[], size: number): T[][] => {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
};

interface ReusableSectionProps {
    unitsPerSlide?: number;
    agents: {
        id: number;
        name: string;
        jobTitle: string;
        sales: number;
        aria: number;
        img: string;
        phone: string,
        secondPhone: string,

    }[];
}
const Agents = ({
    unitsPerSlide = 6,
    agents = [],
}: ReusableSectionProps) => {
    const agentsSlides = chunkArray(agents, unitsPerSlide);
    const swiperRef = useRef<SwiperCore | null>(null);
    return (
        <div className='flex flex-col items-center justify-center w-full h-full  mb-4'>
            <Swiper
                slidesPerView={1} // فقط واحدة
                spaceBetween={10}
                pagination={{ clickable: true }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {agentsSlides.map((agentsChunk, index) => (
                    <SwiperSlide key={index}>
                        <div className="grid-slider  grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {agentsChunk.map((agent) => (
                                <div
                                    key={agent.id}
                                    className="flex flex-col lg:flex-row-reverse justify-between    2xl:h-60 rounded-xl border-2 border-[#D9D9D9] py-2 px-2"
                                >
                                    <div className="relative flex flex-col justify-center items-center gap-1">
                                        <Image
                                            alt="avatar"
                                            src={agent.img}
                                            width={0}
                                            height={0}
                                            className="w-15! 2xl:w-20! rounded-full  "
                                        />
                                        <p className="text-[#333333] text-[14px] 2xl:text-[24px]">{agent.name}</p>
                                        <div className="bg-[#333333] rounded-2xl text-[12px] md:text-[10px] 2xl:text-[18px] text-white py-1 px-2">
                                            {agent.jobTitle}
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-between py-2 gap-2 lg:w-2/3">
                                        <div className="flex flex-row-reverse justify-between w-full gap-2 text-[#333333] text-[12px]">
                                            <p className="text-[9px] md:text-[12px] 2xl:text-[20px] self-center">المبيعات الناجحة</p>
                                            <div className="flex flex-row-reverse gap-1">
                                                <p className="text-[12px] md:text-[16px] 2xl:text-[20px] font-medium">{agent.sales}+</p>
                                                <p className="text-[12px] md:text-[16px] 2xl:text-[20px] font-medium">عقار</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-row-reverse justify-between text-[#333333] text-[12px]">
                                            <p className="text-[9px] md:text-[12px] 2xl:text-[20px] self-center">مناطق التغطية</p>
                                            <div className="flex flex-row-reverse gap-1">
                                                <p className="text-[12px] md:text-[16px] 2xl:text-[20px] font-medium">{agent.aria}</p>
                                                <p className="text-[12px] md:text-[16px] 2xl:text-[20px] font-medium">مناطق</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col self-end gap-2 text-[#333333] text-[12px]">
                                            <p className='text-[12px] 2xl:text-[20px]'>طرق التواصل مع الوكيل</p>
                                            <div className="flex flex-row-reverse justify-center gap-1">
                                                <FiPhone className="text-[14px] 2xl:text-[20px] self-center" />
                                                <p className='text-[12px] 2xl:text-[20px]'>{agent.phone}</p>
                                            </div>
                                            <div className="flex flex-row-reverse justify-center gap-1">
                                                <PiHandbag className="text-[14px] 2xl:text-[20px] self-center" />
                                                <p className='text-[12px] 2xl:text-[20px]'>{agent.secondPhone}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex flex-row-reverse gap-3 mt-4 self-center md:self-end ">
                <button onClick={() => swiperRef.current?.slideNext()} className='rounded-full bg-[#E37C35] p-1 2xl:p-2 text-[16px] sm:text-[20px] 2xl:text-[28px] 2xl:w-12 2xl:h-12 text-white transition-all hover:bg-white hover:text-[#E37c35] duration-300'> <FiArrowRight /></button>
                <button onClick={() => swiperRef.current?.slidePrev()} className='rounded-full bg-[#E37C35] p-1 2xl:p-2 text-[16px] sm:text-[20px] 2xl:text-[28px] 2xl:w-12 2xl:h-12 text-white transition-all hover:bg-white hover:text-[#E37c35] duration-300'><FiArrowLeft /></button>
            </div>
        </div>







    )
}

export default Agents
