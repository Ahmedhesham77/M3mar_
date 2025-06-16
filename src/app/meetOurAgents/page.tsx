"use client";
import React from 'react'
import Image from 'next/image'
import Navbar from "../../components/NavBar"
import Fotter from '../../components/Footer'
import Agents from '@/components/Agents';
import { agents } from "../../data/agents";

export default function OurProjects() {



    return (
        <main className='w-full'>
            <Navbar />
            {/* Header*/}
            <section className="relative w-full flex flex-col justify-center min-h-[90vh] md:min-h-[85vh] overflow-hidden ">
                <Image
                    src="/meetOurAgentsbg.png"
                    alt="Hero Image"
                    fill
                    className=" object-cover"
                />
                <div className="flex items-center justify-center w-full">
                    <div className="text-center w-full sm:max-w-screen md:max-w-screen-xl px-4 mx-auto">
                        <h1 className="text-xl md:text-4xl font-bold mb-4 drop-shadow-lg text-white">قابل وكلائنا</h1>
                        <p className="text-lg md:text-xl drop-shadow-sm text-white">
                            تعمل شرکة معمار للاستثمار العقاري وإدارة المشروعات ﻋﻠﯽ تقدیم أفضل خدمات المقاولات التشیید والبناء
                        </p>


                    </div>
                </div>
            </section>


            <Agents agents={agents} unitsPerSlide={6} />
            <Fotter />
        </main >
    )
}



