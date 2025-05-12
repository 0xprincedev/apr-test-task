'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useQuery } from '@tanstack/react-query'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { twMerge } from 'tailwind-merge'
import { months, pairs } from '@/config/constants'
import { API_URL } from '@/config/env'

type Props = {
  className?: string
}

const buttons = [
  { label: '1h', value: 1 },
  { label: '12h', value: 12 },
  { label: '24h', value: 24 },
]

const AprChart: React.FC<Props> = ({ className }) => {
  const [movingAverageHours, setMovingAverageHours] = useState<number>(buttons[0].value)
  const [pairAddress, setPairAddress] = useState<string>(pairs[0].address)
  const { data, isFetching } = useQuery({
    queryKey: [pairAddress, movingAverageHours],
    queryFn: async () => {
      const response = await fetch(
        `${API_URL}/pairs/${pairAddress}/apr-interval?movingAverageHours=${movingAverageHours}`,
      )
      if (response.ok) return await response.json()
      return null
    },
  })

  return (
    <div
      className={twMerge(
        'border-border divide-y divide-[#EEEEEE] rounded-lg border bg-white shadow-[0_0_5px_#EFEFF4]',
        className,
      )}
    >
      <div className='flex h-14 items-center px-4'>
        <p className='font-medium text-[#152935]'>Total Allocation</p>
        <Icon
          icon='material-symbols:help-outline'
          className='ml-1 text-lg text-[#808080]'
        />
      </div>
      <div className='p-4 md:p-[16px_28px_30px_16px]'>
        <div className='flex items-center gap-1.5'>
          <span className='size-[9px] rounded-full bg-[#4A90E2]' />
          <p className='text-[11px]/[13px] text-[#43484D]'>Total Allocation</p>
        </div>
        <div className='mt-3.5 space-y-1.5'>
          <div className='flex gap-[3px]'>
            {buttons.map((button, idx) => (
              <button
                className={twMerge(
                  'h-[22px] min-w-[30px] rounded-xs border px-1.5 text-[11px] text-[#43484D]',
                  movingAverageHours === button.value
                    ? 'border-[#2467E8] bg-[#E2E8F3]'
                    : 'border-transparent bg-[#F6F6F6]',
                )}
                key={`range-${idx}`}
                onClick={() => setMovingAverageHours(button.value)}
              >
                {button.label}
              </button>
            ))}
          </div>
          <div className='flex gap-[3px]'>
            {pairs.map((pair, idx) => (
              <button
                className={twMerge(
                  'h-[22px] min-w-[30px] rounded-xs border px-1.5 text-[11px] text-[#43484D]',
                  pairAddress === pair.address
                    ? 'border-[#2467E8] bg-[#E2E8F3]'
                    : 'border-transparent bg-[#F6F6F6]',
                )}
                key={`pair-${idx}`}
                onClick={() => setPairAddress(pair.address)}
              >
                {pair.name}
              </button>
            ))}
          </div>
        </div>
        <div className='mt-5 h-[250px] w-full sm:h-[400px]'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis
                dataKey='createdAtTimestamp'
                tickFormatter={(timestamp) => {
                  const date = new Date(timestamp)
                  return `${months[date.getMonth()]} ${date.getDate()} ${date.getHours().toString().padStart(2, '0')}:00`
                }}
                fontSize={10}
                color='#485465'
                padding={{ left: 0 }}
              />
              <YAxis fontSize={10} color='#485465' width={10} />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    const date = new Date(label)

                    return (
                      <div className='border-border space-y-1 rounded-lg border bg-white p-1.5 text-xs shadow-[0_0_5px_0_#EFEFF4]'>
                        <p>
                          Date: {months[date.getMonth()]} {date.getDate()}{' '}
                          {date.getHours()}:00
                        </p>
                        <p>APR: {payload[0].value}</p>
                      </div>
                    )
                  }
                }}
              />
              <Line type='linear' dataKey='apr' stroke='#2E71F0' strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default AprChart
