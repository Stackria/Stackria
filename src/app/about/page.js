import Image from 'next/image'
import React from 'react'
import { outfitRegular, museoReg, outfitLight } from "@/app/layout";
import {styles} from '@/constants/style'
import img from '@/assets/about-us.png'
import { RiUser5Fill } from "react-icons/ri";
import { BiSolidBolt } from "react-icons/bi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { MdConnectWithoutContact } from "react-icons/md";
import { MdContactSupport } from "react-icons/md";
import { GiLifeSupport } from "react-icons/gi";
import TypewriterEffect from '@/components/typewriter'

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
        {/* Hero Section */}
        
        <section className="flex flex-col-reverse lg:flex-row md:flex-row xl:flex-row items-center justify-between mx-auto xl:px-10 xl:py-20 gap-20">
          {/* Hero text */}
          <div  className="xl:w-[50%] lg:w-[50%] pb-10 xl:pb-0 ">
            <h1 
              className={`${museoReg.className} text-left text-primary text-[26px] md:text-[18px] lg:text-[36px] xl:text-[48px]`}
              
            >
              Empowering Businesses with Scalable Web-Based Solutions
            </h1>

            <span className={`${outfitLight.className} xl:text-left text-justify text-slate-700 text-sm md:text-[16px] xl:text-[16px]  xl:w-[70%] `}>
            At Stackria, we don’t just build websites, we engineer <span className='font-bold text-black'>powerful</span>, scalable, and conversion-driven web-based solutions designed to help businesses <span className='font-bold text-black'>thrive</span> in the digital era. 
            <br /><br />
            Our mission is to bridge the gap between technology and business growth, crafting seamless, high-performance platforms that drive results.
            </span>
          </div>

          {/* Image */}
          <div className="xl:w-[50%] lg:w-[50%] w-full h-full md:w-[50%]">
            <Image alt='about-us'
            className='relative xl:h-full xl:w-full w-full h-full mx-auto'
            src={img} 
            width={150} 
            height={150} 
            priority/>
            
          </div>
        </section>

        {/* Our Story */}
        <section class="flex flex-col xl:flex-row gap-10 md:flex-row lg:py-20 xl:px-20 item-center mx-auto bg-slate-50">
          <div className="">
              <h1 className={`${museoReg.className} text-left text-primary text-[26px] `}>
                Who We Are
              </h1>
              <p className={`${outfitLight.className} xl:text-left text-justify text-black text-sm xl:text-[16px] md:text-[16px] xl:w-[100%]`}>
              Stackria is a forward-thinking web development agency dedicated to delivering tailored digital solutions for businesses of all sizes. 
              We specialize in custom web development, MVP development, e-commerce solutions, web maintenance, and SEO optimization, ensuring our clients have the tools they need to succeed online. 
              <br /><br />

              Our team of experts is committed to providing exceptional service, innovative solutions, and measurable results that drive growth and success for our clients.
              </p>
          </div>

          {/* Our Values */}
          <div className="xl:px-20 p-5">
              <h1 className={`${museoReg.className} text-left text-primary text-[26px] `}>
                What We Do
              </h1>
              <p className={`${outfitLight.className} xl:text-left text-justify text-black text-sm xl:text-[16px] md:text-[16px] xl:w-[100%]`}>
              Our expertise lies in creating fast, secure, and scalable digital experiences that enhance user engagement and boost business performance. 
              Whether you're a startup validating an idea, a growing business expanding your online store, or an established company looking to optimize your web presence, we provide strategic, results-driven solutions. 
              <br /><br />

              Our commitment to excellence, innovation, and collaboration ensures that we deliver exceptional value to our clients, helping them achieve their goals and grow their business.
              </p>
          </div>
        </section>

        {/* Beliefs */}
        <section className="flex flex-col py-10">
          <div >
            <h1 className={`${museoReg.className} text-center text-primary text-[26px] py-10`}>
            We're on a mission</h1>
          </div>
          <div className='flex flex-col md:flex-row md:flex-wrap lg:flex-row xl:flex-row px-10 justify-between gap-10 '>
            <div className="bg-slate-100 rounded-md py-10 px-5 xl:w-[100%] flex-1 min-w-[250px]">
              <MdConnectWithoutContact className="ml-2 text-white text-[40px] bg-primary rounded-full hover:bg-white hover:text-primary"/>
              <h1 className={`${museoReg.className} text-left text-primary text-[26px] `}>
              Long-Term Partnerships & Growth</h1>
              <p className={`${outfitLight.className}  xl:text-left text-justify text-slate-700 text-sm xl:text-[16px] md:text-[16px]`}>
              Your success is our success. We don’t just build and leave, we support, maintain, and optimize your platform as your business grows. Stackria is committed to being your long-term digital partner, helping you scale with confidence.
              </p>
            </div>
            
            <div className="bg-slate-100 rounded-md py-10 px-5 xl:w-[100%] flex-1 min-w-[250px]">
              <RiUser5Fill  className="ml-2 text-white text-[40px] bg-primary rounded-full hover:bg-white "/>
              <h1 className={`${museoReg.className} text-left text-primary text-[26px] `}>
              User-Centric Design & Functionality</h1>
              <p className={`${outfitLight.className}  xl:text-left text-justify text-slate-700 text-sm xl:text-[16px] md:text-[16px]`}>
              Whether you're a startup validating an idea, a growing business expanding your online store, or an established company looking to optimize your web presence, we provide strategic,results-driven solutions. 
              </p>
            </div>

            <div className="bg-slate-100 rounded-md py-10 px-5 flex-1 min-w-[250px] flex-shrink-0 w-full md:w-auto">
              <BiSolidBolt  className="ml-2 text-white text-[40px] bg-primary rounded-full hover:bg-white "/>
              <h1 className={`${museoReg.className} text-left text-primary text-[26px] `}>
              Cutting-Edge Strategy Developmen</h1>
              <p className={`${outfitLight.className}  xl:text-left text-justify text-slate-700 text-sm xl:text-[16px] md:text-[16px]`}>
              We believe that every business deserves a unique and cutting-edge digital presence. Our approach is centered on continuous learning, adopting the latest technologies, and delivering forward-thinking solutions that keep you ahead of the competition. 
              </p>
            </div>
          </div>
        </section>
        {/* CTA */}
        <section>
             <div className='bg-white py-0 xl:py-20' style={{ backgroundImage: 'url(/images/bg-cta.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}><TypewriterEffect/></div>
        </section>
      </section>
    </section>
  )
}

export default page