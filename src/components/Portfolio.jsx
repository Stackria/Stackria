import Image from 'next/image'
import React from 'react'
import { outfitLight, museoReg, museoBold, outfitRegular, outfitSemibold } from "@/app/layout";
import {styles} from '@/constants/style'
import {portfolioList} from '@/app/portfolio/portfolioList'
import Link from 'next/link';

export const Portfolio = () => {
  return (
    <section>
      <div className='bg-slate-100 py-10 xl:py-20'>
        <div className="">
            <h1 className={`${outfitSemibold.className} text-secondary text-[15px] text-center `}>OUR RESULTS</h1>
            <h3 className={`${outfitRegular.className}text-black text-center text-[20px] font-bold `}>Portfolio - Showcase</h3>
        </div>
        {/* Destructed portfolioList */}
        {portfolioList.map(({ title, details, link, img, icons: Icons, span, button }, index)=> (
          <div className=" py-10 px-5 my-10 flex flex-col xl:flex-row xl:mx-auto xl:justify-center " key={index}>
            <div className='xl:w-[500px]'>
              
              {/* Heading */}
              <h1 className={`${outfitRegular.className}  text-slate-900 text-[18px] xl:text-[24px] pb-5`}>{title}</h1>
              
              {/* Details */}
              <p className={`${outfitRegular.className} text-[15px] xl:text-[16px] text-slate-700 lg:w-[70%]`}>{details}</p>
              
              {/* Tech Stack */}
              <div className="leading-10 mt-10">
                <h1 className={`${outfitRegular.className} text-slate-800 font-bold text-[15px] xl:text-[22px]`}>{span}</h1>
                
                {/* Stack logo */}
                <div className="flex gap-1 pb-2">
                  {Icons.map((Icon, i) => (
                    <Icon key={i} className="text-primary xl:text-4xl text-4xl" />
                  ))}
                </div>
                
                {/* Button */}
                {/* <Link href={button.url} className={`${outfitSemibold.className} rounded-md bg-primary px-5 py-2 text-white text-[14px] xl:text-[15px] shadow-lg shadow-blue-500/50 mt-5 font-bold hover:bg-secondary`}>{button.text}
                </Link> */}
              </div>
            </div>
            
            {/* Portfolio Image */}
            <div className="bg-sky-100 mt-5 xl:mt-0 xl:w-[30%]">
                <Image 
                  className='relative  mt-5 xl:mt-0 xl:h-[100%] xl:w-[100%] w-[550px] h-[350px] mx-auto'
                  src={img} 
                  width={150} 
                  height={150} 
                  priority 
                  alt={title}/>
            </div>
            
          </div>
        ))}
        <div className="mx-auto text-center">
              <span className={`${outfitLight.className} rounded-md bg-primary px-5 py-2 text-white text-[12px] shadow-lg shadow-blue-500/50 mt-5 font-bold hover:bg-secondary`}>
                      DISCOVER MORE
                              </span>
            </div>
      </div>
    </section>

  )
}

