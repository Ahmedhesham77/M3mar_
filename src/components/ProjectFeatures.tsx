import React from 'react'
import Image from 'next/image'

const ProjectPhases = () => {
    return (
        <div className='w-full bg-white '>
            <div className='text-center mb-6'>
                <h1 className='text-[18px] sm:text-[20px] md:text-[22px] text-black font-bold'>مميزات المشروع</h1>
                <p className='text-[16px] sm:text-[18px] md:text-[20px] text-[#333333]'>
                    تعمل شرکة معمار للتطویر العقاري وإدارة المشروعات ﻋﻠﯽ تقدیم أفضل خدمات المقاولات التشیید والبناء
                </p>
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
            <div className='flex flex-col justify-start text-end gap-2 mt-2'>
                <h1 className='text-[18px] sm:text-[20px] md:text-[22px] text-black font-bold'>
                    مميزات المشروع
                </h1>
                <p className='text-[14px] sm:text-[16px] md:text-[18px] font-light text-[#333333]'>
                    موقعها المركزي ما بين الرحاب ومدينتي وتوسطها أرقى المجتمعات العمرانية وقربها من العاصمة الإدارية الجديدة جعل لها مكانه استراتيجية هامة, فهي تعتبر المدخل الجديد للقاهرة الجديدة.
                    مساحة منطقة بيت الوطن 4700 فدان يضم حوالي 12000 قطعة سكنية من المتوقع ان تضم 150 ألف وحدة سكنية ومن المتوقع ان يسكنه اكتر من نص مليون نسمة.
                    يتكون بيت الوطن من 8 احياء سكنية تنوعت الكثافة السكانية لكل حي – كل منطقه لها الخدمات الخاصة بيها.
                    منطقة بيت الوطن متصلة بشبكة طرق رئيسية
                    موقعها المركزي ما بين الرحاب ومدينتي وتوسطها أرقى المجتمعات العمرانية وقربها من العاصمة الإدارية الجديدة جعل لها مكانه استراتيجية هامة, فهي تعتبر المدخل الجديد للقاهرة الجديدة.
                    مساحة منطقة بيت الوطن 4700 فدان يضم حوالي 12000 قطعة سكنية من المتوقع ان تضم 150 ألف وحدة سكنية ومن المتوقع ان يسكنه اكتر من نص مليون نسمة.
                    يتكون بيت الوطن من 8 احياء سكنية تنوعت الكثافة السكانية لكل حي – كل منطقه لها الخدمات الخاصة بيها.
                    منطقة بيت الوطن متصلة بشبكة طرق رئيسية
                    موقعها المركزي ما بين الرحاب ومدينتي وتوسطها أرقى المجتمعات العمرانية وقربها من العاصمة الإدارية الجديدة جعل لها مكانه استراتيجية هامة, فهي تعتبر المدخل الجديد للقاهرة الجديدة.
                    مساحة منطقة بيت الوطن 4700 فدان يضم حوالي 12000 قطعة سكنية من المتوقع ان تضم 150 ألف وحدة سكنية ومن المتوقع ان يسكنه اكتر من نص مليون نسمة.
                    يتكون بيت الوطن من 8 احياء سكنية تنوعت الكثافة السكانية لكل حي – كل منطقه لها الخدمات الخاصة بيها.
                    منطقة بيت الوطن متصلة بشبكة طرق رئيسية
                    موقعها المركزي ما بين الرحاب ومدينتي وتوسطها أرقى المجتمعات العمرانية وقربها من العاصمة الإدارية الجديدة جعل لها مكانه استراتيجية هامة, فهي تعتبر المدخل الجديد للقاهرة الجديدة.
                    مساحة منطقة بيت الوطن 4700 فدان يضم حوالي 12000 قطعة سكنية من المتوقع ان تضم 150 ألف وحدة سكنية ومن المتوقع ان يسكنه اكتر من نص مليون نسمة.
                    يتكون بيت الوطن من 8 احياء سكنية تنوعت الكثافة السكانية لكل حي – كل منطقه لها الخدمات الخاصة بيها.
                    منطقة بيت الوطن متصلة بشبكة طرق رئيسية
                </p>
            </div>
        </div>
    );
}

export default ProjectPhases
