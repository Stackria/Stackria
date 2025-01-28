import React from 'react'
import { outfitLight, museoReg } from "@/app/layout";
import {styles} from '@/constants/style'

export const AfterHero = () => {
  return (
    <section>
      <div className="px-5 py-10">
        <div>
          <h1 className={`${styles.heading1}`}>Helping businesses grow, succeed, and innovate</h1>
        </div>
        <div className="">
          <h4 className={`${styles.paragraph}`}>At Stackria, our mission is to empower businesses to thrive by delivering modern, scalable web-based solutions that streamline operations, enhance digital presence, and drive sustainable growth through meaningful collaboration and innovative strategies.</h4>
        </div>
      </div>
    </section>
  )
}
