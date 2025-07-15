import React from 'react'
import Link from "next/link";
import { outfitRegular, outfitLight, outfitSemibold } from "@/app/layout"
import Image from 'next/image';

export const Hero = () => {
  return (
  <section className="h-[90vh] Scrn375:h-[90vh] Scrn425:h-[90vh] sm:h-[130vh] md:h-[140vh] lg:h-[120vh] xl:h-[90vh] 2xl:h-[90vh] bg-slate-50 py-32 overflow-hidden antialiased relative flex flex-col self-auto" style={{ backgroundImage: 'url(/images/bg-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div
          className="max-w-7xl relative mx-auto py-2 md:py-0 px-2 -mt-5 w-full lg:pt-10 xl:w-[70%] lg:w-[70%] left-0 top-0 text-center xl:px-10 z-100">
            <h1 className={`${outfitSemibold.className} mt-5 md:mt-10 text-[36px] leading-10 2xl:leading-[110px] sm:text-[55px] sm:leading-[50px] sm:p-10 md:text-[55px] lg-text-[80px] xl-text-[90px] 2xl:text-[120px] font-bold text-slate-900 dark:text-white md:leading-[50px] md:z-100 md:px-10 lg:-mt-10 Scrn375:mt-5`}>
            Customer-focused Web 
            <span class="text-primary"> Solutions </span>
            For Startups & Businesses
            </h1>
            
            <p className={`${outfitLight.className} text-[15px] md:text-[15px] xl:text-[16px] text-secondary dark:text-neutral-200 xl:px-40 sm:px-36 px-5 pb-10 2xl:text-[31px]`}>
            We craft custom web solutions that makes your customers the hero, empowering startups and SMEs to thrive by providing the perfect web experience
            </p>

            {/* Get a quote button */}
            <div className="">
              <Link href='/contact' className={`${outfitSemibold.className} text-[16px] lg:text-[20px] 2xl:text-[50px] rounded-lg shadow-md shadow-slate-800 bg-primary text-white px-5 py-3 black mt-10 font-bold hover:bg-secondary hover:text-white z-100`}>Get A Quote In 12 Hours</Link>
            </div>
        </div>
        <div class="mb-10 2xl:-mt-20">
          <Image 
            className='relative xl:mt-0 xl:h-[100%] xl:w-[50%] lg:w-[60%] w-[100%] h-[100%] mx-auto z-0'
            src='/images/hero-mock.png' 
            width={150} 
            height={150} 
            priority 
            alt="Software development agency"/>
        </div>
    </section>
  )
}
