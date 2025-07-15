import { outfitRegular, museoReg, outfitLight, outfitSemibold, museoBold } from "@/app/layout";
import React from 'react'

export const Testimonials = () => {
  return (
    <section className="bg-slate-50 py-32 px-4 md:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className={`${outfitSemibold.className}text-slate-900 text-[38px] font-bold md:text-[32px] xl:text-[42px] mb-4`}>
          What Our Clients Say
        </h2>
        <p className={`${outfitRegular.className} text-slate-700 text-[14px] px-2 md:text-base italic leading-relaxed md:px-5 md:text-[14px]`}>
          &ldquo;Working with Stackria was a game-changer for our business. Their team delivered a
          clean, functional, and modern web-based solution that truly reflects our brand.
          Communication was clear, timelines were met, and the final product exceeded expectations.&ldquo;
        </p>
        <p className={`${outfitRegular.className} text-slate-900 font-medium mt-4`} >— Bright W, Founder of Zamani Luxuries</p>
      </div>
    </section>
  )
}
