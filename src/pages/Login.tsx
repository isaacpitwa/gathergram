import React, { useState } from "react";
import AuthLayout from "../layout/AuthLayout";
import Logo from "../assets/images/logo2.png";
import SocialButton from "../components/SocialButton";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes";
import { validateEmail, validatePassword } from "../utils/validators";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({});
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const onFormSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form Data: ", formData);
  };
  const onValueChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Validate email
    if (e.target.name === "email") {
      if (e.target.value === "") {
        setEmailError("Email is required");
      } else if (!validateEmail(e.target.value)) {
        setEmailError("Please enter a valid email");
      } else {
        setEmailError("");
      }
    }
    
  };
  return (
    <AuthLayout>
      <div className=" p-4 md:p-16 mb-2">
        <div className="flex justify-center pb-24">
          <Link to={ROUTES.HOME}>
            <img src={Logo} alt="Gathergram Logo" className="h-14" />
          </Link>
        </div>
        <h1 className="text-2xl font-semibold text-center md:text-left">
          Get Started
        </h1>
        <p className="text-sm md:w-2/3  text-black text-center md:text-left">
          Enter your email address below to login to existing account or sign up
          with new account.
        </p>
        <form
          className=" flex flex-col gap-y-4 md:gap-y-8 pt-8"
          onSubmit={onFormSubmit}
        >
          <div>
            <label className="text-bold text-sm">Email Address</label>
            <input
              type="email"
              placeholder="Enter email"
              className="border p-4 rounded-md w-full border-[#32323266] h-12 mt-2"
              name="email"
              required
              onChange={onValueChanged}
            />
            {emailError && <p className="text-xs text-red-500">{emailError}</p>}
          </div>
          <div className="relative">
            <label className="text-bold text-sm">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              name="password"
              onChange={onValueChanged}
              required
              className="border p-4 rounded-md w-full border-[#32323266]  h-12 mt-2"
            />
            {passwordError && (
              <p className="text-xs text-red-500">{passwordError}</p>
            )}
            <button onClick={handlePasswordToggle}>
              {showPassword ? (
                <HiOutlineEyeOff className="absolute right-4 top-12 text-xl text-black" />
              ) : (
                <HiOutlineEye className="absolute right-4 top-12 text-xl text-black" />
              )}
            </button>
          </div>
          <button
            className="bg-primary text-white p-2 rounded-md w-full text-bold text-sm h-12 hover:bg-opacity-80"
            type="submit"
            disabled={emailError !=='' || emailError !==''}
          >
            Get Started
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
            <Link to={ROUTES.SIGNUP} className="text-[#7E0C65]">
              Sign up
            </Link>
          </span>
        </p>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
