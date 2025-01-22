import React from 'react'
import { outfitMed, museoReg } from "@/app/layout";

export const AfterHero = () => {
  return (
    <section>
      <div className="px-5 py-10">
        <div className={`${museoReg.className}  `}>
          <h1 className="text-center text-secondary text-[36px]">Helping businesses grow, succeed, and innovate</h1>
        </div>
        <div className="">
          <span className={`${outfitMed.className} text-center text-secondary text-[16px] font-bold`}>At Stackria, our mission is to empower businesses to thrive by delivering modern, scalable web-based solutions that streamline operations, enhance digital presence, and drive sustainable growth through meaningful collaboration and innovative strategies.</span>
        </div>
      </div>
    </section>
  )
}
