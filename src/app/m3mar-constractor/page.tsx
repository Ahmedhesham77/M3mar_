// app/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/NavBar";
import NewsEvents from "@/components/NewsEvents";
import Footer from "@/components/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
// import LiteYouTubeEmbed from "react-lite-youtube-embed";
import SwiperCore from "swiper";
import { FaLongArrowAltRight } from "react-icons/fa";


import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import 'swiper/css';
import 'swiper/css/pagination';
import '../globals.css';
import { news } from "@/data/news";

// import required modules




export default function HomePage() {
    const videos = [
        'ZgxsmWBfkUw',
        'CY2xW48uqDo',
        'SWSbBMEddOw',
        'MTkW0r-belQ',
        'SrG6AdX450I',
        'm8BraL_nvIs',
    ];
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    const [loading, setLoading] = useState(true);
    const swiperRef = useRef<SwiperCore | null>(null);

    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <SplashScreen />;
    }

    return (
        <>
            <Navbar />

            <main>
                {/* Header*/}
                <section className="relative w-full min-h-[90vh] md:min-h-[85vh] overflow-hidden">
                    <Image
                        src="/m3mar-contractorbg.png"
                        alt="Hero Image"
                        fill
                        priority
                        className=" object-cover"
                    />
                    <div className="" style={{ backgroundImage: 'url("/m3marInvestmentBg.png")' }}></div>
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="text-center text-white px-4">
                            <h1 className="text-xl md:text-4xl font-bold mb-4 drop-shadow-lg">
                                معمار للمقاولات</h1>
                            <p className="text-lg md:text-xl drop-shadow-sm ">
                                تعمل شرکة معمار للاستثمار العقاري وإدارة المشروعات ﻋﻠﯽ تقدیم أفضل خدمات المقاولات التشیید والبناء             </p>


                        </div>
                    </div>
                </section>


                {/* Projects Section */}
                <section className=" px-4 md:px-8 bg-white">

                    <div className="flex flex-col sm:flex-row-reverse w-full justify-end items-center py-4 bg-white">
                        <div className="flex flex-col items-center text-center w-full ">
                            <h2 className="mx-auto text-xl sm:text-2xl md:text-3xl"> استكشف مشاريع معمار للمقاولات</h2>
                            <p className="text-center text-sm md:text-lg font-light text-gray-700 mb-8 px-4">
                                تعمل شرکة معمار للتطویر العقاري وإدارة المشروعات ﻋﻠﯽ تقدیم أفضل خدمات المقاولات التشیید والبناء
                            </p>
                        </div>



                    </div>




                    {/* slider */}
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={5}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            220: { slidesPerView: 3, spaceBetween: 10 },
                            420: { slidesPerView: 4, spaceBetween: 15 },
                            640: { slidesPerView: 5, spaceBetween: 20 },
                            768: { slidesPerView: 5, spaceBetween: 20 },
                            1024: { slidesPerView: 5, spaceBetween: 20 },
                        }}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}

                        className="mySwiper px-18"
                    >
                        <SwiperSlide>
                            <div className="relative w-full h-40 sm:h-48 md:h-48 lg:h-74 rounded-lg overflow-hidden">
                                <div className="absolute rounded-4xl text-[8px] p-1 right-1.5 md:text-[14px] bg-white  top-2 sm:right-2 z-10"> +22 مشروع</div>
                                <Image src="/elfayoum.png" alt="الفيوم" fill className="object-cover" />
                            </div>
                            <div className="absolute z-10 bottom-0 text-white flex flex-row-reverse justify-between w-full p-1 ">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[6px] md:text-[12px]">سوهاج الجديدة</p>
                                    <p className="text-[4px] md:text-[10px]">12 نوفمبر 2024</p>
                                </div>
                                <button className="w-4 sm:w-6 sm:h-6 md:w-8 h-4 md:h-8 flex items-center justify-center rounded-full bg-[#E37C35] text-white hover:bg-white hover:text-[#E37C35]">
                                    <FaLongArrowAltRight className="text-[8px] sm:text-[10px]" />
                                </button>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative w-full h-40 sm:h-48 md:h-48 lg:h-74 rounded-lg overflow-hidden">
                                <div className="absolute rounded-4xl text-[8px] p-1 right-1.5 md:text-[14px] bg-white  top-2 sm:right-2 z-10"> +22 مشروع</div>
                                <Image src="/newCairo.png" alt="القاهرة الجديدة" fill className="object-cover" />
                            </div>
                            <div className="absolute z-10 bottom-0 text-white flex flex-row-reverse justify-between w-full p-1 ">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[6px] md:text-[12px]">سوهاج الجديدة</p>
                                    <p className="text-[4px] md:text-[10px]">12 نوفمبر 2024</p>
                                </div>
                                <button className="w-4 sm:w-6 sm:h-6 md:w-8 h-4 md:h-8 flex items-center justify-center rounded-full bg-[#E37C35] text-white hover:bg-white hover:text-[#E37C35]">
                                    <FaLongArrowAltRight className="text-[8px] sm:text-[10px]" />
                                </button>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative w-full h-40 sm:h-48 md:h-48 lg:h-74 rounded-lg overflow-hidden">
                                <div className="absolute rounded-4xl text-[8px] p-1 right-1.5 md:text-[14px] bg-white  top-2 sm:right-2 z-10"> +22 مشروع</div>
                                <Image src="/elsadat.png" alt="السادات" fill className="object-cover" />
                            </div>
                            <div className="absolute z-10 bottom-0 text-white flex flex-row-reverse justify-between w-full p-1 ">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[6px] md:text-[12px]">سوهاج الجديدة</p>
                                    <p className="text-[4px] md:text-[10px]">12 نوفمبر 2024</p>
                                </div>
                                <button className="w-4 sm:w-6 sm:h-6 md:w-8 h-4 md:h-8 flex items-center justify-center rounded-full bg-[#E37C35] text-white hover:bg-white hover:text-[#E37C35]">
                                    <FaLongArrowAltRight className="text-[8px] sm:text-[10px]" />
                                </button>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative w-full h-40 sm:h-48 md:h-48 lg:h-74 rounded-lg overflow-hidden">
                                <div className="absolute rounded-4xl text-[8px] p-1 right-1.5 md:text-[14px] bg-white  top-1 sm:right-1  z-10"> +22 مشروع</div>
                                <Image src="/elfayoum2.png" alt="الفيوم الجديدة" fill className="object-cover" />
                            </div>
                            <div className="absolute z-10 bottom-0 text-white flex flex-row-reverse justify-between w-full p-1 ">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[6px] md:text-[12px]">سوهاج الجديدة</p>
                                    <p className="text-[4px] md:text-[10px]">12 نوفمبر 2024</p>
                                </div>
                                <button className="w-4 sm:w-6 sm:h-6 md:w-8 h-4 md:h-8 flex items-center justify-center rounded-full bg-[#E37C35] text-white hover:bg-white hover:text-[#E37C35]">
                                    <FaLongArrowAltRight className="text-[8px] sm:text-[10px]" />
                                </button>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative w-full h-40 sm:h-48 md:h-48 lg:h-74 rounded-lg overflow-hidden">
                                <div className="absolute rounded-4xl text-[8px] p-1 right-1.5 md:text-[14px] bg-white  top-2 sm:right-2 z-10"> +22 مشروع</div>
                                <Image src="/newSohag.png" alt="سوهاج الجديدة" fill className="object-cover" />
                            </div>
                            <div className="absolute z-10 bottom-0 text-white flex flex-row-reverse justify-between w-full p-1 ">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[6px] md:text-[12px]">سوهاج الجديدة</p>
                                    <p className="text-[4px] md:text-[10px]">12 نوفمبر 2024</p>
                                </div>
                                <button className="w-4 sm:w-6 sm:h-6 md:w-8 h-4 md:h-8 flex items-center justify-center rounded-full bg-[#E37C35] text-white hover:bg-white hover:text-[#E37C35]">
                                    <FaLongArrowAltRight className="text-[8px] sm:text-[10px]" />
                                </button>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative img-cont w-full h-32 sm:h-48 md:h-48 lg:h-74 rounded-lg overflow-hidden">
                                <div className="absolute rounded-4xl text-[8px] p-1 right-1.5 md:text-[14px] bg-white  top-2 sm:right-2 z-10"> +22 مشروع</div>
                                <Image src="/elsadat.png" alt="السادات" fill className="object-cover" />
                            </div>
                            <div className="absolute z-10 bottom-0 text-white flex flex-row-reverse justify-between w-full p-1 ">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[6px] md:text-[12px]">سوهاج الجديدة</p>
                                    <p className="text-[4px] md:text-[10px]">12 نوفمبر 2024</p>
                                </div>
                                <button className="w-4 sm:w-6 sm:h-6 md:w-8 h-4 md:h-8 flex items-center justify-center rounded-full bg-[#E37C35] text-white hover:bg-white hover:text-[#E37C35]">
                                    <FaLongArrowAltRight className="text-[8px] sm:text-[10px]" />
                                </button>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative w-full h-40 sm:h-48 md:h-48 lg:h-74 rounded-lg overflow-hidden">
                                <div className="absolute rounded-4xl text-[8px] p-1 right-1.5 md:text-[14px] bg-white  top-1 sm:right-1 z-10"> +22 مشروع</div>
                                <Image src="/newCairo.png" alt="القاهرة الجديدة" fill className="object-cover" />
                            </div>
                            <div className="absolute z-10 bottom-0 text-white flex flex-row-reverse justify-between w-full p-1 ">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[6px] md:text-[12px]">سوهاج الجديدة</p>
                                    <p className="text-[4px] md:text-[10px]">12 نوفمبر 2024</p>
                                </div>
                                <button className="w-4 sm:w-6 sm:h-6  h-4 md:h-8 md:w-8  flex items-center justify-center rounded-full bg-[#E37C35] text-white hover:bg-white hover:text-[#E37C35]">
                                    <FaLongArrowAltRight className="text-[8px] sm:text-[10px]" />
                                </button>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>

                {/* about section */}
                <section className=" px-4 md:px-8 bg-white mt-8">
                    <div className="flex flex-col gap-4 justify-center">
                        <div className="flex flex-col gap-4 justify-start self-end">
                            <h1 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-end">
                                نبذه عن معمار للاستثمار
                            </h1>
                            <p className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-[#333333] text-end">
                                تبدأ عملية إنشاء مشروع سكني بتخطيط دقيق يتضمن دراسة شاملة للموقع والتصميم المعماري. بعد ذلك، يتم تجهيز الأرض للبناء من خلال إزالة العوائق وتحديد الأساسات بشكل دقيق. تلي هذه المرحلة عملية البناء الفعلية، التي تشمل إنشاء الهيكل الخارجي وتوزيع المساحات الداخلية بشكل متوازن. بعد الانتهاء من الهيكل، تأتي مرحلة التشطيبات النهائية، حيث يتم تركيب النوافذ والأبواب والديكورات بعناية. أخيراً، يتم تسليم المشروع بعد التأكد من مطابقته للمواصفات والمعايير المطلوبة، مما يضمن جودة العمل ورضا العملاء.
                            </p>

                        </div>
                        <div className="flex flex-row-reverse gap-2 justify-center w-full">
                            <div className={`flex flex-col justify-center items-center gap-1 p-2 md:py-6  md:gap-2 w-full rounded-3xl border border-[#333333] text-center `}>
                                <p className="font-semibold md:font-bold">+150</p>
                                <p className="font-light">مشروع سكني </p>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-1 md:py-6  md:gap-2 w-full  p-2 rounded-3xl border-[1px] border-[#333333]  text-center bg-[#333333] text-white">
                                <p className=" font-semibold md:font-bold">+40</p>
                                <p className="font-light">مشروع تجاري</p>
                            </div>
                            <div className={`flex flex-col justify-center items-center gap-1 md:py-6  p-2 w-full   rounded-3xl border border-[#333333] text-center `}>
                                <p className="font-semibold md:font-bold">+30</p>
                                <p className="font-light"> مشروع طبي</p>
                            </div>
                        </div>
                    </div>

                </section>


                {/* m3mar investment vidioes */}
                <section>
                    <div className='flex flex-col items-center justify-center w-full h-full  px-4 sm:px-22  py-8 '>
                        <div className='flex flex-col sm:justify-between sm:flex-row-reverse items-center w-full mb-8'>
                            <div className='flex-col gap-1'>
                                <h2 className='text-md sm:text-xl font-bold text-right'>فديوهات عن معمار للمقاولات</h2>

                            </div>
                            <div className="flex flex-row-reverse gap-3 mt-4 self-center md:self-end bg-white ">
                                <button onClick={() => swiperRef.current?.slideNext()} className='rounded-full bg-[#E37C35] p-1 text-[16px] sm:text-[20px] text-white transition-all hover:bg-white hover:text-[#E37c35] duration-300'><FiArrowRight /></button>
                                <button onClick={() => swiperRef.current?.slidePrev()} className='rounded-full bg-[#E37C35] p-1 text-[16px] sm:text-[20px] text-white transition-all hover:bg-white hover:text-[#E37c35] duration-300'><FiArrowLeft /></button>
                            </div>
                        </div>

                        <Swiper
                            slidesPerView={4}
                            spaceBetween={10}
                            breakpoints={{
                                280: { slidesPerView: 2 },
                                460: { slidesPerView: 3 },
                                1020: { slidesPerView: 4 },
                            }}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            className="mySwiper"
                        >
                            {videos.map((videoId) => (
                                <SwiperSlide key={videoId}>
                                    <div
                                        className="w-full h-64 md:h-96 rounded-lg overflow-hidden cursor-pointer relative"
                                        onClick={() => setSelectedVideo(videoId)}
                                    >
                                        <Image
                                            src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
                                            alt="Video thumbnail"
                                            className="w-full h-full object-cover"
                                            fill
                                        />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-4xl">
                                            ▶
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Modal */}
                        {selectedVideo && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 bg-opacity-80">
                                <div className="relative w-full max-w-4xl px-4">
                                    <button
                                        className="absolute top-0 right-0 bg-black p-2 rounded-full text-white text-2xl"
                                        onClick={() => setSelectedVideo(null)}
                                    >
                                        ✕
                                    </button>
                                    <div className="aspect-video w-full">
                                        <iframe
                                            className="w-full h-full"
                                            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                                            title="YouTube video player"
                                            allow="autoplay; encrypted-media"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        )}


                    </div>
                </section>
                { /* gallery */}
                <section className="px-4 md:px-8 bg-white mt-8">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-[18px] sm:text-[20px] md:text-[22px] text-end font-bold ">معرض صور معمار للمقاولات</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2  sm:h-[600px]">

                            <div className="flex flex-row gap-1 sm:flex-col sm:gap-4 sm:h-full">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="relative flex-1 h-48 sm:h-auto rounded-xl overflow-hidden">
                                        <Image
                                            src={`/imgCol${i}.png`}
                                            alt={`Image Col1 - ${i}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>


                            <div className="flex flex-row sm:flex-col gap-4 sm:h-full">
                                {[1, 2].map((i) => (
                                    <div key={i} className="relative flex-1 h-64 sm:h-auto rounded-xl overflow-hidden">
                                        <Image
                                            src={`/img${i}Col2.png`}
                                            alt={`Image Col2 - ${i}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>


                            <div className="flex flex-row sm:flex-col gap-4 sm:h-full">
                                {[1, 2].map((i) => (
                                    <div key={i} className="relative flex-1 h-64 sm:h-auto rounded-xl overflow-hidden">
                                        <Image
                                            src={`/img${i}Col3.png`}
                                            alt={`Image Col3 - ${i}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </section>

                <section className="py-12 px-4 md:px-8 bg-white">
                    <div className='flex flex-col  items-baseline justify-between   '>
                        <div className='flex flex-col w-full items-end text-start  bg-white rounded-lg '>
                            <h2 className=' text-lg sm:text-2xl font-bold mb-4'>  أخبار و فعليات</h2>
                            <p className='text-gray-600 mb-6 text-end text-[12px] sm:text-md'>تعمل شرکة معمار للتطویر العقاري وإدارة المشروعات ﻋﻠﯽ تقدیم أفضل خدمات المقاولات التشیید والبناء</p>

                        </div>
                        <div className='w-full  flex justify-end mb-4'>
                            <Link href="/news" passHref>
                                <button className='px-4 py-3 bg-white border-[#E37C35] border-[1px] text-[#E37C35] w-full text-[9px] sm:text-[12px] md:text-[14px] rounded-2xl hover:bg-[#E37C35] hover:text-white transition duration-200'>
                                    إطلع علي الاخبار
                                </button>
                            </Link>
                        </div>
                    </div>
                    <NewsEvents news={news} />
                </section>

                <Footer />

            </main>

        </>
    );
}
