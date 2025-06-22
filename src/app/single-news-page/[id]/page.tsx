"use client";
import React from 'react'
import { useSearchParams } from 'next/navigation';
import Image from 'next/image'
import Navbar from "@/components/NavBar"
import Fotter from '@/components/Footer'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';


export default function OurProjects() {

    const searchParams = useSearchParams();
    // const title = searchParams.get("title");
    // const date = searchParams.get("date");
    const title = searchParams.get("title");
    const date = searchParams.get("date");

    return (
        <main className='w-full'>
            <Navbar />
            {/* Header*/}
            <section className="relative w-full flex flex-col justify-center min-h-[90vh] md:min-h-[85vh] overflow-hidden ">
                <Image
                    src="/singlenewbg.png"
                    alt="Hero Image"
                    fill
                    className=" object-cover"
                />

            </section>
            <div className='flex flex-row-reverse  justify-start items-start gap-2  mx-4 md:mx-8 lg:mx-25 mt-5 mb-4'>
                <p className='text-[12px] sm:text-[14px] md:text-[16px] text-[#333333] font-semibold'> مشاريعنا</p>
                <MdOutlineKeyboardArrowLeft className='text-[18px] text-[#333333] self-center ' />
                <p className='text-[12px] sm:text-[14px] md:text-[16px] text-[#333333] font-semibold'> الوكلاء</p>
            </div>

            <section className='py-2 mx-4 md:mx-8 lg:mx-25 bg-white'>
                <div className='flex flex-row-reverse gap-4 items-centers justify-between mt-4 mb-6'>
                    <h1 className='text-[18px] sm:text-[24px] md:text-[28px] xl:text-[32px] font-bold text-[#333333]'> {title} </h1>
                    <div className='flex flex-row-reverse gap-10 items-center text-center'>
                        <div className="flex items-center gap-2">
                            <p className='text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px] text-[#333333]'>
                                تاريخ النشر: {date}
                            </p>
                            <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                        </div>

                        <div className="flex items-center gap-2">
                            <p className='text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px] text-[#333333]'>
                                وقت القراءة: دقيقة واحدة
                            </p>
                            <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                        </div>
                    </div>

                </div>



            </section>

            <section className='py-2 px-4 md:px-8 bg-white mb-4'>
                <div className='flex flex-col text-end gap-4'>
                    <h1 className='text-[18px] sm:text-[20px] md:text-[22px] font-bold '>
                        شركة معمار للعقارات رائدة في التطوير العقاري، تقدم مشاريع سكنية وتجارية تلبي احتياجات السوق، مع تصميمات حديثة وجودة بناء عالية.
                    </h1>
                    <p className='text-[14px] sm:text-[16px] md:text-[18px] text-[#333333]'>
                        تأسست شركة معمار للعقارات بهدف تقديم حلول عقارية مبتكرة تلبي تطلعات العملاء.
                    </p>
                    <h2 className='text-[16px] sm:text-[18px] md:text-[20px] font-bold text-[#333333]'>
                        تشمل المهام الرئيسية لشركة معمار للعقارات ما يلي:

                    </h2>
                    <ul>
                        <li className='text-[10px] sm:text-[14px] md:text-[16px] text-[#333333] font-light'>تطوير مشاريع سكنية وتجارية مبتكرة</li>
                        <li className='text-[10px] sm:text-[14px] md:text-[16px] text-[#333333] font-light'>تقديم استشارات عقارية متكاملة</li>
                        <li className='text-[10px] sm:text-[14px] md:text-[16px] text-[#333333] font-light'>توفير خدمات ما بعد البيع لضمان رضا العملاء</li>
                        <li className='text-[10px] sm:text-[14px] md:text-[16px] text-[#333333] font-light'>تسويق المشاريع العقارية بشكل فعال</li>
                        <li className='text-[10px] sm:text-[14px] md:text-[16px] text-[#333333] font-light'>تحليل احتياجات السوق وتوجهاته لضمان النجاح المستدام.</li>
                    </ul>
                    <p className='text-[12px] sm:text-[14px] md:text-[16px] text-[#333333]'>
                        تسعى شركة معمار للعقارات إلى بناء علاقات قوية مع العملاء والمستثمرين، حيث تركز على الشفافية والاحترافية في جميع تعاملاتها.
                    </p>
                    <h2 className='text-[16px] sm:text-[18px] md:text-[20px] font-bold'>
                        تعتبر شركة معمار للعقارات مثالاً يحتذى به في مجال التطوير العقاري.
                    </h2>
                    <p className='text-[12px] sm:text-[14px] md:text-[16px] text-[#333333]'>
                        يمكن تعريف شركة معمار للعقارات بأنها كيان يهدف إلى تقديم خدمات عقارية متنوعة تشمل التطوير، الإدارة، والتسويق. تسعى الشركة إلى تحقيق رضا العملاء من خلال تقديم مشاريع تلبي احتياجاتهم وتطلعاتهم.
                    </p>
                    <h2 className='text-[16px] sm:text-[18px] md:text-[20px] font-bold '>
                        تعمل شركة معمار للعقارات على تعزيز الشفافية في جميع عملياتها.
                    </h2>
                    <p className='text-[12px] sm:text-[14px] md:text-[16px] text-[#333333]'>
                        تلتزم شركة معمار للعقارات بتقديم أعلى معايير الجودة في جميع مشاريعها، مما يجعلها رائدة في مجالها.
                    </p>
                </div>

            </section>



            <Fotter />
        </main >
    )
}



