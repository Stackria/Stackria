import React from 'react'
import StickyScroll from '@/components/sticky-scroll-reveal'
import {Timeline} from '@/components/Timeline'
import { outfit, museoReg } from "@/app/layout";
import Link from 'next/link';
import {styles} from '@/constants/style'

export const Process = () => {
  return (
    <div>
      <div
        className="xl:py-20"
        style={{
          backgroundImage: 'url(/images/bg-cta.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1
          className={`${museoReg.className} text-secondary text-lg text-center pt-20`}
        >
          OUR DEVELOPMENT PROCESS
        </h1>
        {/* Button (placeholder if needed) */}
      </div>
      <StickyScroll />
</div>

  )
}
