import React, { useState } from 'react';
import Image from 'next/image';

const ProjectPhases = () => {
  const progress = 70;
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTitle, setActiveTitle] = useState('مرحلة الحفر');
  const handlePhaseClick = (index: number, title: string) => {
    setActiveIndex(index);
    setActiveTitle(title);
  };


  return (
    <div className='w-full '>
      <div className='flex flex-col justify-center gap-6'>
        {/* ✅ Header */}
        <div className='flex flex-col justify-center items-center gap-3 text-center'>
          <h1 className='text-[18px] sm:text-[20px] md:text-[22px] text-black font-bold'>مراحل المشروع</h1>
          <p className='text-[16px] sm:text-[18px] md:text-[20px] text-[#333333] max-w-2xl'>
            تعمل شرکة معمار للتطویر العقاري وإدارة المشروعات ﻋﻠﯽ تقدیم أفضل خدمات المقاولات التشیید والبناء
          </p>
        </div>


        <div className='flex flex-col sm:flex-row-reverse justify-evenly items-center gap-4 w-full  '>
          <p className='text-[14px] md:text-[18px] '>
            نسبه اكتمال المشروع
          </p>
          {/*  progress bar*/}
          <div className='relative w-full sm:w-3/4 '>
            {/*  back ground */}
            <div className='w-auto h-5 bg-gray-200 rounded-full overflow-hidden'>
              <div
                className='h-full bg-[#383191] rounded-full transition-all duration-500 ease-in-out'
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/*  snoop */}
            <div
              className='absolute -top-2 w-9 h-9 flex items-center justify-center text-xs font-bold text-white bg-[#383191] rounded-full shadow-md'
              style={{ left: `${progress}%`, transform: 'translateX(-50%)' }}
            >
              {progress}%
            </div>

          </div>
        </div>
        {/*  Phases */}
        <div className="flex flex-row justify-center">

          <div
            className="flex flex-col justify-center items-center gap-2 cursor-pointer"
            onClick={() => handlePhaseClick(0, 'مرحلة الحفر')}
          >
            <p className={`text-[12px] sm:text-[16px] md:text-[18px] mx-2 transition-all duration-300 ${activeIndex === 0 ? 'text-[#E37C35] font-semibold' : 'text-black'}`}>
              مرحلة الحفر
            </p>
            <div className={`border-b-2 w-full transition-all duration-300 ${activeIndex === 0 ? 'border-[#E37C35]' : 'border-black'}`}></div>
          </div>


          <div
            className="flex flex-col justify-center items-center gap-2 cursor-pointer"
            onClick={() => handlePhaseClick(1, 'مرحلة الأساسات')}
          >
            <p className={`text-[12px] sm:text-[16px] md:text-[18px] mx-2 transition-all duration-300 ${activeIndex === 1 ? 'text-[#E37C35] font-semibold' : 'text-black'}`}>
              مرحلة الأساسات
            </p>
            <div className={`border-b-2 w-full transition-all duration-300 ${activeIndex === 1 ? 'border-[#E37C35]' : 'border-black'}`}></div>
          </div>


          <div
            className="flex flex-col justify-center items-center gap-2 cursor-pointer"
            onClick={() => handlePhaseClick(2, 'مرحلة الخرسانة')}
          >
            <p className={`text-[12px] sm:text-[16px] md:text-[18px] mx-2 transition-all duration-300 ${activeIndex === 2 ? 'text-[#E37C35] font-semibold' : 'text-black'}`}>
              مرحلة الخرسانة
            </p>
            <div className={`border-b-2 w-full transition-all duration-300 ${activeIndex === 2 ? 'border-[#E37C35]' : 'border-black'}`}></div>
          </div>
        </div>

        {/* Active phase content */}
        <div className="flex flex-col justify-center items-center gap-4 mt-6">
          <div className="text-end w-full">
            <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-black">
              {activeTitle}
            </h2>

            <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#333333]">
              {activeIndex === 0 && 'في هذه المرحلة، نقوم بحفر الأرض لإعداد الموقع للبناء. تشمل هذه العملية إزالة التربة والصخور والتأكد من أن الأرض مستوية وجاهزة للخطوات التالية.'}
              {activeIndex === 1 && 'في هذه المرحلة، نقوم بإنشاء الأساسات التي ستتحمل هيكل المبنى بالكامل. تشمل هذه الأعمال صب الخرسانة ووضع القواعد المسلحة.'}
              {activeIndex === 2 && 'نقوم هنا بصب الخرسانة لتشكيل الجدران والأسقف والبنية الأساسية للمبنى وفقاً للمخططات الهندسية.'}
            </p>
          </div>
        </div>
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
    </div>
  );
};

export default ProjectPhases;
