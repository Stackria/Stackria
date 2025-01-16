"use client"
import React, { useState } from 'react'
import Links from "@/components/navBar/Links"
import Image from 'next/image';

const Navbar = () => {
    const [dropDown, setDropDown] = useState(false)
    
  return (
    <header className='bg-[#0ca9f2da] w-full flex px-50'>
        <div className=' mx-auto container'>
          <div className='flex px-2 items-center justify-between h-[100px]'>
                    
                    {/* Logo */}
                    <div className='flex-shrink-0'>
                        <Image 
                        className='xl:w-[150px] w-[180px] h-auto' 
                        src='/logo-white.png' 
                        width={150} 
                        height={150} 
                        priority 
                        alt='web development agency'
                        />
                    </div>
            

              {/* Header */}
              <nav className="my-auto">
                  <Links/>
              </nav>

              {/* Get Quote Button */}
              <button className='hidden xl:flex'>Get A Quote
              </button>
          </div>
        </div>
    </header>
  )
}

export default Navbar