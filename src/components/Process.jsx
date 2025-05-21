import React from 'react'
import StickyScroll from '@/components/ui/sticky-scroll-reveal'
import { outfit, museoReg, museoBold, outfitSemibold } from "@/app/layout";
import Link from 'next/link';
import {styles} from '@/constants/style'

export const Process = () => {
  return (
    <div className='py-20 px-10'>
      <div
        className="xl:py-20 sm:auto sm:text-center"
        
      >
        <h1
          className={`${outfitSemibold.className} text-slate-900 text-[34px] font-bold md:text-[34px] xl:text-[42px] text-center`}
        >
          OUR DEVELOPMENT PROCESS
        </h1>
        {/* Button (placeholder if needed) */}
      </div>
      <StickyScroll />
    </div>

  )
}
