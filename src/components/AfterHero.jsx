import React from 'react'
import { outfitRegular } from "@/app/layout"
import ButtonSwiper from '@/components/ButtonSwiper'
import { styles } from '@/constants/style'

export const AfterHero = () => {
  return (
    <section>
      <div className="xl:w-[70%] px-5 py-10 xl:px-20 xl:py-20 flex flex-col xl:flex-row mx-auto xl:justify-around">
        <div className="xl:w-[40%] md:mt-2">
          {/* Add content or remove this block if not needed */}
          <h1 className={`${styles.heading1}`}>Empowering Your Digital Presence</h1>
        </div>

        <div className="xl:pt-5 xl:w-[50%]">
          <h4 className={`${outfitRegular.className} xl:text-left text-center text-slate-800 text-[15px] xl:text-[16px] xl:w-[70%]`}>
            At Stackria, we believe every <span className="font-bold text-black">business</span> has a story and every <span className="font-bold text-black">customer</span> wants to be part of it. That’s why we craft custom web-based <span className="font-bold text-black">solutions</span> that put your vision and your users at the heart of every interaction.
          </h4>
        </div>
      </div>
    </section>
  )
}
