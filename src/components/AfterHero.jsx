import React from 'react'
import { outfitRegular, outfitSemibold } from "@/app/layout"
import ButtonSwiper from '@/components/ButtonSwiper'
import { styles } from '@/constants/style'

export const AfterHero = () => {
  return (
    <section>
      <div className="px-5 py-10 xl:px-20 xl:py-20 flex flex-col mx-auto xl:justify-around lg:text-center items-center text-center mt-10 md:mt-0 lg:w-[70%]">
        <div className="xl:w-[60%] md:mt-2">
          {/* Add content or remove this block if not needed */}
          <h1 className={`${outfitSemibold.className} text-[36px] md:text-[55px] lg:w-[100%] leading-[55px] text-slate-900 mx-auto text-center`}>Empowering Your Digital Presence</h1>
        </div>

        <div className="xl:pt-5 text-center mx-auto">
          <h4 className={`${outfitRegular.className} xl:w-[50%] text-center mx-auto text-slate-800 text-[15px] lg:text-[17px] xl:text-[18px] lg:w-[70%] md:w-[60%]`}>
            At Stackria, we believe every <span className="font-bold text-black">business</span> has a story and every <span className="font-bold text-black">customer</span> wants to be part of it. That’s why we craft custom web-based <span className="font-bold text-black">solutions</span> that put your vision and your users at the heart of every interaction.
          </h4>
        </div>
      </div>
    </section>
  )
}
