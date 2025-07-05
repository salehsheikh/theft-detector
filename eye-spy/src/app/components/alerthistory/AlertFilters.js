"use client"
import React from 'react'
import { Icon } from '@iconify/react';
import Dropdown from '../../shared/DropDown';

const AlertFilter = () => {
    const handleChange = (val) => {
        console.log("Selected:", val);
    };
    return (
        <div className='rounded-[20px] h-[127px] py-5 px-[33px]  bg-[color:var(--color-darkest)]'>
            <div className='flex-col space-y-7.5'>
                <p className='text-sm text-white font-semibold'> Filters</p>
                <div>
                    <div className='grid grid-cols-6 gap-[9px] px-6'>
                        <div className="relative w-full h-[40px]">
                            <div className="flex items-center px-4 h-full rounded-[15px] border border-white/20 bg-transparent text-white">
                                <Icon icon="mynaui:search" className="text-white text-base mr-4 size-6" />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="bg-transparent text-white text-sm outline-none placeholder-white w-full"
                                />
                            </div>
                        </div>
                        <div className='w-full h-10 shrink-0 text-sm text-black flex items-center justify-center rounded-[15px] bg-[#B1ED00]'>
                            Date Range
                        </div>
                        <Dropdown
                            label="All Types"
                            options={["Admin", "User", "Staff"]}
                            onSelect={handleChange}
                        />
                        <Dropdown
                            label="All Confidence"
                            options={["Admin", "User", "Staff"]}
                            onSelect={handleChange}
                        />
                        <Dropdown
                            label="All Status"
                            options={["Admin", "User", "Staff"]}
                            onSelect={handleChange}
                        />
                        <div className='w-full h-10 shrink-0 text-sm text-white border border-white/22 flex items-center justify-center rounded-[15px] bg-transparent'>
                            Clear Filters
                        </div>
                    </div>


                </div>
            </div>


        </div>
    )
}

export default AlertFilter