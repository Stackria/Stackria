import React from 'react'
import StickyScroll from '@/components/ui/sticky-scroll-reveal'
import { outfit, museoReg, museoBold, outfitSemibold } from "@/app/layout";
import Link from 'next/link';
import {styles} from '@/constants/style'

export const Process = () => {
  return (
    <div className='py-20 px-10 bg-slate-900'>
      <div
        className="xl:py-20 sm:auto sm:text-center"
        
      >
        <h1
          className={`${outfitSemibold.className} text-slate-50 text-[34px] font-bold md:text-[34px] xl:text-[42px] text-center`}
        >
          OUR DEVELOPMENT PROCESS
        </h1>
      </div>
      <StickyScroll />
    </div>

  )
}
