"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Login = () => {
    const router = useRouter();
    return (
        <div className="flex-col md:flex md:flex-row space-y-4 justify-center items-center my-28.5 mx-8 relative">
            <div
                className="absolute md:size-[302px] size-[102px] z-0 shrink-0 rounded-full md:-top-4 top-1/5 right-[27%]"
                style={{
                    background: "linear-gradient(319deg, #E3FF91 17.52%, #85B103 95.06%)"
                }}
            ></div>
            <div
                className="absolute size-[220px] z-0 shrink-0 rounded-full -bottom-20 -right-7"
                style={{
                    background: "linear-gradient(319deg, #E3FF91 17.52%, #85B103 95.06%)"
                }}
            ></div>
            <div className="flex-col space-y-7">
                <p className="lg:text-8xl md:text-3xl text-2xl font-semibold text-white md:pr-[55px] pt-24!">Welcome Back .!</p>
                <div className="flex items-center gap-4 w-full">
                    <button className="border-[4px] border-[#AFD148] py-3.5 px-[25px] rounded-[15px] flex justify-center items-center md:text-[32px] italic font-semibold">
                        Get Started
                    </button>
                    <hr className="flex-grow border-t-2 border-dashed border-white" />
                </div>

            </div>
            <div
                className="inline-flex max-w-[320px] xs:w-full xs:max-w-fit relative flex-col bg-black/70 justify-end items-center  px-[40px] py-[97px] pb-[76px] text-white overflow-hidden"
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
                    <h1 className="text-[36px] font-semibold">Login</h1>
                    <p className="font-medium pt-1">Glad you’re back.!</p>
                </div>

                {/* Username */}
                <div className="flex md:w-[400px] w-full  px-4 py-[14px] mt-6 items-center gap-2 border border-white rounded-[12px]">
                    <input
                        type="text"
                        placeholder="Username"
                        className="bg-transparent w-full outline-none placeholder-white text-xl"
                    />
                </div>

                {/* Password */}
                <div className="flex  md:w-[400px] w-full  px-4 py-[14px] mt-4 items-center gap-2 border border-white rounded-[12px]">
                    <input
                        type="password"
                        placeholder="Password"
                        className="bg-transparent w-full outline-none placeholder-white text-xl"
                    />
                    <span className="text-white text-lg cursor-pointer">
                        <Icon icon="humbleicons:eye-close" width="18" height="18" />
                    </span>
                </div>


                {/* Remember Me */}
                <div className="flex  md:w-[400px] w-full  items-center mt-4 text-base gap-2">
                    <input type="checkbox" id="remember" className="accent-[#B1ED00] size-[18px]" />
                    <label htmlFor="remember">Remember me</label>
                </div>

                {/* Login Button */}
                <button
                    onClick={() => router.push("/")}
                    className=" md:w-[400px] w-full  cursor-pointer bg-[#B1ED00] text-black rounded-[12px] py-3 mt-4 font-semibold text-xl">
                    Login
                </button>

                {/* Forgot Password */}
                <p
                    onClick={() => router.push("/forget-password")}
                    className="text-center font-medium  mt-4 cursor-pointer">
                    Forgot Password?
                </p>

                <div className="flex items-center justify-center gap-4 w-[400px] mt-6">
                    <hr className="flex-grow h-[2px] bg-white/40 border-0" />
                    <span className="text-base font-medium text-white/40">or</span>
                    <hr className="flex-grow h-[2px] bg-white/40 border-0" />
                </div>




                {/* Logos */}
                <div className="flex gap-6 mt-4">
                    <Image src="/icons/facebook.svg" alt="Facebook" width={42} height={42} />
                    <Image src="/icons/devicon_google.svg" alt="Google" width={42} height={42} />
                    <Image src="/icons/bi_github.svg" alt="Twitter" width={42} height={42} />
                </div>

                {/* Sign Up */}
                <div className="text-base font-medium mt-[101px]">
                    Don’t have an account?{" "}
                    <span
                        onClick={() => router.push("/signup")}
                        className="underline cursor-pointer">Signup</span>
                </div>
                <div className="flex gap-[33px]  pt-3">
                    <p>Terms & Conditions</p>
                    <p>Support</p>
                    <p>Customer Care</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
