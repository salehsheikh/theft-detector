"use client"
import AlertsTable from '@/app/components/timealerts/AlertsTable'
import FilterSection from '@/app/components/timealerts/FilterSection'
import React from 'react'

const Page = () => {
  return (
    <div className='px-3 container space-y-7.5 pb-2'>
      <div>
        <p className="text-[20px] font-semibold text-white pb-2.5 z-50">Real-Time Alerts</p>
        <p className="pb-3.5 text-white text-sm font-medium z-50">
          Monitor and review security incidents as they happen
        </p>
      </div>

      <div>
        <FilterSection />
      </div>
      <div><AlertsTable /></div>
    </div>
  )
}

export default Page