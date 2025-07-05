import React from 'react'

const NotificationSection = () => {
    return (
        <div className='rounded-[20px] bg-[color:var(--color-darkest)] h-[180px] text-white px-[33px] py-5'>

            <p className='text-sm font-semibold'>Notifications and preference</p>
            <div className='pt-[29px] flex justify-between'>
                <div >
                    <p className='font-medium'>
                        Choose your preferred way to receive notifications from our system
                    </p>
                    <div className="text-xs font-medium flex pt-[13px] justify-baseline gap-17">
                        <p className="flex items-center gap-1.5">
                            <span className="w-[7px] h-[7px] rounded-full bg-[#B1ED00]"></span>
                            Email
                        </p>
                        <p className="flex items-center gap-1.5">
                            <span className="w-[7px] h-[7px] rounded-full bg-[#959595]"></span>
                            Sms
                        </p>
                        <p className="flex items-center gap-1.5">
                            <span className="w-[7px] h-[7px] rounded-full bg-[#959595]"></span>
                            App Notification
                        </p>
                    </div>


                </div>
                {/* notificatio */}
                <div className="flex items-center justify-between border border-white/30 bg-transparent rounded-[10px] px-4 py-2 w-full max-w-md">
                    <p className=" font-semibold text-white">Enable Notifications</p>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11.5 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#B1ED00] transition-all"></div>
                        <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-black rounded-full transition-all peer-checked:translate-x-full"></div>
                    </label>
                </div>


            </div>
        </div>
    )
}

export default NotificationSection
