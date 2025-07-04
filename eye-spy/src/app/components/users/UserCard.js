
import Image from 'next/image'
import React from 'react'

const UserCard = ({title,count,desc ,isFirst=false}) => {
  return (
 <div
      className={`h-31 w-full rounded-[20px] py-5.5! px-6 text-white ${
        isFirst ? 'bg-[#B1ED00] text-[#0D0D0D]' : 'bg-[color:var(--color-darkest)] border border-[#8F8F8F]'
      }`}
    >        <div className='flex gap-2.5'>
            <div>
               <Image width={40} height={40} src="/icons/users.svg" alt='users'/>

            </div>
            <p className='xl:text-[30px] text-[23px] font-karma leading-8'>{title}</p>
        </div>
        <div className='flex justify-end font-medium xl:text-[40px] text-[30px]  leading-8'>
            {count}
        </div>
        <div className='xl:text-base text-sm leading-4'>
           {desc}
        </div>

    </div>
  )
}

const UserWrapper=()=>{
    return(
        <div className='mt-[37px]'>
           
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-12'>
 <UserCard
        title="Total Users"
        count="1,365"
        desc="Joined from the current month"
        isFirst="true"
        />
        <UserCard
        title="Monitoring Staff"
        count="850"
        desc="Responsible for store security"
        />
        <UserCard
        title="Clients"
        count="515"
        desc="Monitor with tailored alerts"
        />
       
        </div>
        </div>
       
    )
}
export default UserWrapper;