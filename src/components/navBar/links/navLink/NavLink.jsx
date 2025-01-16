import Link from 'next/link'
import React from 'react'
import { museo } from "@/app/layout";

const NavLink = ({item}) => {
  return (
    <nav className=''>
      <ul className={`${museo.className} lg:px-6 px-2 text-secondary hover:text-gray-800 xl:text-white xl:text-md  xl:hover:text-gray-800`}>
        <Link href={item.path}>{item.title}</Link>
      </ul>
    </nav>
  )
}

export default NavLink