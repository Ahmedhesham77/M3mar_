
import React, { useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { CiCalendarDate } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

import "swiper/css";
import "./style.css";

const UnitOfProjec = () => {
    const router = useRouter();
    const goToProject = (e: React.MouseEvent<HTMLDivElement>) => {
        const id = e.currentTarget.dataset.id;
        const name = e.currentTarget.dataset.name;

        if (id && name) {
            router.push(`/unit-page/${id}?UnitName=${encodeURIComponent(name)}`)
        }
    };
    const swiperRef = useRef<SwiperCore | null>(null);
    return (
        <section className='py-12 px-4 md:px-8 bg-white w-full'>
            <div className='flex flex-row-reverse  items-baseline justify-center   '>
                <div className='flex flex-col justify-center items-center text-center  bg-white rounded-lg '>
                    <h2 className=' text-lg sm:text-2xl font-bold mb-4'>وحدات المشروع</h2>
                    <p className='text-gray-600 mb-6 text-cener text-[12px] sm:text-md'>تعمل شرکة معمار للتطویر العقاري وإدارة المشروعات ﻋﻠﯽ تقدیم أفضل خدمات المقاولات التشیید والبناء</p>

                </div>

            </div>
            {/* grid system  */}
            <Swiper
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}

                className="mySwiper">
                <SwiperSlide>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-2 md:px-16 ">

                        <div onClick={goToProject}
                            className="flex flex-col gap-1 cursor-pointer"
                            data-id="1"
                            data-name="مشروع الاندلس"
                        >
                            <div className="relative w-full h-48 md:h-78 rounded-xl overflow-hidden ">
                                <Image src="/elandlus.svg" alt="مشروع" fill className="object-cover" />
                                <div className="absolute rounded-2xl bottom-0 right-0 left-0 bg-black/40 h-fit  z-10 flex flex-col justify-start p-3 text-white">
                                    <div className="flex flex-row-reverse justify-between text-[9px] sm:text-[12px]">
                                        <p >مشروع الاندلس</p>
                                        <div className="bg-[#E37C35] rounded-2xl px-2 py-1 text-[7px] sm:text-[10px]">رقم 452</div>
                                    </div>
                                    <div className="flex  items-center rounded-2xl border-1 border-white w-fit px-2 py-1 gap-1 mt-1 self-end text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <CiCalendarDate className="text-white text-sm" />
                                    </div>
                                    <div className="flex  items-center rounded-2xl border-1 border-white w-fit px-2 py-1 gap-1 mt-1 self-end  text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <FaLocationDot className="text-white text-sm" />
                                    </div>
                                </div>


                            </div>

                            <button className='w-full flex justify-center gap-1 items-center text-white rounded-2xl py-1 bg-[#383191]'>
                                <p className='text-[8px] sm:text-[12px]'>تواصل عبر الواتساب</p>
                                <IoLogoWhatsapp className=' text-[12px] sm:text-[18px] text-white' />
                            </button>
                        </div>



                        <div onClick={goToProject}
                            className="flex flex-col gap-1 cursor-pointer"
                            data-id="2"
                            data-name="مشروع الاندلس"
                        >
                            <div className="relative w-full h-48 md:h-78 rounded-xl overflow-hidden ">
                                <Image src="/elandlus.svg" alt="مشروع" fill className="object-cover" />
                                <div className="absolute rounded-2xl bottom-0 right-0 left-0 bg-black/40 h-fit  z-10 flex flex-col justify-start p-3 text-white">
                                    <div className="flex flex-row-reverse justify-between text-[9px] sm:text-[12px]">
                                        <p >مشروع الاندلس</p>
                                        <div className="bg-[#E37C35] rounded-2xl px-2 py-1 text-[7px] sm:text-[10px]">رقم 452</div>
                                    </div>
                                    <div className="flex  items-center rounded-2xl border-1 border-white w-fit px-2 py-1 gap-1 mt-1 self-end text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <CiCalendarDate className="text-white text-sm" />
                                    </div>
                                    <div className="flex  items-center rounded-2xl border-1 border-white w-fit px-2 py-1 gap-1 mt-1 self-end  text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <FaLocationDot className="text-white text-sm" />
                                    </div>
                                </div>


                            </div>

                            <button className='w-full flex justify-center gap-1 items-center text-white rounded-2xl py-1 bg-[#383191]'>
                                <p className='text-[8px] sm:text-[12px]'>تواصل عبر الواتساب</p>
                                <IoLogoWhatsapp className=' text-[12px] sm:text-[18px] text-white' />
                            </button>
                        </div>

                        {/* عنصر 3 */}
                        <div onClick={goToProject}
                            className="flex flex-col gap-1 cursor-pointer"
                            data-id="3"
                            data-name="مشروع الاندلس"

                        >
                            <div className="relative w-full h-48 md:h-78 rounded-xl overflow-hidden ">
                                <Image src="/elandlus.svg" alt="مشروع" fill className="object-cover" />
                                <div className="absolute rounded-2xl bottom-0 right-0 left-0 bg-black/40 h-fit  z-10 flex flex-col justify-start p-3 text-white">
                                    <div className="flex flex-row-reverse justify-between text-[9px] sm:text-[12px]">
                                        <p >مشروع الاندلس</p>
                                        <div className="bg-[#E37C35] rounded-2xl px-2 py-1 text-[7px] sm:text-[10px]">رقم 452</div>
                                    </div>
                                    <div className="flex  items-center rounded-2xl border-1 border-white w-fit px-2 py-1 gap-1 mt-1 self-end text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <CiCalendarDate className="text-white text-sm" />
                                    </div>
                                    <div className="flex  items-center rounded-2xl border-1 border-white w-fit px-2 py-1 gap-1 mt-1 self-end  text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <FaLocationDot className="text-white text-sm" />
                                    </div>
                                </div>


                            </div>

                            <button className='w-full flex justify-center gap-1 items-center text-white rounded-2xl py-1 bg-[#383191]'>
                                <p className='text-[8px] sm:text-[12px]'>تواصل عبر الواتساب</p>
                                <IoLogoWhatsapp className=' text-[12px] sm:text-[18px] text-white' />
                            </button>
                        </div>

                        {/* عنصر 4 */}
                        <div onClick={goToProject}
                            className="flex flex-col gap-1 cursor-pointer"
                            data-id="4"
                            data-name="مشروع الاندلس"

                        >
                            <div className="relative w-full h-48 md:h-78 rounded-xl overflow-hidden ">
                                <Image src="/elandlus.svg" alt="مشروع" fill className="object-cover" />
                                <div className="absolute rounded-2xl bottom-0 right-0 left-0 bg-black/40 h-fit  z-10 flex flex-col justify-start p-3 text-white">
                                    <div className="flex flex-row-reverse justify-between text-[9px] sm:text-[12px]">
                                        <p >مشروع الاندلس</p>
                                        <div className="bg-[#E37C35] rounded-2xl px-2 py-1 text-[7px] sm:text-[10px]">رقم 452</div>
                                    </div>
                                    <div className="flex  items-center rounded-2xl border-1 border-white w-fit px-2 py-1 gap-1 mt-1 self-end text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <CiCalendarDate className="text-white text-sm" />
                                    </div>
                                    <div className="flex  items-center rounded-2xl border-1 border-white w-fit px-2 py-1 gap-1 mt-1 self-end  text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <FaLocationDot className="text-white text-sm" />
                                    </div>
                                </div>


                            </div>

                            <button className='w-full flex justify-center gap-1 items-center text-white rounded-2xl py-1 bg-[#383191]'>
                                <p className='text-[8px] sm:text-[12px]'>تواصل عبر الواتساب</p>
                                <IoLogoWhatsapp className=' text-[12px] sm:text-[18px] text-white' />
                            </button>
                        </div>

                        {/* عنصر 5 */}
                        <div onClick={goToProject}
                            className="flex flex-col gap-1 cursor-pointer"
                            data-id="5"
                            data-name="مشروع الاندلس"

                        >
                            <div className="relative w-full h-48 md:h-78 rounded-xl overflow-hidden ">
                                <Image src="/elandlus.svg" alt="مشروع" fill className="object-cover" />
                                <div className="absolute rounded-2xl bottom-0 right-0 left-0 bg-black/40 h-fit  z-10 flex flex-col justify-start p-3 text-white">
                                    <div className="flex flex-row-reverse justify-between text-[9px] sm:text-[12px]">
                                        <p >مشروع الاندلس</p>
                                        <div className="bg-[#E37C35] rounded-2xl px-2 py-1 text-[7px] sm:text-[10px]">رقم 452</div>
                                    </div>
                                    <div className="flex  items-center rounded-2xl border-1 border-white w-fit px-2 py-1 gap-1 mt-1 self-end text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <CiCalendarDate className="text-white text-sm" />
                                    </div>
                                    <div className="flex  items-center rounded-2xl border-1 border-white w-fit px-2 py-1 gap-1 mt-1 self-end  text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <FaLocationDot className="text-white text-sm" />
                                    </div>
                                </div>


                            </div>

                            <button className='w-full flex justify-center gap-1 items-center text-white rounded-2xl py-1 bg-[#383191]'>
                                <p className='text-[8px] sm:text-[12px]'>تواصل عبر الواتساب</p>
                                <IoLogoWhatsapp className=' text-[12px] sm:text-[18px] text-white' />
                            </button>
                        </div>

                        {/* عنصر 6 */}
                        <div onClick={goToProject}
                            className="flex flex-col gap-1 cursor-pointer"
                            data-id="6"
                            data-name="مشروع الاندلس"

                        >
                            <div className="relative w-full h-48 md:h-78 rounded-xl overflow-hidden ">
                                <Image src="/elandlus.svg" alt="مشروع" fill className="object-cover" />
                                <div className="absolute rounded-2xl bottom-0 right-0 left-0 bg-black/40 h-fit  z-10 flex flex-col justify-start p-3 text-white">
                                    <div className="flex flex-row-reverse justify-between text-[9px] sm:text-[12px]">
                                        <p >مشروع الاندلس</p>
                                        <div className="bg-[#E37C35] rounded-2xl px-2 py-1 text-[7px] sm:text-[10px]">رقم 452</div>
                                    </div>
                                    <div className="flex  items-center rounded-2xl border-1 border-white w-fit px-2 py-1 gap-1 mt-1 self-end text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <CiCalendarDate className="text-white text-sm" />
                                    </div>
                                    <div className="flex  items-center rounded-2xl border-1 border-white w-fit px-2 py-1 gap-1 mt-1 self-end  text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <FaLocationDot className="text-white text-sm" />
                                    </div>
                                </div>


                            </div>

                            <button className='w-full flex justify-center gap-1 items-center text-white rounded-2xl py-1 bg-[#383191]'>
                                <p className='text-[8px] sm:text-[12px]'>تواصل عبر الواتساب</p>
                                <IoLogoWhatsapp className=' text-[12px] sm:text-[18px] text-white' />
                            </button>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-2 md:px-16 ">
                        {/* عنصر 1 */}
                        <div onClick={goToProject}
                            className="flex flex-col gap-1 cursor-pointer"
                            data-id="7"
                            data-name="مشروع الاندلس"

                        >
                            <div className="relative w-full h-48 md:h-78 rounded-xl overflow-hidden ">
                                <Image src="/elandlus.svg" alt="مشروع" fill className="object-cover" />
                                <div className="absolute rounded-2xl bottom-0 right-0 left-0 bg-black/40 h-fit  z-10 flex flex-col justify-start p-3 text-white">
                                    <div className="flex flex-row-reverse justify-between text-[9px] sm:text-[12px]">
                                        <p >مشروع الاندلس</p>
                                        <div className="bg-[#E37C35] rounded-2xl px-2 py-1 text-[7px] sm:text-[10px]">رقم 452</div>
                                    </div>
                                    <div className="flex  items-center rounded-2xl border-1 border-white w-fit px-2 py-1 gap-1 mt-1 self-end text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <CiCalendarDate className="text-white text-sm" />
                                    </div>
                                    <div className="flex  items-center rounded-2xl border-1 border-white w-fit px-2 py-1 gap-1 mt-1 self-end  text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <FaLocationDot className="text-white text-sm" />
                                    </div>
                                </div>


                            </div>

                            <button className='w-full flex justify-center gap-1 items-center text-white rounded-2xl py-1 bg-[#383191]'>
                                <p className='text-[8px] sm:text-[12px]'>تواصل عبر الواتساب</p>
                                <IoLogoWhatsapp className=' text-[12px] sm:text-[18px] text-white' />
                            </button>
                        </div>


                        {/* عنصر 2 */}
                        <div onClick={goToProject}
                            className="flex flex-col gap-1 cursor-pointer"
                            data-id="8"
                            data-name="مشروع الاندلس"

                        >
                            <div className="relative w-full h-48 md:h-78 rounded-xl overflow-hidden ">
                                <Image src="/elandlus.svg" alt="مشروع" fill className="object-cover" />
                                <div className="absolute rounded-2xl bottom-0 right-0 left-0 bg-black/40 h-fit  z-10 flex flex-col justify-start p-3 text-white">
                                    <div className="flex flex-row-reverse justify-between text-[9px] sm:text-[12px]">
                                        <p >مشروع الاندلس</p>
                                        <div className="bg-[#E37C35] rounded-2xl px-2 py-1 text-[7px] sm:text-[10px]">رقم 452</div>
                                    </div>
                                    <div className="flex  items-center rounded-2xl border-1 border-white w-fit px-2 py-1 gap-1 mt-1 self-end text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <CiCalendarDate className="text-white text-sm" />
                                    </div>
                                    <div className="flex  items-center rounded-2xl border-1 border-white w-fit px-2 py-1 gap-1 mt-1 self-end  text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <FaLocationDot className="text-white text-sm" />
                                    </div>
                                </div>


                            </div>

                            <button className='w-full flex justify-center gap-1 items-center text-white rounded-2xl py-1 bg-[#383191]'>
                                <p className='text-[8px] sm:text-[12px]'>تواصل عبر الواتساب</p>
                                <IoLogoWhatsapp className=' text-[12px] sm:text-[18px] text-white' />
                            </button>
                        </div>

                        {/* عنصر 3 */}
                        <div onClick={goToProject}
                            className="flex flex-col gap-1 cursor-pointer"
                            data-id="9"
                            data-name="مشروع الاندلس"

                        >
                            <div className="relative w-full h-48 md:h-78 rounded-xl overflow-hidden ">
                                <Image src="/elandlus.svg" alt="مشروع" fill className="object-cover" />
                                <div className="absolute rounded-2xl bottom-0 right-0 left-0 bg-black/40 h-fit  z-10 flex flex-col justify-start p-3 text-white">
                                    <div className="flex flex-row-reverse justify-between text-[9px] sm:text-[12px]">
                                        <p >مشروع الاندلس</p>
                                        <div className="bg-[#E37C35] rounded-2xl px-2 py-1 text-[7px] sm:text-[10px]">رقم 452</div>
                                    </div>
                                    <div className="flex  items-center rounded-2xl border-1 border-white w-fit px-2 py-1 gap-1 mt-1 self-end text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <CiCalendarDate className="text-white text-sm" />
                                    </div>
                                    <div className="flex  items-center rounded-2xl border-1 border-white w-fit px-2 py-1 gap-1 mt-1 self-end  text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <FaLocationDot className="text-white text-sm" />
                                    </div>
                                </div>


                            </div>

                            <button className='w-full flex justify-center gap-1 items-center text-white rounded-2xl py-1 bg-[#383191]'>
                                <p className='text-[8px] sm:text-[12px]'>تواصل عبر الواتساب</p>
                                <IoLogoWhatsapp className=' text-[12px] sm:text-[18px] text-white' />
                            </button>
                        </div>

                        {/* عنصر 4 */}
                        <div onClick={goToProject}
                            className="flex flex-col gap-1 cursor-pointer"
                            data-id="10"
                            data-name="مشروع الاندلس"

                        >
                            <div className="relative w-full h-48 md:h-78 rounded-xl overflow-hidden ">
                                <Image src="/elandlus.svg" alt="مشروع" fill className="object-cover" />
                                <div className="absolute rounded-2xl bottom-0 right-0 left-0 bg-black/40 h-fit  z-10 flex flex-col justify-start p-3 text-white">
                                    <div className="flex flex-row-reverse justify-between text-[9px] sm:text-[12px]">
                                        <p >مشروع الاندلس</p>
                                        <div className="bg-[#E37C35] rounded-2xl px-2 py-1 text-[7px] sm:text-[10px]">رقم 452</div>
                                    </div>
                                    <div className="flex  items-center rounded-2xl border-1 border-white w-fit px-2 py-1 gap-1 mt-1 self-end text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <CiCalendarDate className="text-white text-sm" />
                                    </div>
                                    <div className="flex  items-center rounded-2xl border-1 border-white w-fit px-2 py-1 gap-1 mt-1 self-end  text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <FaLocationDot className="text-white text-sm" />
                                    </div>
                                </div>


                            </div>

                            <button className='w-full flex justify-center gap-1 items-center text-white rounded-2xl py-1 bg-[#383191]'>
                                <p className='text-[8px] sm:text-[12px]'>تواصل عبر الواتساب</p>
                                <IoLogoWhatsapp className=' text-[12px] sm:text-[18px] text-white' />
                            </button>
                        </div>

                        {/* عنصر 5 */}
                        <div onClick={goToProject}
                            className="flex flex-col gap-1 cursor-pointer"
                            data-id="11"
                            data-name="مشروع الاندلس"

                        >
                            <div className="relative w-full h-48 md:h-78 rounded-xl overflow-hidden ">
                                <Image src="/elandlus.svg" alt="مشروع" fill className="object-cover" />
                                <div className="absolute rounded-2xl bottom-0 right-0 left-0 bg-black/40 h-fit  z-10 flex flex-col justify-start p-3 text-white">
                                    <div className="flex flex-row-reverse justify-between text-[9px] sm:text-[12px]">
                                        <p >مشروع الاندلس</p>
                                        <div className="bg-[#E37C35] rounded-2xl px-2 py-1 text-[7px] sm:text-[10px]">رقم 452</div>
                                    </div>
                                    <div className="flex  items-center rounded-2xl border-1 border-white w-fit px-2 py-1 gap-1 mt-1 self-end text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <CiCalendarDate className="text-white text-sm" />
                                    </div>
                                    <div className="flex  items-center rounded-2xl border-1 border-white w-fit px-2 py-1 gap-1 mt-1 self-end  text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <FaLocationDot className="text-white text-sm" />
                                    </div>
                                </div>


                            </div>

                            <button className='w-full flex justify-center gap-1 items-center text-white rounded-2xl py-1 bg-[#383191]'>
                                <p className='text-[8px] sm:text-[12px]'>تواصل عبر الواتساب</p>
                                <IoLogoWhatsapp className=' text-[12px] sm:text-[18px] text-white' />
                            </button>
                        </div>

                        {/* عنصر 6 */}
                        <div onClick={goToProject}
                            className="flex flex-col gap-1 cursor-pointer"
                            data-id="12"
                            data-name="مشروع الاندلس"

                        >
                            <div className="relative w-full h-48 md:h-78 rounded-xl overflow-hidden ">
                                <Image src="/elandlus.svg" alt="مشروع" fill className="object-cover" />
                                <div className="absolute rounded-2xl bottom-0 right-0 left-0 bg-black/40 h-fit  z-10 flex flex-col justify-start p-3 text-white">
                                    <div className="flex flex-row-reverse justify-between text-[9px] sm:text-[12px]">
                                        <p >مشروع الاندلس</p>
                                        <div className="bg-[#E37C35] rounded-2xl px-2 py-1 text-[7px] sm:text-[10px]">رقم 452</div>
                                    </div>
                                    <div className="flex  items-center rounded-2xl border-1 border-white w-fit px-2 py-1 gap-1 mt-1 self-end text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <CiCalendarDate className="text-white text-sm" />
                                    </div>
                                    <div className="flex  items-center rounded-2xl border-1 border-white w-fit px-2 py-1 gap-1 mt-1 self-end  text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <FaLocationDot className="text-white text-sm" />
                                    </div>
                                </div>


                            </div>

                            <button className='w-full flex justify-center gap-1 items-center text-white rounded-2xl py-1 bg-[#383191]'>
                                <p className='text-[8px] sm:text-[12px]'>تواصل عبر الواتساب</p>
                                <IoLogoWhatsapp className=' text-[12px] sm:text-[18px] text-white' />
                            </button>
                        </div>

                    </div>
                </SwiperSlide>
                <div className='flex items-center gap-2 justify-center md:justify-end px-15 mt-4'>
                    <button onClick={() => swiperRef.current?.slidePrev()} className='rounded-full bg-[#E37C35] p-1 text-[16px] sm:text-[20px] text-white transition-all hover:bg-white hover:text-[#E37c35] duration-300'><FiArrowLeft /></button>
                    <button onClick={() => swiperRef.current?.slideNext()} className='rounded-full bg-[#E37C35] p-1 text-[16px] sm:text-[20px] text-white transition-all hover:bg-white hover:text-[#E37c35] duration-300'><FiArrowRight /></button>
                </div>
            </Swiper>


        </section>
    )
}

export default UnitOfProjec
