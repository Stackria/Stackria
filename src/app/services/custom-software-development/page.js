import Image from 'next/image'
import React from 'react'
import { outfitRegular, museoReg, outfitLight, outfitSemibold } from "@/app/layout";
import {styles} from '@/constants/style'
import imgOne from '@/assets/software-development.png'
import Link from 'next/link';
import CardHover from "@/components/CardHover.jsx"
import TypewriterEffect from '@/components/ui/typewriter'
import {Process} from '@/components/Process'

const page = () => {
return (
    <section>
        <div 
            className='w-full h-[35vh] bg-cover bg-center py-5 xl:mb-0 flex justify-center'
            style={{ backgroundImage: 'url(/images/bg-hero.svg)' }}
            >
            <h1 className={`${museoReg.className} text-white text-center text-[28px] xl:text-[42px]  py-10 `}>
                Custom Web Development
            </h1>
        </div>
    
        {/* Hero */}
        <div className="flex flex-col-reverse lg:flex-row md:flex-row xl:flex-row items-center px-5 justify-between mx-auto xl:px-10 xl:py-20 gap-10 md:gap-20 lg:gap-20 xl:gap-20 xl:justify-between">  
                <div className="xl:w-[50%] lg:w-[50%] md:w-[50%] md:text-left md:justify-start xl:pb-0 ">
                    <h1 
                        className={`${museoReg.className} text-left text-black text-[26px] md:text-[18px] lg:text-[36px] xl:text-[48px]`}
                        
                    >
                    Thrive Better with a Custom Web App 
                    </h1>

                    <span className={`${outfitLight.className} xl:text-justify text-justify text-slate-900 text-sm md:text-sm xl:text-[16px] xl:w-[70%] md:text-justify`}>
                    Custom web development is the process of building a web-based solution from scratch, using custom code and architecture to meet specific requirements.
                    <br /><br />
                    Studies show that 94% of first impressions are related to design, and 38% of users will stop engaging with a website if the content or layout is unattractive. 

                    </span>
                    {/* Button */}
                    <div className="flex justify-start md:justify-start mt-5 md:pb-20">
                        <Link
                        href="/contact"
                        className={`${outfitSemibold.className} rounded-[3px] bg-primary px-5 py-2 text-white text-[15px] md:text-[11px] xl:text-[15px] shadow-lg shadow-blue-500/50 font-bold hover:bg-secondary`}
                        >
                        Get A Free Consultation
                        </Link>
                    </div>
                </div>

                {/* Image */}
                <div className="xl:w-[50%] lg:w-[50%] md:w-[50%] w-full h-full">
                <Image 
                    alt='services'
                    className='relative xl:h-full xl:w-[80%] w-full h-full md:-mt-[360px] xl:-mt-[180px] mx-auto'
                    src={imgOne}
                    width={800}
                    height={600}
                    priority
                />

                </div>
        </div>

        {/* Features */}
        <div class="bg-slate-200 mt-20">
            <div class="px-5 py-20">
                <div class="">
                    <h1  className={`${museoReg.className}  text-black text-[18px] xl:text-[24px] pb-5`}>Our Custom Web Development</h1>
                    <p className={`${outfitLight.className} xl:text-justify text-center text-slate-900 text-sm md:text-sm xl:text-[16px] xl:w-[70%] md:text-justify`}>A custom-built platform enables your business to create an intuitive, aesthetically pleasing, and branded experience that holds attention and builds trust.
                    <br /><br />
                    At Stackria, we treat every project as a digital extension of your brand. Our custom development process begins with deep discovery and strategy sessions to understand your business, followed by UI/UX design, backend engineering, QA testing, and deployment.</p>
                </div>
                <div class="">
                    <CardHover/>
                </div>
                
            </div>
            {/* Reasons */}
            <div className="bg-white py-20 px-5 xl:px-10">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className={`${museoReg.className} text-primary text-[24px] md:text-[32px] xl:text-[42px] font-bold mb-6`}>
                    Why Clients Prefer Stackria for Custom Software Development
                    </h2>
                    <p className={`${outfitLight.className} text-slate-700 text-[14px] md:text-[16px] xl:text-[18px] leading-relaxed mb-10`}>
                    We don't just build software, we craft <span className='font-bold'>solutions</span> that align with your vision, scale with your <span className='font-bold'>growth</span>, and empower your business.
                    <br></br>
                    We develop strategic solutions tailored to your <span className='font-bold'>unique business objectives</span>. At Stackria, we align technology with your vision, creating scalable, future-proof platforms that empower operational efficiency, enhance user engagement, and support sustainable growth. Here’s why businesses choose us as their trusted development partner:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <div className="flex items-start gap-4">
                        <span className="text-primary text-2xl">✔️</span>
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
                        <span className="text-primary text-2xl">✔️</span>
                        <div>
                        <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>
                            Full-Cycle Development
                        </h3>
                        <p className={`${outfitLight.className} text-slate-700 text-[14px] md:text-[16px]`}>
                            From discovery to deployment, we handle every phase—ensuring quality, speed, and alignment at each step.
                        </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <span className="text-primary text-2xl">✔️</span>
                        <div>
                        <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>
                            Agile & Transparent Process
                        </h3>
                        <p className={`${outfitLight.className} text-slate-700 text-[14px] md:text-[16px]`}>
                            Stay in the loop with regular updates, iterative sprints, and collaboration at every milestone.
                        </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <span className="text-primary text-2xl">✔️</span>
                        <div>
                        <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>
                            Scalable & Future-Ready Tech
                        </h3>
                        <p className={`${outfitLight.className} text-slate-700 text-[14px] md:text-[16px]`}>
                            We use modern frameworks and scalable architectures so your software grows as your business grows.
                        </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <span className="text-primary text-2xl">✔️</span>
                        <div>
                        <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>
                            Focus on User Experience
                        </h3>
                        <p className={`${outfitLight.className} text-slate-700 text-[14px] md:text-[16px]`}>
                            Intuitive interfaces, seamless flows, and delightful interactions that keep users engaged.
                        </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <span className="text-primary text-2xl">✔️</span>
                        <div>
                        <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>
                            Dedicated Support & Partnership
                        </h3>
                        <p className={`${outfitLight.className} text-slate-700 text-[14px] md:text-[16px]`}>
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
            
            {/* CTA and Process*/}
            
            <div className='bg-white py-10 xl:py-20' style={{ backgroundImage: 'url(/images/bg-cta0.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Process/>
            <TypewriterEffect/>
            </div>
            
            

            
            
        </div>
    </section>
  )
}

export default page