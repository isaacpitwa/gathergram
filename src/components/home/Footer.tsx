import React from "react";
import LogoWhite from '../../assets/images/logo-white.png'
import { FaTwitter,FaFacebook,FaLinkedin,FaYoutube } from "react-icons/fa";
import RoundButton from "../RoundButton";

const Footer = () => {
  return (
    <footer className="">
      <div className=" sectionWrapper bg-black py-8">
        <div className="flex justify-between">
          <div>
            <h3 className="text-white text-xl font-semibold">
              Join our newsletter
            </h3>
            <p className="text-[#EAECF0] text-sm mt-1">
              We’ll send you a nice letter once per week. No spam.
            </p>
          </div>
          <div className="flex gap-x-4 items-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="rounded-sm bg-gray  border  border-[#D0D5DD] px-3 focus:border-primary h-8 text-sm"
            />
            <button className="bg-primary px-4  text-white text-sm py-1 rounded-md h-8">
            Subscribe
            </button>
          </div>
        </div>
        <div className="bg-[#475467] h-px w-full my-8"></div>
        <div className="flex gap-x-16 ">
            <div className="flex-1">
                <a href="/"><img src={LogoWhite} alt='Gathergram' /></a>
                <p className="text-sm text-[#8A8A8A] w-72 my-4 leading-6"> Medfysio provides clear and easy-to-understand health-related information resource or services.</p>
                <div className="flex gap-x-4 my-4">
                    <a href="/"> <FaTwitter className="text-white"/></a>
                    <a href="/"> <FaFacebook className="text-white"/></a>
                    <a href="/"> <FaLinkedin className="text-white"/></a>
                    <a href="/"> <FaYoutube className="text-white"/></a>
                </div>
            </div>
        {/* navigate */}
        <nav>
            <h6 className="text-white font-semibold">Navigate</h6>
            <ul>
                <li className="text-[#8A8A8A] text-sm my-2">
                  <a href="#home">Home</a>
                </li>
                <li className="text-[#8A8A8A] text-sm my-2">
                  <a href="#features">Features</a>
                </li>
                <li className="text-[#8A8A8A] text-sm my-2">
                  <a href="#how-it-works">How It Works</a>
                </li>
                <li className="text-[#8A8A8A] text-sm my-2">
                  <a href="#pricing">Pricing</a>
                </li>
                <li className="text-[#8A8A8A] text-sm my-2">
                  <a href="#about">About</a>
                </li>
                <li className="text-[#8A8A8A] text-sm my-2">
                  <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
         {/* Support Us */}
         <nav>
            <h6 className="text-white font-semibold">Support Us</h6> 
            <ul>
                <li className="text-[#8A8A8A] text-sm my-2">
                  <a href="#home">FAQ`s</a>
                </li>
                <li className="text-[#8A8A8A] text-sm my-2">
                  <a href="#features">Contact Us</a>
                </li>
                <li className="text-[#8A8A8A] text-sm my-2">
                  <a href="#how-it-works">Support Center</a>
                </li>
                <li className="text-[#8A8A8A] text-sm my-2">
                  <a href="#pricing">Security</a>
                </li>
            </ul>
        </nav>
        {/* Patner  */}
        <nav>
            <h6 className="text-white font-semibold">Partner</h6> 
            <ul>
                <li className="text-[#8A8A8A] text-sm my-2">
                  <a href="#home">Our Partners</a>
                </li>
                <li className="text-[#8A8A8A] text-sm my-2">
                  <a href="#features">Subscriber</a>
                </li>
            </ul>
        </nav>

        {/* Contact */}
            <div>
                <h6 className="text-white font-semibold">Contact US</h6> 
                <p className="text-[#8A8A8A] text-sm my-2">GatherGram@business.com</p>
                <p className="text-[#8A8A8A] text-sm my-2">+61 7 7010 6803</p>
                <RoundButton 
                 label="Help Center"
                 customStyles="bg-primary text-white px-6 py-2 text-sm"
                 onClick={() => console.log("")}
                />
            </div>

        </div>
      </div>
      <div className="bg-white flex justify-between sectionWrapper py-4">
        <p className="text-black text-sm">© 2024 GatherGram, We love our users!</p>
        <p className="text-black text-sm">Copyright © 2024 all rights reserved</p>
        <div className="flex gap-x-4">
            <a  href="/" className="text-black text-xs" >Terms & Conditions</a>
            <a className="text-black text-xs" href="/">Privacy Policy</a>
            <a className="text-black text-xs" href="/">Sitemap </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
