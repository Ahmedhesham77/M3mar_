// app/page.tsx
"use client";

import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState, useRef } from "react";
import SplashScreen from "../components/SplashScreen";
import NewProject from "../components/NewProject";
import Navbar from "../components/NavBar";
import CustomerOpinions from "../components/CustomerOpinions";
import Agents from "../components/Agents";
import NewsEvents from "../components/NewsEvents";
import Footer from "../components/Footer";
import { agents } from "../data/agents";
import { projectUnits } from "../data/newProjects";
import { news } from "../data/news";

import { CiSearch } from "react-icons/ci";


import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import SwiperCore from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import './globals.css';
import ReelsSlider from "@/components/ReelsSlider";

// import required modules




export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef<SwiperCore | null>(null);

  // splash screen effect
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
        {/* Hero*/}
        <section className="relative w-full min-h-[90vh] md:min-h-[85vh] overflow-hidden">
          <Image
            src="/hero.svg"
            alt="Hero Image"
            fill
            priority
            className="object-cover w-full h-full bg-[#383191] brightness-[0.9] transition-all duration-500 ease-in-out"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center text-white px-4">
              <h1 className="text-xl md:text-4xl lg:text-[40px] font-bold mb-4 drop-shadow-lg">
                معمار للتطوير العقاري              </h1>
              <p className="text-lg md:text-xl drop-shadow-sm">
                اختيارك الاول دائما للتطوير و الاستثمار العقاري              </p>
              <div className="flex justify-center items-center gap-2 mx-auto mt-6 w-1/2 py-3 bg-[#E37C35] text-white font-medium rounded-full hover:bg-gray-100 hover:text-[#E37C35] transition">
                <button >
                  ! اعرف اكثر
                </button>
                <CiSearch size={20} />
              </div>

            </div>
          </div>
        </section>
        {/* About Section */}
        <section className="my-12 mx-4 md:mx-10 lg:mx-25 bg-white">
          <div className="mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-2xl xl:text-[30px] 2xl:text-[36px] md:font-[600] text-[#333333] mb-4"> تعرف علينا</h2>
            <p className="text-center text-sm  md:text-[16px]  2xl:text-[22px] font-[400] text-gray-700 mb-8 px-4">
              تعمل شرکة معمار للتطویر العقاري وإدارة المشروعات ﻋﻠﯽ تقدیم أفضل خدمات المقاولات التشیید والبناء” منذ أکثر من خمسة عشر عامًا، ومنذ ذلك الوقت نسعی لإنشاء العدید من المشاریع ذات الجودة والکفاءة العالیة من خلال فریق هندسي وفني وإداري متکامل مع مراعاة تطبیق معاییر الجودة والصحة والسلامة المهنیة طوال فترة المشروع, ودائمًا تسعی الشرکة لتقدیم مشاریع إنشائیة متمیزة لعملائها.            </p>
            <div className="flex justify-center">
              <button className=" rounded-4xl p-3 border-[#E37C35] border-2 text-[#E37C35] transition-all hover:text-white hover:bg-[#E37C35] duration-300"> تعرف علينا اكثر</button>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row px-0 gap-2 mt-6 ">
            <div className="w-full h-64 md:h-96 2xl:h-150 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ZgxsmWBfkUw"
                title="YouTube video player"

                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex flex-row md:flex-col gap-2 justify-center">
              <div className={`flex flex-col justify-center items-center gap-1 p-2 md:gap-2 w-[100px] aspect-square rounded-full border border-[#333333] text-center `}>
                <p className="font-semibold md:font-bold">+30</p>
                <p className="font-light">مشروع تجاري</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1 md:gap-2 w-[100px] aspect-square p-2 rounded-full border-[1px] border-[#333333]  text-center bg-[#333333] text-white">
                <p className=" font-semibold md:font-bold">+30</p>
                <p className="font-light">مشروع تجاري</p>
              </div>
              <div className={`flex flex-col justify-center items-center gap-1 p-2 md:gap-2 w-[100px] aspect-square rounded-full border border-[#333333] text-center `}>
                <p className="font-semibold md:font-bold">+30</p>
                <p className="font-light">مشروع تجاري</p>
              </div>
            </div>
          </div>

        </section>

        {/* Projects Section */}
        <section className=" mx-4 sm:mx-8 md:mx-10 lg:mx-25 bg-white">

          <div className="flex flex-col sm:flex-row-reverse w-full justify-end items-center py-4 bg-white">
            <div className="flex flex-col items-center text-center w-full ">
              <h2 className="mx-auto text-xl sm:text-2xl md:text-2xl xl:text-[30px]  2xl:text-[36px] md:font-[600] text-[#333333]">استكشف مناطقنا</h2>
              <p className="text-center text-sm  md:text-[16px]  2xl:text-[22px] font-[400] text-gray-700 mb-8 px-4">
                تعمل شرکة معمار للتطویر العقاري وإدارة المشروعات ﻋﻠﯽ تقدیم أفضل خدمات المقاولات التشیید والبناء
              </p>
            </div>

            <div className="flex flex-row-reverse gap-3 ">
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-4 sm:w-6 sm:h-6 md:w-8 h-4 md:h-8 2xl:w-12 2xl:h-12  flex items-center justify-center rounded-full bg-[#E37C35] text-white hover:bg-white hover:text-[#E37C35]"
              >
                <FiArrowRight className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[20px] 2xl:text-[28px]" />
              </button>
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-4 sm:w-6 sm:h-6 md:w-8 h-4 md:h-8 2xl:w-12 2xl:h-12  flex items-center justify-center rounded-full bg-[#E37C35] text-white hover:bg-white hover:text-[#E37C35]"
              >
                <FiArrowLeft className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[20px] 2xl:text-[28px]" />
              </button>
            </div>

          </div>




          {/* slider */}
          <ReelsSlider />
        </section>
        {/* New Projects Section */}
        <section className="my-12 mx-4 sm:mx-8 md:mx-10 lg:mx-25 bg-white">
          <div className='flex flex-col items-end text-start bg-white rounded-lg'>
            <h2 className='text-xl sm:text-2xl md:text-2xl xl:text-[30px] 2xl:text-[36px] md:font-[600] text-[#333333] mb-4'>احدث مشاريع معمار</h2>
            <p className='text-center text-sm  md:text-[16px]  2xl:text-[22px] font-[400] text-gray-700 mb-8 px-4'>
              تعمل شرکة معمار للتطویر العقاري وإدارة المشروعات ﻋﻠﯽ تقدیم أفضل خدمات المقاولات التشیید والبناء
            </p>
          </div>
          <NewProject unitsPerSlide={6} units={projectUnits} />
          <CustomerOpinions />
        </section>
        {/* Customer Opinions Section */}
        { /* job Section */}
        <section className="w-full my-8  ">
          <div
            className="flex flex-row-reverse w-full justify-between  items-end mt-2 bg-cover bg-center h-[30vh] sm:h-[35vh] md:h-[40vh] relative"
            style={{ backgroundImage: "url('/jobSectionBg.svg')" }}
          >
            <div className="box-job flex flex-col w-[100%] md:w-[50%] h-[100%] text-end justify-start md:justify-center self-end gap-4 px-2 py-2  ">
              <h2 className="text-[12px] sm:text-xl md:text-2xl text-white font-bold font-">
                أنضم إلينا كجزء من الفريق.. لتصبح جزء من معمار للتطوير العقاري
              </h2>
              <button className="rounded-full bg-white px-2 py-3 w-[40%] sm:w-1/3 md:w-1/2 text-[#383191] text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] self-end hover:text-white hover:bg-[#383191] transition-all duration-300">! قدم طلب الالتحاق الآن  </button>
            </div>
            <Image
              src="/employees.svg"
              alt="employees"
              width={0}
              height={0}
              sizes="80vw"
              className="absolute bottom-0 left-0  min-w-[58vw] sm:min-w-[50vw] h-auto "
            />
          </div>
        </section>

        <section className="my-12 mx-4 md:mx-10 lg:mx-25 md:my-25">

          <Agents agents={agents} unitsPerSlide={3} />
        </section>
        <section className="my-12 mx-4 sm:mx-8 md:mx-10 lg:mx-25 md:my-25 bg-[#F9F9F9] m-4 rounded-2xl ">
          <div className='flex flex-col  items-baseline justify-between   '>
            <div className='flex flex-col w-full items-end text-start  bg-white rounded-lg '>
              <h2 className=' text-xl sm:text-2xl md:text-2xl xl:text-[30px] 2xl:text-[36px] md:font-[600] text-[#333333] mb-4'>  أخبار و فعليات</h2>
              <p className='text-gray-600 mb-6 text-end text-[12px] 2xl:text-[20px] sm:text-md'>تعمل شرکة معمار للتطویر العقاري وإدارة المشروعات ﻋﻠﯽ تقدیم أفضل خدمات المقاولات التشیید والبناء</p>

            </div>
            <div className='w-full  flex justify-end mb-4'>
              <Link href="/news" passHref>
                <button className='px-4 py-3 bg-white border-[#E37C35] border-[1px] text-[#E37C35] w-full text-[9px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] rounded-2xl hover:bg-[#E37C35] hover:text-white transition duration-200'>
                  إطلع علي الاخبار
                </button>
              </Link>
            </div>
          </div>
          <NewsEvents news={news} unitsPerSlide={8} />
        </section>
        <Footer />

      </main>

    </>
  );
}
