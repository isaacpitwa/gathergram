import React from "react";
import RoundButton from "./RoundButton";

const AdBanner = () => {
  return (
    <div className="bg-primary flex items-center justify-center py-4 gap-2">
      <RoundButton
        label="New"
        customStyles="bg-white px-6 py-1 text-black text-sm"
        onClick={() => console.log("Sign up")}
      />
      <p className="text-white">We are excited to announce Lorem Ipsum.</p>
      <a
        href="/"
        className=" text-white  underline underline-offset-4 hover:text-indigo-200"
      >
        Learn more
      </a>
    </div>
  );
};

export default AdBanner;
