'use client'

import { usePathname } from 'next/navigation'
import SearchBox from '../search-box'

const Header: React.FC = () => {
  const pathname = usePathname()

  return (
    <header className='border-border sticky top-0 z-10 flex h-16 w-full items-center gap-5 border-b bg-white px-4 xl:pr-[50px] xl:pl-10'>
      <h1 className='text-xl font-bold'>
        {pathname.includes('pair-metrics') ? 'Pair Metrics' : 'Dashboard'}
      </h1>
      <SearchBox className='ml-auto' />
    </header>
  )
}

export default Header
