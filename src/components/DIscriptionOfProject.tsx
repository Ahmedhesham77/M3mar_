import React from 'react'
import Image from 'next/image';


const DIscriptionOfProject = () => {
    return (
        <div className='bg-white'>
            <div className='flex flex-col gap-4 justify-end items-end mb-4'>
                <h1 className='text-[16px] sm:text-[18px] md:text-[20px] 2xl:text-[30px] font-bold'>
                    تفاصيل المشروع وخريطه المشروع
                </h1>

                <p className='text-[10px] sm:text-[12px] md:text-[14px] 2xl:text-[20px] font-semibold text-end text-[#333333]'>
                    موقعها المركزي ما بين الرحاب ومدينتي وتوسطها أرقى المجتمعات العمرانية وقربها من العاصمة الإدارية الجديدة جعل لها مكانه استراتيجية هامة, فهي تعتبر المدخل الجديد للقاهرة الجديدة.
                    مساحة منطقة بيت الوطن 4700 فدان يضم حوالي 12000 قطعة سكنية من المتوقع ان تضم 150 ألف وحدة سكنية ومن المتوقع ان يسكنه اكتر من نص مليون نسمة.
                    يتكون بيت الوطن من 8 احياء سكنية تنوعت الكثافة السكانية لكل حي – كل منطقه لها الخدمات الخاصة بيها.
                    منطقة بيت الوطن متصلة بشبكة طرق رئيسية:
                    – شارع التسعين الشمالي
                    – طريق السويس
                    – محور محمد بن زايد
                    – والدائري الاوسطي
                    طرق متسعة تم تصميمها وفقا لرؤى الدولة في التطوير لتفادى الزحام والتكدس المروري.
                    نظراً لأهمية الموقع الحيوي والإستراتيجي لمنطقة بيت الوطن، فقد جذبت أنظار أكبر الأندية فى مصر والتي بدأت تتجسد ملامحها على ارض الواقع:
                    – النادي الأهلي
                    – نادى الشرطة
                    نادي الجزيرة
                    بنيه تحتية متطورة (شبكه كهرباء جديده كلياً – خط قطار كهربي جديد ” مونوريل ” – شبكه معلومات حديثه – شبكات مرافق حديثه وصرف صحي – مسارات خاصه للدراجات – اماكن انتظار للسيارات).
                    بالقرب من الخدمات والمناطق التجارية والترفيهية والمطاعم والمدارس والجامعات.
                    ” كل هذه الخدمات جعلت من بيت الوطن – اختيارك الأول في القاهرة الجديدة “

                    اختار وحدتك الآن من قنديل للتطوير العقاري في أفضل مواقع بيت الوطن القاهرة الجديدة بـ اطلالة على حديقة – اطلاله على شوارع رئيسية – اطلالة على شوارع فاصلة – اطلالة بانوراما بـ مساحات تبدأ من 137 متر

                    ” قنديل للتطوير العقاري اختيارك الأول في القاهرة الجديدة “

                    خريطة بيت الوطن | خريطة القاهرة الجديدة | New Cairo Map | خريطة التجمع الخامس | قنديل للتطوير العقاري
                </p>

            </div>
            <div className='flex flex-col sm:flex-row-reverse justify-center gap-2 w-full mb-4 relative'>

                {/* الفيديو */}
                <div className='w-full md:w-3/5 aspect-video relative'>
                    <iframe
                        className="w-full h-full absolute top-0 left-0"
                        src="https://www.youtube.com/embed/ZgxsmWBfkUw"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* الخريطة */}
                <div className='w-full md:w-2/5 relative aspect-video'>
                    <Image src="/map.png" fill alt='map' className='object-cover' />

                    <div className='absolute bottom-1 right-1 rounded-3xl bg-[#E37C35] flex flex-row-reverse justify-start items-start gap-2 p-2'>
                        <Image src="/maximize-2.svg" alt="location" width={20} height={20} className='self-center' />
                        <p className='text-[12px] sm:text-[14px] md:text-[16px] text-white font-semibold'>
                            عرض خريطه المشروع
                        </p>
                    </div>
                </div>


            </div>
            <div className='flex flex-col justify-end items-end gap-2 text-end w-full mb-4'>
                <h2 className='text-[16px] sm:text-[18px] md:text-[20px] 2xl:text-[30px] text-color[#333333] mb-1 font-bold'>مميزات المشروع</h2>
                <p className='text-[14px] sm:text-[16px] 2xl:text-[20px] text-[#333333] font-light'>
                    موقعها المركزي ما بين الرحاب ومدينتي وتوسطها أرقى المجتمعات العمرانية وقربها من العاصمة الإدارية الجديدة جعل لها مكانه استراتيجية هامة, فهي تعتبر المدخل الجديد للقاهرة الجديدة.
                    مساحة منطقة بيت الوطن 4700 فدان يضم حوالي 12000 قطعة سكنية من المتوقع ان تضم 150 ألف وحدة سكنية ومن المتوقع ان يسكنه اكتر من نص مليون نسمة.
                    يتكون بيت الوطن من 8 احياء سكنية تنوعت الكثافة السكانية لكل حي – كل منطقه لها الخدمات الخاصة بيها.
                    منطقة بيت الوطن متصلة بشبكة طرق رئيسية
                </p>
            </div>
        </div>
    )
}

export default DIscriptionOfProject
