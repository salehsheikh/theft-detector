import Image from 'next/image'
import React, { useState } from 'react'
import ViewClipModal from '../modals/ViewClipModal';
import LiveFeedModal from '../modals/LiveFeedModal';

const AlertsTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFeedModalOpen, setIsFeedModalOpen] = useState(false);
    return (
        <>
            <div className='h-full '>


                <div className='bg-[color:var(--color-darkest)] overflow-y-auto rounded-[20px] max-h-[432px] h-full py-[29px] px-[33px] space-y-[15px]'>
                    <div className='flex justify-between border-b border-white space-y-[15px]'>
                        <div className='flex gap-[15px] items-center'>
                            <Image width="86" height="86" alt='img' src="/images/lady.svg" />
                            <p className='text-white font-medium'>Customer placing item in personal bag without scanning</p>
                        </div>
                        <div className='flex gap-7 items-center'>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className='text-base cursor-pointer text-[#0D0D0D] px-[31px] py-3.5 rounded-[10px] font-semibold bg-[#B1ED00] w-[167px] h-12'>
                                View Clip
                            </button>
                            <button
                                onClick={() => setIsFeedModalOpen(true)}
                                className='text-base cursor-pointer text-[#0D0D0D] px-[31px] py-3.5 rounded-[10px] font-semibold bg-[#FFFFFF66] w-[167px] h-12'>
                                Live Feed
                            </button>
                            <button className='text-base text-[#0D0D0D] px-[21px] py-3.5 rounded-[10px] font-semibold bg-white/30 w-[167px] h-12'>
                                Mark reviewed
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-between border-b border-white space-y-[15px]'>
                        <div className='flex gap-[15px] items-center'>
                            <Image width="86" height="86" alt='img' src="/images/lady.svg" />
                            <p className='text-white font-medium'>Customer placing item in personal bag without scanning</p>
                        </div>
                        <div className='flex gap-7 items-center'>
                            <button className='text-base text-[#0D0D0D] px-[31px] py-3.5 rounded-[10px] font-semibold bg-[#B1ED00] w-[167px] h-12'>
                                View Clip
                            </button>
                            <button className='text-base text-[#0D0D0D] px-[31px] py-3.5 rounded-[10px] font-semibold bg-[#FFFFFF66] w-[167px] h-12'>
                                Live Feed
                            </button>
                            <button className='text-base text-[#0D0D0D] px-[31px] py-3.5 rounded-[10px] font-semibold bg-white/30 w-[167px] h-12'>
                                Live Feed
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-between border-b border-white space-y-[15px]'>
                        <div className='flex gap-[15px] items-center'>
                            <Image width="86" height="86" alt='img' src="/images/lady.svg" />
                            <p className='text-white font-medium'>Customer placing item in personal bag without scanning</p>
                        </div>
                        <div className='flex gap-7 items-center'>
                            <button className='text-base text-[#0D0D0D] px-[31px] py-3.5 rounded-[10px] font-semibold bg-[#B1ED00] w-[167px] h-12'>
                                View Clip
                            </button>
                            <button className='text-base text-[#0D0D0D] px-[31px] py-3.5 rounded-[10px] font-semibold bg-[#FFFFFF66] w-[167px] h-12'>
                                Live Feed
                            </button>
                            <button className='text-base text-[#0D0D0D] px-[31px] py-3.5 rounded-[10px] font-semibold bg-white/30 w-[167px] h-12'>
                                Live Feed
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-between border-b border-white space-y-[15px]'>
                        <div className='flex gap-[15px] items-center'>
                            <Image width="86" height="86" alt='img' src="/images/lady.svg" />
                            <p className='text-white font-medium'>Customer placing item in personal bag without scanning</p>
                        </div>
                        <div className='flex gap-7 items-center'>
                            <button className='text-base text-[#0D0D0D] px-[31px] py-3.5 rounded-[10px] font-semibold bg-[#B1ED00] w-[167px] h-12'>
                                View Clip
                            </button>
                            <button className='text-base text-[#0D0D0D] px-[31px] py-3.5 rounded-[10px] font-semibold bg-[#FFFFFF66] w-[167px] h-12'>
                                Live Feed
                            </button>
                            <button className='text-base text-[#0D0D0D] px-[31px] py-3.5 rounded-[10px] font-semibold bg-white/30 w-[167px] h-12'>
                                Live Feed
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            {isModalOpen && <ViewClipModal onClose={() => setIsModalOpen(false)} />}
            {isFeedModalOpen && <LiveFeedModal onClose={() => setIsFeedModalOpen(false)} />}
        </>
    )
}

export default AlertsTable