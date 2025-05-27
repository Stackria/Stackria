"use client"
import React, { useState, useEffect } from 'react'
import Links from "@/components/navBar/Links"
import Image from 'next/image';
import { museo, museoReg, outfitRegular, outfitSemibold } from "@/app/layout";
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
    <header className={`${scroll ? "bg-white" : "bg-transparent"} bg-transperant items-center w-full flex fixed z-10 px-5 xl:px-12 h-[70px] xl:h-[80px] 2xl:pt-2`}>
        <div className='mx-auto flex justify-between items-center w-full Scrn425:ml-1 Scrn360:pl-1'>

              {/* Logo */}
              <div className='flex-shrink-0'>
                <Link href="/">
                  <Image
                  className='lg:z-100 xl:w-[150px] 2xl:w-[180px] xl:-ml-5 -ml-4 w-[150px] h-auto pointer 2xl:-ml-7 ' 
                  // Change logo to svg
                  src={scroll ? "/images/logo.png" : "/images/logo-black.png"}
                  width={150} 
                  height={150} 
                  priority 
                  alt='stackria web development agency'
                  />
                </Link>
              </div>
            

              {/* Links */}
              <nav className="xl:-ml-36 -mr-52 md:-mr-[370px] lg:-mr-[570px] flex flex-1 justify-center xl:justify-center xs:-mr-32 md:ml-40 Scrn425:ml-20 Scrn375:ml-12">
                  <Links scroll={scroll}/>
              </nav>

              {/* Get in touch button */}
              <Link href="/contact">
                  <button className={` ${outfitSemibold.className} ${scroll ? "bg-primary" : "bg-black"}
                    text-white hidden xl:flex rounded-md -mt-2 text-[15px] px-5 py-3 black xl:-mt-2 xl:text-[16px] 2xl:text-[20px] hover:bg-secondary hover:text-white`}>Get A Quote In 12 Hours
                  </button>
              </Link>
              
          </div>
    </header>
  )
}

export default Navbar