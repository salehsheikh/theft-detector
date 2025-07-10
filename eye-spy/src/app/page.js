import React from 'react'
import TopCards from './components/dashboard/TopCards'
import DonutCard from './components/dashboard/DonutCard'
import BarCard from './components/dashboard/BarCard'
import RecentCard from './components/dashboard/RecentCard'

const page = () => {
  return (
    <div>

      <div className='container px-3 space-y-9 pb-2'>
        <div><TopCards /></div>
        <div className=' gap-[38px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <div className='flex-1 min-w-0'><DonutCard /></div>
          <div className='flex-1 min-w-0'><BarCard /></div>
          <div className='flex-1 min-w-0'><RecentCard /></div>
        </div>

      </div>


    </div>

  )
}

export default page