import React from 'react'
import { museo } from './layout'
// Name import not default import
import {Hero} from '@/app/home/Hero.js'
import {AfterHero} from '@/components/AfterHero'
import {Services} from '@/components/Services'
import {Portfolio} from '@/components/Portfolio'
import {Process} from '@/components/Process'
import {Testimonials} from '@/components/Testimonials'
import {WhyChooseUs} from '@/components/WhyChooseUs'
import {CTA} from '@/components/CTA'
// import {Industries} from '@/components/Industries'


const page = () => {
  return (
    <div>
      <Hero/>
      <AfterHero/>
      <Services/>
      <Portfolio/>
      <WhyChooseUs/>
      <Testimonials/>
      <Process/>
      <CTA/>
      {/* <Industries/> */}
    </div>
  )
}

export default page