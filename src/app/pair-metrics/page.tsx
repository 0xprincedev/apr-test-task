'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'
import moment from 'moment'
import { twMerge } from 'tailwind-merge'
import data from '@/__mock__/pair-metrics.json'
import { pairs } from '@/config/constants'
import { API_URL } from '@/config/env'

export default function PairMetricsPage() {
  const [pairAddress, setPairAddress] = useState<string>(pairs[0].address)
  const [dateRange, setDateRange] = useState({
    startDate: '',
    endDate: '',
  })

  const getMetricsData = async () => {
    if (!dateRange.startDate || !dateRange.endDate) {
      toast.error('Date range cannot be null')
      return
    }

    if (dateRange.endDate < dateRange.startDate) {
      toast.error('Invalid date')
      return
    }
    const response = await fetch(
      `${API_URL}/pairs/${pairAddress}/metrics?startDate=${moment(dateRange.startDate).utc().format('YYYY-MM-DDTHH:mm:ss[Z]')}&endDate=${moment(dateRange.endDate).utc().format('YYYY-MM-DDTHH:mm:ss[Z]')}`,
    )
    if (response.ok) return await response.json()
  }

  return (
    <div className='p-5'>
      <div className='flex gap-2'>
        {pairs.map((pair, idx) => (
          <button
            className={twMerge(
              'h-[22px] min-w-[30px] rounded-xs border px-1.5 text-sm text-[#43484D]',
              pairAddress === pair.address
                ? 'border-[#2467E8] bg-[#E2E8F3]'
                : 'border-transparent bg-white',
            )}
            key={`pair-${idx}`}
            onClick={() => setPairAddress(pair.address)}
          >
            {pair.name}
          </button>
        ))}
      </div>
      <div className='mt-2 flex flex-col gap-1 sm:flex-row sm:items-center'>
        <input
          type='datetime-local'
          className='border-border w-fit rounded border bg-white px-2 py-1 text-sm sm:w-full'
          value={dateRange.startDate}
          onChange={(e) =>
            setDateRange((prev) => ({ startDate: e.target.value, endDate: prev.endDate }))
          }
        />
        <span className='hidden sm:block'>{' ~ '}</span>
        <input
          type='datetime-local'
          className='border-border w-fit rounded border bg-white px-2 py-1 text-sm sm:w-full'
          value={dateRange.endDate}
          onChange={(e) =>
            setDateRange((prev) => ({
              startDate: prev.startDate,
              endDate: e.target.value,
            }))
          }
        />
      </div>
      <button
        className='border-border mt-2 cursor-pointer rounded border bg-white px-2 py-1 text-sm'
        onClick={() => getMetricsData()}
      >
        Get Metrics Data
      </button>
      <div className='-mx-5 mt-5'>
        <div className='w-full overflow-x-auto px-5'>
          <table className='metrics-table'>
            <thead>
              <tr>
                <th>Reserve</th>
                <th>Reserve1</th>
                <th>Reserve USD</th>
                <th>Hourly Volume Token0</th>
                <th>Hourly Volume Token1</th>
                <th>Hourly Volume USD</th>
                <th>Total Supply</th>
                <th>Hour Start</th>
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td className='text-center' colSpan={8}>
                    No data to show
                  </td>
                </tr>
              ) : (
                data.map((row) => (
                  <tr key={row.id}>
                    <td>{Number(row.reserve0).toFixed(4)}</td>
                    <td>{Number(row.reserve1).toFixed(4)}</td>
                    <td>{Number(row.reserveUSD).toFixed(4)}</td>
                    <td>{Number(row.hourlyVolumeToken0).toFixed(4)}</td>
                    <td>{Number(row.hourlyVolumeToken1).toFixed(4)}</td>
                    <td>{Number(row.hourlyVolumeUSD).toFixed(4)}</td>
                    <td>{Number(row.totalSupply).toFixed(4)}</td>
                    <td>
                      {new Date(row.hourStartUnix).toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true, // 12-hour format
                        day: 'numeric',
                        month: 'short', // Month as a short name (e.g., May)
                        year: 'numeric',
                        // timeZoneName: 'short', // Display timezone abbreviation
                      })}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
