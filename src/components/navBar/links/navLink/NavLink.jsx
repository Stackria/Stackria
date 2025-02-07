import Link from 'next/link'
import React from 'react'
import { museo, museoReg } from "@/app/layout";

const NavLink = ({item}) => {
  return (
    <nav>
      <ul className={`${museoReg.className} lg:px-6 px-2 text-secondary hover:text-gray-800 xl:text-white xl:text-md  xl:hover:text-gray-800`}>
        <Link href={item.path}>{item.title}</Link>
      </ul>
    </nav>
  )
}

export default NavLink