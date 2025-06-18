import React from 'react'
import Image from 'next/image'
import { FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='flex flex-col justify-center gap-3' style={{ background: "url('/FooterBg.svg')", backgroundSize: 'cover', padding: '20px', textAlign: 'center' }}>
            <div className='flex flex-col gap-3 justify-center items-center'>
                <div>
                    <Image alt='logo' src={"/welcomeLogo.svg"} width={120} height={120} />
                </div>
                <div className='flex flex-col justify-center gap-2'>
                    <p className='text-[14px] sm:text-[16px] 2xl:text-[22px] font-bold text-white'>
                        المقر الرئيسي
                    </p>
                    <div className='flex flex-row-reverse gap-2'>
                        <p className='text-white text-[12px] sm:text-[14px] 2xl:text-[20px]'>
                            279 شارع التسعين الجنوبي – القطاع الثاني – التجمع الخامس - القاهرة
                        </p>
                        <FaLocationDot className='text-white text-[14px] sm:text-[16px] 2xl:text-[22px]' />
                    </div>
                    <p className='text-white font-semibold text-[12px] sm:text-[14px] 2xl:text-[20px]'>
                        اتصل بنا
                    </p>

                    <div className='flex flex-row justify-center gap-3'>
                        <div className='flex flex-row gap-1'>
                            <p className='text-white text-[10px] sm:text-[12px] 2xl:text-[20px]'>(555) 123-4567</p>
                            <BsTelephone className='text-white text-[14px] sm:text-[16px] 2xl:text-[22px]' />
                        </div>
                        <div className='flex flex-row gap-2'>
                            <p className='text-white text-[10px] sm:text-[12px] 2xl:text-[20px]'>contact@creativeideas.com</p>
                            <FiMail className='text-white text-[14px] sm:text-[16px] 2xl:text-[22px] ' />
                        </div>
                    </div>

                    <p className='text-white text-[12px] sm:text-[14px] font-semibold'></p>
                    <div className="flex self-center gap-2 md:gap-4">
                        <div className="rounded-full bg-white p-1"><FaFacebookF color="#2A256D" className="md:w-5 md:h-5 xl:w-7 xl:h-7 w-4 h-4" /></div>
                        <div className="rounded-full bg-white p-1"><FaInstagram color="#2A256D" className="md:w-5 md:h-5 xl:w-7 xl:h-7 w-4 h-4" /></div>
                        <div className="rounded-full bg-white p-1"><FaYoutube color="#2A256D" className="md:w-5 md:h-5 xl:w-7 xl:h-7 w-4 h-4" /></div>
                        <div className="rounded-full bg-white p-1"><FaXTwitter color="#2A256D" className="md:w-5 md:h-5 xl:w-7 xl:h-7 w-4 h-4" /></div>
                        <div className="rounded-full bg-white p-1"><FaLinkedinIn color="#2A256D" className="md:w-5 md:h-5 xl:w-7 xl:h-7 w-4 h-4" /></div>
                    </div>
                </div>
                <div>
                    <p className='text-white text-[12px] sm:text-[14px] 2xl:text-[22px]'>
                        جميع الحقوق محفوظة © مدعوم من شركة تصميم الويب |<span className='text-[#E37C35]'>قيمة تك</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
