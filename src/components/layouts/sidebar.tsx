'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoImage from '@/assets/images/logo.png'
import Account from '../account'
import Notifications from '../notifications'
import Navbar from './navbar'

const Sidebar: React.FC = () => {
  return (
    <aside className='border-border fixed top-0 left-0 z-[1300] flex h-screen w-16 flex-col gap-5 border-r bg-white'>
      <div className='w-full py-5'>
        <Link href='/' className='mx-auto block h-fit w-fit'>
          <Image src={LogoImage} alt='Logo' width={22} height={26} />
        </Link>
      </div>
      <div className='flex w-full flex-grow flex-col py-5'>
        <Navbar className='mx-auto w-fit' />
        <div className='mt-auto space-y-5'>
          <Notifications className='mx-auto' />
          <Account className='mx-auto' />
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
