import React from "react";
import RoundButton from "./RoundButton";
import { useSelector } from "react-redux";
import { HiOutlineArrowRight } from "react-icons/hi";

const AdBanner = () => {
  const { user } = useSelector((state: any) => state.auth);
  return (
    <>
      {user ? (
        <div className="bg-primary flex items-center justify-center py-4 gap-10 px-4">
          <p className="text-white">Welcome { user.fullName ? user.fullName.split(' ')[0]: user.email}.</p>
          <button
              className=" rounded-full  bg-dark_pink px-6 py-3 font-semibold text-[#000000]  max-h-12 hover:bg-opacity-80 whitespace-nowrap flex items-center gap-x-4"
              onClick={() => console.log("Sign up")} >
                <p className="text-sm">Proceed to Portal</p>
                <HiOutlineArrowRight className="text-[#000000] text-md" />
              </button>
        </div>
      ) : (
        <div className="bg-primary flex items-center justify-center py-4 gap-2 px-4">
          <RoundButton
            label="New"
            customStyles="bg-white px-6 py-1 text-black text-sm"
            onClick={() => console.log("")}
          />
          <p className="text-white">We are excited to announce Lorem Ipsum.</p>
          <a
            href="/"
            className=" text-white  underline underline-offset-4 hover:text-indigo-200"
          >
            Learn more
          </a>
        </div>
      )}
    </>
  );
};

export default AdBanner;
