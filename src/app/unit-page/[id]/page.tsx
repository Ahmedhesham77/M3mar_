'use client'

import React from 'react'

import Image from "next/image";

// Components
import Navbar from '@/components/NavBar'
import Fotter from '@/components/Footer'

import CustomerOpinions from '@/components/CustomerOpinions';

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
    const UnitName = searchParams.get("UnitName");
    // const id = searchParams.get("id");



    return (
        <>
            <Navbar />
            <main className='w-full bg-white'>
                <div className='w-full flex flex-col justify-center min-h-[90vh] md:min-h-[85vh] overflow-hidden ' style={{ backgroundImage: 'url(/unitPagebg.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                </div>
                <div className='flex flex-row-reverse  justify-start items-start gap-2  mx-4 md:mx-8 lg:mx-25 mt-2 mb-4'>
                    <p className='text-[12px] sm:text-[14px] md:text-[16px] text-[#333333] font-semibold'> مشاريعنا</p>
                    <MdOutlineKeyboardArrowLeft className='text-[18px] text-[#333333] self-center ' />
                    <p className='text-[12px] sm:text-[14px] md:text-[16px] text-[#333333] font-semibold'> الوكلاء</p>
                </div>
                <section className=' flex flex-col items-center justify-center  gap-4 mx-4 md:mx-8 lg:mx-25 bg-white'>
                    <div className='flex flex-col justify-end items-end gap-3 w-full mb-4'>



                    </div>
                    <div className='flex flex-col justify-end items-end gap-3 w-full mb-4' >
                        <p className='text-[18px] sm:text-[22px] md:text-[24px] text-[#333333] font-bold'>
                            {UnitName}
                        </p>
                        <p className='text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#333333] font-light'>
                            تبدأ عملية إنشاء مشروع سكني بتخطيط دقيق يتضمن دراسة شاملة للموقع والتصميم المعماري. بعد ذلك، يتم تجهيز الأرض للبناء من خلال إزالة العوائق وتحديد الأساسات بشكل دقيق. تلي هذه المرحلة عملية البناء الفعلية، التي تشمل إنشاء الهيكل الخارجي وتوزيع المساحات الداخلية بشكل متوازن. بعد الانتهاء من الهيكل، تأتي مرحلة التشطيبات النهائية، حيث يتم تركيب النوافذ والأبواب والديكورات بعناية. أخيراً، يتم تسليم المشروع بعد التأكد من مطابقته للمواصفات والمعايير المطلوبة، مما يضمن جودة العمل ورضا العملاء.
                        </p>
                    </div>






                    <div className='bg-white'>
                        <div className='flex flex-col gap-4 justify-end items-end mb-4'>
                            <div className='flex flex-col sm:flex-row-reverse justify-between w-full mb-2 items-center'>
                                <h1 className='text-[16px] sm:text-[24px] md:text-[28px] xl:text-[32px]  font-600 text-[#333333]'>
                                    تفاصيل الوحده وخريطه الوحده                                </h1>
                                <div className='w-full sm:w-1/4 rounded-4xl bg-[#383191] py-5 px-3 text-white border hover:bg-white hover:text-[#383191] hover:border-[#383191] duration-300 flex flex-row-reverse justify-center gap-2 items-center  '>
                                    <GoDownload className='text-[18px] sm:text-[20px] md:text-[22px] xl:text-[26px] text-center' />
                                    <p className='text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px] text-center'>تنزيل البروشور</p>
                                </div>
                            </div>


                            <p className='text-[10px] sm:text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[20px] font-semibold text-end text-[#626262] leading-10 text-'>
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
                            <h2 className='text-[16px] sm:text-[18px] md:text-[20px] text-color[#333333] mb-1 font-bold'>مميزات المشروع</h2>
                            <p className='text-[14px] sm:text-[16px] text-[#333333] font-light'>
                                موقعها المركزي ما بين الرحاب ومدينتي وتوسطها أرقى المجتمعات العمرانية وقربها من العاصمة الإدارية الجديدة جعل لها مكانه استراتيجية هامة, فهي تعتبر المدخل الجديد للقاهرة الجديدة.
                                مساحة منطقة بيت الوطن 4700 فدان يضم حوالي 12000 قطعة سكنية من المتوقع ان تضم 150 ألف وحدة سكنية ومن المتوقع ان يسكنه اكتر من نص مليون نسمة.
                                يتكون بيت الوطن من 8 احياء سكنية تنوعت الكثافة السكانية لكل حي – كل منطقه لها الخدمات الخاصة بيها.
                                منطقة بيت الوطن متصلة بشبكة طرق رئيسية
                            </p>
                        </div>
                    </div>


                    <div className='flex flex-col justify-center items-center gap-2 text-end w-full mb-4 border-2 border-[#626262] rounded-2xl px-4 sm:px-[30px] md:px-[40px] py-4'>
                        <form className='w-full flex flex-col justify-start  gap-2 '>
                            <div className='flex flex-col justify-start  gap-2 mb-4'>
                                <h2 className='text-[18px] sm:text-[20px] md:text-[22px] font-bold text-[#333333]'>
                                    احجز مكانك الان
                                </h2>
                                <p className='text-[12px] sm:text-[14px] md:text-[16px] text-[#333333] font-semibold'>
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
                <CustomerOpinions />

            </main>
            <Fotter />
        </>
    )
}
