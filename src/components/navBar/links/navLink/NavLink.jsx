import Link from 'next/link'
import React from 'react'

const NavLink = ({item}) => {
  return (
    <nav>
      <ul className='lg:px-6 px-2 text-left text-slate-900 hover:text-slate-200 font-bold text-20'>
        <Link href={item.path}>{item.title}</Link>
      </ul>
    </nav>
  )
}

export default NavLink