import React, { useState } from "react";
import AuthLayout from "../layout/AuthLayout";
import SocialButton from "../components/SocialButton";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import ReactCountryFlag from "react-country-flag";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { E164Number } from "libphonenumber-js/types.cjs";
import Select from "react-select";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes";
const options = [
  { value: "lagos", label: "🇳🇬 Lagos, Nigeria" },
  { value: "sydney", label: "🇦🇺 Sydney, Australia" },
  { value: "newyork", label: "🇺🇸 New York, USA" },
  // Add more options as needed
];

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<E164Number | undefined>(
    undefined
  );

  const handlePasswordToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const onFormSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      height: '56px',
      border: '1px solid #32323266',
      borderRadius: '8px',
      padding: '0 16px',
    }),
    option: (provided: any) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
    }),
  };
  return (
    <AuthLayout>
      <div className=" p-4 md:p-16 mb-2">
        <div className="p-8 bg-[#F5169C0D] rounded-lg mb-4 border">
            <h2 className="text-primary text-xl font-bold">Welcome! Please tell us a bit about yourself</h2>
            <input type="radio" name="userType" value="organizer" className="w-4 h-4 text-primary accent-primary"/>
            <label className="ml-2">I am event organizer</label>
            <br/>
            <input type="radio"  name="userType" value="bride" className="w-4 h-4 text-primary accent-primary"/>
            <label  className="ml-2">I am Bride/Groom</label>
        </div>
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

          <div>
            <label className="text-bold text-sm mt-2">Region</label>
            <Select
              options={options}
              styles={customStyles}
              placeholder="Select Region"
            />
          </div>
          <div>
            <label className="text-bold text-sm">Phone Number</label>
            <PhoneInput
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(text) => setPhoneNumber(text)}
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

        <div className="flex gap-x-4 justify-center flex-col md:flex-row gap-y-4">
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
            <Link to={ROUTES.LOGIN} className="text-[#7E0C65]">
              Sign in
            </Link>
          </span>
        </p>
      </div>
    </AuthLayout>
  );
};

export default SignUpPage;
