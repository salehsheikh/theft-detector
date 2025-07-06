import Image from 'next/image'
import React from 'react'

const DeliverySection = () => {
    return (
        <div className='rounded-[20px] bg-[color:var(--color-darkest)] h-[180px] text-white px-[33px] py-5'>

            <p className='text-sm font-semibold'>Delivery Methods</p>
            <div className='pt-[20px] flex '>
                <div >
                    <p className='font-medium'>
                        Select your preferred delivery methods for orders.
                    </p>
                    <div className="text-xs font-medium flex pt-[13px] flex-col ">
                        <div className='flex  gap-27.5'>
                            <p className="flex items-center gap-1.5">
                                <span className="w-[7px] h-[7px] rounded-full bg-[#B1ED00]"></span>
                                Standard Delivery
                            </p>
                            <p className="flex items-center gap-1.5 ">
                                <span className="w-[7px] h-[7px] rounded-full bg-[#959595]"></span>
                                Express Delivery
                            </p>
                        </div>
                        <div className='flex gap-23 pt-5 '>
                            <p className="flex items-center gap-1.5">
                                <span className="w-[7px] h-[7px] rounded-full bg-[#959595]"></span>
                                International Delivery
                            </p>
                            <p className="flex items-center gap-1.5 ">
                                <span className="w-[7px] h-[7px] rounded-full bg-[#959595]"></span>
                                Same Day Delivery
                            </p>
                        </div>
                    </div>


                </div>
                <div className='space-y-[9px] mx-auto'>
                    <p className='text-sm font-medium '>
                        Shipping Partners
                    </p>
                    <div className='space-y-1'>
                        <p className="flex items-center gap-1 text-xs font-medium">
                            <span className="w-[7px] h-[7px] rounded-full bg-[#B1ED00]"></span>
                            <Image src="/icons/fedex.svg" width={23} height={23} alt='img' />
                            FedEX
                        </p>
                        <p className="flex items-center gap-1 text-xs font-medium">
                            <span className="w-[7px] h-[7px] rounded-full bg-[#959595]"></span>
                            <Image src="/icons/ups.svg" width={23} height={23} alt='img' />
                            UPS
                        </p>
                        <p className="flex items-center gap-1 text-xs font-medium">
                            <span className="w-[7px] h-[7px] rounded-full bg-[#959595]"></span>
                            <Image src="/icons/courier.svg" width={23} height={23} alt='img' />
                            Local Courier
                        </p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default DeliverySection
