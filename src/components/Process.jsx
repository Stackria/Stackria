import React from 'react'
import StickyScroll from '@/components/sticky-scroll-reveal'
import { outfit, museoReg } from "@/app/layout";
import Link from 'next/link';
import {styles} from '@/constants/style'

export const Process = () => {
  return (
    <div>
      <div className="xl:py-20">
        <h1 className={`${museoReg.className} text-secondary text-lg text-center pt-20 `}>OUR DEVELOPMENT PROCESS</h1>
        {/* Button */}
        
      </div>
      {<StickyScroll/>}
    </div>
  )
}
