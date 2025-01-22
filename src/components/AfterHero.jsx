import React from 'react'
import { outfitLight, museoReg } from "@/app/layout";
import {styles} from '@/constants/style'

export const AfterHero = () => {
  return (
    <section>
      <div className="px-5 py-10">
        <div>
          <h1 className={`${styles.heading1} text-center text-secondary text-[36px] `}>Helping businesses grow, succeed, and innovate</h1>
        </div>
        <div className="">
          <span className={`${styles.paragraph} text-center `}>At Stackria, our mission is to empower businesses to thrive by delivering modern, scalable web-based solutions that streamline operations, enhance digital presence, and drive sustainable growth through meaningful collaboration and innovative strategies.</span>
        </div>
      </div>
    </section>
  )
}
