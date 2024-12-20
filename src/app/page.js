import React from 'react'
import { museo } from './layout'
// Name import not default import
import {Hero} from '@/app/home/Hero.js'
const page = () => {
  return (
    <div>
      {/* <h1 className={`${museo.className}`}></h1> */}
      <Hero/>
    </div>
  )
}

export default page