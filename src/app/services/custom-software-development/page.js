'use client'
import Image from 'next/image'
import React from 'react'
import { outfitRegular, museoReg, outfitLight, outfitSemibold, museoBold } from "@/app/layout";
import {styles} from '@/constants/style'
import imgOne from '@/assets/service-img1.png'
import Link from 'next/link';
import CardHover from "@/components/CardHover.jsx"
import TypewriterEffect from '@/components/ui/typewriter'
import {Testimonials} from '@/components/Testimonials'
import {Process} from '@/components/Process'
import { FaCheckCircle } from "react-icons/fa";
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const page = () => {
return (
    <section className="px-0">
    
        {/* Hero */}
        <div className="flex flex-col lg:flex-row md:flex-row xl:flex-row items-center px-0 justify-between mx-auto xl:px-0 xl:py-20 gap-10 md:gap-10 lg:gap-20 xl:gap-0 xl:justify-between">  
                <div className="xl:w-[40%] lg:w-[50%] md:w-[40%] md:text-left md:justify-start xl:p-16 xl:pb-0 pt-28 px-5 md:ml-5 md:px-2">
                    <h1 
                        className={`${outfitSemibold.className} text-left text-slate-900 text-[36px] md:text-[28px] lg:text-[36px] xl:text-[58px]`}
                        
                    >
                    Thrive Better with A Custom Web Experience 
                    </h1>

                    <span className={`${outfitLight.className} xl:text-justify text-justify text-slate-700 text-[15px] xs:text-[15px] md:text-[15px] xl:text-[16px] xl:w-[70%] md:text-justify`}>
                    Studies show that 94% of first impressions are related to design, and 38% of users will stop engaging with a website if the content or layout is unattractive. 

                    </span>
                    {/* Button */}
                    <div className="flex justify-start md:justify-start mt-5 md:pb-20">
                        <Link
                        href="/contact"
                        className={`${outfitSemibold.className} rounded-[3px] bg-primary px-5 py-2 text-white text-[15px] md:text-[15px] xl:text-[16px] shadow-lg shadow-blue-500/50 font-bold hover:bg-secondary`}
                        >
                        Get A Free Consultation
                        </Link>
                    </div>
                </div>

                {/* Image */}
                <div className="xl:w-[60%] lg:w-[50%] md:w-[50%] xl:-mt-[50px] w-full h-full">
                <Image 
                    alt='stackria web development services'
                    className='relative xl:h-full xl:w-full w-full h-full md:-mt-[120px] mx-auto'
                    src={imgOne}
                    width={800}
                    height={600}
                    priority
                />

                </div>
        </div>
        
        {/* Intro */}
        <section
            className="bg-white py-20 px-6 md:px-12 lg:px-24 mx-auto xl:py-20"
            style={{
                backgroundImage: 'url(/images/bg-cta0.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className={`${outfitSemibold.className} text-[34px] md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight text-left xl:text-center`}
            >
                Every business has a story. Let’s build yours online.
            </motion.h2>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className={`${outfitLight.className} space-y-6 mb-12 max-w-3xl text-slate-800 text-[15px] xs:text-[15px] xl:text-[16px] text-left xl:text-center mx-auto`}
            >
                <motion.p variants={itemVariants}>
                Your business is one of a kind, and your web presence should reflect that uniqueness. We craft custom web solutions that tell your story clearly, engaging your audience at every step.
                </motion.p>
                <motion.p variants={itemVariants}>
                From sleek designs to seamless functionality, our custom development process focuses on creating a digital experience that grows with your business and resonates with your customers.
                </motion.p>
            </motion.div>

            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-3xl mx-auto text-left xl:text-center">
                <motion.h3
                variants={itemVariants}
                className={`${outfitSemibold.className} text-[34px] md:text-3xl font-semibold text-slate-900 mb-6 text-left xl:text-center`}
                >
                What We Build for You
                </motion.h3>

                <motion.ul variants={containerVariants} className="space-y-4 xs:text-[15px]">
                {[
                    "Tailored user interfaces designed for your audience",
                    "Scalable architectures built for future growth",
                    "Smooth integrations with your existing tools and platforms",
                    "Mobile-first experiences that delight on any device",
                ].map((item, idx) => (
                    <motion.li
                    key={idx}
                    variants={itemVariants}
                    className={`${outfitLight.className} flex items-start text-slate-800 justify-start xl:justify-center text-left xl:text-center`}
                    >
                    <FaCheckCircle className="text-primary w-3 h-3 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-[15px] xl:text-[16px]">{item}</span>
                    </motion.li>
                ))}
                </motion.ul>
            </motion.div>
        </section>



        {/* Features */}
        <div class="bg-slate-100 mt-20 xs:mx-auto xl:py-20">
            <div class="py-20">
                <div class="">
                    <h1  className={`${outfitSemibold.className} text-slate-900 text-center text-[34px] xl:text-[42px] pb-5 font-bold`}>Our Custom Web Development</h1>
                    <p className={`${outfitLight.className} xl:text-center text-center text-slate-900 text-[15px] xl:text-[16px] xl:w-[40%] md:text-justify xl:mx-auto px-10`}>At Stackria We build solutions that center your customers, narrate your brand, and scale with you.
                    Whether you're launching your startup or evolving your SME, we help you turn ideas into intuitive digital experiences.
                    
                    </p>
                </div>
                <div class="">
                    <CardHover/>
                </div>
                
            </div>  
        </div>
        
        {/* Reasons */}
            <div className="bg-white py-20 px-5 xl:px-10 md:px-10">
                <div className="max-w-5xl mx-auto text-center xl:py-20">
                    <h2 className={`${outfitSemibold.className} text-slate-900 text-[34px] font-bold md:text-[32px] xl:text-[42px] xl:text-center text-left mb-6`}>
                    Why Clients Prefer Stackria for Custom Software Development
                    </h2>
                    <p className={`${outfitLight.className} text-slate-800 text-left text-[15px] xl:px-20 xl:text-[16px] leading-relaxed mb-10 xl:w-[60%] xl:text-center xl:mx-auto`}>
                    We don't just build software, we craft <span className='font-bold'>solutions</span> that align with your vision, scale with your <span className='font-bold'>growth</span>, and empower your business.
                    
                    We develop strategic solutions tailored to your <span className='font-bold'>unique business objectives</span>.  Here’s why businesses choose us as their trusted development partner:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left px-10 xl:px-0">
                        <div className="flex items-start gap-4">
                        <FaCheckCircle className='text-primary text-2xl'/>
                        <div>
                            <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>
                                Tailored Solutions, Not Templates
                            </h3>
                            <p className={`${outfitLight.className} text-slate-700 text-[14px] md:text-[16px]`}>
                                Every project is custom-built from the ground up to fit your unique workflows, challenges, and goals.
                            </p>
                        </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaCheckCircle className='text-primary text-2xl'/>
                            <div>
                                <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>
                                    Full-Cycle Development
                                </h3>
                                <p className={`${outfitLight.className} text-slate-700 text-[14px] lg:text-[16px]`}>
                                    From discovery to deployment, we handle every phase—ensuring quality, speed, and alignment at each step.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaCheckCircle className='text-primary text-2xl'/>
                            <div>
                                <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>
                                    Agile & Transparent Process
                                </h3>
                                <p className={`${outfitLight.className} text-slate-700 text-[14px] lg:text-[16px]`}>
                                    Stay in the loop with regular updates, iterative sprints, and collaboration at every milestone.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaCheckCircle className='text-primary text-2xl'/>
                            <div>
                                <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>
                                    Scalable & Future-Ready Tech
                                </h3>
                                <p className={`${outfitLight.className} text-slate-700 text-[14px] lg:text-[16px]`}>
                                    We use modern frameworks and scalable architectures so your software grows as your business grows.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaCheckCircle className='text-primary text-2xl'/>
                            <div>
                                <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>
                                    Focus on User Experience
                                </h3>
                                <p className={`${outfitLight.className} text-slate-700 text-[14px] lg:text-[16px]`}>
                                    Intuitive interfaces, seamless flows, and delightful interactions that keep users engaged.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaCheckCircle className='text-primary text-2xl'/>
                            <div>
                                <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>
                                    Dedicated Support & Partnership
                                </h3>
                                <p className={`${outfitLight.className} text-slate-700 text-[14px] lg:text-[16px]`}>
                                    We treat your project like our own—offering proactive support, guidance, and ongoing collaboration.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <Link href="/contact">
                            <button className={`${outfitSemibold.className} bg-primary text-white rounded px-6 py-3 text-[15px] shadow-lg hover:bg-secondary`}>
                            Let’s Build Together
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            
             {/* Testimonial */}
                <Testimonials/>

            {/* CTA and Process*/}
            
            <div className='bg-white py-10 xl:py-20' style={{ backgroundImage: 'url(/images/bg-cta0.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Process/>
            <TypewriterEffect/>
            </div>
    </section>
  )
}

export default page