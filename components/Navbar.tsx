import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Navitems from './Navitems'
import { SignInButton, UserButton, SignedIn, SignedOut } from '@clerk/nextjs'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link href="/">
            <div className='flex items-center gap-2.5 cursor-pointer'>
                <Image src="/images/logo.svg" alt="logo" width={46} height={44} />
            </div>
        </Link>
        <div className='flex items-center gap-8'>
            <Navitems />
            <SignedOut>
                <SignInButton>
                  <Button className='btn-signin'>Sign In</Button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    </nav>
  )
}

export default Navbar 