import React from "react";
import Header from "../components/home/Header";
import RoundButton from "../components/RoundButton";
import LandingImage from "../assets/images/landing.png";
import Profile1 from "../assets/images/profile1.png";
import Profile2 from "../assets/images/profile2.png";
import Profile3 from "../assets/images/profile3.png";
import Profile4 from "../assets/images/profile4.png";
import { ReactComponent as ConnectIcon } from "../assets/icons/connect.svg";
import { ReactComponent as StarIcon } from "../assets/icons/star.svg";
import { ReactComponent as EventsManagementIcon } from "../assets/icons/eventManagement.svg";
import { ReactComponent as GuestInteractionIcon } from "../assets/icons/guestInteractions.svg";
import { ReactComponent as DonateContributeIcon } from "../assets/icons/donateAndContribute.svg";
import { ReactComponent as CustomLoveStoryIcon } from "../assets/icons/loveStory.svg";

const HomePage = () => {
  return (
    <div>
      <Header />
      {/* Landing section */}
      <section className="flex items-start gap-x-16 justify-between  pt-16 py-8 sectionWrapper  flex-col md:flex-row">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold">
            “Plan, Share, and Celebrate Your Big Day in One Place”
          </h2>
          <p className="text-lg mt-8">
            “Create unforgettable memories with a personalized wedding platform
            for you and your guests.”
          </p>
          <div className="flex  flex-col md:flex-row gap-x-4 mt-12 gap-y-4 ">
            <input
              type="email"
              placeholder="Enter your email address"
              className="rounded-full bg-gray md:w-3/5 px-6 focus:border-primary h-10"
            />
            <RoundButton
              label="Get started"
              customStyles="bg-primary px-6 py-3 font-bold text-white"
              onClick={() => console.log("Sign up")}
            />
          </div>
          <div className="flex items-center space-x-3 mt-10 mx-4 md:mx-0">
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
                className="flex items-center justify-center w-16 h-16 bg-blue-200 text-black rounded-full "
                style={{
                  marginLeft: "-24px",
                }}
              >
                +2k
              </div>
            </div>

            {/* Text */}
            <div className="text-black font-medium text-sm">
              +2K People Joined!
            </div>
          </div>
        </div>
        <div className="my-4 md:my-0">
          <img
            src={LandingImage}
            alt="Wedding couple"
            // style={{
            //   width: "552px",
            //   height: "557px",
            // }}
            className="w-screen h-72 md:w-96 md:h-96"
          />
        </div>
      </section>
      <section className="flex  flex-col md:flex-row items-center sectionWrapper bg-black  py-8 gap-x-4 justify-center  gap-y-4">
        <h3 className="md:w-1/2 text-white text text-center md:text-left mb-8 md:mb-0">
          "Powerful tool to manage your wedding, engage guests, and celebrate
          together effortlessly."
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
      <section className=" flex flex-col sectionWrapper py-16 items-center">
        <div className="pt-4  text-center pb-16">
          <h3 className="text-xl font-semibold ">Our Features</h3>
          <p className="text-sm mt-2 w-4/5 ">
            "Easily create and manage your wedding events, from the ceremony to
            the reception.”
          </p>
        </div>
        <div className="bg-black pt-2 flex flex-col md:flex-row">
                <div className="pt-20 pb-8 px-8 flex flex-col">
                    <EventsManagementIcon />
                    <h5 className="text-white  font-bold  mt-6">Event Management</h5>
                    <p className="text-white  text-xs mt-2 font-light">Increased conversion and expension on new markets Dynamic business devolopment.</p>
                </div>
                <div className="pt-20 pb-8 px-8 bg-light_pink ">
                    <GuestInteractionIcon />
                    <h5 className="text-black  font-bold  mt-6">Guest Interaction</h5>
                    <p className="text-black  text-xs mt-2 font-light">Excute pay outs & refunds straight to your customer`s bank account via Finpay. Increase satisfaction and retention.</p>
                </div>
                <div className="pt-20 pb-8 px-8">
                    <DonateContributeIcon />
                    <h5 className="text-white  font-bold  mt-6">Donate & Contribute</h5>
                    <p className="text-white  text-xs mt-2 font-light">No cards or payment details insertation, no additional registration or app download by your customer`s.</p>
                </div>
                <div className="pt-20 pb-8 px-8">
                    <CustomLoveStoryIcon />
                    <h5 className="text-white  font-bold  mt-6">Custom Love Story Page</h5>
                    <p className="text-white  text-xs mt-2 font-light">Personal informations is encrypted and protected by industry standardbanking security.</p>
                </div>

        </div>
      </section>
    </div>
  );
};

export default HomePage;
