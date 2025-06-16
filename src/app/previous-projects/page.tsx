"use client";
import React from 'react'
import Image from 'next/image'
import Navbar from "../../components/NavBar"
import Fotter from '../../components/Footer'
import NewProject from '../../components/NewProject';
import Agents from '@/components/Agents';
import { previousUnits } from "../../data/previousunit";
import { agents } from "../../data/agents";

export default function OurProjects() {



    return (
        <main className='w-full'>
            <Navbar />
            {/* Header*/}
            <section className="relative w-full flex flex-col justify-center min-h-[90vh] md:min-h-[85vh] overflow-hidden ">
                <Image
                    src="/previous-projectbg.png"
                    alt="Hero Image"
                    fill
                    className=" object-cover"
                />
                <div className="flex items-center justify-center w-full">
                    <div className="text-center w-full sm:max-w-screen md:max-w-screen-xl px-4 mx-auto">
                        <h1 className="text-xl md:text-4xl font-bold mb-4 drop-shadow-lg text-white">المشروعات السابقه</h1>
                        <p className="text-lg md:text-xl drop-shadow-sm text-white">
                            تعمل شرکة معمار للاستثمار العقاري وإدارة المشروعات ﻋﻠﯽ تقدیم أفضل خدمات المقاولات التشیید والبناء
                        </p>


                    </div>
                </div>
            </section>
            <section className='py-12 flex flex-col gap-3 px-4 md:px-8 bg-white'>
                <div className='flex flex-col gap-2 text-end'>
                    <h1 className='text-[18px] sm:text-[20px] md:text-[22px] text-black font-bold '>
                        مشروعاتنا السابقه
                    </h1>
                    <p className='text-[14px] sm:text-[16px] md:text-[18px] text-[#333333] font-light'>
                        تبدأ عملية إنشاء مشروع سكني بتخطيط دقيق يتضمن دراسة شاملة للموقع والتصميم المعماري. بعد ذلك، يتم تجهيز الأرض للبناء من خلال إزالة العوائق وتحديد الأساسات بشكل دقيق. تلي هذه المرحلة عملية البناء الفعلية، التي تشمل إنشاء الهيكل الخارجي وتوزيع المساحات الداخلية بشكل متوازن. بعد الانتهاء من الهيكل، تأتي مرحلة التشطيبات النهائية، حيث يتم تركيب النوافذ والأبواب والديكورات بعناية. أخيراً، يتم تسليم المشروع بعد التأكد من مطابقته للمواصفات والمعايير المطلوبة، مما يضمن جودة العمل ورضا العملاء.
                    </p>
                </div>
                <NewProject
                    units={previousUnits}
                    unitsPerSlide={9}
                />

            </section>

            <Agents agents={agents} unitsPerSlide={3} />
            <Fotter />
        </main >
    )
}



