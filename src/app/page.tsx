import AprChart from '@/components/apr-chart'
import Card from '@/components/card'

export default function Home() {
  return (
    <div className='space-y-5 px-4 py-5 xl:p-[20px_50px_20px_40px]'>
      <div className='space-y-2.5'>
        <h2>Global Metrics</h2>
        <div className='grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
          <Card label='Total Allocation' value='$2,533,557.32' />
          <Card label='Day Change' value='+$4,482.29' percentage={0.18} />
          <Card label='YTD Change' value='+$1,360,225' percentage={115.93} />
          <Card label='Average Annualized Yield' value='23%' />
          <Card label='Total Deployed' value='$21,000,000' />
        </div>
      </div>
      <div className='space-y-2.5'>
        <h2>Annualized Returns</h2>
        <div className='grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
          <Card label='All-Time' percentage={8.838} />
          <Card label='30-Day' percentage={8.838} />
          <Card label='7-Day' percentage={7.382} />
          <Card label='24-Hour' percentage={7.765} />
        </div>
      </div>
      <div className='space-y-2.5'>
        <h2>Performance</h2>
        <AprChart />
      </div>
    </div>
  )
}
