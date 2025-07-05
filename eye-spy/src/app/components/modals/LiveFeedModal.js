import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'

const LiveFeedModal = ({ onClose }) => {
    return (
        <div className="fixed inset-x-0 inset-y-24 bg-[color:var(--color-dark)] z-40 flex items-center justify-center">

            <div className='flex gap-5'>
                <Icon
                    onClick={onClose}
                    icon="ep:arrow-left" width="32" height="32" className="size-8 cursor-pointer text-white" />
                <p className='text-[20px] text-white font-semibold'>
                    Real-Time Alerts
                </p>

            </div>
            <div className='flex justify-start mt-2.5 mb-12.5'> Live feed</div>
            <div className='grid grid-cols-2 xl:grid-cols-3'>
                <div className='shrink-0 relative'>
                    <Image src='/images/cam-1.svg' alt='cam1' width="411" height="285" />
                    <div className='text-white absolute bottom-4 flex justify-between'>
                        <div>
                            CAM 01
                        </div>
                        <div>
                            00:01:26:34
                        </div>
                    </div>

                </div>
                <div className='shrink-0 relative'>
                    <Image src='/images/cam-2.svg' alt='cam1' width="411" height="285" />
                    <div className='text-white absolute bottom-4 flex justify-between'>
                        <div>
                            CAM 01
                        </div>
                        <div>
                            00:01:26:34
                        </div>
                    </div>

                </div>
                <div className='shrink-0 relative'>
                    <Image src='/images/cam-3.svg' alt='cam1' width="411" height="285" />
                    <div className='text-white absolute bottom-4 flex justify-between'>
                        <div>
                            CAM 01
                        </div>
                        <div>
                            00:01:26:34
                        </div>
                    </div>

                </div>
                <div className='shrink-0 relative'>
                    <Image src='/images/cam-4.svg' alt='cam1' width="411" height="285" />
                    <div className='text-white absolute bottom-4 flex justify-between'>
                        <div>
                            CAM 01
                        </div>
                        <div>
                            00:01:26:34
                        </div>
                    </div>

                </div>
                <div className='shrink-0 relative'>
                    <Image src='/images/cam-5.svg' alt='cam1' width="411" height="285" />
                    <div className='text-white absolute bottom-4 flex justify-between'>
                        <div>
                            CAM 01
                        </div>
                        <div>
                            00:01:26:34
                        </div>
                    </div>

                </div>
                <div className='shrink-0 relative'>
                    <Image src='/images/cam-6.svg' alt='cam1' width="411" height="285" />
                    <div className='text-white absolute bottom-4 flex justify-between'>
                        <div>
                            CAM 01
                        </div>
                        <div>
                            00:01:26:34
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default LiveFeedModal