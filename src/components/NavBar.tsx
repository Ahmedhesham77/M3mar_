"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaRegBell } from "react-icons/fa";
import { FaXTwitter, FaArrowLeft } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

export default function Navbar() {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const navRef = useRef<HTMLDivElement>(null);

    function toggleDropdown(menu: string) {
        if (openDropdown === menu) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(menu);
        }
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (openDropdown && navRef.current && !navRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openDropdown]);

    return (
        <>
            <style>{`
                .dropdown-menu {
                    max-height: 0;
                    overflow: hidden;
                    opacity: 0;
                    transition: max-height 0.3s ease, opacity 0.3s ease;
                    pointer-events: none;
                }
                .dropdown-menu.open {
                    max-height: 300px; /* قيمة مناسبة لتظهر القائمة */
                    opacity: 1;
                    pointer-events: auto;
                }
            `}</style>

            <nav ref={navRef} className="w-full shadow-md">
                {/* Top NavBar */}
                <div className="hidden sm:flex sm:px-2  md:px-8 lg:px-25  bg-[#2A256D] text-white py-5 px-15  flex-row-reverse justify-between ">

                    <div className="flex flex-row-reverse items-center gap-4 ">
                        <p className="sm:text-xs md:text-[18px] md:font-medium   ">اتصل بنا </p>
                        <div className="border-2 sm:w-14 md:w-15 border-white"></div>
                        <div className="flex flex-row-reverse items-center gap-2">
                            <a href="mailto:contact@creativeideas.com" className="font-light sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px]  ">
                                contact@creativeideas.com
                            </a>
                            <FiMail className="mt-0.5" size={20} />
                        </div>
                        <div className="flex flex-row-reverse items-center gap-2">
                            <p className="font-light sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px]   mt-1">(555) 123-4567</p>
                            <BsTelephone className="mt-0.5" size={20} />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 md:gap-4 lg:gap-5">
                        <div className="rounded-full bg-white p-1"><FaFacebookF color="#2A256D" className="md:w-5 md:h-5 w-5 h-5 xl:w-[24px] xl:h-[24px]" /></div>
                        <div className="rounded-full bg-white p-1"><FaInstagram color="#2A256D" className="md:w-5 md:h-5 w-5 h-5 xl:w-[24px] xl:h-[24px]" /></div>
                        <div className="rounded-full bg-white p-1"><FaYoutube color="#2A256D" className="md:w-5 md:h-5 w-5 h-5 xl:w-[24px] xl:h-[24px]" /></div>
                        <div className="rounded-full bg-white p-1"><FaXTwitter color="#2A256D" className="md:w-5 md:h-5 w-5 h-5 xl:w-[24px] xl:h-[24px]" /></div>
                        <div className="rounded-full bg-white p-1"><FaLinkedinIn color="#2A256D" className="md:w-5 md:h-5 w-5 h-5 xl:w-[24px] xl:h-[24px]" /></div>
                    </div>
                </div>

                {/* Bottom NavBar */}
                <div
                    className="bg-white shadow-sm relative px-2 md:px-8  lg:px-25 flex flex-col justify-center transition-all duration-300 ease-in-out"
                    style={{ minHeight: openDropdown ? "190px" : "70px" }}>



                    <div className="flex flex-row-reverse justify-between items-center h-16">
                        <div className="flex sm:hidden flex-row-reverse gap-4 items-center justify-between ">
                            <button
                                className="sm:hidden text-[#2A256D]"
                                onClick={() => setSidebarOpen(true)}
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                            <Link href="/" className="flex items-center">
                                <Image
                                    src="/welcomeLogoColor.svg"
                                    alt="Logo"
                                    width={41}
                                    height={40}
                                    className=" lg:h-[160px] xl:w-[60px] xl:h-[60px]"
                                />

                            </Link>
                        </div>

                        <ul className=" hidden sm:flex flex-row-reverse justify-center items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-6 text-gray-800 ">
                            <li>
                                <Link href="/" className="flex items-center">
                                    <Image
                                        width={50} height={50}
                                        src="/welcomeLogoColor.svg"
                                        alt="Logo"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className={`transition-all text-[9px] sm:text-[10px] md:text-[12px]  xl:text-[18px] 2xl:text-[22px]  duration-200 ${pathname === "/" ? "text-[#383191] p-1 border-r-2 border-[#E37C35]" : ""
                                        }`}
                                >
                                    الرئيسية
                                </Link>
                            </li>

                            <li className="cursor-pointer flex items-center gap-1">
                                <IoIosArrowForward
                                    className={`transition-transform duration-300 ${openDropdown === "sections" ? "rotate-90" : ""
                                        }`}
                                    size={15}
                                    onClick={() => toggleDropdown("sections")}
                                />
                                <button
                                    onClick={() => toggleDropdown("sections")}
                                    className={`focus:outline-none cursor-pointer text-[9px] sm:text-[10px] mt-0.5 sm:mt-0 md:text-[12px]   xl:text-[18px] 2xl:text-[22px]  font-[400]   transition-all duration-200 ${openDropdown === "sections"
                                        ? "text-[#383191] p-1 border-r-2 border-[#E37C35]"
                                        : ""
                                        }`}
                                >
                                    اقسام الشركة
                                </button>
                            </li>

                            <li className="cursor-pointer flex items-center gap-1">

                                <Link
                                    href="/our-projects"

                                    className={`transition-all text-[9px] sm:text-[10px] md:text-[12px]   xl:text-[18px] 2xl:text-[22px]  font-[400] p-1 duration-200 ${pathname === "/our-projects" ? "text-[#383191] border-r-2 border-[#E37C35]" : ""
                                        }`}
                                >
                                    مشاريعنا
                                </Link>
                            </li>


                            <li>
                                <Link
                                    href="/previous-projects"
                                    className={`transition-all text-[9px] sm:text-[10px] md:text-[12px]   xl:text-[18px] 2xl:text-[22px]  font-[400] duration-200 ${pathname === "/previous-projects" ? "text-[#383191] border-r-2 border-[#E37C35]" : ""
                                        }`}
                                >
                                    المشاريع السابقة
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/news"
                                    className={`transition-all  text-[9px] sm:text-[10px] md:text-[12px]    xl:text-[18px] 2xl:text-[22px]  font-[400]  duration-200 ${pathname === "/news" ? "text-[#383191] border-r-2 border-[#E37C35]" : ""
                                        }`}
                                >
                                    الاخبار
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/contactus"
                                    className={`transition-all text-[9px] sm:text-[10px] md:text-[12px]   xl:text-[18px] 2xl:text-[22px]  font-[400]  duration-200 ${pathname === "/contactus" ? "text-[#383191] border-r-2 border-[#E37C35]" : ""
                                        }`}
                                >
                                    تواصل معانا
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/jobs"
                                    className={`transition-all text-[9px] sm:text-[10px] md:text-[12px]  xl:text-[18px] 2xl:text-[22px]   font-[400]    duration-200 ${pathname === "/jobs" ? "text-[#383191] border-r-2 border-[#E37C35]" : ""
                                        }`}
                                >
                                    الوظائف
                                </Link>
                            </li>
                        </ul>


                        <div className="flex flex-row-reverse items-center  gap-4">
                            <div className="flex flex-row-reverse justify-between gap-2 rounded-full p-1 xl:p-3 bg-[#F3F3F3] items-center">
                                <Image width={20} height={20} color="black" src="/translate.svg" alt="" />
                                <p className="text-[10px] md:text-[12px]  xl:text-[14px] text-[#333333] ">تغيير اللغة </p>
                            </div>
                            <div className="rounded-full p-1 xl:p-3  bg-[#F3F3F3]" >
                                <FaRegBell size={18} />
                            </div>

                        </div>
                    </div>
                    {/* Sidebar overlay */}
                    <div className={`fixed inset-0 z-50 bg-[#1a1a1a8a] bg-opacity-50 transition-opacity ${sidebarOpen ? "block" : "hidden"}`} onClick={() => setSidebarOpen(false)} />

                    {/* Sidebar itself */}
                    <div className={`fixed right-0 top-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}>

                        <div className="p-4 flex justify-between items-center border-b">
                            <span className="font-bold text-[#2A256D]">القائمة</span>
                            <button onClick={() => setSidebarOpen(false)}>✖</button>
                        </div>

                        <ul className="flex flex-col gap-4 p-4 text-right text-gray-800 text-sm">
                            <li><Link className={`transition-all duration-200  ${pathname === "/" ? "text-[#383191] border-r-2 border-[#E37C35]" : ""}`} href="/" onClick={() => setSidebarOpen(false)}>الرئيسية</Link></li>
                            <li><Link className={`transition-all duration-200  ${pathname === "/previous-projects" ? "text-[#383191] border-r-2 border-[#E37C35]" : ""}`} href="/previous-projects" onClick={() => setSidebarOpen(false)}>المشاريع السابقة</Link></li>
                            <li><Link className={`transition-all duration-200  ${pathname === "/news" ? "text-[#383191] border-r-2 border-[#E37C35]" : ""}`} href="/news" onClick={() => setSidebarOpen(false)}>الاخبار</Link></li>
                            <li><Link className={`transition-all duration-200  ${pathname === "/contactus" ? "text-[#383191] border-r-2 border-[#E37C35]" : ""}`} href="/contactus" onClick={() => setSidebarOpen(false)}>تواصل معانا</Link></li>
                            <li><Link className={`transition-all duration-200  ${pathname === "/jobs" ? "text-[#383191] border-r-2 border-[#E37C35]" : ""}`} href="/jobs" onClick={() => setSidebarOpen(false)}>الوظائف</Link></li>
                            <li className="mt-2 font-bold text-[#2A256D]">اقسام الشركة</li>
                            <li className="pl-2"> <Link className={`transition-all duration-200  ${pathname === "/m3mar-tatwir" ? "text-[#383191] border-r-2 border-[#E37C35]" : ""}`} href="/m3mar-tatwir" onClick={() => setSidebarOpen(false)}>معمار للتطوير</Link></li>
                            <li className="pl-2"> <Link className={`transition-all duration-200  ${pathname === "/m3mar-investment" ? "text-[#383191] border-r-2 border-[#E37C35]" : ""}`} href="/m3mar-investment" onClick={() => setSidebarOpen(false)}>معمار للاستثمار</Link></li>
                            <li className="pl-2"> <Link className={`transition-all duration-200  ${pathname === "/m3mar-constractor" ? "text-[#383191] border-r-2 border-[#E37C35]" : ""}`} href="/m3mar-constractor" onClick={() => setSidebarOpen(false)}>معمار للمقاولات</Link></li>

                            <li ><Link className={`transition-all duration-200  ${pathname === "/jobs" ? "text-[#383191] border-r-2 border-[#E37C35]" : ""}`} href="/previous-projects" onClick={() => setSidebarOpen(false)}>مشاريعنا</Link></li>

                        </ul>
                    </div>

                    {/* منطقة القوائم المنسدلة - داخل التمدد */}

                    <div

                        className={`dropdown-menu bg-white flex flex-col rounded shadow-md w-full max-w-xs text-right self-end  ${openDropdown === "sections" ? "open" : ""}`}
                        style={{ direction: "rtl" }}
                    >
                        <div className=" flex items-center hover:text-[#E37C35] transition-all duration-250 ">  <Link className="px-4 py-2 hover:text-[#E37C35] transition-all duration-250  cursor-pointer" href={"/m3mar-tatwir"}> معمار للتطوير</Link>
                            <FaArrowLeft className="" size={15} />
                        </div>
                        <div className=" flex items-center hover:text-[#E37C35] transition-all duration-250 "> <Link className="px-4 py-2  cursor-pointer" href={"/m3mar-investment"}>معمار للاستثمار </Link>
                            <FaArrowLeft className="" size={15} />
                        </div>
                        <div className=" flex items-center hover:text-[#E37C35] transition-all duration-250 "> <Link className="px-4 py-2  cursor-pointer" href={"/m3mar-constractor"}>معمار للمقاولات</Link>
                            <FaArrowLeft className="" size={15} />
                        </div>



                    </div>

                    <ul
                        id="projects-dropdown"
                        className={`dropdown-menu bg-white rounded shadow-md w-full max-w-xs text-right ${openDropdown === "projects" ? "open" : ""}`}
                        style={{ direction: "rtl" }}
                    >
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">مشروع أ</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">مشروع ب</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">مشروع ج</li>
                    </ul>

                </div>
            </nav>
        </>
    );
}
