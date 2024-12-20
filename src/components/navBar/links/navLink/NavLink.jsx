import Link from 'next/link'
import React from 'react'

const NavLink = ({item}) => {
  return (
    <nav className=''>
      <ul className='lg:px-6 px-2 text-left text-white xl:text-md xl:text-slate-900 uppercase hover:underline hover:transition-all text-sm hover:text-slate-500 font-bold'>
        <Link href={item.path}>{item.title}</Link>
      </ul>
    </nav>
  )
}

export default NavLink