
import Image from 'next/image'
import React from 'react'
import { outfitRegular, museoReg, outfitLight, outfitSemibold, museoBold } from "@/app/layout";
import {styles} from '@/constants/style'
import imgOne from '@/assets/service-img2.png'
import Link from 'next/link';
import CardHover from "@/components/CardHover.jsx"
import TypewriterEffect from '@/components/ui/typewriter'
import {Process} from '@/components/Process'
import {Testimonials} from '@/components/Testimonials'
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export async function generateMetadata() {
  return {
    title: 'E-Commerce Web-Based Solutions | Stackria',
    description:
      'From product pages to payment gateways, Stackria builds sleek, high-converting e-commerce platforms that scale as you grow.',
      alternates: {
      canonical: 'https://stackria.com/services/e-commerce-development',
    },

    openGraph: {
      title: 'E-Commerce Web-Based Solutions | Stackria',
      description:
        'From product pages to payment gateways, Stackria builds sleek, high-converting e-commerce platforms that scale as you grow.',
      url: 'https://stackria.com/services/e-commerce-development',
      siteName: 'Stackria',
      images: [
        {
          url: '/images/og-ecommerce.jpg',
          width: 1200,
          height: 630,
          alt: 'E-Commerce Solutions by Stackria',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'E-Commerce Web-Based Solutions | Stackria',
      description:
        'From product pages to payment gateways, Stackria builds sleek, high-converting e-commerce platforms that scale as you grow.',
      images: ['/images/og-ecommerce.jpg'],
    },
  };
}

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
                        className={`${outfitSemibold.className} text-left text-slate-900 text-[34px] md:text-[28px] lg:text-[36px] xl:text-[53px]`}
                        
                    >
                    More Than a Store. It’s Your Brand’s Digital Experience. 
                    </h1>

                    <span className={`${outfitLight.className} xl:text-justify text-justify text-slate-700 text-[15px] md:text-[15px] xl:text-[16px] xl:w-[50%] md:text-justify`}>
                    At Stackria, we don’t just build e-commerce platforms, we help businesses tell compelling product stories that drive connection, trust, and growth.

                    </span>
                    {/* Button */}
                    <div className="flex justify-start md:justify-start mt-5 md:pb-20">
                        <Link
                        href="/contact"
                        className={`${outfitSemibold.className} rounded-[3px] bg-primary px-5 py-2 text-white text-[15px] md:text-[15px] shadow-lg shadow-blue-500/50 font-bold hover:bg-secondary`}
                        >
                        Launch Your Storefront Today
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
        <div
            className="bg-white py-20 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto"
            style={{
                backgroundImage: 'url(/images/bg-cta2.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            >
            <h2
                className={`${outfitSemibold.className} text-[34px] md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight text-left xl:text-center`}
            >
                Your products deserve more than a generic store.
            </h2>

            <div
                className={`${outfitLight.className} space-y-6 mb-12 max-w-3xl text-gray-700 text-[15px] xl:text-[16px] text-left xl:text-center mx-auto`}
            >
                <p>
                In a crowded marketplace, a basic template store won’t cut it. Stackria builds <strong>bespoke e-commerce solutions</strong> designed to convert, scale, and represent your brand at its best.
                </p>

                <p>
                From Shopify customizations to WooCommerce to headless storefronts, we combine <strong>powerful tech with persuasive UX</strong>—so every click moves your business forward.
                </p>
            </div>

            <div className="max-w-3xl text-left xl:text-center mx-auto">
                <h3
                className={`${outfitSemibold.className} text-[34px] md:text-3xl font-semibold text-slate-900 mb-6`}
                >
                Why Stackria for E-Commerce?
                </h3>

                <ul className="space-y-4 xs:text-[15px]">
                {[
                    "Tailored design that reflects your brand",
                    "Built-in performance and SEO enhancements",
                    "Streamlined product and inventory management",
                    "Integrations for payment, shipping, CRM, and more",
                ].map((item, idx) => (
                    <li
                    key={idx}
                    className={`${outfitLight.className} flex items-start text-gray-800 hover:text-primary transition-colors cursor-pointer justify-start xl:justify-center`}
                    >
                    <FaCheckCircle className="text-primary w-3 h-3 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-[15px] xl:text-[16px] text-left xl:text-center">{item}</span>
                    </li>
                ))}
                </ul>
            </div>
        </div>




        {/* Features */}
        <div class="bg-slate-100 mt-20 xs:mx-auto">
            <div class="py-20">
                <div class="">
                    <h1 className={`${outfitSemibold.className} text-slate-900 text-center text-[34px] xl:text-[42px] pb-5 font-bold`}>Our E Commerce Development</h1>
                    <p className={`${outfitLight.className} xl:text-center text-center text-slate-900 text-[15px] xl:text-[15px] xl:w-[40%] md:text-justify xl:mx-auto px-10`}>At Stackria, we build e-commerce solutions that tell your brand’s story and make shopping feel personal.
                    From first click to final checkout, we design experiences that grow with your business and connect with real people.
                    
                    </p>
                </div>
                <div class="">
                    <CardHover/>
                </div>
                
            </div>

            {/* Reasons */}
            <div className="bg-white py-20 px-5 xl:px-10 md:px-10">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className={`${outfitSemibold.className} text-slate-900 text-[34px] font-bold md:text-[32px] xl:text-[42px] text-left mb-6 xl:text-center`}>
                    Why Clients Prefer Stackria for E Commerce Development
                    </h2>
                    <p className={`${outfitLight.className} text-slate-800 text-left text-[15px] xl:px-20 xl:text-[16px] leading-relaxed mb-10 xl:w-[60%] xl:text-center xl:mx-auto`}>
                    Our approach blends conversion-focused design with storytelling that makes your <span className='font-bold'>customers</span> care. We go beyond templates, every storefront we build is a living <span className='font-bold'>representation</span> of your brand, values, and voice.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left px-10 xl:px-0">
                        
                        <div className="flex items-start gap-4">
                        <FaCheckCircle className='text-primary text-[20px]'/>
                        <div>
                            <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>
                                Tailored to Your Brand
                            </h3>
                            <p className={`${outfitLight.className} text-slate-700 text-[14px] lg:text-[16px]`}>
                                We start with deep discovery to understand your business, target audience, and what sets you apart.
                            </p>
                        </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaCheckCircle className='text-primary text-[20px]'/>
                            <div>
                                <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>
                                    Customer Journey First
                                </h3>
                                <p className={`${outfitLight.className} text-slate-700 text-[14px] lg:text-[16px]`}>
                                    We map intuitive user journeys that guide visitors effortlessly from product discovery to final checkout. 
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaCheckCircle className='text-primary text-[20px]'/>
                            <div>
                                <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>
                                    Optimized for Growth
                                </h3>
                                <p className={`${outfitLight.className} text-slate-700 text-[14px] lg:text-[16px]`}>
                                    From launch day, your platform is optimized for speed, SEO, responsiveness, and scalability.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaCheckCircle className='text-primary text-[20px]'/>
                            <div>
                                <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>
                                    You’re Not Alone
                                </h3>
                                <p className={`${outfitLight.className} text-slate-700 text-[14px] lg:text-[16px]`}>
                                    As your technical partner, Stackria offers continuous support, feature expansion, and maintenance.


                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaCheckCircle className='text-primary text-[20px]'/>
                            <div>
                                <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>
                                    Story-Driven Product Pages
                                </h3>
                                <p className={`${outfitLight.className} text-slate-700 text-[14px] lg:text-[16px]`}>
                                    <span class="font-italic">Stackria crafts product pages that showcase features and the emotional value driving every purchase decision.</span>
                                    
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaCheckCircle className='text-primary text-[20px]'/>
                            <div>
                                <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>
                                    Built for Businesses
                                </h3>
                                <p className={`${outfitLight.className} text-slate-700 text-[14px] lg:text-[16px]`}>
                                    <span class="font-italic">Every line of code and pixel is crafted with your bottom line in mind: conversion, retention, and trust.</span>
                                    
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