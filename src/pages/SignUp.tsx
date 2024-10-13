import React, { useState } from "react";
import AuthLayout from "../layout/AuthLayout";
import Logo from "../assets/images/logo2.png";
import SocialButton from "../components/SocialButton";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const onFormSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <AuthLayout>
      <div className="p-16">
        <h1 className="text-2xl font-semibold">Signup</h1>
        <p className="text-sm w-2/3 text-black">
          Enter your details below to signup or sign in with existing account.
        </p>
        <form className=" flex flex-col gap-y-8 pt-8" onSubmit={onFormSubmit}>
          <div>
            <label className="text-bold text-sm">Email Address</label>
            <input
              type="email"
              placeholder="Enter email"
              className="border p-4 rounded-md w-full border-[#32323266] h-14 mt-2"
            />
          </div>
          <div>
            <label className="text-bold text-sm">Full Name</label>
            <input
              type="text"
              placeholder="Enter  your full name"
              className="border p-4 rounded-md w-full border-[#32323266] h-14 mt-2"
            />
          </div>
          <div className="relative">
            <label className="text-bold text-sm">Password</label>
            <p className="text-xs text-black">Must be at least 6 characters</p>
            <input
              type={showPassword ? "password" : "text"}
              placeholder="Enter Password"
              className="border p-4 rounded-md w-full border-[#32323266] h-14 mt-2"
            />
            <button onClick={handlePasswordToggle}>
              {showPassword ? (
                <HiOutlineEyeOff className="absolute right-4 top-12 text-xl text-black" />
              ) : (
                <HiOutlineEye className="absolute right-4 top-12 text-xl text-black" />
              )}
            </button>
          </div>
          <p className="text-sm text-black">
            By signing up, I agree to the{" "}
            <span>
              <a
                href="/"
                className="text-blue-400 underline underline-offset-2 "
              >
                terms and conditions
              </a>
            </span>{" "}
            and have read the{" "}
            <span>
              <a
                href="/"
                className="text-blue-400 underline underline-offset-2 "
              >
                privacy policy
              </a>
            </span>
          </p>
          <button
            className="bg-primary text-white p-2 rounded-md w-full text-bold text-sm h-14"
            type="submit"
          >
            Sign up
          </button>
        </form>
        <div className="flex justify-center items-center gap-x-4 my-8">
          <div className="w-14 h-px bg-[#A0A0A0]"></div>
          <span>Or</span>
          <div className="w-14 h-px bg-[#A0A0A0]"></div>
        </div>

        <div className="flex gap-x-4 justify-center">
          <SocialButton
            label="Google"
            icon="google"
            onClick={() => console.log("Google Login")}
          />
          <SocialButton
            label="Facebook"
            icon="facebook"
            onClick={() => console.log("Google Facebook")}
          />
          <SocialButton
            label="Apple"
            icon="apple"
            onClick={() => console.log("Google Apple")}
          />
        </div>
        <p className="text-center mt-4 text-sm text-black">
          Don’t have an account?{" "}
          <span>
            <a href="/" className="text-[#7E0C65]">
              Sign in
            </a>
          </span>
        </p>
      </div>
    </AuthLayout>
  );
};

export default SignUpPage;
