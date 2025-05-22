import Image from 'next/image'
import React from 'react'
import { outfitRegular, museoReg, outfitLight, outfitSemibold } from "@/app/layout";
import {styles} from '@/constants/style'
import img from '@/assets/service-img1.png'
import { RiUser5Fill } from "react-icons/ri";
import { BiSolidBolt } from "react-icons/bi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from 'next/link';
import {Testimonials} from '@/components/Testimonials'
import { MdConnectWithoutContact } from "react-icons/md";
import { MdContactSupport } from "react-icons/md";
import { GiLifeSupport } from "react-icons/gi";
import { FaCheckCircle } from "react-icons/fa";
import TypewriterEffect from '@/components/ui/typewriter'


const page = () => {
  return (
    <section >
      {/* <div 
        className='w-full h-[20vh] bg-cover bg-center py-5 mb-10 xl:mb-0 flex items-center justify-center'
        style={{ backgroundImage: 'url(/images/bg-hero.svg)' }}
      >
        <h1 className={`${outfitSemibold.className} text-white text-[34px] xl:text-[42px] pt-20 `}>
          Who We Are
        </h1>
      </div> */}


      <section className=''>
        {/* Hero Section */}
        
        <section className="flex flex-col lg:flex-row md:flex-row xl:flex-row items-center justify-between mx-auto xl:py-20 xl:gap-20 gap-10">
          
          {/* Hero text */}
          <div  className="xl:w-[50%] lg:w-[50%] pb-10 xl:pb-0 px-5 xl:px-12 xl:-mt-10 mt-20 md:w-[50%] md:mt-24 md:px-6">
            <h1 
              className={`${outfitSemibold.className} text-left text-slate-900 text-[34px] md:text-[32px] lg:text-[36px] xl:text-[48px]`}
              
            >
              Empowering Businesses with Scalable Web-Based Solutions
            </h1>

            <span className={`${outfitLight.className} xl:text-left text-justify text-slate-800 text-[15px] md:text-[15px] xl:text-[16px] xl:w-[70%]`}>
            At Stackria, we don’t just build websites, we engineer <span className='font-bold text-black'>powerful</span>, scalable, and conversion-driven web-based solutions designed to help businesses <span className='font-bold text-black'>thrive</span> in the digital era. 
            
            </span>
          </div>

          {/* Image */}
          <div className="xl:w-[50%] lg:w-[50%] w-full h-full md:w-[50%] md:-mt-10">
            <Image alt='about-us'
            className='relative xl:h-full xl:w-full w-full h-full mx-auto xl:-mt-24'
            src={img} 
            width={800} 
            height={700} 
            priority/>
            
          </div>
        </section>

        {/* Our Story */}
        <section class="flex flex-col xl:flex-row gap-10 md:flex-row lg:py-20 xl:px-20 item-center mx-auto bg-slate-50 px-7 py-10" style={{ backgroundImage: 'url(/images/bg-cta0.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="xl:px-20 py-10">
              <h1 className={`${outfitSemibold.className} text-left text-slate-900 text-[34px] xl:text-[42px]`}>
                Who We Are
              </h1>
              <p className={`${outfitLight.className} xl:text-left text-left text-slate-800 text-[15px] xl:text-[16px] md:text-[15px] xl:w-[100%]`}>
              Stackria is a modern web development agency built for businesses that think ahead. We craft tailored digital solutions—from custom platforms and MVPs to e-commerce systems, ongoing web care, and SEO optimization. Our mission is simple: to equip every brand we partner with with the tools, technology, and strategy they need to thrive online.
              <br /><br />

              Our team of experts is committed to providing exceptional service, innovative solutions, and measurable results that drive growth and success for our clients.
              </p>
          </div>

          {/* Our Values */}
          <div className="xl:px-20 py-10">
              <h1 className={`${outfitSemibold.className} text-left text-slate-900 text-[34px] xl:text-[42px]`}>
                What We Do
              </h1>
              <p className={`${outfitLight.className} xl:text-left text-left text-slate-800 text-[15px] xl:text-[15px] md:text-[16px] xl:w-[100%]`}>
              At Stackria, we build fast, secure, and scalable digital experiences designed to captivate users and drive measurable growth. Whether you're validating a new idea, scaling an online store, or refining an established digital presence, we turn goals into solutions—strategic, story-led, and built for long-term impact.
              <br /><br />

              Our commitment to excellence, innovation, and collaboration ensures that we deliver exceptional value to our clients, helping them achieve their goals and grow their business.
              </p>
          </div>
        </section>

        {/* Beliefs */}
        <section className="flex flex-col xl:px-7 py-10">
          <div >
            <h1 className={`${outfitSemibold.className} text-center text-slate-900 text-[34px] py-10 xl:text-[42px]`}>
            We're on a mission</h1>
          </div>
          <div className='flex flex-col md:flex-row md:flex-wrap lg:flex-row xl:flex-row px-5 justify-between gap-10 '>
            <div className="bg-slate-50 rounded-md py-10 px-5 xl:w-[100%] flex-1 min-w-[250px]">
              <MdConnectWithoutContact className="ml-2 text-white text-[20px] bg-primary rounded-full hover:bg-white hover:text-primary"/>
              <h1 className={`${outfitSemibold.className} text-left text-slate-900 text-[34px] `}>
              Long-Term Partnerships & Growth</h1>
              <p className={`${outfitLight.className}  xl:text-left text-left text-slate-800 text-[15px] md:text-[15px] xl:text-[16px]`}>
              Your success is our success. We don’t just build and leave, we support, maintain, and optimize your platform as your business grows. Stackria is committed to being your long-term digital partner, helping you scale with confidence.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-md py-10 px-5 xl:w-[100%] flex-1 min-w-[250px]">
              <RiUser5Fill  className="ml-2 text-white text-[20px] bg-primary rounded-full hover:bg-white "/>
              <h1 className={`${outfitSemibold.className} text-left text-slate-900 text-[34px] `}>
              User-Centric Design & Functionality</h1>
              <p className={`${outfitLight.className}  xl:text-left text-left text-slate-800 text-[15px] md:text-[15px] xl:text-[16px]`}>
              Whether you're a startup validating an idea, a growing business expanding your online store, or an established company looking to optimize your web presence, we provide strategic,results-driven solutions. 
              </p>
            </div>

            <div className="bg-slate-50 rounded-md py-10 px-5 flex-1 min-w-[250px] flex-shrink-0 w-full md:w-auto">
              <BiSolidBolt  className="ml-2 text-white text-[20px] bg-primary rounded-full hover:bg-white "/>
              <h1 className={`${outfitSemibold.className} text-left text-slate-900 text-[34px] `}>
              Cutting-Edge Strategy Development</h1>
              <p className={`${outfitLight.className}  xl:text-left text-left text-slate-800 text-[15px] md:text-[15px] xl:text-[16px]`}>
              We believe that every business deserves a unique and cutting-edge digital presence. Our approach is centered on continuous learning, adopting the latest technologies, and delivering forward-thinking solutions that keep you ahead of the competition. 
              </p>
            </div>
          </div>
        </section>
        
        {/* Reasons */}
        <div className="bg-white py-20 px-5 xl:px-10 md:px-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className={`${outfitSemibold.className} text-slate-900 text-[34px] font-bold md:text-[32px] xl:text-[42px] text-left mb-6 xl:text-center`}>
              Principles We Believe In
            </h2>
            <p className={`${outfitLight.className} text-slate-800 text-left text-[15px] xl:px-20 md:text-[16px] xl:text-[16px] leading-relaxed mb-10 xl:w-[60%] xl:text-center xl:mx-auto`}>
              At Stackria, we’re not just building platforms, we’re crafting digital foundations rooted in purpose. Our principles guide every decision, every line of code, and every solution we ship.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left px-10 xl:px-0 ">

              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-primary text-[20px]" />
                <div>
                  <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>
                    Brand-First Thinking
                  </h3>
                  <p className={`${outfitLight.className} text-slate-700 text-[15px] lg:text-[16px]`}>
                    We believe your digital presence should echo your brand’s heart, not just its logo. We go deep to align form and function with your voice.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-primary text-[20px]" />
                <div>
                  <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] lg:text-[18px]`}>
                    People Before Pixels
                  </h3>
                  <p className={`${outfitLight.className} text-slate-700 text-[15px] md:text-[16px]`}>
                    Every solution is designed around real users, what they feel, what they need, and how they move. Empathy drives our UX.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-primary text-[20px]" />
                <div>
                  <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>
                    Performance is Care
                  </h3>
                  <p className={`${outfitLight.className} text-slate-700 text-[15px] lg:text-[16px]`}>
                    Speed, responsiveness, and scalability aren’t afterthoughts, they’re baked in from day one. Because fast is kind, and future-ready is smart.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-primary text-[20px]" />
                <div>
                  <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>
                    Long-Term Partnerships
                  </h3>
                  <p className={`${outfitLight.className} text-slate-700 text-[15px] lg:text-[16px]`}>
                    We don’t vanish after launch. From maintenance to scaling, we’re here when you need us, because growth is a journey, not a handoff.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-primary text-[20px]" />
                <div>
                  <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>
                    Storytelling in Every Pixel
                  </h3>
                  <p className={`${outfitLight.className} text-slate-700 text-[15px] lg:text-[16px]`}>
                    From homepage to product page, we design with a story arc. Because your visitors aren’t just browsing, they’re deciding whether to believe.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-primary text-[20px]" />
                <div>
                  <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>
                    Business-Driven Execution
                  </h3>
                  <p className={`${outfitLight.className} text-slate-700 text-[15px] lg:text-[16px]`}>
                    Creativity is only half the puzzle. We deliver with your bottom line in mind, measuring success through engagement, retention, and return.
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-10">
              <Link href="/contact">
                <button className={`${outfitSemibold.className} bg-primary text-white rounded px-6 py-3 text-[15px] shadow-lg hover:bg-secondary`}>
                  Let’s Build With Purpose
                </button>
              </Link>
            </div>
          </div>
        </div>


        {/* Testimonial */}
        <Testimonials/>

        {/* CTA */}
        <section>
             <div className='bg-white py-0 xl:py-20' ><TypewriterEffect/></div>
        </section>
      </section>
    </section>
  )
}

export default page