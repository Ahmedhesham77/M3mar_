"use client";
import Image from 'next/image'
import React from 'react'
import Navbar from "../../components/NavBar"
import Fotter from '../../components/Footer'
import { IoIosArrowDown } from "react-icons/io";





export default function OurProjects() {

    return (
        <main className='w-full'>
            <Navbar />
            {/* Header*/}
            <section
                className="w-full flex flex-col justify-start min-h-[90vh] md:min-h-[85vh] overflow-hidden "
                style={{ backgroundImage: "url('/jobsbg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="flex items-start justify-center w-full">
                    <div className="text-center items-start w-full sm:max-w-screen md:max-w-screen-xl px-2 py-4 mt-18 mx-auto">
                        <h1 className="text-lg md:text-4xl xl:text-[40px] font-bold mb-4 drop-shadow-lg text-white">انضم إلى أحد رواد السوق في مصر</h1>
                        <p className="text-sm sm:text-lg md:text-xl 2xl:text-[22px]  text-white">

                            تعمل شرکة معمار للتطویر العقاري وإدارة المشروعات ﻋﻠﯽ تقدیم أفضل خدمات المقاولات التشیید والبناء
                        </p>


                    </div>
                </div>
            </section>

            {/* form */}
            <section className=' flex flex-col items-center justify-center  gap-4 mx-4 md:mx-8 lg:mx-25 bg-white mt-4'>
                <div className='flex flex-col justify-center items-center gap-2 text-end w-full mb-4 border-2 border-[#626262] rounded-2xl px-4 sm:px-[30px] md:px-[40px] py-4'>

                    <form className='w-full flex flex-col justify-start  gap-2 '>
                        <div className='flex flex-col justify-start  gap-2 mb-4'>
                            <h2 className='text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-600 text-[#333333]'>
                                تقديم الوظائف  </h2>
                            <p className='text-[12px] sm:text-[14px] md:text-[18px] text-[#4C4C4C] font-semibold'>
                                إذا كنت تبحث عن فرصة عمل، لا تتردد في التواصل معنا!                            </p>
                        </div>
                        <div className='flex flex-col justify-center gap-2 px-2 w-full'>
                            <div className="flex flex-col bg-[#EBEAF4] border-dashed border-2 border-[#383191] w-full items-center justify-center gap-2 py-6 rounded-xl">

                                <label
                                    htmlFor="cv-upload"
                                    className="cursor-pointer text-[#383191] text-sm font-medium hover:underline flex flex-col items-center justify-center gap-2"
                                >
                                    <Image src="/document-upload.svg" alt="upload" width={24} height={24} />
                                    رفع السيرة الذاتية (CV)
                                </label>
                                <input type="file" id="cv-upload" className="hidden" />
                                <p className='text-[#383191] text-center font-light text-[12px] md:text-[14px]'>تقدر تحمل ملف بصيغة PNG بحجم 1200*500 وبحد أقصى 5MB!</p>
                            </div>
                            <div className="relative w-full">
                                <select
                                    className="appearance-none text-end w-full border border-gray-300 rounded-md py-2 px-3 pr-10"
                                >
                                    <option>القسم</option>
                                    <option>هندسة</option>
                                    <option>محاسبة</option>
                                    <option>خدمة عملاء</option>
                                </select>

                                {/* السهم المخصص */}
                                <div className="pointer-events-none absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <IoIosArrowDown size={20} />
                                </div>
                            </div>
                            <div className="relative w-full">
                                <select
                                    className="appearance-none text-end w-full border border-gray-300 rounded-md py-2 px-3 pr-10"
                                >
                                    <option>القسم</option>
                                    <option>هندسة</option>
                                    <option>محاسبة</option>
                                    <option>خدمة عملاء</option>
                                </select>

                                {/* السهم المخصص */}
                                <div className="pointer-events-none absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <IoIosArrowDown size={20} />
                                </div>
                            </div>
                            <div className="relative w-full">
                                <select
                                    className="appearance-none text-end w-full border border-gray-300 rounded-md py-2 px-3 pr-10"
                                >
                                    <option>القسم</option>
                                    <option>هندسة</option>
                                    <option>محاسبة</option>
                                    <option>خدمة عملاء</option>
                                </select>

                                {/* السهم المخصص */}
                                <div className="pointer-events-none absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <IoIosArrowDown size={20} />
                                </div>
                            </div>
                        </div>


                    </form>

                    <button className='rounded-4xl text-[14px] md:text-[18px] bg-[#E37C35] border text-white py-3 px-4 hover:bg-white  hover:border-[#E37c35] hover:text-[#E37C35] transition-all duration-300 self-end'>إرسال الرساله</button>

                </div>
            </section>
            <Fotter />
        </main >
    )
}



