import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'

const RecentCard = () => {
  return (
      <div className="bg-[color:var(--color-darkest)] card-shadow w-full h-[304px] rounded-[20px] p-6 flex flex-col  text-white">
    
      <div className="flex justify-between text-base font-semibold">
        <p>Recent Alerts</p>
        <button
        className='border border-[#FFFFFF38] font-normal rounded-[5px] w-[73px] h-[25px] flex items-center justify-center text-xs'>View All</button>
      </div>

      <div className='rounded-[10px] border border-[#FFFFFF38] px-[15px] py-1.5 mt-6'>
        <div className='flex gap-4'>
            <div className='bg-[#33333399] rounded-[20px] w-[83px] h-[17px] flex items-center justify-center'>
                <p className='text-white font-light text-xs'>items in bag</p>

            </div>
            <div className='text-[#FFFFFF80] text-xs'>
CAM-01
            </div>
        </div>
        <div className='flex justify-end'>
            <Image width="18" height="18" alt='time' src="/icons/time.svg" />
        </div>
        <div className='flex gap-1'>
        <div className='text-xs text-white'>
            16:46
        </div>
        <div className='bg-[#B1ED00] w-[41px] h-[17px] flex items-center justify-center rounded-[20px] text-black text-sm'>
            92%
        </div>
        </div>

      </div>
      <div className='rounded-[10px] border border-[#FFFFFF38] px-[15px] py-1.5 mt-2.5'>
        <div className='flex gap-4'>
            <div className='bg-[#B1ED00] rounded-[20px] w-[100px] h-[17px] flex items-center justify-center'>
                <p className='text-black font-light text-xs'>items in Pocket</p>

            </div>
            <div className='text-[#FFFFFF80] text-xs'>
CAM-03
            </div>
        </div>
        <div className='flex justify-end'>
<Icon icon="charm:circle-tick" width="18" height="18"  className='text-[#46CF68]'/>
        </div>
        <div className='flex gap-1'>
        <div className='text-xs text-white'>
            16:46
        </div>
        <div className='bg-[#33333399] w-[41px] h-[17px] flex items-center justify-center rounded-[20px] text-white text-sm'>
            76%
        </div>
        </div>

      </div>
      <div className='rounded-[10px] border border-[#FFFFFF38] px-[15px] py-1.5 mt-2.5'>
        <div className='flex gap-4'>
            <div className='bg-[#33333399] rounded-[20px] w-[102px] h-[17px] flex items-center justify-center'>
                <p className='text-white font-light text-xs'>items in jacket</p>

            </div>
            <div className='text-[#FFFFFF80] text-xs'>
CAM-01
            </div>
        </div>
        <div className='flex justify-end'>
            <Image width="18" height="18" alt='time' src="/icons/time.svg" />
        </div>
        <div className='flex gap-1'>
        <div className='text-xs text-white'>
            16:46
        </div>
        <div className='bg-[#33333399] w-[41px] h-[17px] flex items-center justify-center rounded-[20px] text-white text-sm'>
           65%
        </div>
        </div>

      </div>
      </div>
  )
}

export default RecentCard