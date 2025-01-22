"use client"
import React, { useState } from 'react'
import Links from "@/components/navBar/Links"
import Image from 'next/image';
import { museo, museoReg } from "@/app/layout";
import { outfit } from "@/app/layout";
import Link from 'next/link';

const Navbar = () => {
    const [dropDown, setDropDown] = useState(false)
    
  return (
    <header className='bg-[#0ca9f2da] w-full flex fixed z-10 px-50 h-[80px]'>
        <div className=' mx-auto container'>
          <div className='flex px-2 items-center justify-between h-[100px]'>
                    
                    {/* Logo */}
                    <div className='flex-shrink-0 -mt-2'>
                        <Image 
                        className='xl:w-[150px] w-[180px] h-auto' 
                        src='/logo-white.png' 
                        width={150} 
                        height={150} 
                        priority 
                        alt='web development agency'
                        />
                    </div>
            

              {/* Links */}
              <nav className="xl:ml-0 ml-28 md:ml-auto">
                  <Links/>
              </nav>

              {/* Get in touch button */}
              <Link href="/contact">
                  <button className={` ${museoReg.className} hidden xl:flex rounded-sm bg-white -mt-2 text-gray-800 px-2 py-2 black font-bold hover:bg-secondary hover:text-white`}>Get  in touch
                  </button>
              </Link>
              
          </div>
        </div>
    </header>
  )
}

export default Navbar