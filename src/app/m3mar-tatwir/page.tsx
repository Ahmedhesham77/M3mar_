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


import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import 'swiper/css';
import 'swiper/css/pagination';
import '../globals.css';
import { news } from "@/data/news";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import ReelsSlider from "@/components/ReelsSlider";

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
                <section className="relative flex flex-col  w-full min-h-[90vh] md:min-h-[85vh] overflow-hidden">
                    <Image
                        src="/tatwirbg.png"
                        alt="Hero Image"
                        fill
                        priority
                        className=" object-cover"
                    />
                    <div className="" style={{ backgroundImage: 'url("/m3marInvestmentBg.png")' }}></div>

                    <div className="text-center text-white px-4 mt-18">
                        <h1 className="text-xl md:text-4xl xl:text-[40px] font-bold mb-4 drop-shadow-lg">
                            انضم إلى أحد رواد السوق في مصر</h1>
                        <p className="text-lg md:text-xl 2xl:text-[22px] drop-shadow-sm ">
                            تعمل شرکة معمار للاستثمار العقاري وإدارة المشروعات ﻋﻠﯽ تقدیم أفضل خدمات المقاولات التشیید والبناء             </p>


                    </div>

                </section>


                {/* Projects Section */}
                <div className='flex flex-row-reverse  justify-start items-start gap-2  mx-4 md:mx-8 lg:mx-25 mt-5 mb-4'>
                    <p className='text-[12px] sm:text-[14px] md:text-[16px] text-[#333333] font-semibold'> مشاريعنا</p>
                    <MdOutlineKeyboardArrowLeft className='text-[18px] text-[#333333] self-center ' />
                    <p className='text-[12px] sm:text-[14px] md:text-[16px] text-[#333333] font-semibold'> الوكلاء</p>
                </div>

                {/* Projects Section */}
                <section className=" mx-4 md:mx-8 lg:mx-25 bg-white">


                    <div className="flex flex-col sm:flex-row-reverse w-full justify-end items-center py-4 bg-white">
                        <div className="flex flex-col items-center text-center gap-2 w-full ">
                            <h2 className="mx-auto text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#333333] font-600"> استكشف مشاريع معمار للاستثمار</h2>
                            <p className="text-center text-sm md:text-lg font-light text-[#4C4C4C] mb-8 px-4">
                                تعمل شرکة معمار للتطویر العقاري وإدارة المشروعات ﻋﻠﯽ تقدیم أفضل خدمات المقاولات التشیید والبناء
                            </p>
                        </div>



                    </div>




                    {/* slider */}
                    <ReelsSlider />
                </section>

                {/* about section */}
                <section className=" mx-4 md:mx-8 lg:mx-25 bg-white mt-8">
                    <div className="flex flex-col gap-4 justify-center">
                        <div className="flex flex-col gap-4 justify-start self-end">
                            <h1 className="text-[20px] sm:text-[24px] md:text-[28px] xl:text-[32px] text-[#333333] font-600 text-end ">
                                نبذه عن معمار للاستثمار
                            </h1>
                            <p className="text-[14px] sm:text-[16px] md:text-[18px] 2xl:text-[20px]  font-400 text-[#626262] text-end">
                                تبدأ عملية إنشاء مشروع سكني بتخطيط دقيق يتضمن دراسة شاملة للموقع والتصميم المعماري. بعد ذلك، يتم تجهيز الأرض للبناء من خلال إزالة العوائق وتحديد الأساسات بشكل دقيق. تلي هذه المرحلة عملية البناء الفعلية، التي تشمل إنشاء الهيكل الخارجي وتوزيع المساحات الداخلية بشكل متوازن. بعد الانتهاء من الهيكل، تأتي مرحلة التشطيبات النهائية، حيث يتم تركيب النوافذ والأبواب والديكورات بعناية. أخيراً، يتم تسليم المشروع بعد التأكد من مطابقته للمواصفات والمعايير المطلوبة، مما يضمن جودة العمل ورضا العملاء.
                            </p>

                        </div>
                        <div className="flex flex-row-reverse gap-2 justify-center w-full">
                            <div className={`flex flex-col justify-center items-center gap-1 p-2 md:gap-2  md:py-6 xl:py-8 2xl:py-12 w-full rounded-3xl border border-[#333333] text-center `}>
                                <p className="text-[18px] xl:text-[32px] md:font-bold">+150</p>
                                <p className="text-[12px] xl:text-lg font-400">مشروع سكني </p>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-1 md:gap-2 w-full md:py-6  p-2 rounded-3xl border-[1px] border-[#333333]  text-center bg-[#333333] text-white">
                                <p className=" text-[18px] xl:text-[32px] md:font-bold">+40</p>
                                <p className="text-[12px] xl:text-lg font-400">مشروع تجاري</p>
                            </div>
                            <div className={`flex flex-col justify-center items-center gap-1 p-2 w-full md:py-6   rounded-3xl border border-[#333333] text-center `}>
                                <p className="text-[18px] xl:text-[32px] md:font-bold">+30</p>
                                <p className=" text-[12px] xl:text-lg font-400"> مشروع طبي</p>
                            </div>
                        </div>
                    </div>

                </section>


                {/* m3mar investment vidioes */}
                <section className="mx-4 md:mx-8 lg:mx-25">
                    <div className='flex flex-col items-center justify-center w-full h-full   py-8 '>
                        <div className='flex flex-col justify-center sm:flex-row-reverse sm:justify-between items-center w-full mb-8'>
                            <div className='flex-col gap-1'>
                                <h2 className='text-md sm:text-xl md:text-[28px] xl:text-[32px] text-[#333333] font-600 text-right'>فديوهات عن معمار للاستثمار</h2>

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
                                320: { slidesPerView: 2 },
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
                <section className="mx-4 md:mx-8 lg:mx-25 bg-white mt-8">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-[18px] sm:text-[20px] md:text-[28px] xl:text-[32px] text-[#333333] text-end font-600 ">معرض صور معمار للاستثمار</h1>
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


                <section className="py-12 mx-4 md:mx-8 lg:mx-25 bg-white">
                    <div className='flex flex-col  items-baseline justify-between   '>
                        <div className='flex flex-col w-full items-end text-start  bg-white rounded-lg '>
                            <h2 className=' text-lg sm:text-2xl md:text-[28px] xl:text-32px font-600 mb-4'>  أخبار و فعليات</h2>
                            <p className='text-gray-600 mb-6 text-end text-[12px] sm:text-md md:text-[18px] 2xl:text-[22px]'>تعمل شرکة معمار للتطویر العقاري وإدارة المشروعات ﻋﻠﯽ تقدیم أفضل خدمات المقاولات التشیید والبناء</p>

                        </div>
                        <div className='w-full  flex justify-end mb-4'>
                            <Link href="/news" passHref>
                                <button className='px-4 py-3 bg-white border-[#E37C35] border-[1px] text-[#E37C35] w-full text-[9px] sm:text-[12px] md:text-[14px] xl:text-[18px] rounded-4xl hover:bg-[#E37C35] hover:text-white transition duration-200'>
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
