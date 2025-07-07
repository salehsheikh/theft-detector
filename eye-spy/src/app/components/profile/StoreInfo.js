import Image from 'next/image'
import React from 'react'

const StoreInfo = () => {
    return (
        <div className='rounded-[20px] bg-[color:var(--color-darkest)] md:h-[180px] text-white px-[33px] py-5'>
            <p className='text-sm font-semibold'>Store Information</p>
            <div className='flex flex-wrap  md:flex-row md:flex justify-between pt-[23px]'>
                <div className='flex-col space-y-5 '>
                    <div className='flex gap-6.5'>
                        <p className='text-sm font-medium'>
                            Store Name:
                        </p>
                        <p className='text-xs font-medium'>
                            EYE SPY
                        </p>
                    </div>
                    <div className='flex gap-6.5'>
                        <p className='text-sm font-medium'>
                            Store ID:
                        </p>
                        <p className='text-xs font-medium'>
                            #654813
                        </p>
                    </div>
                    <div className='flex gap-6.5'>
                        <p className='text-sm font-medium'>
                            Address:
                        </p>
                        <p className='text-xs font-medium'>
                            California, USA
                        </p>
                    </div>
                    <div>

                    </div>

                </div>
                <div className='flex-col space-y-5 '>
                    <div className='flex gap-1.5'>
                        <p className='text-sm font-medium'>
                            Contact Information:
                        </p>
                        <p className='text-xs font-medium'>
                            +654 6548 6452
                        </p>
                    </div>
                    <div className='flex gap-6.5'>
                        <p className='text-sm font-medium'>
                            Store Hours:
                        </p>
                        <p className='text-xs font-medium'>
                            09 am to 9 pm
                        </p>
                    </div>
                    <div className='flex gap-6.5 items-center'>
                        <p className='text-sm font-medium'>Business Type:</p>
                        <div className='flex gap-4'>
                            <div className='flex items-center gap-1.5'>
                                <span className='w-[7px] h-[7px] rounded-full bg-[#B1ED00]'></span>
                                <p className='text-xs font-medium'>Retail</p>
                            </div>
                            <div className='flex items-center gap-1.5'>
                                <span className='w-[7px] h-[7px] rounded-full bg-white/40'></span>
                                <p className='text-xs font-medium'>Online</p>
                            </div>
                        </div>
                    </div>

                    <div>

                    </div>

                </div>
                <div>
                    <Image src="/icons/4.svg" width={114} height={66} alt='logo' />
                </div>
            </div>
        </div>
    )
}

export default StoreInfo
