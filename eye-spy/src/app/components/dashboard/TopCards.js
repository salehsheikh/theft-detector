import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'

const TopCards = () => {
  return (
    <>
      <div className='  mt-8 py-2.5 '>
        <p className='text-[20px] font-semibold text-white' >Welcome back, Downtown Store</p>
        <p className='text-sm font-medium text-white'>Here&rsquo;s what&rsquo;s happening with your store security today.</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[17px]'>
        <div className='bg-[color:var(--color-darkest)]  rounded-[20px] px-5 py-11 mt-5 card-shadow w-full h-[211px]'>
          <div className='flex justify-between'>
            <p className='text-sm font-medium text-white'>Total Incidents Today</p>
            <Icon icon="si:alert-line" width="18" height="18" className="text-[#FF6666]" />
          </div>
          <div className='flex space-x-1 pt-11'>
            <p className='text-[32px] text-white '>
              12

            </p>
            <span className='text-xs text-white pt-4'>📈15% vs last week</span>

          </div>



        </div>
        <div className='bg-[color:var(--color-darkest)] rounded-[20px] px-5 py-11 mt-5 card-shadow w-full h-[211px]'>
          <div className='flex justify-between'>
            <p className='text-sm font-medium text-white'>Total Incidents Today</p>
            <Icon icon="charm:circle-tick" width="18" height="18" className='text-[#46CF68]' />
          </div>

          <div className='flex justify-between mt-2 pt-11'>
            <p className='text-xs text-white '>8 of 12 reviewed</p>
            <span className='text-xs text-white '>67%</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-[10px] bg-[#B1ED004D] rounded-full mt-6 overflow-hidden">
            <div
              className="h-full rounded-full bg-[#B1ED00] transition-all duration-500 ease-in-out"
              style={{ width: "67%" }}
            ></div>
          </div>
          <p className='text-[10px] text-white pt-1'>
            4 pending
          </p>
        </div>

        <div className='bg-[color:var(--color-darkest)]  rounded-[20px] px-5 py-11 mt-5 card-shadow w-full h-[211px]'>
          <div className='flex justify-between'>
            <p className='text-sm font-medium text-white'>Most Frequent Alert</p>
            <Icon icon="mdi-light:shield" width="18" height="18" className='text-[#B1ED00]' />
          </div>
          <div className=' space-y-1 pt-11'>
            <p className='text-[32px] text-white '>
              Items in bag

            </p>
            <p className='text-xs text-white/50 '>67% of today’s incidents</p>

          </div>



        </div>
        <div className='bg-[color:var(--color-darkest)]  rounded-[20px] px-5 py-11 mt-5 card-shadow w-full h-[211px]'>
          <div className='flex justify-between'>
            <p className='text-sm font-medium text-white'>Last Alert Time</p>
            <Image src="/icons/time.svg" width="18" height="18" alt='time' />
          </div>
          <div className=' space-y-1 pt-11'>
            <p className='text-[32px] text-white '>
              2 minutes ago

            </p>
            <p className='text-xs text-white/50 '>CAM-01 . item detected</p>

          </div>



        </div>
      </div>
    </>
  )
}

export default TopCards