import React, { useState } from "react";
import { TiUserAdd } from "react-icons/ti";
import { MdReviews } from "react-icons/md";
import { PiUsersFourFill } from "react-icons/pi";
import { RiTeamFill } from "react-icons/ri";
import Header from "../components/home/Header";
import RoundButton from "../components/RoundButton";
import LandingImage from "../assets/images/landing.png";
import Profile1 from "../assets/images/profile1.png";
import Profile2 from "../assets/images/profile2.png";
import Profile3 from "../assets/images/profile3.png";
import Profile4 from "../assets/images/profile4.png";
import { ReactComponent as ConnectIcon } from "../assets/icons/connect.svg";
import { ReactComponent as StarIcon } from "../assets/icons/star.svg";
import  EventsManagementIcon from "../assets/icons/eventManagement.svg";
import  GuestInteractionIcon from "../assets/icons/guestInteractions.svg";
import DonateContributeIcon from "../assets/icons/donateAndContribute.svg";
import CustomLoveStoryIcon  from "../assets/icons/loveStory.svg";
import PricingSection from "../components/home/PricingSection";
import Testimonials from "../components/home/Testimonials";
import FaqSection from "../components/home/Faq";
import SquareImage from '../assets/images/landing.png'
import { HiOutlineArrowRight } from "react-icons/hi";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/home/Footer";
import { validateEmail } from "../utils/validators";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";

/**
 * HomePage component renders the main landing page of the application.
 * 
 * This component includes several sections:
 * - Header: Displays the main header of the page.
 * - Landing section: Contains a promotional message, email input form, and profile images.
 * - Features section: Highlights the key features of the application.
 * - How It Works section: Explains the steps to use the application.
 * - PricingSection: Displays pricing information.
 * - Testimonials: Shows user testimonials.
 * - FaqSection: Provides frequently asked questions.
 * - Banner Section: Encourages users to plan their wedding.
 * - ContactSection: Provides contact information.
 * - Footer: Displays the footer of the page.
 * 
 * The component uses several hooks and functions:
 * - useState: Manages the state of email and emailError.
 * - useNavigate: Provides navigation functionality.
 * - handleGetStarted: Handles the form submission for getting started.
 * 
 * @returns {JSX.Element} The rendered HomePage component.
 */
const HomePage = () => {
  const [email,setEmail] = useState('')
  const [emailError,setEmailError] = useState('');
  const navigate = useNavigate()

  const handleGetStarted = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(email){
      // validate email
      if( !validateEmail(email)){
        setEmailError('Please enter a valid email')
      }
      else{
        navigate(ROUTES.SIGNUP,{state: { email }})
      }
    }
  }

  return (
    <div >
      <Header />
      {/* Landing section */}
      <section className="flex items-start gap-x-16 justify-between  pt-16 py-8 sectionWrapper  flex-col md:flex-row md:py-24 ">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold  lg:text-6xl">
            “Plan, Share, and Celebrate Your Big Day in One Place”
          </h2>
          <p className="text-lg mt-8">
            “Create unforgettable memories with a personalized wedding platform
            for you and your guests.”
          </p>
          <form className="flex  flex-col md:flex-row gap-x-4 mt-12 gap-y-4  " onSubmit={handleGetStarted}>
           <div className="w-full">
            <input
                type="email"
                placeholder="Enter your email address"
                className="rounded-full bg-gray w-full px-6 focus:border-primary h-10"
                name="email"
                required
                onChange={(e)=>setEmail(e.target.value)}
              />
              {emailError && <p className="text-xs text-red-500">{emailError}</p>}
           </div>
            <RoundButton
              label="Get started"
              customStyles="bg-primary px-6 py-3 font-bold text-white"
              onClick={() =>{} }
            />
          </form>
          <div className="flex items-center space-x-3 mt-10 mx-4 md:mx-0 gap-x-32 md:gap-x-1">
            {/* Profile images */}
            <div className="flex space-x-0">
              <img
                src={Profile1}
                alt="Profile 1"
                className="w-16 h-16 rounded-full"
              />
              <img
                src={Profile2}
                alt="Profile 2"
                className="w-16 h-16 rounded-full"
                style={{
                  marginLeft: "-24px",
                }}
              />
              <img
                src={Profile3}
                alt="Profile 3"
                className="w-16 h-16 rounded-full"
                style={{
                  marginLeft: "-24px",
                }}
              />
              <img
                src={Profile4}
                alt="Profile 4"
                className="w-16 h-16 rounded-full"
                style={{
                  marginLeft: "-24px",
                }}
              />
              <div
                className="flex items-center justify-center w-16 h-16 bg-blue-200 text-black rounded-full min-w-16 min-h-16"
                style={{
                  marginLeft: "-24px",
                }}
              >
                +2k
              </div>
            </div>

            {/* Text */}
            <p className="text-black font-medium text-sm">
              +2K People Joined!
            </p>
          </div>
        </div>
        <div className="my-4 md:my-0">
          <img
            src={LandingImage}
            alt="Wedding couple"
            className="w-screen h-72 md:w-96 md:h-96"
          />
        </div>
      </section>
      <section className="flex  flex-col md:flex-row items-center sectionWrapper bg-black  py-8 gap-x-4 justify-center  gap-y-4">
        <h3 className="md:w-1/2 text-white text text-center md:text-left mb-8 md:mb-0">
          "Powerful tool to manage your wedding, engage guests, and celebrate together effortlessly."
        </h3>
        <div className="flex flex-col md:flex-row md:gap-x-4 gap-x-2  gap-y-4 items-center">
          <div className="bg-primary flex items-center justify-center  rounded-full p-4">
            <ConnectIcon className="text-primary" />
          </div>
          <p className="text-white">Connect with your guests</p>
        </div>
        <div className="flex flex-col md:flex-row  gap-y-4 md:gap-x-4 gap-x-2 items-center ">
          <div className="bg-primary flex items-center justify-center rounded-full  p-6">
            <StarIcon className="text-primary" />
          </div>
          <p className="text-white">Easy event management</p>
        </div>
      </section>
      <section className=" flex flex-col sectionWrapper py-16 items-center" id="features">
        <div className="pt-4  text-center pb-16">
          <h3 className="text-xl font-semibold ">Our Features</h3>
          <p className="text-sm mt-2 ">
            "Easily create and manage your wedding events, from the ceremony to
            <br/>the reception.”
          </p>
        </div>
        <div className="bg-black pt-2 flex flex-col md:flex-row">
                <div className="pt-20 pb-8 px-6">
                    {/* <EventsManagementIcon /> */}
                    <img src={EventsManagementIcon} alt="Icon"/>
                    <h5 className="text-white  font-bold  mt-6">Event Management</h5>
                    <p className="text-white  text-xs mt-2 font-light">Increased conversion and expension on new markets Dynamic business devolopment.</p>
                </div>
                <div className="pt-20 pb-8 px-6 bg-light_pink ">
                    {/* <GuestInteractionIcon /> */}
                    <img src={GuestInteractionIcon} alt="Icon"/>
                    <h5 className="text-black  font-bold  mt-6">Guest Interaction</h5>
                    <p className="text-black  text-xs mt-2 font-light">Excute pay outs & refunds straight to your customer`s bank account via Finpay. Increase satisfaction and retention.</p>
                </div>
                <div className="pt-20 pb-8 px-6">
                    {/* <DonateContributeIcon /> */}
                    <img src={DonateContributeIcon} alt="Icon"/>
                    <h5 className="text-white  font-bold  mt-6">Donate & Contribute</h5>
                    <p className="text-white  text-xs mt-2 font-light">No cards or payment details insertation, no additional registration or app download by your customer`s.</p>
                </div>
                <div className="pt-20 pb-8 px-6">
                    {/* <CustomLoveStoryIcon /> */}
                    <img src={CustomLoveStoryIcon} alt="Icon"/>
                    <h5 className="text-white  font-bold  mt-6">Custom Love Story Page</h5>
                    <p className="text-white  text-xs mt-2 font-light">Personal informations is encrypted and protected by industry standardbanking security.</p>
                </div>

        </div>
      </section>
      <section className="flex flex-col  py-16 items-center bg-black" id="howIdWorks">
        <div className="pt-4  text-center pb-16">
            <h3 className="text-xl font-semibold text-white ">How It works</h3>
            <p className="text-sm mt-2  text-white">
              "Easily create and manage your wedding events, from the ceremony to
              <br/>the reception.”
            </p>
          </div>
          <div className=" sectionWrapper md:pt-6 pb-4 flex flex-col md:flex-row card-container gap-x-4 gap-y-4">
                <div className="rounded-lg bg-light_green  py-8 px-4">
                    <TiUserAdd className="text-black text-4xl" />
                    <h5 className="text-black  mt-6">Sign Up</h5>
                    <p className="text-black  text-xs mt-2 font-light">Create your free account and get started in minutes.</p>
                </div>
                <div className="rounded-lg bg-light_pink  py-8 px-4">
                    <MdReviews className="text-black text-4xl" />
                    <h5 className="text-black  mt-6">Positive Reviews</h5>
                    <p className="text-black  text-xs mt-2 font-light">Turpis nasceturvel malesuada enim eget eget.</p>
                </div>
                <div className="rounded-lg bg-light_green  py-8 px-4">
                    <PiUsersFourFill className="text-black text-4xl" />
                    <h5 className="text-black  mt-6">Regular Users</h5>
                    <p className="text-black  text-xs mt-2 font-light">Scale your workload without waiting for hte engineering team.</p>
                </div>
                <div className="rounded-lg bg-light_green  py-8 px-4">
                    <RiTeamFill className="text-black text-4xl" />
                    <h5 className="text-black  mt-6">Team Members</h5>
                    <p className="text-black  text-xs mt-2 font-light">Turpis nasceturvel malesuada enim eget eget.</p>
                </div>
          </div>
      </section>
      <PricingSection />
      <Testimonials />
      <FaqSection/>
      {/* Banner Section */}
      <section className="bg-dark_pink  md:py-16 py-8 md:px-20 px-4 ">
          <div className="bg-black rounded-lg  py-10 flex flex-col md:flex-row gap-y-16 gap-x-16 items-center md:px-10 px-4"> 
            <div className="">
              <h3 className="text-4xl f-monrope text-white">Ready to Plan Your Wedding?</h3>
              <p className="text-sm mt-2 text-white  my-8">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua. Ut enim ad minim veniam, quis ut aliquip ex ea commodo consequat."</p>
              <button
              className=" rounded-full  bg-dark_pink px-6 py-3 font-semibold text-[#000000]  max-h-12 hover:bg-opacity-80 whitespace-nowrap flex items-center gap-x-4"
              onClick={() => alert("This Feature  is still under devlopment")} >
                <p className="text-sm">Create Your Event for Free</p>
                <HiOutlineArrowRight className="text-[#000000] text-md" />
              </button>
            </div>
            <img  src={SquareImage} className="rounded-lg h-72 w-80" alt="Create Event banner" />
          </div>
      </section>
      {/*  Contact us */}
      <ContactSection/>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
