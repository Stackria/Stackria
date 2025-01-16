import React, { useState } from 'react'
import Navlink from "@/components/navBar/links/navLink/NavLink"
import Link from 'next/link';
import Image from 'next/image';
import menu from '@/assets/menu.png'
import close from '@/assets/close.png'

const links = [
    {
    title: "Home",
    path: "/",
    },
    {
    title: "About Us",
    path: "/about",
    },
    {
        title: "Our Solutions",
        path: "/solutions",
        },
    {
    title: "Reach Us",
    path: "/contact",
    },
    {
        title: "Blog",
        path: "/blog",
    },
    
];


const Links = () => {
    const [open, setOpen] = useState(false)
    return (
        <header>
            
            {/* Default Menu */}
            <div className=''>
                <nav className='hidden xl:flex cursor-pointer justify-between text-left'>
                {links.map((link) => (
                    <Navlink 
                        item={link} 
                        key={link.title}
                    />
                ))}
                </nav>
            </div>

            {/* Mobile Menu Toggle*/}
            <div className="flex xl:hidden p-5 ">
                <Image 
                    className='w-8 h-8 cursor-pointer transition-transform duration-300 ease-in-out' 
                    src={open ? close : menu} 
                    width={30} 
                    height={30} 
                    alt='web development agency' 
                    onClick={()=> setOpen((prev)=> !prev)}
                    style={{transform: open ? 'rotate(90deg)' : 'rotate(0)'}}
                >
                    
                    
                </Image>
                
                {open && (
                    <nav className='xl:hidden fixed top-[100px] left-0 h-[calc(100vh-100px)] leading-10 bg-white py-20 px-5 text-xl  w-full z-10'>
                    <div className='flex flex-col space-y-4'>
                        {links.map((link) => (
                            <Navlink 
                                item={link} 
                                key={link.title}
                            />
                        ))}
                    </div>
                </nav>
                )}
            </div>
                
                    
                
        </header>
        
        

    )
    
}

export default Links