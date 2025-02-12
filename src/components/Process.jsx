import React from 'react'
import StickyScroll from '@/components/sticky-scroll-reveal'
import { outfit, museoReg } from "@/app/layout";
import Link from 'next/link';
import {styles} from '@/constants/style'

export const Process = () => {
  return (
    <div>
      <div className="">
        <h1 className={`${museoReg.className} text-secondary text-lg text-center `}>OUR DEVELOPMENT PROCESS</h1>
        {/* Button */}
        <Link href='#'  className={`${styles.outfit} rounded-md bg-primary px-5 py-3 text-white text-[14px] shadow-lg shadow-blue-500/50 mt-5 font-bold hover:bg-secondary`}>{button.text}
                </Link>
      </div>
      {<StickyScroll/>}
    </div>
  )
}
