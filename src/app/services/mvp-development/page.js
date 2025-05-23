
import Image from 'next/image'
import React from 'react'
import { outfitRegular, museoReg, outfitLight, outfitSemibold, museoBold } from "@/app/layout";
import {styles} from '@/constants/style'
import imgOne from '@/assets/service-img3.png'
import Link from 'next/link';
import CardHover from "@/components/CardHover.jsx"
import TypewriterEffect from '@/components/ui/typewriter'
import {Testimonials} from '@/components/Testimonials'
import {Process} from '@/components/Process'
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export async function generateMetadata() {
  return {
    title: 'MVP Development for Startups | Stackria',
    description:
      'From idea to launch—Stackria rapidly builds MVPs that validate ideas and accelerate growth.',
    alternates: {
      canonical: 'https://stackria.com/services/mvp-development',
    },
    openGraph: {
      title: 'MVP Development for Startups | Stackria',
      description:
        'From idea to launch—Stackria rapidly builds MVPs that validate ideas and accelerate growth.',
      url: 'https://stackria.com/services/mvp-development',
      siteName: 'Stackria',
      images: [
        {
          url: '/images/og-mvp.jpg',
          width: 1200,
          height: 630,
          alt: 'Startup MVP Services - Stackria',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'MVP Development for Startups | Stackria',
      description:
        'From idea to launch—Stackria rapidly builds MVPs that validate ideas and accelerate growth.',
      images: ['/images/og-mvp.jpg'],
    },
  };
}



const features = [
  "Test core features with early adopters",
  "Collect valuable feedback before scaling",
  "Get investor interest with something tangible",
  "Save time and money by building only what matters now",
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};


const page = () => {

return (
    <section className="px-0">
    
        {/* Hero */}
        <div className="flex flex-col lg:flex-row md:flex-row xl:flex-row items-center px-0 justify-between mx-auto xl:px-0 xl:py-20 gap-10 md:gap-10 lg:gap-20 xl:gap-0 xl:justify-between xl:-mb-20">  
                <div className="xl:w-[40%] lg:w-[50%] md:w-[40%] md:text-left md:justify-start xl:p-16 xl:pb-0 pt-28 px-5 md:ml-5 xl:mt-5 md:px-2 2xl:-ml-5 2xl:-mt-20">
                    <h1 
                        className={`${outfitSemibold.className} text-left text-slate-900 text-[34px] md:text-[28px] lg:text-[36px] xl:text-[58px]`}
                        
                    >
                    MVP Development That Moves You Forward 
                    </h1>

                    <span className={`${outfitLight.className} xl:text-justify text-justify text-slate-700 text-[15px] xs:text-[15px] md:text-[15px] xl:text-[16px] xl:w-[70%] md:text-justify`}>
                    Validate your idea, attract real users, and launch with confidence without wasting time or resources. At Stackria, we build MVPs that test your vision, not your patience.

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
                <div className="xl:w-[60%] lg:w-[50%] md:w-[50%] xl:-mt-20 w-full h-full">
                  <Image 
                      alt='stackria web development services'
                      className='relative xl:h-full xl:w-full w-full h-full md:-mt-[120px] mx-auto 2xl:-mt-40'
                      src={imgOne}
                      width={800}
                      height={600}
                      priority
                />

                </div>
        </div>

        {/* Intro */}
        <section
          className="bg-white py-20 px-6 md:px-12 lg:px-24 mx-auto"
          style={{
            backgroundImage: 'url(/images/bg-cta0.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h2
            className={`${outfitSemibold.className} text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight text-left xl:text-center xl:mx-auto xl:w-[60%]`}
          >
            Turning your idea into a product shouldn’t feel like a gamble.
          </h2>

          <div
            className={`${outfitLight.className} space-y-6 mb-12 max-w-3xl text-gray-700 text-[16px] xs:text-[15px] xl:text-[16px] text-left xl:text-center mx-auto`}
          >
            <p>
              You've got the vision, the problem you're solving, and maybe even some buzz. But before going all-in, you need <strong>proof that your idea works, that users care, and that investors are interested</strong>. That’s where Stackria comes in.
            </p>

            <p>
              We help you <strong>design, develop, and launch a lean, functional MVP</strong> that does one thing really well: prove your concept in the real world.
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-left xl:text-center">
            <h3
              className={`${outfitSemibold.className} text-[34px] md:text-3xl font-semibold text-slate-900 mb-6`}
            >
              What is an MVP and Why Does It Matter?
            </h3>

            <p
              className={`${outfitRegular.className} mb-6 text-gray-700 text-[15px] xl:text-[16px]`}
            >
              An MVP isn’t just a “simple version” of your product. It’s a <strong>strategic tool</strong> to:
            </p>

            <ul
              className="space-y-4"
              aria-label="List of MVP benefits"
            >
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  className={`${outfitLight.className} flex items-start text-gray-800 hover:text-primary transition-colors cursor-pointer justify-start xl:justify-center text-left xl:text-center`}
                  tabIndex={0}
                  role="listitem"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') alert(feature);
                  }}
                >
                  <FaCheckCircle className="text-primary w-3 h-3 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-[15px] xl:text-[16px]">{feature}</span>
                </li>
              ))}
            </ul>

            <p
              className={`${outfitLight.className} mt-10 text-[15px] xl:text-[16px] text-gray-700 text-left xl:text-center`}
            >
              Whether you’re pitching to investors, entering a new market, or solving a user pain point, <strong>you don’t need the final product. You need a smart, focused start.</strong>
            </p>
          </div>
        </section>



        {/* Features */}
        <div class="bg-slate-100 mt-20 xs:mx-auto xl:py-20">
            <div class="py-20">
                <div class="">
                    <h1  className={`${outfitSemibold.className} text-slate-900 text-center text-[34px] xl:text-[42px] pb-5 font-bold`}>Our MVP Development</h1>
                    <p className={`${outfitLight.className} xl:text-center text-center text-slate-900 text-[16px] md:text-[15px] xl:text-[16px] xl:w-[40%] md:text-justify xl:mx-auto px-10`}>At Stackria We build solutions that center your customers, narrate your brand, and scale with you.
                    Whether you're launching your startup or evolving your SME, we help you turn ideas into intuitive digital experiences.
                    </p>
                </div>
                <div class="">
                    <CardHover/>
                </div>
                
            </div>

            {/* Reasons */}
            <div className="bg-white py-20 px-5 xl:px-10 md:px-10">
                <div className="max-w-5xl mx-auto text-center xl:py-20">
                    <h2 className={`${outfitSemibold.className} text-slate-900 text-[38px] font-bold md:text-[32px] xl:text-[42px] text-left mb-6 xl:text-center`}>
                    Why Stackria for MVP Development
                    </h2>
                    <p className={`${outfitLight.className} text-slate-800 text-left text-[15px] xl:px-20 leading-relaxed mb-10 xl:w-[60%] xl:text-center xl:mx-auto`}>
                    At Stackria, we don’t just code MVPs,  we <span className='font-bold'>partner</span> with startups and businesses to help them validate, evolve, and scale. Here's what makes our approach different:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left px-10 xl:px-0">
                        <div className="flex items-start gap-4">
                        <FaCheckCircle className='text-primary text-2xl'/>
                        <div>
                            <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>
                                Strategy Before Software
                            </h3>
                            <p className={`${outfitLight.className} text-slate-700 text-[14px] lg:text-[16px]`}>
                                Through discovery and user-focused research, we define the problem and decide what features your MVP needs. 
                            </p>
                        </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaCheckCircle className='text-primary text-2xl'/>
                            <div>
                                <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>
                                    Human-Centered Design 
                                </h3>
                                <p className={`${outfitLight.className} text-slate-700 text-[14px] lg:text-[16px]`}>
                                    We design MVPs that are intuitive, visually compelling, and focused on user experience, without overbuilding.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaCheckCircle className='text-primary text-2xl'/>
                            <div>
                                <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>
                                    Scalable Architecture from Day One
                                </h3>
                                <p className={`${outfitLight.className} text-slate-700 text-[14px] lg:text-[16px]`}>
                                    Our code and infrastructure make it easy to add features, handle more users, and evolve your product without costly rewrites.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaCheckCircle className='text-primary text-2xl'/>
                            <div>
                                <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>
                                    Post-Launch Support
                                </h3>
                                <p className={`${outfitLight.className} text-slate-700 text-[14px] lg:text-[16px]`}>
                                    We offer straightforward post-launch support and clear documentation to help you move forward confidently.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaCheckCircle className='text-primary text-2xl'/>
                            <div>
                                <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>
                                    Built to Tell a Story
                                </h3>
                                <p className={`${outfitLight.className} text-slate-700 text-[14px] lg:text-[16px]`}>
                                    Built to showcase your vision clearly helping users, partners, and investors quickly grasp your MVP’s value.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaCheckCircle className='text-primary text-2xl'/>
                            <div>
                                <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] lg:text-[18px]`}>
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
            
            {/* Testimonial */}
              <Testimonials/>

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