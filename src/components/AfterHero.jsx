import React from 'react'
import { outfitRegular, museoReg, outfitLight } from "@/app/layout";
import {styles} from '@/constants/style'

export const AfterHero = () => {
  return (
    <section>
      <div className="px-5 py-10 xl:px-20 xl:py-20 flex-col xl:flex-row mx-auto xl:justify-around">
        <div className="xl:w-[40%]">
          <h1 className={`${styles.heading1} `}>Swift, Innovative Web Solutions For <span className='underline decoration-sky-500'>Businesses</span></h1>
        </div>

        <div className="w-px bg-slate-600 h-auto mx-5"></div>

        <div className="xl:pt-5 xl:w-[50%]">
          <h4
          
          className={`${outfitLight.className} xl:text-left text-justify text-slate-800 text-[15px] xl:text-[16px]`}>At Stackria, we empower businesses to thrive by delivering modern, scalable web-based solutions that streamline operations and enhance digital presence.</h4>
        </div>
      </div>
    </section>
  )
}
