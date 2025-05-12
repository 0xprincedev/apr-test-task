'use client'

import { PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Header from '@/components/layouts/header'
import Sidebar from '@/components/layouts/sidebar'

const queryClient = new QueryClient()

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <Sidebar />
      <div className='top-0 left-0 h-screen w-full overflow-y-auto pl-16'>
        <Header />
        {children}
      </div>
      <Toaster />
    </QueryClientProvider>
  )
}
