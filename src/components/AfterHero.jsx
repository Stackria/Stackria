import React from 'react'
import { outfitLight, museoReg } from "@/app/layout";
import {styles} from '@/constants/style'

export const AfterHero = () => {
  return (
    <section>
      <div className="px-5 py-10">
        <div>
          <h1 className={`${styles.heading1}`}>Swift, Innovative Web Solutions For <span className='underline decoration-sky-500'>Businesses</span></h1>
        </div>

        <div className="">
          <h4
          
          className={`${styles.paragraph}`}>At Stackria, we empower businesses to thrive by delivering modern, scalable web-based solutions that streamline operations and enhance digital presence.</h4>
        </div>
      </div>
    </section>
  )
}
