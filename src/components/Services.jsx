'use client'
import React, { useState } from 'react'
import { outfitLight, outfit, museoReg } from "@/app/layout";
import Image from 'next/image';
import { servicesList } from "@/app/services/servicesList";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import Link from "next/link";
import {styles} from '@/constants/style'

export const Services = () => {
  // toggle holds the index of the currently opened dropdown. - Initially null, meaning no dropdown is open.
  // Each item controls its own state instead of a global boolean  (false) affecting all.
  const [toggle, setToggle] = useState(null)
  return (
    <section>
      <div className=" py-10 px-5">
        <div className="py-5 xl:py-10 xl:px-5">
            <h1 className={`${museoReg.className} text-secondary text-xs text-center `}>OUR EXPERTISE</h1>
            <h3 className={`${museoReg.className}text-black text-center text-[20px] font-bold xl:text-3xl`}>Solutions We Provide:</h3>
        </div>
        <div className="bg-slate-50 py-5 xl:p-10 mx-auto xl:w-[1200px]">
          {/* index - position of each solution in the list - helps you know which item was clicked so you can show or hide its details.*/}
      {servicesList.map((service, index) => (
          
            <div className="px-5 pb-10"
              key={index}>

              {/* Service -Solution Dropdown */}
              <div className="">
                {/*  when clicked and not previously open it sets toggle to the index of the clicked solution, which opens that particular solution's details. */}
                {/* */}
                <div className="flex justify-between cursor" onClick={()=> setToggle(toggle === index ? null : index)}>
                  <div className="flex items-center">
                    <Link href={service.link} className={`${styles.headingLeft} py-2 `}>{service.title} 
                    </Link>
                    <FaArrowUpRightFromSquare className="ml-2 text-black text-[15px] "/>
                  </div>
                  <IoIosArrowDropdown className={`text-slate-500 text-[25px] xl:text-[35px] transition-transform  mt-2 ${toggle === index ? "rotate-180" : "rotate-0"}`}/>
                      
                </div>

                {/* Only Show the Active Dropdown */}
                {/* If toggle === index, the current item opens → shows details (flex)*/}
                <div className={toggle === index ? "flex mt-2" : 'hidden'}>
                  <span className={`${styles.paragraphDetails} leading-2 `}>
                    {service.details}
                  </span>
                </div>
                
              </div>
            </div>
            
        ))}
        </div>
        <div className=" text-center align-center py-10">
            <Link href='/services' className={` ${styles.outfit} rounded-md bg-primary px-5 py-2 text-white text-[15px] mt-5 shadow-lg shadow-blue-500/50 
            font-bold hover:bg-secondary`}>
                DISCOVER MORE
            </Link>
        </div>
      </div>
    </section>
  )
}

