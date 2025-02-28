import Image from 'next/image'
import React from 'react'
import { outfitLight, museoReg, museoBold, outfitRegular } from "@/app/layout";
import {styles} from '@/constants/style'
import {portfolioList} from '@/app/portfolio/portfolioList'
import Link from 'next/link';

export const Portfolio = () => {
  return (
    <section>
      <div className='bg-slate-100 py-10 xl:py-20'>
        <div className="">
            <h1 className={`${museoBold.className} text-secondary text-xs text-center `}>OUR RESULTS</h1>
            <h3 className="text-black text-center text-[20px] font-bold">Portfolio - Showcase</h3>
        </div>
        {/* Destructed portfolioList */}
        {portfolioList.map(({ title, details, link, img, icons: Icons, span, button }, index)=> (
          <div className=" py-10 px-5 my-10 flex flex-col xl:flex-row xl:mx-auto xl:justify-center " key={index}>
            <div className='xl:w-[500px]'>
              {/* Heading */}
              <h1 className={`${museoReg.className}  text-black text-[18px] xl:text-[24px] pb-5`}>{title}</h1>
              {/* Details */}
              <p className={`${outfitRegular.className} text-[16px]  text-slate-700 font-bold xl:w-[90%]`}>{details}</p>
              {/* Tech Stack */}
              <div className="leading-10 mt-10">
                <h1 className={`${museoReg.className} text-slate-800 font-bold text-[14px] xl:text-[22px]`}>{span}</h1>
                {/* Stack logo */}
                <div className="flex gap-1 pb-2">
                  {Icons.map((Icon, i) => (
                    <Icon key={i} className="text-primary text-4xl" />
                  ))}
                </div>
                {/* Button */}
                <Link href={button.url}  className={`${styles.outfit} rounded-md bg-primary px-5 py-3 text-white text-[15px] xl:text-[15px] shadow-lg shadow-blue-500/50 mt-5 font-bold hover:bg-secondary`}>{button.text}
                </Link>
              </div>
            </div>
            {/* Portfolio Image */}
            <div className="bg-sky-100 mt-5 xl:mt-0 xl:w-[40%]">
                <Image 
                  className='xl:w-full w-full h-auto rounded-md ' 
                  // Change logo to svg
                  src={img} 
                  width={150} 
                  height={150} 
                  priority 
                  alt={title}/>
            </div>
            
          </div>
        ))}
        <div className="mx-auto text-center">
              <Link href='#'  className={`${styles.outfit} rounded-md bg-primary px-5 py-3 text-white text-[15px] shadow-lg shadow-blue-500/50 mt-5 font-bold hover:bg-secondary`}>
                      DISCOVER MORE
                              </Link>
            </div>
      </div>
    </section>

  )
}

