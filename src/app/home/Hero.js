import React from 'react'
import Link from "next/link";
import { outfitRegular, outfitLight, outfitSemibold } from "@/app/layout"
import Image from 'next/image';

export const Hero = () => {
  return (
  <section className="h-[90vh] Scrn375:h-[90vh] Scrn425:h-[90vh] sm:h-[130vh] md:h-[150vh] lg:h-[150vh] 2xl:h-[165vh] bg-slate-50 py-32 overflow-hidden antialiased relative flex flex-col self-auto" style={{ backgroundImage: 'url(/images/bg-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div
          className="max-w-7xl relative mx-auto py-2 md:py-0 px-2 -mt-5 w-full lg:pt-20 xl:w-[70%] lg:w-[70%] left-0 top-0 text-center xl:px-10 z-100 Scrn425:px-5">
            <h1 className={`${outfitSemibold.className} tracking-tighter mt-5 md:mt-10 text-[38px] leading-[50px] 2xl:leading-[110px] sm:text-[55px] sm:leading-[50px] sm:p-10 md:text-[69px] lg-text-[80px] xl-text-[90px] 2xl:text-[100px] font-bold text-slate-900 dark:text-white md:leading-[60px] md:z-100 md:px-10 lg:-mt-10 Scrn375:mt-5 Scrn425:text-[50px]`}>
            Customer-focused Digital 
            <span className="text-primary"> Solutions </span>
            For Businesses
            </h1>
            
            <p className={`${outfitLight.className} text-[14px] md:text-[20px] xl:text-[16px] text-secondary dark:text-neutral-200 xl:px-40 sm:px-36 xs:text-center tracking-tight px-5 pb-10 2xl:text-[21px]`}>
            We craft custom digital solution that empowers startups and SMEs to thrive by providing the perfect web experience
            </p>

            {/* Get a quote button */}
            <div className="md:-mb-12">
              <Link href='/contact' className={`${outfitSemibold.className} inline-block bg-primary text-white text-sm md:text-[20px] md:text-base py-3 px-6 rounded-lg shadow-md hover:bg-gray-700 transition 2xl:mb-5`}>Get A Quote ASAP</Link>
            </div>
        </div>
        <div className="2xl:-mt-20 flex-col">
          <Image 
            className='relative xl:mt-0 md:h-[100%] xl:h-[100%] xl:w-[50%] lg:w-[60%] w-[100%] h-[100%] mx-auto z-0'
            src='/images/hero-mock.png' 
            width={150} 
            height={150} 
            priority 
            alt="Software development agency"/>
            
        </div>
        
    </section>
  )
}
