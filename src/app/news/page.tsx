"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Navbar from "../../components/NavBar"
import Fotter from '../../components/Footer'
import NewsEvents from "@/components/NewsEvents";
import { news } from '@/data/news';


export default function OurProjects() {


    const [activeFilter, setActiveFilter] = useState<string | null>(null);

    return (
        <main className='w-full'>
            <Navbar />
            {/* Header*/}
            <section className="relative w-full flex flex-col justify-center min-h-[90vh] md:min-h-[85vh] overflow-hidden ">
                <Image
                    src="/newsbg.png"
                    alt="Hero Image"
                    fill
                    className=" object-cover"
                />
                <div className="flex items-center justify-center w-full">
                    <div className="text-center w-full sm:max-w-screen md:max-w-screen-xl px-4 mx-auto">
                        <h1 className="text-xl md:text-4xl font-bold mb-4 drop-shadow-lg text-white">الاخبار</h1>
                        <p className="text-lg md:text-xl drop-shadow-sm text-white">
                            تعمل شرکة معمار للاستثمار العقاري وإدارة المشروعات ﻋﻠﯽ تقدیم أفضل خدمات المقاولات التشیید والبناء
                        </p>


                    </div>
                </div>
            </section>
            <section className='py-2 px-4 md:px-8 bg-white'>
                <div className='flex flex-row gap-2 flex-wrap justify-end items-end mt-4 mb-6'>
                    {["مقالات", "فيديوهات", "الاحداث و الفعاليات", "احدث الاخبار"].map((type) => (
                        <div
                            key={type}
                            onClick={() => setActiveFilter(type)}
                            className={`flex flex-row rounded-2xl py-1 px-3 transition-all duration-200 cursor-pointer border-2 ${activeFilter === type
                                ? "bg-white text-[#E37C35] border-[#E37C35]"
                                : "bg-[#F3F3F3] text-[#333333] border-transparent"
                                }`}
                        >
                            <p className='text-[10px] sm:text-[12px] md:text-[14px]'>{type}</p>

                        </div>
                    ))}
                </div>
                <NewsEvents news={news} unitsPerSlide={9} />

            </section>


            <Fotter />
        </main >
    )
}



