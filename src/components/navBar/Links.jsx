import React, { useState } from 'react'
import Navlink from "@/components/navBar/links/navLink/NavLink"
import Link from 'next/link';
import Image from 'next/image';
import { museo, museoReg, outfitRegular, outfitSemibold } from "@/app/layout";
import { GoArrowUpRight } from "react-icons/go";

const links = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About Us",
        path: "/about-us",
    },
    {
        title: "Our Services",
        path: "/services",
    },
    // {
    //     title: "Our Portfolio",
    //     path: "/portfolio",
    // },
    // {
    // title: "Reach Us",
    // path: "/contact",
    // },
    {
        title: "Blog",
        path: "/blog",
    },
    
];


const Links = ({scroll}) => {
    const [open, setOpen] = useState(false)
    return (
        <header>
            
            {/* Default Menu */}
            <nav className=''>
                <li className='hidden xl:flex cursor-pointer justify-between text-left'>
                {links.map((link) => (
                    <Navlink 
                        item={link} 
                        key={link.title}
                        scroll={scroll}
                    />
                ))}
                </li>
            </nav>

            {/* Mobile Menu Toggle*/}
            <div className="flex xl:hidden p-5 ">
                <Image 
                    className='w-8 h-8 cursor-pointer transition-transform duration-300 ease-in-out' 
                    src={open ? "images/close.png" : "/images/menu.png"} 
                    width={30} 
                    height={30} 
                    alt='web development agency' 
                    onClick={()=> setOpen((prev)=> !prev)}
                    style={{transform: open ? 'rotate(90deg)' : 'rotate(0)'}}
                >
                    
                    
                </Image>
                {/* Mobile menu */}
                {open && (
                <nav className={`xl:hidden fixed top-[90px] left-0 h-[calc(100vh-100px)] leading-10  py-10 px-5 xl:text-[15px] text-[15px] -mt-5 w-full z-10 bg-white`}>
                    <div className='flex flex-col space-y-4'>
                        {links.map((link) => (
                            <Navlink 
                                item={link} 
                                key={link.title}
                            />
                        ))}
                    </div>
                    <Link href="/contact">
                        <button className={` ${outfitSemibold.className}  items-center flex rounded-md bg-primary ml-2 text-white px-2 py-2 black font-bold hover:bg-secondary hover:text-white text-[15px]`}><GoArrowUpRight />Get A Quote In 12 Hours
                        </button>
                    </Link>
                </nav>
                )}
            </div>
                
                    
                
        </header>
        
        

    )
    
}

export default Links