import React, { useState } from "react";
import AuthLayout from "../layout/AuthLayout";
import Logo from "../assets/images/logo2.png";
import SocialButton from "../components/SocialButton";
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi'

const LoginPage = () => {
    const [showPassword, setShowPassword] =  useState(false)
  return (
    <AuthLayout>
      <div className="p-16">
        <div className="flex justify-center pb-24">
          <img src={Logo} alt="Gathergram Logo" className="h-14" />
        </div>
        <h1 className="text-2xl font-semibold">Get Started</h1>
        <p className="text-sm w-2/3 text-black">
          Enter your email address below to login to existing account or sign up
          with new account.
        </p>
        <form className=" flex flex-col gap-y-8 pt-8">
          <div>
            <label className="text-bold text-sm">Email Address</label>
            <input
              type="text"
              placeholder="Enter email"
              className="border p-4 rounded-md w-full border-[#32323266] h-14 mt-2"
            />
          </div>
          <div className="relative">
            <label className="text-bold text-sm">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="border p-4 rounded-md w-full border-[#32323266] h-14 mt-2"
            />
            <button onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <HiOutlineEyeOff className="absolute right-4 top-12 text-xl" /> :<HiOutlineEye  className="absolute right-4 top-12 text-xl"/>}</button>
          </div>
          <button className="bg-primary text-white p-2 rounded-md w-full text-bold text-sm h-14">
            Get Started
          </button>
        </form>
        <div className="flex justify-center items-center gap-x-4 my-8">
            <div className="w-14 h-px bg-[#A0A0A0]"></div>
            <span>Or</span>
            <div className="w-14 h-px bg-[#A0A0A0]"></div>
        </div>

        <div className="flex gap-x-4 justify-center">
            <SocialButton label='Google' icon='google' onClick={()=> console.log("Google Login")} />
            <SocialButton label='Facebook' icon='facebook' onClick={()=> console.log("Google Facebook")} />
            <SocialButton label='Apple' icon='apple' onClick={()=> console.log("Google Apple")} />
        </div>
        <p className="text-center mt-4 text-sm text-black">Don’t have an account? <span><a href="/" className="text-[#7E0C65]">Sign up</a></span></p>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
