import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavItems from './NavItems'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link href='/'>
            <div className='flex items-center gap-2'>
                <Image src='/logo.svg' alt='logo' width={46} height={32} />
            </div>
        </Link>
        <div className='flex items-center gap-8'>
            <NavItems />
            <p className='text-sm font-medium'>Sign In</p>
        </div>
    </nav>
  )
}

export default Navbar