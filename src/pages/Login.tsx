import React, { useState, useEffect } from "react";
import AuthLayout from "../layout/AuthLayout";
import Logo from "../assets/images/logo2.png";
import SocialButton from "../components/SocialButton";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { validateEmail } from "../utils/validators";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { loginAction } from "../redux/slices/AuthSlice";

/**
 * LoginPage component renders the login page for the application.
 * It includes form fields for email and password, and handles form submission.
 * 
 * @component
 * @returns {JSX.Element} The rendered login page component.
 * 
 * @example
 * <LoginPage />
 * 
 * @remarks
 * - Uses `useState` to manage form data, password visibility, and email error state.
 * - Uses `useDispatch` to dispatch login actions.
 * - Uses `useSelector` to access authentication state from the Redux store.
 * - Uses `useNavigate` to navigate to the home page upon successful login.
 * - Validates email format and displays error messages accordingly.
 * - Includes social login buttons for Google, Facebook, and Apple.
 * 
 * @function
 * @name LoginPage
 * 
 * @typedef {Object} FormData
 * @property {string} email - The email address entered by the user.
 * @property {string} password - The password entered by the user.
 * 
 * @typedef {Object} AuthState
 * @property {boolean} loading - Indicates if the login request is in progress.
 * @property {string} error - Error message if the login request fails.
 * @property {Object} user - User object if the login request is successful.
 * 
 * @typedef {Object} AppDispatch
 * 
 * @typedef {Object} ROUTES
 * @property {string} HOME - The route to the home page.
 * @property {string} SIGNUP - The route to the signup page.
 * 
 * @typedef {Object} SocialButtonProps
 * @property {string} label - The label for the social button.
 * @property {string} icon - The icon for the social button.
 * @property {function} onClick - The click handler for the social button.
 */
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email:'', password:''});
  const [emailError, setEmailError] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const {loading,error,user} = useSelector((state:any) => state.auth);
  const navigate =  useNavigate();


  const handlePasswordToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const onFormSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!emailError) {
      dispatch(loginAction(formData));
    }
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

  useEffect(() => {
    if(user){
      navigate(ROUTES.HOME)
    }
  },[user, navigate])
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
          {
          error && <p className="text-red-500 text-center">{error}</p>
        }
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
           { loading ? 'Loading...':'Get Started'}
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
            onClick={() =>  alert("This Feature  is still under devlopment")}
          />
          <SocialButton
            label="Facebook"
            icon="facebook"
            onClick={() =>  alert("This Feature  is still under devlopment")}
          />
          <SocialButton
            label="Apple"
            icon="apple"
            onClick={() =>  alert("This Feature  is still under devlopment")}
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
