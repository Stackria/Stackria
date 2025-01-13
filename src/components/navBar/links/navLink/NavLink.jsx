import Link from 'next/link'
import React from 'react'
import { museo } from "@/app/layout";

const NavLink = ({item}) => {
  return (
    <nav className=''>
      <ul className={`${museo.className} lg:px-6 px-2 text-white xl:text-md xl:text-[#032c62] uppercase hover:underline hover:transition-all text-sm hover:text-slate-500 font-bold`}>
        <Link href={item.path}>{item.title}</Link>
      </ul>
    </nav>
  )
}

export default NavLink