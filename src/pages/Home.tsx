import React from "react";
import Header from "../components/home/Header";
import RoundButton from "../components/RoundButton";
import LandingImage from "../assets/images/landing.png";
import Profile1 from "../assets/images/profile1.png";
import Profile2 from "../assets/images/profile2.png";
import Profile3 from "../assets/images/profile3.png";
import Profile4 from "../assets/images/profile4.png";

const HomePage = () => {
  return (
    <div>
      <Header />
      {/* Landing section */}
      <section className="flex px-32  items-center gap-x-16 justify-between py-8">
        <div className="w-1/2">
          <h2 className="text-7xl font-bold">
            “Plan, Share, and Celebrate Your Big Day in One Place”
          </h2>
          <p className="text-lg mt-8">
            “Create unforgettable memories with a personalized wedding platform
            for you and your guests.”
          </p>
          <div className="flex gap-x-4 mt-12">
            <input
              type="email"
              placeholder="Enter your email address"
              className="rounded-full bg-gray w-1/2 px-6"
            />
            <RoundButton
              label="Get started"
              customStyles="bg-primary px-6 py-3 font-bold text-white"
              onClick={() => console.log("Sign up")}
            />
          </div>
          <div className="flex items-center space-x-3 mt-10">
            {/* Profile images */}
            <div className="flex space-x-0">
              <img
                src={Profile1}
                alt="Profile 1"
                className="w-16 h-16 rounded-full"
                style={{
                    marginLeft: '-24px'
                }}
              />
              <img
                src={Profile2}
                alt="Profile 2"
                className="w-16 h-16 rounded-full"
                style={{
                    marginLeft: '-24px'
                }}
              />
              <img
                src={Profile3}
                alt="Profile 3"
                className="w-16 h-16 rounded-full"
                style={{
                    marginLeft: '-24px'
                }}
              />
              <img
                src={Profile4}
                alt="Profile 4"
                className="w-16 h-16 rounded-full"
                style={{
                    marginLeft: '-24px'
                }}
              />
              <div className="flex items-center justify-center w-16 h-16 bg-blue-200 text-black rounded-full "
              style={{
                marginLeft: '-24px'
            }}>
                +2k
              </div>
            </div>

            {/* Text */}
            <div className="text-black font-medium">+2K People Joined!</div>
          </div>
        </div>
        <div>
          <img
            src={LandingImage}
            alt="Wedding couple"
            style={{
              width: "552px",
              height: "557px",
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
