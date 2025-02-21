import Link from 'next/link'
import React from 'react'
import { museo, museoReg } from "@/app/layout";

const NavLink = ({item, scroll}) => {
  return (
    <nav>
      <ul className={`${museoReg.className} lg:px-6 px-2 hover:text-gray-800 text-[15px] xl:text-[15px]  xl:hover:text-primary xl:${scroll ? "text-black" : "text-white"} ${scroll ? "text-black" : "text-white"}`} >
        <Link href={item.path}>{item.title}</Link>
      </ul>
    </nav>
  )
}

export default NavLink