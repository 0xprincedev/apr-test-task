'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { twMerge } from 'tailwind-merge'

const links = [
  { icon: 'material-symbols:home-outline', href: '/' },
  { icon: 'material-symbols:library-books-outline', href: '/pair-metrics' },
  { icon: 'material-symbols:receipt-long-outline', href: '#' },
  { icon: 'material-symbols:lightbulb', href: '#' },
  { icon: 'material-symbols:settings', href: '#' },
]

type Props = {
  className?: string
}

const Navbar: React.FC<Props> = ({ className }) => {
  const pathname = usePathname()

  return (
    <nav className={twMerge('space-y-5', className)}>
      {links.map((link, idx) => (
        <Link
          href={link.href}
          className={twMerge(
            'flex size-10 items-center justify-center rounded-lg',
            pathname === link.href ? 'bg-[#E7F1FF]' : '',
          )}
          key={`navbar-item-${idx}`}
        >
          <Icon
            icon={link.icon}
            className={twMerge(
              'text-2xl',
              pathname === link.href ? 'text-[#2E71F0]' : 'text-[#77767B]',
            )}
          />
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
