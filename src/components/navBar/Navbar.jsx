"use client"
import React, { useState } from 'react'
import Links from "@/components/navBar/Links"
import Image from 'next/image';

const Navbar = () => {
    const [dropDown, setDropDown] = useState(false)
    
  return (
    <header className='bg-white w-full flex justify-between px-50'>
        <div className='xl:px-10 mx-auto container'>
          <div className='flex items-center justify-between h-[100px]'>
                    
                    {/* Logo */}
                    <div className='flex-shrink-0'>
                        <Image 
                        className='w-[180px] h-auto' 
                        src='/logo.png' 
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
          </div>
        </div>
    </header>
  )
}

export default Navbar