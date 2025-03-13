"use client"
import React, { useState, useEffect } from 'react'
import Links from "@/components/navBar/Links"
import Image from 'next/image';
import { museo, museoReg } from "@/app/layout";
import { outfit } from "@/app/layout";
import logoOne from '@/assets/logo-white.png'
import logoColored from '@/assets/logo.png'
import Link from 'next/link';

const Navbar = () => {
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
      function handleScroll() {
        if (window.scrollY > 50) {
          setScroll(true)
        } else {
          setScroll(false)
        }
      }
      window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove the event listener
      return () => window.removeEventListener("scroll", handleScroll);  
    }, [])

    

  return (
    <header className={`${scroll ? "bg-white" : "bg-transparent"} items-center w-full flex fixed z-10 px-50 h-[70px] xl:h-[80px]`}>
        <div className=' mx-auto container'>
          <div className='flex px-2 items-center justify-between'>
                    
                    {/* Logo */}
                    <div className='flex-shrink-0'>
                        <Image 
                        className='xl:w-[150px] w-[150px] h-auto' 
                        // Change logo to svg
                        src={scroll ? logoColored : logoOne}
                        width={150} 
                        height={150} 
                        priority 
                        alt='stackria web development agency'
                        />
                    </div>
            

              {/* Links */}
              <nav className="xl:ml-0 ml-32 md:ml-auto">
                  <Links scroll={scroll}/>
              </nav>

              {/* Get in touch button */}
              <Link href="/contact">
                  <button className={` ${museoReg.className} ${scroll ? "bg-primary" : "bg-white"}
                  ${scroll ? "text-white" : "text-primary"} hidden xl:flex rounded-md -mt-2 text-gray-800 text-[15px] px-5 py-2 black font-bold hover:bg-secondary hover:text-white`}>GET IN TOUCH
                  </button>
              </Link>
              
          </div>
        </div>
    </header>
  )
}

export default Navbar