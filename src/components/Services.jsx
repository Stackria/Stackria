'use client'
import React, { useState } from 'react'
import { outfitLight, museoReg } from "@/app/layout";
import Image from 'next/image';
import { solutionList } from "@/app/solutions/solutionsList";
import { IoIosArrowDropdown } from "react-icons/io";
import Link from "next/link";
import {styles} from '@/constants/style'

export const Services = () => {
  // toggle holds the index of the currently opened dropdown. - Initially null, meaning no dropdown is open.
  // Each item controls its own state instead of a global boolean  (false) affecting all.
  const [toggle, setToggle] = useState(null)
  return (
    <section>
      <div className=" py-10 px-5">
        <div className="">
            <h1 className={`${styles.headingLeft} text-center `}>OUR EXPERTISE</h1>
            <h3 className="text black text-center text-[25px] font-bold">Innovative Solutions We Provide</h3>
        </div>
        <div className="bg-slate-50 py-5">
        {solutionList.map((solution, index) => (
          
            <div className="px-5 pb-10"
              key={index}>

              {/* Solution Dropdown */}
              <div className="">
                {/* If the clicked item is already open (toggle === index), it sets toggle to null (closes it). */}
                {/* If a different item is clicked, it sets toggle to that item's index (opens it). */}
                <div className="flex justify-between cursor" onClick={()=> setToggle(toggle === index ? null : index)}>
                  <Link href={solution.link} className={`${styles.headingLeft} text-left py-2 `}>{solution.title}</Link>
                  <Image src="" alt=""  className=""/>
                  <IoIosArrowDropdown className={`text-slate-500 text-[40px] transition-transform ${toggle === index ? "rotate-180" : "rotate-0"}`}/>
                </div>

                {/* Only Show the Active Dropdown */}
                {/* If toggle === index, the current item is open → show details (flex). */}
                <div className={toggle === index ?"flex mt-2" : 'hidden'}>
                  <span className={`${styles.paragraph} text-left leading-2`}>{solution.details}
                  </span>
                </div>
                <h3 className="text-secondary font-extrabold">
                  
                </h3>
              </div>
            </div>
        ))}
        </div>
      </div>
    </section>
  )
}
