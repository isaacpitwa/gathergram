import { E164Number } from "libphonenumber-js/types.cjs";
import React, { useState,useEffect } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";
import SocialButton from "../components/SocialButton";
import AuthLayout from "../layout/AuthLayout";
import { ROUTES } from "../routes";
import { hasLowerCase, hasNumber, hasSpecialChar, hasUpperCase, isMinLength, validateEmail } from "../utils/validators";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { signUpAction } from "../redux/slices/AuthSlice";
const options = [
  { value: "lagos", label: "🇳🇬 Lagos, Nigeria" },
  { value: "sydney", label: "🇦🇺 Sydney, Australia" },
  { value: "newyork", label: "🇺🇸 New York, USA" },
  { value: "capetown", label: "🇿🇦 Cape Town, South Africa" },
  { value: "london", label: "🇬🇧 London, UK" },
];

/**
 * SignUpPage component renders the sign-up form for new users.
 * 
 * @component
 * 
 * @returns {JSX.Element} The rendered SignUpPage component.
 * 
 * @example
 * <SignUpPage />
 * 
 * @remarks
 * This component uses various hooks such as `useState`, `useEffect`, `useDispatch`, and `useSelector` 
 * to manage state and side effects. It also uses `useNavigate` for navigation and `useLocation` to 
 * access the current location state.
 * 
 * @function
 * @name SignUpPage
 * 
 * @description
 * The SignUpPage component handles user registration by collecting user details such as email, 
 * full name, region, phone number, and password. It performs validation on these inputs and 
 * displays appropriate error messages. Upon successful validation, it dispatches the sign-up 
 * action to the Redux store.
 * 
 * @hook
 * @name useState
 * @description Manages the state for showing password, phone number, region, form data, and error messages.
 * 
 * @hook
 * @name useEffect
 * @description Redirects the user to the home page if the user is already authenticated.
 * 
 * @hook
 * @name useDispatch
 * @description Dispatches actions to the Redux store.
 * 
 * @hook
 * @name useSelector
 * @description Selects the authentication state from the Redux store.
 * 
 * @hook
 * @name useNavigate
 * @description Navigates to different routes.
 * 
 * @hook
 * @name useLocation
 * @description Accesses the current location state.
 * 
 * @param {React.MouseEvent<HTMLButtonElement>} handlePasswordToggle - Toggles the visibility of the password input field.
 * @param {React.MouseEvent<HTMLFormElement>} onFormSubmit - Handles the form submission and dispatches the sign-up action.
 * @param {React.ChangeEvent<HTMLInputElement>} handleOnChange - Handles changes to the input fields and performs validation.
 * 
 * @constant {Object} customStyles - Custom styles for the region select input.
 */
const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<E164Number | undefined>(
    undefined
  );
  const[region,setRegion] = useState("")
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [fullnameError, setFullnameError] = useState("");
  const location = useLocation();


  const [formData, setFormData] = useState({
    email: location.state ? location.state?.email : "",
    password: "",
    fullName: "",
  });
  const dispatch = useDispatch<AppDispatch>();
  const {loading,error,user} = useSelector((state:any) => state.auth);
  const navigate = useNavigate()

  const handlePasswordToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const onFormSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Selected region:", region)
    if(!emailError && !passwordError && !fullnameError) {
     dispatch(signUpAction({ phoneNumber: phoneNumber || "", fullName:formData.fullName,email: formData.email, password: formData.password,}));
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
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

      // Validate full name
    if (e.target.name === "fullname") {
        if (e.target.value === "") {
          setFullnameError("Full name is required");
        } else if (e.target.value.length < 4) {
          setFullnameError("Full name must be at least 4 characters");
        } else if(e.target.value.length > 50){
          setFullnameError("Full name must be at most 50 characters");
        } 
        else {
          setFullnameError("");
        }
      }

     // Validate password
    if (e.target.name === "password") {
        if (e.target.value === "") {
          setPasswordError("Password is required");
        } else if (!isMinLength(e.target.value)) {
          setPasswordError("Password must be at least 8 characters");
        } else if (!hasUpperCase(e.target.value))
        {
          setPasswordError("Password must contain at least one uppercase letter");
        }
        else if (!hasLowerCase(e.target.value))
        {
          setPasswordError("Password must contain at least one lowercase letter");
        }
        else if (!hasNumber(e.target.value))
        {
          setPasswordError("Password must contain at least one number");
        }
        else if (!hasSpecialChar(e.target.value))
        {
          setPasswordError("Password must contain at least one special character");
        }
        else {
          setPasswordError("");
        }
      }
  }
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

  useEffect(() => {
    if(user){
      navigate(ROUTES.HOME)
    }
  },[user, navigate])
  return (
    <AuthLayout>
      <div className=" p-4 md:p-16 mb-2">
        <div className="p-8 bg-[#F5169C0D] rounded-lg mb-4 border">
            <h2 className="text-primary text-xl font-bold mb-2">Welcome! Please tell us a bit about yourself</h2>
            <input type="radio" name="userType" value="organizer" className="w-4 h-4 text-primary accent-primary" checked onChange={handleOnChange}/>
            <label className="ml-2">I am event organizer</label>
            <br/>
            <input type="radio"  name="userType" value="bride" className="w-4 h-4 text-primary accent-primary" onChange={handleOnChange} />
            <label  className="ml-2">I am Bride/Groom</label>
        </div>
        <h1 className="text-2xl font-semibold text-center md:text-left" >Signup</h1>
        <p className="text-sm  md:w-2/3 text-black text-center md:text-left">
          Enter your details below to signup or sign in with existing account.
        </p>
        <form className=" flex flex-col gap-y-4 md:gap-y-8 pt-8" onSubmit={onFormSubmit}>
        {
          error && <p className="text-red-500 text-center">{error}</p>
        }
          <div>
            <label className="text-bold text-sm">Email Address</label>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              required
              className="border p-4 rounded-md w-full border-[#32323266] h-12 mt-2"
              onChange={handleOnChange}
              value={formData.email}
            />
            {emailError && <p className="text-xs text-red-500">{emailError}</p>}
          </div>
          <div>
            <label className="text-bold text-sm">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter  your full name"
              className="border p-4 rounded-md w-full border-[#32323266] h-12 mt-2"
              required
              onChange={handleOnChange}
            />
            {fullnameError && <p className="text-xs text-red-500">{fullnameError}</p>}
          </div>

          <div>
            <label className="text-bold text-sm mt-2">Region</label>
            <Select
              options={options}
              styles={customStyles}
              placeholder="Select Region"
              required
              onChange={(selectedOption) => selectedOption ? setRegion(selectedOption.value) : null }
            />
          </div>
          <div>
            <label className="text-bold text-sm">Phone Number</label>
            <PhoneInput
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(text) => setPhoneNumber(text)}
              className="border p-4 rounded-md w-full border-[#32323266] h-12 mt-2"
              required
            />
          </div>
          <div className="relative">
            <label className="text-bold text-sm">Password</label>
            <p className="text-xs text-black">Must be at least 6 characters</p>
            <input
              type={showPassword ?"text" : "password" }
              placeholder="Enter Password"
              name="password"
              className="border p-4 rounded-md w-full border-[#32323266] h-12 mt-2"
              required
              onChange={handleOnChange}
            />
            <button onClick={handlePasswordToggle}>
              {showPassword ? (
                <HiOutlineEyeOff className="absolute right-4 top-16 text-xl text-black" />
              ) : (
                <HiOutlineEye className="absolute right-4 top-16 text-xl text-black" />
              )}
            </button>
            {passwordError && (
              <p className="text-xs text-red-500">{passwordError}</p>
            )}
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
            disabled={loading || emailError !=='' || passwordError !=='' || fullnameError !==''}
          >
            { loading ?'Loading':'Sign up'}
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
