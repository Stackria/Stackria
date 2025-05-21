import Image from 'next/image'
import React from 'react'
import { outfitRegular, museoReg, outfitLight, outfitSemibold, museoBold } from "@/app/layout";
import {styles} from '@/constants/style'
import imgOne from '@/assets/software-development.png'
import imgTwo from '@/assets/mvp-development.png'
import imgThird from '@/assets/web-development.png'
import imgfourth from '@/assets/e-commerce.png';
import imgFifth from '@/assets/web-care.png';
import imgSixth from '@/assets/web-dev.png';
import { BsRobot } from "react-icons/bs";
import { SiGoogleanalytics } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiShopify } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { SiGooglesearchconsole } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { SiFramer } from "react-icons/si";
import { GrWordpress } from "react-icons/gr";
import { SiSemrush } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiWoocommerce } from "react-icons/si";
import { SiYoast } from "react-icons/si";
import TypewriterEffect from '@/components/ui/typewriter'
import Link from 'next/link';

const page = () => {
  return (
    <section >
      <div 
        className='w-full h-[20vh] bg-cover bg-center py-5 mb-10 xl:mb-0 flex items-center justify-center'
        style={{ backgroundImage: 'url(/images/bg-hero.svg)' }}
      >
        {/* <h1 className={`${museoReg.className} text-white text-[3px] xl:text-[42px] pt-20 py-20`}>
          Who We Are
        </h1> */}
      </div>

      {/* Service top text */}
      <div class="flex flex-col px-5 xl:py-5 xl:pb-40 xl:px-40 md:pb-[250px] text-center">
        <h1 className={`${outfitSemibold.className} text-center text-slate-900 text-[34px] md:text-[18px] lg:text-[36px] xl:text-[38px]`} >
              Shaping Tomorrow’s Web, Today
        </h1>
        <p className={`${outfitLight.className} text-center mx-auto text-slate-800 text-[12px] md:text-[15px] md:w-[70%] xl:text-[16px] xl:w-[70%] px-10`}>
        With Stackria, your business is equipped with innovative solutions that propel you ahead of the competition.
        </p>
        <p className={`${outfitLight.className} text-center mx-auto text-slate-800 text-[12px] hidden xl:flex md:flex lg:flex md:text-[15px] md:w-[70%] xl:text-[16px] xl:w-[70%] px-10`}>
        Partner with Stackria to create web experiences that are as forward-thinking as your business. 
        </p>
      </div>

      {/* Section */}
      <section className='mt-40 md:mt-0 lg:mt-0 xl:mt-0 md:px-10 '>
        {/* 1st Section */}
        <div className="flex flex-col px-5 xl:px-5 lg:flex-row md:flex-row xl:flex-row items-center justify-between mx-auto xl:py-20 gap-0 md:gap-20 lg:gap-20 xl:gap-20 xl:justify-between">
          
          <div className="xl:w-[50%] lg:w-[50%] md:w-[50%] md:text-left md:justify-start xl:pb-0 ">
            <h1 
              className={`${outfitSemibold.className} text-left text-black text-[34px] md:text-[18px] lg:text-[36px] xl:text-[48px]`}
              
            >
              Custom Web Development 
            </h1>

            <span className={`${outfitLight.className} xl:text-justify text-justify text-slate-900 text-[15px] md:text-[15px] xl:text-[16px] xl:w-[70%] md:text-justify`}>
            Your business is unique, your web presence should be too. We design and develop fully custom web-based solutions tailored to your specific goals.
            <br /><br />
            Whether it's a corporate website, an interactive dashboard, or a powerful SaaS platform, we ensure a seamless user experience, clean code, and modern design that sets you apart from the competition.
            At Stackria, we treat every project as a digital extension of your brand. Our custom development process begins with deep discovery and strategy sessions to understand your business, followed by UI/UX design, backend engineering,
            </span>

            {/* Stack logo */}
            <div className="flex flex-wrap items-center justify-center gap-4 py-5 text-primary px-10 md:-ml-10 md:text-left md:justify-start text-3xl md:text-2xl xl:text-4xl">
              <ImHtmlFive/>
              <FaCss3Alt/>
              <SiJavascript/>
              <FaReact/>
              <SiNextdotjs/>
              <DiNodejs/>
              <DiMongodb/>
              <GrWordpress/>
              <SiWoocommerce/>
              <SiShopify/>
              <SiFramer/>
            </div>

            
            {/* Button */}
            <div className="flex justify-center md:justify-start mt-5 md:pb-20">
              <Link
                href="/services/custom-software-development"
                className={`${outfitSemibold.className} rounded-[3px] bg-primary px-5 py-2 text-white text-[11px] md:text-[11px] xl:text-[15px] shadow-lg shadow-blue-500/50 font-bold hover:bg-secondary`}
              >
                EXPLORE
              </Link>
            </div>

          </div>

          {/* Image */}
          <div className="xl:w-[50%] lg:w-[50%] md:w-[50%] w-full h-full ">
            <Image 
              alt='services'
              className='relative xl:h-full xl:w-[80%] w-full h-full md:-mt-[360px] xl:-mt-[180px] mx-auto' style={{ backgroundImage: 'url(/images/bg-cta0.svg)', backgroundSize: 'cover', backgroundPosition: 'right' }}
              src={imgOne}
              width={800}
              height={600}
              priority
            />

          </div>
        </div>
        
        {/* 2nd Section */}
        <div className="flex flex-col px-5 xl:px-5 md:flex-row-reverse lg:flex-row-reverse xl:flex-row-reverse items-center justify-between mx-auto xl:py-20 gap-0 md:gap-20 lg:gap-20 xl:gap-20 xs:mt-20">
          

          {/* Text */}
          <div className="xl:w-[50%] lg:w-[50%] xl:pb-0 md:w-[50%] ">
            <h1 
              className={`${outfitSemibold.className} text-left text-black text-[34px] md:text-[18px] lg:text-[36px] xl:text-[48px]`}
              
            >
              MVP Development 
            </h1>

            <span className={`${outfitLight.className} xl:text-left text-justify text-slate-900 text-[15px] md:text-[15px] xl:text-[16px]  xl:w-[70%] `}>
            Bringing a new idea to life? We specialize in Minimum Viable Product (MVP) development, helping startups and innovators launch lean, efficient, and functional prototypes.
            <br /><br />
            Get your product in front of users fast, gather insights, and refine your vision with a solid technical foundation.
            Stackria’s MVP development process is designed for clarity and speed. We start by defining the essential features, identifying early adopter personas, and creating clickable prototypes. From there, we build a fully functional MVP that’s clean, scalable, and ready for market testing. 
            </span>

            {/* Stack logo */}
            <div className="flex flex-wrap items-center justify-center gap-4 py-5 text-primary px-10 md:-ml-10 md:text-left md:justify-start text-3xl md:text-xl xl:text-4xl">
              <ImHtmlFive />
              <FaCss3Alt />
              <SiJavascript />
              <FaReact />
              <SiNextdotjs/>
              <DiNodejs />
              <DiMongodb />
            </div>
            
            {/* Button */}
            <div className="flex justify-center md:justify-start mt-5 md:pb-20">
              <Link
                href="/services/mvp-development"
                className={`${outfitSemibold.className} rounded-[3px] bg-primary px-5 py-2 text-white text-[11px] md:text-[11px] xl:text-[15px] shadow-lg shadow-blue-500/50 font-bold hover:bg-secondary`}
              >
                EXPLORE
              </Link>
            </div>
          </div>
          {/* Image */}
          <div className="xl:w-[50%] lg:w-[50%] w-full h-full md:w-[50%] xl:mt-[120px]" style={{ backgroundImage: 'url(/images/bg-cta0.svg)', backgroundSize: 'contain', backgroundPosition: 'right' }}>
            <Image 
              alt='services'
              className='relative xl:h-full xl:w-[80%] w-full h-full md:-mt-[265px] mx-auto'
              src={imgTwo}
              width={800}
              height={600}
              priority
            />
          </div>
          
        </div>
        
        {/* 3rd Section */}
        <div className="flex flex-col px-5 xl:px-5 lg:flex-row md:flex-row xl:flex-row items-center justify-between mx-auto xl:py-20 gap-0 md:gap-20 lg:gap-20 xl:gap-20 xs:mt-10 md:mt-0 lg:mt-0 xl:mt-0">
          
          {/* Text */}
          <div  className="xl:w-[50%] lg:w-[50%] md:w-[50%] xl:pb-0 ">
            <h1 
              className={`${outfitSemibold.className} text-left text-black text-[34px] md:text-[18px] lg:text-[36px] xl:text-[48px]`}
              
            >
              MERN Development 
            </h1>

            <span className={`${outfitLight.className} xl:text-left text-justify text-slate-900 text-[15px] md:text-[15px] xl:text-[16px]  xl:w-[70%] `}>
            When it comes to building fast, scalable, and maintainable web-based solutions, the MERN stack has become a top choice for modern businesses. 
            <br /><br />
            At Stackria, we leverage the MERN stack to build dynamic, high-performance platforms that meet real-world business demands. From interactive dashboards to full SaaS platforms, MERN provides the agility to go from idea to production faster than traditional stacks. And it’s not just about speed—MERN-based apps scale efficiently, are easier to maintain, and offer seamless user experiences.
            </span>

            {/* Stack logo */}
            <div className="flex flex-wrap items-center justify-center gap-4 py-5 text-primary px-10 md:-ml-10 md:text-left md:justify-start text-3xl md:text-2xl xl:text-4xl">
              <ImHtmlFive />
              <FaCss3Alt />
              <SiJavascript />
              <FaReact />
              <SiNextdotjs />
              <DiNodejs />
              <DiMongodb />
              <GrWordpress />
              <SiWoocommerce />
              <SiShopify />
              <SiFramer />
            </div>
            
            {/* Button */}
            <div className="flex justify-center md:justify-start mt-5 md:pb-20">
              <Link
                href="/services/mern-development"
                className={`${outfitSemibold.className} rounded-[3px] bg-primary px-5 py-2 text-white text-[11px] md:text-[11px] xl:text-[15px] shadow-lg shadow-blue-500/50 font-bold hover:bg-secondary`}
              >
                EXPLORE
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="xl:w-[50%] lg:w-[50%] w-full h-full md:w-[50%] xl:mt-[100px]">
            <Image 
              alt='services'
              className='relative xl:h-full xl:w-[80%] w-full h-full md:-mt-[265px] mx-auto' style={{ backgroundImage: 'url(/images/bg-cta0.svg)', backgroundSize: 'cover', backgroundPosition: 'right' }}
            src={imgThird} 
            width={800}
            height={600} 
            priority/>
            
          </div>
        </div>

        {/* 4th Section */}
        <div className="flex flex-col px-5 xl:px-5 md:flex-row-reverse lg:flex-row-reverse xl:flex-row-reverse items-center justify-between mx-auto xl:py-20 gap-0 md:gap-20 lg:gap-20 xl:gap-20 mt-10 md:mt-0 lg:mt-0 xl:mt-0">

          {/* Text */}
          <div  className="xl:w-[50%] lg:w-[50%] md:w-[50%] xl:pb-0 ">
            <h1 
              className={`${outfitSemibold.className} text-left text-black text-[34px] md:text-[18px] lg:text-[36px] xl:text-[48px]`}
              
            >
               E-Commerce Solutions 
            </h1>

            <span className={`${outfitLight.className} xl:text-left text-justify text-slate-900 text-[15px] md:text-[15px] xl:text-[16px]  xl:w-[70%] `}>
            Turn visitors into customers with a high-converting e-commerce solution. We build online stores that are fast, secure, and optimized for sales. 
            <br /><br />
            From WooCommerce, Shopify, to fully custom e-commerce platforms, we ensure seamless product management, smooth checkout experiences, and integration with essential tools to boost revenue.
            To truly thrive in the e-commerce space, businesses need platforms that are optimized for speed, trust, and conversion.
            </span>

            {/* Stack logo */}
            <div className="flex flex-wrap items-center justify-center gap-4 py-5 text-primary px-10 md:-ml-10 md:text-left md:justify-start text-3xl md:text-2xl xl:text-4xl">
              <ImHtmlFive />
              <FaCss3Alt />
              <SiJavascript />
              <FaReact />
              <SiNextdotjs />
              <DiNodejs />
              <DiMongodb />
              <GrWordpress />
              <SiWoocommerce />
              <SiShopify />
              <SiFramer />
            </div>
            
            {/* Button */}
            <div className="flex justify-center md:justify-start mt-5 md:pb-20">
              <Link
                href="/services/e-commerce-development"
                className={`${outfitSemibold.className} rounded-[3px] bg-primary px-5 py-2 text-white text-[11px] md:text-[11px] xl:text-[15px] shadow-lg shadow-blue-500/50 font-bold hover:bg-secondary`}
              >
                EXPLORE
              </Link>
            </div>
          </div>
          {/* Image */}
          <div className="xl:w-[50%] lg:w-[50%] w-full h-full md:w-[50%] xl:mt-[50px]">
            <Image 
              alt='services'
              className='relative xl:h-full xl:w-[80%] w-full h-full md:-mt-[265px] xl:mt-[0px] mx-auto' style={{ backgroundImage: 'url(/images/bg-cta0.svg)', backgroundSize: 'cover', backgroundPosition: 'right' }}
            src={imgfourth} 
            width={800}
            height={600} 
            priority/>
            
          </div>
        </div>
        
        {/* 5th Section */}
        <div className="flex flex-col px-5 xl:px-5 lg:flex-row md:flex-row xl:flex-row items-center justify-between mx-auto xl:py-20 gap-0 md:gap-20 lg:gap-20 xl:gap-20 mt-20 md:mt-0 lg:mt-0 xl:mt-0">

          {/* Text */}
          <div  className="xl:w-[50%] lg:w-[50%] xl:pb-0 md:w-[50%] xl:mt-[120px]">
            <h1 
              className={`${outfitSemibold.className} text-left text-black text-[34px] md:text-[18px] lg:text-[36px] xl:text-[48px]`}
              
            >
               Web Maintenance & Support
            </h1>

            <span className={`${outfitLight.className} xl:text-left text-justify text-slate-900 text-[15px] md:text-[15px] xl:text-[16px]  xl:w-[70%] `}>
            You’ve launched your platform. It looks great, functions well, and users are coming in. But the work doesn’t stop there. Web-based solutions require ongoing maintenance to remain secure, functional, and competitive.
            
            <br /><br />
            From fixing bugs to implementing security updates and performance optimizations, we’ve got you covered.
            Your web-based solution should never slow you down. Our ongoing maintenance and support ensure your platform stays secure, updated, and running at peak performance.
            </span>

            {/* Stack logo */}
            <div className="flex flex-wrap items-center justify-center gap-4 py-5 text-primary px-10 md:-ml-10 md:text-left md:justify-start text-3xl md:text-2xl xl:text-4xl">
              <BsRobot />
              <SiGoogleanalytics/>

            </div>
            
            {/* Button */}
            <div className="flex justify-center md:justify-start mt-5 md:pb-20">
              <Link
                href="/services/web-care"
                className={`${outfitSemibold.className} rounded-[3px] bg-primary px-5 py-2 text-white text-[11px] md:text-[11px] xl:text-[15px] shadow-lg shadow-blue-500/50 font-bold hover:bg-secondary`}
              >
                EXPLORE
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="xl:w-[50%] lg:w-[50%] w-full h-full md:w-[50%] xl:mt-[0px]">
            <Image 
              alt='services'
              className='relative xl:h-full xl:w-[80%] w-full h-full md:-mt-[265px] xl:-mt-[90px] mx-auto' style={{ backgroundImage: 'url(/images/bg-cta0.svg)', backgroundSize: 'cover', backgroundPosition: 'right' }}
            src={imgFifth} 
            width={800}
            height={600} 
            priority/>
            
          </div>
        </div>

        {/* 6th Section */}
        <div className="flex flex-col px-5 xl:px-5 md:flex-row-reverse lg:flex-row-reverse xl:flex-row-reverse items-center justify-between mx-auto xl:py-20 gap-0 md:gap-20 lg:gap-20 xl:gap-20 mt-5 md:mt-0 lg:mt-0 xl:mt-0">

          {/* Text */}
          <div  className="xl:w-[50%] lg:w-[50%] xl:pb-0 md:w-[50%] ">
            <h1 
              className={`${outfitSemibold.className} text-left text-black text-[34px] md:text-[18px] lg:text-[36px] xl:text-[48px]`}
              
            >
                SEO & Performance Optimization
            </h1>

            <span className={`${outfitLight.className} xl:text-left text-justify text-slate-900 text-[15px] md:text-[15px] xl:text-[16px]  xl:w-[70%] `}>
            A stunning website is useless if no one can find it. We blend technical excellence with smart SEO strategies to position your brand exactly where it needs to be: in front of your ideal audience.
            <br /><br />
            Search Engine Optimization is the practice of improving your platform’s visibility on Google and other search engines. But effective SEO isn’t just about keywords. It involves technical structure, mobile optimization, page speed, user experience, and high-quality content.
            With most traffic coming from mobile devices, we make sure your web-based solution is fully optimized for mobile performance and usability.
            </span>

            {/* Stack logo */}
            <div className="flex flex-wrap items-center justify-center gap-4 py-5 text-primary px-10 md:-ml-10 md:text-left md:justify-start text-3xl md:text-2xl xl:text-4xl">
              <SiSemrush/>
              <SiYoast/>
              <SiGooglesearchconsole/>

            </div>
            
            {/* Button */}
            <div className="flex justify-center md:justify-start mt-5 md:pb-20">
              <Link
                href="/services/search-engine-optimization"
                className={`${outfitSemibold.className} rounded-[3px] bg-primary px-5 py-2 text-white text-[11px] md:text-[11px] xl:text-[15px] shadow-lg shadow-blue-500/50 font-bold hover:bg-secondary`}
              >
                EXPLORE
              </Link>
            </div>
          </div>

        {/* Image */}
        <div className="xl:w-[50%] lg:w-[50%] w-full h-full md:w-[50%] xl:mt-[100px]">
            <Image 
              alt='services'
              className='relative xl:h-full xl:w-[80%] w-full h-full md:-mt-[265px] mx-auto' style={{ backgroundImage: 'url(/images/bg-cta0.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            src={imgSixth} 
            width={800}
            height={600} 
            priority/>
            
          </div>
        </div>
        
        {/* CTA */}
        <section>
             <div className='bg-white py-0 xl:py-20' style={{ backgroundImage: 'url(/images/bg-cta0.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}><TypewriterEffect/></div>
        </section>
      </section>
    </section>
  )
}

export default page