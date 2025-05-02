"use client"
import React, { useState, useEffect } from 'react'
import Links from "@/components/navBar/Links"
import Image from 'next/image';
import { museo, museoReg, outfitRegular } from "@/app/layout";
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
    <header className={` ${scroll ? "bg-white" : "bg-transparent"} bg-transperant items-center w-full flex fixed z-10 px-5 xl:px-10 h-[70px] xl:h-[80px] `}>
        <div className='mx-auto flex justify-between items-center w-full'>

              {/* Logo */}
              <div className='flex-shrink-0'>
                  <Image 
                  className='xl:w-[170px] md:w-[120px] xl:-ml-0 -ml-2 w-[150px] h-auto' 
                  // Change logo to svg
                  src={scroll ? logoColored : logoOne}
                  width={150} 
                  height={150} 
                  priority 
                  alt='stackria web development agency'
                  />
              </div>
            

              {/* Links */}
              <nav className="xl:ml-0 ml-40 md:-mr-[370px] lg:-mr-[570px] flex flex-1 justify-center">
                  <Links scroll={scroll}/>
              </nav>

              {/* Get in touch button */}
              <Link href="/contact">
                  <button className={` ${outfitRegular.className} ${scroll ? "bg-primary" : "bg-white"}
                   ${scroll ? "text-white" : "text-black"} hidden xl:flex rounded-md -mt-2 text-[15px] px-5 py-3 black font-bold xl:mt-2 xl:text-[20px] hover:bg-secondary hover:text-white`}>REACH US NOW
                  </button>
              </Link>
              
          </div>
    </header>
  )
}

export default Navbar