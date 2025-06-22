'use client'

import React, { useState } from 'react'


// Components
import Navbar from '@/components/NavBar'
import Fotter from '@/components/Footer'
import DIscriptionOfProject from '@/components/DIscriptionOfProject';
import CustomerOpinions from '@/components/CustomerOpinions';
import DiscoverProjects from '@/components/DiscoverProjects';
import ProjectPhases from '@/components/ProjectPhases';
import ProjectFeatures from '@/components/ProjectFeatures';
import UnitOfProjec from '@/components/UnitOfProjec';
import { projectUnits } from "../../../data/newProjects";

import { useSearchParams } from 'next/navigation'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { CiUser, CiPhone, CiMail } from "react-icons/ci";
import { GoDownload } from "react-icons/go";





import 'swiper/css';
import 'swiper/css/pagination';
import '../../globals.css';




export default function AboutProject() {

    const searchParams = useSearchParams();
    // const title = searchParams.get("title");
    // const date = searchParams.get("date");
    const location = searchParams.get("location");
    // const id = searchParams.get("id");

    const [activeFilter, setActiveFilter] = useState("وصف ومميزات و الخريطه المشروع");


    return (
        <>
            <Navbar />
            <main className='w-full bg-white'>
                <div className='w-full flex flex-col justify-center min-h-[90vh] md:min-h-[85vh] overflow-hidden ' style={{ backgroundImage: 'url(/projectDescriptionHero.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                </div>
                <div className='flex flex-row-reverse w-full justify-start items-start gap-2  px-4 md:px-8 mt-2 mb-8'>
                    <p className='text-[12px] sm:text-[14px] md:text-[16px] text-[#333333] font-semibold'> مشاريعنا</p>
                    <MdOutlineKeyboardArrowLeft className='text-[18px] text-[#333333] self-center ' />
                    <p className='text-[12px] sm:text-[14px] md:text-[16px] text-[#333333] font-semibold'> الوكلاء</p>
                </div>
                <section className=' flex flex-col items-center justify-center  gap-4 mx-4 md:mx-8 lg:mx-25 bg-white'>
                    <div className='flex flex-col justify-end items-end gap-3 w-full mb-4'>



                    </div>
                    <div className='flex flex-col justify-end items-end gap-3 w-full mb-4' >
                        <p className='text-[18px] sm:text-[22px] md:text-[24px] xl:text-[32px] 2xl:text-[34px] text-[#333333] font-bold'>
                            {location}
                        </p>
                        <p className='text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[28px] text-[#333333] font-light text-end   '>
                            تبدأ عملية إنشاء مشروع سكني بتخطيط دقيق يتضمن دراسة شاملة للموقع والتصميم المعماري. بعد ذلك، يتم تجهيز الأرض للبناء من خلال إزالة العوائق وتحديد الأساسات بشكل دقيق. تلي هذه المرحلة عملية البناء الفعلية، التي تشمل إنشاء الهيكل الخارجي وتوزيع المساحات الداخلية بشكل متوازن. بعد الانتهاء من الهيكل، تأتي مرحلة التشطيبات النهائية، حيث يتم تركيب النوافذ والأبواب والديكورات بعناية. أخيراً، يتم تسليم المشروع بعد التأكد من مطابقته للمواصفات والمعايير المطلوبة، مما يضمن جودة العمل ورضا العملاء.
                        </p>
                    </div>
                    <div className='w-full'>

                        <DiscoverProjects onClickProject={() => setActiveFilter("وحدات المشروع")} />
                    </div>



                    <div className='flex flex-col  md:flex-row-reverse w-full justify-end gap-2 mb-4 items-center '>
                        <div className="flex flex-col md:flex-row justify-end w-full mb-4 gap-2">

                            <div
                                onClick={() => setActiveFilter("وصف ومميزات و الخريطه المشروع")}
                                className={`flex flex-row rounded-4xl py-2 px-3 transition-all duration-200 cursor-pointer border-2 ${activeFilter === "وصف ومميزات و الخريطه المشروع"
                                    ? "bg-white text-[#E37C35] border-[#E37C35]"
                                    : "bg-[#F3F3F3] text-[#333333] border-transparent"
                                    }`}
                            >
                                <p className="text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px]">وصف ومميزات و الخريطه المشروع</p>
                            </div>

                            <div
                                onClick={() => setActiveFilter("مميزات المشروع")}
                                className={`flex flex-row rounded-2xl py-2 px-3 transition-all duration-200 cursor-pointer border-2 ${activeFilter === "مميزات المشروع"
                                    ? "bg-white text-[#E37C35] border-[#E37C35]"
                                    : "bg-[#F3F3F3] text-[#333333] border-transparent"
                                    }`}
                            >
                                <p className="text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px]">مميزات المشروع</p>
                            </div>

                            <div
                                onClick={() => setActiveFilter("مراحل المشروع")}
                                className={`flex flex-row rounded-2xl py-2 px-3 transition-all duration-200 cursor-pointer border-2 ${activeFilter === "مراحل المشروع"
                                    ? "bg-white text-[#E37C35] border-[#E37C35]"
                                    : "bg-[#F3F3F3] text-[#333333] border-transparent"
                                    }`}
                            >
                                <p className="text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px]">مراحل المشروع</p>
                            </div>

                            <div
                                onClick={() => setActiveFilter("وحدات المشروع")}
                                className={`flex flex-row rounded-2xl py-2 px-3 transition-all duration-200 cursor-pointer border-2 ${activeFilter === "وحدات المشروع"
                                    ? "bg-white text-[#E37C35] border-[#E37C35]"
                                    : "bg-[#F3F3F3] text-[#333333] border-transparent"
                                    }`}
                            >
                                <p className="text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px]">وحدات المشروع</p>
                            </div>


                        </div>
                        <div className='w-full sm:w-1/3 rounded-3xl bg-[#383191] py-2 px-3 text-white border hover:bg-white hover:text-[#383191] hover:border-[#383191] duration-300 flex flex-row-reverse justify-center gap-2 items-center  '>
                            <GoDownload className='text-[18px] sm:text-[20px] md:text-[22px] xl:text-[25px] 2xl:text-[30px] text-center' />
                            <p className='text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[22px] text-center font-500'>تنزيل البروشور</p>
                        </div>
                    </div>



                    {activeFilter === "وصف ومميزات و الخريطه المشروع" && <DIscriptionOfProject />}
                    {activeFilter === "وحدات المشروع" && <div className='w-full'><UnitOfProjec units={projectUnits} /></div>}
                    {activeFilter === "مميزات المشروع" && <ProjectFeatures />}
                    {activeFilter === "مراحل المشروع" && <ProjectPhases />}


                    <div className='flex flex-col justify-center items-center gap-2 text-end w-full mb-4 border-2 border-[#626262] rounded-2xl px-4 sm:px-[35] md:px-[40px] py-4'>
                        <form className='w-full flex flex-col justify-start  gap-2 '>
                            <div className='flex flex-col justify-start  gap-2 mb-4'>
                                <h2 className='text-[18px] sm:text-[20px] md:text-[22px] xl:text-[32px] 2xl:text-[34px] font-600 text-[#333333]'>
                                    احجز مكانك الان
                                </h2>
                                <p className='text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#4C4C4C] font-400'>
                                    تقدر تتواصل معانا في أي وقت، إحنا هنا دايمًا!
                                </p>
                            </div>


                            <div className='flex flex-col sm:flex-row-reverse gap-2 justify-center w-full mb-4'>
                                <div className='flex justify-end  gap-2 border-2 border-[#C3C3C3] rounded-2xl w-full p-2  '>
                                    <input className='text-end 2xl:text-[20px] ' type="text" placeholder='الاسم الكامل*' />
                                    <CiUser className='text-[#333333] text-[20px] sm:text-[22px] md:text-[24px] self-center' />
                                </div>
                                <div className='flex flex-row gap-2 border-2 border-[#C3C3C3] rounded-2xl w-full p-2 '>
                                    <PhoneInput
                                        inputStyle={{
                                            direction: 'rtl',
                                            width: '100%',
                                            border: 'none',
                                            outline: 'none',
                                            textAlign: 'right',
                                            fontSize: '18px',
                                            fontFamily: 'alexandria, sans-serif',
                                        }}

                                        dropdownStyle={{ direction: 'rtl' }}
                                        country={'eg'} // Egypt as default
                                        enableSearch
                                        placeholder="رقم الهاتف المحمول*"
                                        specialLabel=""

                                    />
                                    <CiPhone className='text-[#333333] text-[20px] sm:text-[22px] md:text-[24px] self-center' />
                                </div>


                            </div>

                            <div className='flex flex-row-reverse gap-2 justify-start  w-full  border-2 border-[#C3C3C3] rounded-2xl p-2'>
                                <CiMail className='text-[#333333] text-[20px] sm:text-[22px] md:text-[24px] self-center' />
                                <input type="email" placeholder='البريد الإلكتروني*' className='text-end 2xl:text-[20px]  ' />


                            </div>
                            <div className='flex flex-row-reverse gap-2 justify-start w-full border-2 border-[#C3C3C3] rounded-2xl p-2'>
                                <textarea placeholder='أكتب رسالتلك هنا..' className='w-full p-3  rounded-lg text-end resize-none 2xl:text-[20px]  ' />

                            </div>

                        </form>

                        <button className='rounded-4xl bg-[#E37C35] border 2xl:text-[25px] text-white py-3 px-4 hover:bg-white  hover:border-[#E37c35] hover:text-[#E37C35] transition-all duration-300 self-end'>إرسال الرساله</button>

                    </div>
                </section>
                <CustomerOpinions />
                <section className='mx-4 md:mx-8 lg:mx-25'>

                    <DiscoverProjects onClickProject={() => setActiveFilter("وحدات المشروع")} />
                </section>

            </main>
            <Fotter />
        </>
    )
}
