import React from 'react'
import { museo } from './layout'
// Name import not default import
import {Hero} from '@/app/home/Hero.js'
import {AfterHero} from '@/components/AfterHero'
import {Services} from '@/components/Services'
import {Portfolio} from '@/components/Portfolio'
import {Process} from '@/components/Process'
import {CTA} from '@/components/CTA'
import {Industries} from '@/components/Industries'


const page = () => {
  return (
    <div>
      {/* <h1 className={`${museo.className}`}></h1> */}
      <Hero/>
      <AfterHero/>
      <Services/>
      <Portfolio/>
      <Process/>
      <CTA/>
      <Industries/>
      
    </div>
  )
}

export default page