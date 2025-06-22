import React, { useRef } from 'react'
import { useRouter } from 'next/navigation'; // Next 13+ App Router
import Image from 'next/image'
import { CiCalendarDate } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
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
    units: {
        id: number;
        title: string;
        date: string;
        location: string;
        sold: boolean;
        img: string;
        link: string,
    }[];
}

const NewProject = ({


    unitsPerSlide = 6,
    units = [],
}: ReusableSectionProps) => {

    const router = useRouter();

    // ✅ تقسيم الوحدات حسب العدد المطلوب لكل شريحة
    const unitSlides = chunkArray(units, unitsPerSlide);
    const swiperRef = useRef<SwiperCore | null>(null);

    return (
        <section className=' bg-white'>



            <Swiper
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="mySwiper"
            >
                {unitSlides.map((unitsChunk, index) => (
                    <SwiperSlide key={index}>
                        <div className="grid-slider grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                            {unitsChunk.map((unit) => {
                                const isSold = unit.sold;

                                return (
                                    <div
                                        key={unit.id}
                                        className="flex flex-col gap-1"
                                        onClick={() => {
                                            router.push(
                                                `/${unit.link}/ID ${unit.id}?title=${encodeURIComponent(unit.title)}&date=${encodeURIComponent(unit.date)}&location=${encodeURIComponent(unit.location)}&UnitName=${encodeURIComponent(unit.title)}`
                                            );
                                        }}
                                    >
                                        <div className="relative w-full aspect-[385/391] rounded-xl overflow-hidden">
                                            <Image
                                                src={unit.img}
                                                alt={unit.title}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute rounded-2xl bottom-0 right-0 left-0 bg-black/40  z-10 flex flex-col justify-start p-3 m-2 sm:m-2 text-white">
                                                <div className="flex flex-row-reverse justify-between text-[12px]  xl:text-[20px] 2xl:text-[22px]">
                                                    <p>{unit.title}</p>
                                                    <div className="bg-[#E37C35] rounded-2xl px-2 py-1 text-[10px]  md:text-[12px] lg:text-[14px] 2xl:text-[16px] ">
                                                        رقم {unit.id}
                                                    </div>
                                                </div>
                                                <div className="flex items-center rounded-2xl border-1 border-white w-fit px-2 py-1 gap-1 mt-1 self-end text-[9px] sm:text-xs lg:text-[14px] xl:text-[16px]">
                                                    <p>{unit.date}</p>
                                                    <CiCalendarDate className="text-white text-sm" />
                                                </div>
                                                <div className="flex items-center rounded-2xl border-1 border-white w-fit px-2 py-1 gap-1 mt-1 self-end text-[9px] sm:text-xs lg:text-[14px] xl:text-[16px]">
                                                    <p>{unit.location}</p>
                                                    <FaLocationDot className="text-white text-sm" />
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            className={`w-full flex justify-center gap-1 items-center text-white rounded-4xl py-3 2xl:py-6 ${isSold ? "bg-[#C3C3C3]" : "bg-[#383191]"
                                                }`}
                                            disabled={isSold}
                                        >
                                            <p className="text-[12px] sm:text-[14px] lg:text-[18px] 2xl:text-[20px]">تواصل عبر الواتساب</p>
                                            <IoLogoWhatsapp className="text-[18px]  lg:text-[22px] 2xl:text-[30px]" />
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </SwiperSlide>
                ))}
                <div className='flex items-center gap-2 justify-center md:justify-end  mt-4'>
                    <button onClick={() => swiperRef.current?.slideNext()} className='rounded-full bg-[#E37C35] p-1 text-white text-[16px] flex justify-center items-center sm:text-[20px] lg:w-10 lg:h-10  2xl:text-[28px] 2xl:w-12 2xl:h-12 2xl:p-2  transition-all hover:bg-white hover:text-[#E37c35] duration-300'> <FiArrowLeft /></button>
                    <button onClick={() => swiperRef.current?.slidePrev()} className='rounded-full bg-[#E37C35] p-1 text-white text-[16px] flex justify-center items-center sm:text-[20px] lg:w-10 lg:h-10  2xl:text-[28px] 2xl:w-12 2xl:h-12 2xl:p-2  transition-all hover:bg-white hover:text-[#E37c35] duration-300'><FiArrowRight /></button>
                </div>
            </Swiper>
        </section>
    )
}

export default NewProject;
