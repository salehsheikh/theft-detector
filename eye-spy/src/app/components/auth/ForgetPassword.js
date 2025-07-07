"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const ForgetPassword = () => {
    const router = useRouter();
    return (
        <div className="flex-col md:flex md:flex-row space-y-4  justify-center items-center my-28.5 mx-8 relative">
            <div
                className="absolute md:size-[302px] size-[160px] z-0 shrink-0 rounded-full md:-top-4  top-[19%] right-1/3"
                style={{
                    background: "linear-gradient(319deg, #E3FF91 17.52%, #85B103 95.06%)"
                }}
            ></div>
            <div
                className="absolute size-[220px] z-0 shrink-0 rounded-full -bottom-20 right-2"
                style={{
                    background: "linear-gradient(319deg, #E3FF91 17.52%, #85B103 95.06%)"
                }}
            ></div>
            <div className="flex-col space-y-7">
                <p className="lg:text-8xl md:text-3xl text-2xl  font-semibold text-white pr-[55px] pt-24!">No Worries!</p>
                <div className="flex items-center gap-4 w-full">
                    <button className="border-[4px] border-[#AFD148] py-3.5 px-[25px] rounded-[15px] flex justify-center items-center md:text-[32px] italic font-semibold">
                        Take me back
                    </button>
                    <hr className="flex-grow border-t-2 border-dashed border-[#D2D2D2]" />
                </div>

            </div>
            <div
                className="inline-flex max-w-[320px] xs:w-full xs:max-w-fit relative flex-col bg-black/70 justify-end items-center px-[40px] py-[97px] pb-[76px] text-white overflow-hidden"
                style={{
                    borderRadius: "20px",
                    // background:
                    //     "linear-gradient(321deg, rgba(191,191,191,0.31) 20%, rgba(0,0,0,0)), #000000B2",
                    // borderWidth: "1px",
                    // borderStyle: "solid",
                    // borderImageSource: "linear-gradient(to bottom, #AFAFAF, #60606000)",
                    borderImageSlice: 1,
                    boxShadow: "-8px 4px 5px 0px rgba(0, 0, 0, 0.24)",
                    backdropFilter: "blur(26.5px)",
                }}
            >


                {/* Heading */}
                <div className="w-full text-left">
                    <h1 className="text-[36px] font-semibold">Forgot Password?</h1>
                    <p className="font-medium pt-1">Please enter your email</p>
                </div>

                {/* email */}
                <div className="flex md:w-[400px] w-full px-4 py-[14px] mt-6 items-center gap-2 border border-white rounded-[12px]">
                    <input
                        type="email"
                        placeholder="ali@example.com"
                        className="bg-transparent w-full outline-none placeholder-white text-xl"
                    />
                </div>

                {/* Reset Button */}
                <button className="md:w-[400px] w-full bg-[#B1ED00] text-black rounded-[12px] py-3 mt-4 font-semibold text-xl">
                    Reset Password
                </button>

                <div className="flex items-center justify-center gap-4 md:w-[400px] w-full mt-6">
                    <hr className="flex-grow h-[2px] bg-white/40 border-0" />
                    <span className="text-base font-medium text-white/40">or</span>
                    <hr className="flex-grow h-[2px] bg-white/40 border-0" />
                </div>



                {/* Sign in */}
                <div className="text-base font-medium mt-[350px]">
                    Already have an account?{" "}
                    <span
                        onClick={() => router.push("/login")}
                        className="underline cursor-pointer">Sign in</span>
                </div>
                <div className="flex justify-between gap-[33px] pt-3">
                    <p>Terms & Conditions</p>
                    <p>Support</p>
                    <p>Customer Care</p>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword
