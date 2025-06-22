"use client";
import React, { useState } from 'react'
import Navbar from "../../components/NavBar"
import Fotter from '../../components/Footer'

import { FaPhoneAlt, FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { CiMail, CiPhone, CiUser } from 'react-icons/ci';
import PhoneInput from 'react-phone-input-2';



export default function OurProjects() {
    const [activeTab, setActiveTab] = useState<string>('contact');
    const handleClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <main className='w-full'>
            <Navbar />
            {/* Header*/}
            <section
                className="w-full flex flex-col justify-center min-h-[90vh] md:min-h-[85vh] overflow-hidden "
                style={{ backgroundImage: "url('/contctbg.png')" }}
            >
                <div className="flex items-center justify-center w-full">
                    <div className="text-center w-full sm:max-w-screen md:max-w-screen-xl px-4 py-4 mx-auto">
                        <h1 className="text-xl md:text-2xl xl:text-[40px] font-bold mb-4 drop-shadow-lg text-white">تواصل معنا</h1>
                        <p className="text-lg md:text-xl 2xl:text-[22px] text-white">

                            تعمل شرکة معمار للتطویر العقاري وإدارة المشروعات ﻋﻠﯽ تقدیم أفضل خدمات المقاولات التشیید والبناء
                        </p>

                        <div className="flex flex-col justify-center  gap-4 mt-6 mb-2 pt-6 pb-2 px-4 bg-white text-black md:max-w-[1236px] font-medium rounded-2xl w-full">


                            <div className="flex flex-col sm:flex-row-reverse  items-stretch gap-0 sm:gap-4 justify-around w-full border-b-3 border-gray-200 ">
                                <div className="flex flex-col justify-start gap-2 border-r-2 pr-4 border-gray-200 h-full min-h-[70px]">
                                    <div className="flex flex-row-reverse items-center gap-2">
                                        <FaPhoneAlt className="text-[20px] sm:text-[22px] md:text-[24px]" />
                                        <h3 className="text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px] text-black font-light">
                                            رقم الهاتف
                                        </h3>
                                    </div>
                                    <p className="text-[12px] sm:text-[14px] md:text-[16px ] xl:text-[18px] text-black font-light">
                                        9200 000 00
                                    </p>
                                </div>

                                <div className="flex flex-col justify-start gap-2 border-r-2 border-gray-200 pr-4 h-full min-h-[70px]">
                                    <div className="flex flex-row-reverse items-center gap-2">
                                        <MdEmail className="text-[20px] sm:text-[22px] md:text-[24px]" />
                                        <h3 className="text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px] text-black font-light">
                                            البريد الالكتروني
                                        </h3>
                                    </div>
                                    <a
                                        href="mailto:contact@creativeideas.com"
                                        className="text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px] text-[#333333] font-light hover:underline"
                                    >
                                        contact@creativeideas.com
                                    </a>
                                </div>

                                <div className="flex flex-col justify-start gap-2 border-r-2 border-gray-200 pr-4 h-full min-h-[70px]">
                                    <div className="flex flex-row-reverse items-center gap-2">
                                        <FaClock className="text-[20px] sm:text-[22px] md:text-[24px]" />
                                        <h3 className="text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px] text-black font-light">
                                            مواعيد العمل
                                        </h3>
                                    </div>
                                    <p className="text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px] text-[#333333] font-light">
                                        السبت: 9 صباحًا – 4 مساءً
                                    </p>
                                    <p className="text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px] text-[#333333] font-light">
                                        الأحد-الجمعة: 9 صباحًا – 6 مساءً
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-col  items-end gap-0 py-2 sm:gap-2  '>

                                <div className="flex flex-row-reverse justify-start  gap-2">
                                    <FaLocationDot className="text-[20px] sm:text-[22px] md:text-[24px]" />
                                    <h3 className="text-[12px] sm:text-[14px] md:text-[16px] text-black font-light">
                                        عناوين فروعنا
                                    </h3>

                                </div>
                                <p className="text-[12px] sm:text-[14px] md:text-[16px] text-[#333333] font-light">
                                    279 شارع التسعين الجنوبي – القطاع الثاني – التجمع الخامس - القاهرة                                </p>




                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* form */}
            <section className=' flex flex-col items-center justify-center  gap-4 mx-4 md:mx-8 lg:mx-25 bg-white mt-4'>
                <div className='flex flex-col justify-center items-center gap-2 text-end w-full mb-4 border-2 border-[#626262] rounded-2xl px-4 sm:px-[30px] md:px-[40px] py-4'>
                    <div className='flex flex-row-reverse justify-start gap-2 mb-4 border-b-1 border-[#817777] w-full pb-2'>
                        <button
                            onClick={() => handleClick('contact')}
                            className={`rounded-3xl cursor-pointer p-2 transition-colors duration-200 ${activeTab === 'contact'
                                ? 'bg-[#FCF2EB] text-[#E37C35]'
                                : 'bg-transparent text-black'
                                }`}
                        >
                            تواصل معانا
                        </button>

                        <button
                            onClick={() => handleClick('complaint')}
                            className={`rounded-3xl p-2 cursor-pointer transition-colors duration-200 ${activeTab === 'complaint'
                                ? 'bg-[#FCF2EB] text-[#E37C35]'
                                : 'bg-transparent text-black'
                                }`}
                        >
                            تقديم شكوى
                        </button>
                    </div>
                    <form className='w-full flex flex-col justify-start  gap-2 '>
                        <div className='flex flex-col justify-start  gap-2 mb-4'>
                            <h2 className='text-[18px] sm:text-[22px] md:text-[28px] xl:text-[32px] font-600 text-[#333333]'>
                                تواصل معانا الان   </h2>
                            <p className='text-[12px] sm:text-[14px] md:text-[18px] text-[#333333] font-400'>
                                تقدر تتواصل معانا في أي وقت، إحنا هنا دايمًا!
                            </p>
                        </div>


                        <div className='flex flex-col sm:flex-row-reverse gap-2 justify-center w-full mb-4'>
                            <div className='flex justify-end  gap-2 border-2 border-[#C3C3C3] rounded-2xl w-full p-2  '>
                                <input className='text-end ' type="text" placeholder='الاسم الكامل*' />
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
                                        fontSize: '14px',
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
                            <input type="email" placeholder='البريد الإلكتروني*' className='text-end ' />


                        </div>
                        <div className='flex flex-row-reverse gap-2 justify-start w-full border-2 border-[#C3C3C3] rounded-2xl p-2'>
                            <textarea placeholder='أكتب رسالتلك هنا..' className='w-full p-3  rounded-lg text-end resize-none ' />

                        </div>

                    </form>

                    <button className='rounded-2xl bg-[#E37C35] border text-white py-3 px-4 hover:bg-white  hover:border-[#E37c35] hover:text-[#E37C35] transition-all duration-300 self-end'>إرسال الرساله</button>

                </div>
            </section>
            <Fotter />
        </main >
    )
}



