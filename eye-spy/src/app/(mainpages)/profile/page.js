"use client"
import DeliverySection from '@/app/components/profile/DeliverySection'
import NotificationSection from '@/app/components/profile/NotificationSection'
import SecuritySection from '@/app/components/profile/SecuritySection'
import StoreInfo from '@/app/components/profile/StoreInfo'
import React from 'react'

const page = () => {
    return (
        <div className='md:mx-[63px] mx-4 pb-2'>


            <div className=' space-y-7.5 pb-8.5'>
                <div>
                    <p className="text-[20px] font-semibold text-white pb-2.5 z-50">Profile & Settings</p>
                    <p className="pb-3.5 text-white text-sm font-medium z-50">
                        Manage your store information and preferences
                    </p>
                </div>

                <div>
                    <StoreInfo />
                </div>
                <div>
                    <NotificationSection />
                </div>
                <div><DeliverySection /></div>
                <div>
                    <SecuritySection />
                </div>

            </div>
            <div className='flex justify-between'>
                <button className="border border-[#B1EC00] px-[31px] py-3.5 text-base font-medium text-[#B1EC00]
                 rounded-[10px] w-[167px] h-12 flex items-center justify-center">
                    Logout
                </button>
                <button className=" bg-[#B1EC00] px-[31px] py-3.5 text-base font-medium text-black
                 rounded-[10px] w-[167px] h-12 flex items-center justify-center">
                    Save Changes
                </button>
            </div>
        </div>
    )
}

export default page
