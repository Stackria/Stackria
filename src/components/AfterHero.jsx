import React from 'react'
import { outfitRegular, museoReg, outfitLight } from "@/app/layout";
import ButtonSwiper from '@/components/ButtonSwiper'
import {styles} from '@/constants/style'

export const AfterHero = () => {
  return (
    <section>
      <div className="xl:w-[70%] px-5 py-10 xl:px-20 xl:py-20 flex flex-col xl:flex-row mx-auto xl:justify-around">
        <div className="xl:w-[40%]">
          <h1 className={`${styles.heading1} `}></h1>
        </div>

        

        <div className="xl:pt-5 xl:w-[50%]">
          <h4
          
          className={`${outfitLight.className} xl:text-left text-center text-slate-800 text-[14px] xl:text-[16px] xl:w-[70%]`}>At Stackria, we believe every <span className='font-bold text-black'>business</span> has a story and every <span className='font-bold text-black'>customer</span> wants to be part of it. That’s why we craft custom web-based <span className='font-bold text-black'>solutions</span> that put your vision and your users at the heart of every interaction.</h4>
        </div>
      </div>
    </section>
  )
}
