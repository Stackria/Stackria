import Image from 'next/image'
import React from 'react'
import { outfitRegular, museoReg, outfitLight } from "@/app/layout";
import {styles} from '@/constants/style'
import imgOne from '@/assets/software-development.png'
import imgTwo from '@/assets/mvp-development.png'
import imgThird from '@/assets/web-development.png'
import imgfourth from '@/assets/e-commerce.png';
import imgFifth from '@/assets/web-care.png';
import { BsRobot } from "react-icons/bs";
import { SiGoogleanalytics } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiShopify } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { SiFramer } from "react-icons/si";
import { GrWordpress } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { SiWoocommerce } from "react-icons/si";
import TypewriterEffect from '@/components/typewriter'
import Link from 'next/link';

const page = () => {
  return (
    <section >
      <div 
        className='w-full h-[20vh] bg-cover bg-center py-5 mb-10 xl:mb-0 flex items-center justify-center'
        style={{ backgroundImage: 'url(/images/bg-hero.svg)' }}
      >
        <h1 className={`${museoReg.className} text-white text-[36px] xl:text-[42px] pt-20 `}>
          Who We Are
        </h1>
      </div>


      <section className='px-5 xl:px-40'>
        {/* 1st Section */}
        <div className="flex flex-col lg:flex-row md:flex-row xl:flex-row items-center justify-between mx-auto xl:px-10 xl:py-20 gap-0 md:gap-20 lg:gap-20 xl:gap-20">
          
          <div className="xl:w-[60%] lg:w-[50%]  xl:pb-0 ">
            <h1 
              className={`${museoReg.className} text-left text-primary text-[26px] md:text-[26px] lg:text-[36px] xl:text-[48px]`}
              
            >
              Custom Web Development 
            </h1>

            <span className={`${outfitLight.className} xl:text-left text-justify text-slate-700 text-sm md:text-[16px] xl:text-[16px]  xl:w-[70%] `}>
            Your business is unique—your web presence should be too. We design and develop fully custom web-based solutions tailored to your specific goals.
            <br /><br />
            Whether it's a corporate website, an interactive dashboard, or a powerful SaaS platform, we ensure a seamless user experience, clean code, and modern design that sets you apart from the competition.
            </span>

            {/* Stack logo */}
            <div className="flex flex-wrap items-center justify-center gap-4 py-5 text-primary">
              <ImHtmlFive className="text-3xl xl:text-4xl" />
              <FaCss3Alt className="text-3xl xl:text-4xl" />
              <SiJavascript className="text-4xl xl:text-4xl" />
              <FaReact className="text-3xl xl:text-4xl" />
              <SiNextdotjs className="text-4xl xl:text-4xl" />
              <DiNodejs className="text-3xl xl:text-4xl" />
              <DiMongodb className="text-3xl xl:text-4xl" />
              <GrWordpress className="text-3xl xl:text-4xl" />
              <SiWoocommerce className="text-3xl xl:text-4xl" />
              <SiShopify className="text-3xl xl:text-4xl" />
              <SiFramer className="text-3xl xl:text-4xl" />
            </div>

            
            {/* Button */}
            <div className="flex justify-center mt-5">
              <Link
                href="#"
                className={`${styles.outfit} rounded-md bg-primary px-5 py-2 text-white text-xs xl:text-[15px] shadow-lg shadow-blue-500/50 font-bold hover:bg-secondary`}
              >
                EXPLORE
              </Link>
            </div>

          </div>

          {/* Image */}
          <div className="xl:w-[50%] lg:w-[50%] w-full h-full">
            <Image alt='services'
            className='relative xl:h-full xl:w-full w-full h-full mx-auto'
            src={imgOne} 
            width={150} 
            height={150} 
            priority/>
            
          </div>
        </div>
        
        {/* 2nd Section */}
        <div className="flex flex-col-reverse lg:flex-row md:flex-row xl:flex-row items-center justify-between mx-auto xl:px-10 xl:py-20 gap-0 md:gap-20 lg:gap-20 xl:gap-20">
          

          {/* Text */}
          <div  className="xl:w-[60%] lg:w-[50%] xl:pb-0 ">
            <h1 
              className={`${museoReg.className} text-left text-primary text-[26px] md:text-[26px] lg:text-[36px] xl:text-[48px]`}
              
            >
              MVP Development 
            </h1>

            <span className={`${outfitLight.className} xl:text-left text-justify text-slate-700 text-sm md:text-[16px] xl:text-[16px]  xl:w-[70%] `}>
            Bringing a new idea to life? We specialize in Minimum Viable Product (MVP) development, helping startups and innovators launch lean, efficient, and functional prototypes.
            <br /><br />
            Get your product in front of users fast, gather insights, and refine your vision with a solid technical foundation.
            </span>

            {/* Stack logo */}
            <div className="flex flex-wrap items-center justify-center gap-4 py-5 text-primary">
              <ImHtmlFive className="text-3xl xl:text-4xl" />
              <FaCss3Alt className="text-3xl xl:text-4xl" />
              <SiJavascript className="text-4xl xl:text-4xl" />
              <FaReact className="text-3xl xl:text-4xl" />
              <SiNextdotjs className="text-4xl xl:text-4xl" />
              <DiNodejs className="text-3xl xl:text-4xl" />
              <DiMongodb className="text-3xl xl:text-4xl" />
            </div>
            
            <div className="flex justify-center mt-5">
              <Link
                href="#"
                className={`${styles.outfit} rounded-md bg-primary px-5 py-2 text-white text-xs xl:text-[15px] shadow-lg shadow-blue-500/50 font-bold hover:bg-secondary`}
              >
                EXPLORE
              </Link>
            </div>
          </div>
          {/* Image */}
          <div className="xl:w-[50%] lg:w-[50%] w-full h-full">
            <Image alt='services'
            className='relative xl:h-full xl:w-full w-full h-full mx-auto'
            src={imgTwo} 
            width={150} 
            height={150} 
            priority/>
            
          </div>
          
        </div>
        
        {/* 3rd Section */}
        <div className="flex flex-col lg:flex-row md:flex-row xl:flex-row items-center justify-between mx-auto xl:px-10 xl:py-20 gap-0 md:gap-20 lg:gap-20 xl:gap-20 mt-20 md:mt-0 lg:mt-0 xl:mt-0">
          
          {/* Text */}
          <div  className="xl:w-[60%] lg:w-[50%]  xl:pb-0 ">
            <h1 
              className={`${museoReg.className} text-left text-primary text-[26px] md:text-[26px] lg:text-[36px] xl:text-[48px]`}
              
            >
              MERN Development 
            </h1>

            <span className={`${outfitLight.className} xl:text-left text-justify text-slate-700 text-sm md:text-[16px] xl:text-[16px]  xl:w-[70%] `}>
            At Stackria, we don’t just build websites, we engineer in the digital era. 
            <br /><br />
            Our mission is to bridge the gap between technology and business growth, crafting seamless, high-performance platforms that drive results.
            </span>

            {/* Stack logo */}
            <div className="flex flex-wrap items-center justify-center gap-4 py-5 text-primary">
              <ImHtmlFive className="text-3xl xl:text-4xl" />
              <FaCss3Alt className="text-3xl xl:text-4xl" />
              <SiJavascript className="text-4xl xl:text-4xl" />
              <FaReact className="text-3xl xl:text-4xl" />
              <SiNextdotjs className="text-4xl xl:text-4xl" />
              <DiNodejs className="text-3xl xl:text-4xl" />
              <DiMongodb className="text-3xl xl:text-4xl" />
              <GrWordpress className="text-3xl xl:text-4xl" />
              <SiWoocommerce className="text-3xl xl:text-4xl" />
              <SiShopify className="text-3xl xl:text-4xl" />
              <SiFramer className="text-3xl xl:text-4xl" />
            </div>
            
            <div className="flex justify-center mt-5">
              <Link
                href="#"
                className={`${styles.outfit} rounded-md bg-primary px-5 py-2 text-white text-xs xl:text-[15px] shadow-lg shadow-blue-500/50 font-bold hover:bg-secondary`}
              >
                EXPLORE
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="xl:w-[50%] lg:w-[50%] w-full h-full">
            <Image alt='services'
            className='relative xl:h-full xl:w-full w-full h-full mx-auto'
            src={imgThird} 
            width={150} 
            height={150} 
            priority/>
            
          </div>
        </div>

        {/* 4th Section */}
        <div className="flex flex-col-reverse lg:flex-row md:flex-row xl:flex-row items-center justify-between mx-auto xl:px-10 xl:py-20 gap-0 md:gap-20 lg:gap-20 xl:gap-20">

          {/* Text */}
          <div  className="xl:w-[60%] lg:w-[50%]  xl:pb-0 ">
            <h1 
              className={`${museoReg.className} text-left text-primary text-[26px] md:text-[26px] lg:text-[36px] xl:text-[48px]`}
              
            >
               E-Commerce Solutions 
            </h1>

            <span className={`${outfitLight.className} xl:text-left text-justify text-slate-700 text-sm md:text-[16px] xl:text-[16px]  xl:w-[70%] `}>
            Turn visitors into customers with a high-converting e-commerce solution. We build online stores that are fast, secure, and optimized for sales. 
            <br /><br />
            From WooCommerce, Shopify, to fully custom e-commerce platforms, we ensure seamless product management, smooth checkout experiences, and integration with essential tools to boost revenue.
            </span>

            {/* Stack logo */}
            <div className="flex flex-wrap items-center justify-center gap-4 py-5 text-primary">
              <ImHtmlFive className="text-3xl xl:text-4xl" />
              <FaCss3Alt className="text-3xl xl:text-4xl" />
              <SiJavascript className="text-4xl xl:text-4xl" />
              <FaReact className="text-3xl xl:text-4xl" />
              <SiNextdotjs className="text-4xl xl:text-4xl" />
              <DiNodejs className="text-3xl xl:text-4xl" />
              <DiMongodb className="text-3xl xl:text-4xl" />
              <GrWordpress className="text-3xl xl:text-4xl" />
              <SiWoocommerce className="text-3xl xl:text-4xl" />
              <SiShopify className="text-3xl xl:text-4xl" />
              <SiFramer className="text-3xl xl:text-4xl" />
            </div>
            
            <div className="flex justify-center mt-5">
              <Link
                href="#"
                className={`${styles.outfit} rounded-md bg-primary px-5 py-2 text-white text-xs xl:text-[15px] shadow-lg shadow-blue-500/50 font-bold hover:bg-secondary`}
              >
                EXPLORE
              </Link>
            </div>
          </div>
          {/* Image */}
          <div className="xl:w-[50%] lg:w-[50%] w-full h-full">
            <Image alt='services'
            className='relative xl:h-full xl:w-full w-full h-full mx-auto'
            src={imgfourth} 
            width={150} 
            height={150} 
            priority/>
            
          </div>
        </div>
        
        {/* 4th Section */}
        <div className="flex flex-col lg:flex-row md:flex-row xl:flex-row items-center justify-between mx-auto xl:px-10 xl:py-20 gap-0 md:gap-20 lg:gap-20 xl:gap-20 mt-20 md:mt-0 lg:mt-0 xl:mt-0">

          {/* Text */}
          <div  className="xl:w-[60%] lg:w-[50%] xl:pb-0 ">
            <h1 
              className={`${museoReg.className} text-left text-primary text-[26px] md:text-[26px] lg:text-[36px] xl:text-[48px]`}
              
            >
               Web Care
            </h1>

            <span className={`${outfitLight.className} xl:text-left text-justify text-slate-700 text-sm md:text-[16px] xl:text-[16px]  xl:w-[70%] `}>
            Your web-based solution should never slow you down. Our ongoing maintenance and support ensure your platform stays secure, updated, and running at peak performance.
            <br /><br />
            From fixing bugs to implementing security updates and performance optimizations, we’ve got you covered.
            </span>

            {/* Stack logo */}
            <div className="flex flex-wrap items-center justify-center gap-4 py-5 text-primary">
              <BsRobot />
              <SiGoogleanalytics />

            </div>
            
            <div className="flex justify-center mt-5">
              <Link
                href="#"
                className={`${styles.outfit} rounded-md bg-primary px-5 py-2 text-white text-xs xl:text-[15px] shadow-lg shadow-blue-500/50 font-bold hover:bg-secondary`}
              >
                EXPLORE
              </Link>
            </div>
          </div>

        {/* Image */}
        <div className="xl:w-[50%] lg:w-[50%] w-full h-full">
            <Image alt='services'
            className='relative xl:h-full xl:w-full w-full h-full mx-auto'
            src={imgFifth} 
            width={150} 
            height={150} 
            priority/>
            
          </div>
        </div>

        {/* CTA */}
        <section>
             <div className='bg-white py-0 xl:py-20' style={{ backgroundImage: 'url(/images/bg-cta.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}><TypewriterEffect/></div>
        </section>
      </section>
    </section>
  )
}

export default page