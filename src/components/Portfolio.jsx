import Image from 'next/image'
import React from 'react'
import { outfitLight, museoReg } from "@/app/layout";
import {styles} from '@/constants/style'
import {portfolioList} from '@/app/portfolio/portfolioList'
import Link from 'next/link';

export const Portfolio = () => {
  return (
    <section>
      <div>
        <div className="">
            <h1 className={`${museoReg.className} text-secondary text-xs text-center `}>Our Results</h1>
            <h3 className="text-black text-center text-[20px] font-bold">Portfolio - Showcase</h3>
          </div>
        {/* Destructed portfolioList */}
        {portfolioList.map(({ title, details, link, img, icons: Icons, span, button }, index)=> (
          <div className="bg-slate-100 p-10 my-10" key={index}>
            <div >
              {/* Header */}
              <h1 className={`${styles.museoReg} font-bold text-[16px]`}>{title}</h1>
              {/* Details */}
              <p className={`${styles.outfitLight} text-[15px] font-bold text-slate-700`}>{details}</p>
              {/* Tech Stack */}
              <div className="leading-10 mt-10">
                <h1 className={`${styles.museoReg} font-bold text-[15px]`}>{span}</h1>
                {/* Stack logo */}
                <div className="flex gap-1">
                  {Icons.map((Icon, i) => (
                    <Icon key={i} className="text-primary text-2xl" />
                  ))}
                </div>
                {/* Button */}
                <Link href={button.url}  className={` ${styles.outfit} rounded-sm bg-primary px-5 py-2 text-white text-xs mt-5 font-bold hover:bg-secondary`}>{button.text}
                </Link>
              </div>
            </div>
            {/* Showcase Image */}
            <div className="bg-sky-100 mt-5 xl:mt-0">
                <Image 
                  className='xl:w-[150px] w-full h-auto rounded-md ' 
                  // Change logo to svg
                  src={img} 
                  width={150} 
                  height={150} 
                  priority 
                  alt={title}/>
            </div>
          </div>
        ))}
      </div>
    </section>

  )
}

