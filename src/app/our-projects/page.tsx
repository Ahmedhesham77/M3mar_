"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Navbar from "../../components/NavBar"
import Fotter from '../../components/Footer'
import NewProject from '../../components/NewProject';
import Agents from '@/components/Agents';
import { projectUnits } from "../../data/newProjects";
import { agents } from "../../data/agents";
import { useRouter } from 'next/navigation';
export default function OurProjects() {
    const router = useRouter();

    const [activeFilter, setActiveFilter] = useState<string | null>(null);
    return (
        <main className='w-full'>
            <Navbar />
            {/* Header*/}
            <section
                className="w-full flex flex-col justify-center min-h-[90vh] md:min-h-[85vh] overflow-hidden "
                style={{ backgroundImage: "url('/OurProjectsHero.png')" }}
            >
                <div className="flex items-center justify-center w-full">
                    <div className="text-center w-full sm:max-w-screen md:max-w-screen-xl px-4 mx-auto">
                        <h1 className="text-xl md:text-4xl font-bold mb-4 drop-shadow-lg">مشاريعنا</h1>
                        <p className="text-lg md:text-xl drop-shadow-sm">
                            مشاريع تجاريه و سكنيه و طبيه<br />
                            اختيارك الاول دائما للتطوير و الاستثمار العقاري
                        </p>

                        <div className="flex flex-col justify-center items-center gap-4 mt-6 py-4 px-4 bg-white text-black font-medium rounded-2xl w-full">
                            <div className="flex flex-row-reverse gap-2 self-end">
                                <div className="relative w-6 h-6 sm:w-8 sm:h-8">
                                    <Image src="/filter.svg" alt="filter" fill />
                                </div>
                                <div className="flex flex-col gap-2 justify-start items-end">
                                    <p className="font-bold text-[12px] sm:text-[14px] md:text-[16px]">فلتر حسب</p>
                                    <p className="text-[10px] sm:text-[12px] md:text-[14px] text-[#333333]">
                                        يمكنك الفلتره حسب نوع المشروع او المدينه
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-row-reverse flex-wrap  gap-4 justify-around w-full ">
                                <div className="flex flex-col justify-end gap-2">
                                    <p className="text-[12px] sm:text-[14px] md:text-[16px] text-black font-light">اسم الوحدة</p>
                                    <input
                                        className="text-center p-1 w-[8rem] sm:w-[10rem] md:w-[12rem] rounded-2xl "
                                        type="text"
                                        placeholder="اكتب اسم الوحدة"
                                    />
                                </div>

                                <div className="flex flex-col justify-end gap-2">
                                    <label
                                        htmlFor="unit"
                                        className="text-[12px] sm:text-[14px] md:text-[16px] text-black font-light"
                                    >
                                        نوع المشروع
                                    </label>
                                    <select
                                        name="unit"
                                        id="unit"
                                        dir="rtl"
                                        className="text-center w-[6rem] sm:w-[10rem] md:w-[12rem] p-1 rounded-2xl"
                                    >
                                        <option value="all">الكل</option>
                                        <option value="residential">سكني</option>
                                        <option value="commercial">تجاري</option>
                                        <option value="medical">طبي</option>
                                    </select>
                                </div>

                                <div className="flex flex-col justify-end gap-2">
                                    <label
                                        htmlFor="city"
                                        className="text-[12px] sm:text-[14px] md:text-[16px] text-black font-light"
                                    >
                                        المدينه
                                    </label>
                                    <select
                                        name="city"
                                        id="city"
                                        dir="rtl"
                                        className="text-center w-[6rem] sm:w-[10rem] md:w-[12rem] p-1 rounded-2xl"
                                    >
                                        <option value="all">الكل</option>
                                        <option value="riyadh">الرياض</option>
                                        <option value="jeddah">جدة</option>
                                        <option value="dammam">الدمام</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-2 px-4 md:px-8 bg-white'>
                <div className={`flex flex-col items-end justify-between`}>
                    <div className='flex flex-col items-end text-start bg-white rounded-lg'>
                        <h2 className='text-lg sm:text-2xl font-bold mb-4'>احدث مشاريع معمار</h2>
                        <p className='text-gray-600 mb-6 text-end text-[12px] sm:text-md'>
                            تعمل شرکة معمار للتطویر العقاري وإدارة المشروعات ﻋﻠﯽ تقدیم أفضل خدمات المقاولات التشیید والبناء
                        </p>
                    </div>
                    <div className='flex flex-row-reverse gap-2 justify-end items-end mb-2'>
                        {["سكني", "تجاري", "طبي"].map((type) => (
                            <div
                                key={type}
                                onClick={() => setActiveFilter(type)}
                                className={`flex flex-row rounded-2xl py-1 px-3 transition-all duration-200 cursor-pointer border-2 ${activeFilter === type
                                    ? "bg-white text-[#E37C35] border-[#E37C35]"
                                    : "bg-[#F3F3F3] text-[#333333] border-transparent"
                                    }`}
                            >
                                <p className='text-[12px] sm:text-[14px] md:text-[16px]'>{type}</p>
                                <div className='relative w-6 h-6 sm:w-8 sm:h-8 '>
                                    <Image src="/buildings-2.svg" alt="filter" fill />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <NewProject units={projectUnits} unitsPerSlide={9} />
            </section>
            <section className='py-2 px-4 md:px-8 bg-white'>
                <div className='flex flex-row-reverse justify-between items-center w-full '>
                    <div className='flex-col gap-1'>
                        <h2 className='text-md sm:text-xl font-bold text-right'> قابل وكلائنا</h2>
                        <p className='text-xs sm:text-md text-right'> تعمل شرکة معمار للتطویر العقاري وإدارة المشروعات ﻋﻠﯽ تقدیم أفضل خدمات المقاولات التشیید والبناء</p>

                    </div>
                    <button
                        onClick={() => router.push('/meetOurAgents')}
                        className='rounded-3xl border-1 border-[#E37C35] text-[#E37C35] text-[8px] w-1/3 sm:text-[12px] md:w-1/6 py-2 px-3 hover:text-white hover:bg-[#E37C35] transition-all duration-300'
                    >
                        قابل وكلاء أكثر
                    </button>
                </div>
            </section>
            <Agents agents={agents} unitsPerSlide={3} />
            <Fotter />
        </main >
    )
}



