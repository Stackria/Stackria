import Link from 'next/link'
import React from 'react'
import { museo, museoReg, outfitRegular } from "@/app/layout";

const NavLink = ({item, scroll}) => {
  return (
    <nav>
      <ul className={`${outfitRegular.className} lg:px-6 px-2 text-[15px] xl:text-[16px] 2xl:text-[18px] transition-colors duration-300 
       text-black hover:text-gray-800 xl:hover:text-gray-500`} >
        <Link href={item.path}>{item.title}</Link>
      </ul>
    </nav>
  )
}

export default NavLink