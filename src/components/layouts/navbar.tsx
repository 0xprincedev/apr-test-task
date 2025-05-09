import Link from 'next/link'
import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { twMerge } from 'tailwind-merge'

const links = [
  { icon: 'material-symbols:home-outline', href: '#' },
  { icon: 'material-symbols:library-books-outline', href: '#' },
  { icon: 'material-symbols:receipt-long-outline', href: '#' },
  { icon: 'material-symbols:lightbulb', href: '#' },
  { icon: 'material-symbols:settings', href: '#' },
]

type Props = {
  className?: string
}

const Navbar: React.FC<Props> = ({ className }) => {
  return (
    <nav className={twMerge('space-y-5', className)}>
      {links.map((link, idx) => (
        <Link
          href={link.href}
          className={twMerge(
            'flex size-10 items-center justify-center rounded-lg',
            idx === 0 ? 'bg-[#E7F1FF]' : '',
          )}
          key={`navbar-item-${idx}`}
        >
          <Icon
            icon={link.icon}
            className={twMerge(
              'text-2xl',
              idx === 0 ? 'text-[#2E71F0]' : 'text-[#77767B]',
            )}
          />
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
