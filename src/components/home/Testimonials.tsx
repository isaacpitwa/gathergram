import React from "react";
import Carousel from "../Carousel";

const Testimonials = () => {
  const images = [
    "https://dummyimage.com/300/00000/ffffff",
    "https://dummyimage.com/300/00000/000000",
    "https://dummyimage.com/300/00000/000000",
    "https://dummyimage.com/300/00000/000000",
  ];
  return (
    <div className="py-16 items-center  sectionWrapper bg-[#FFF6FC]">
      <div className="flex justify-between w-full items-start">
            <div>
                <h3 className="text-xl font-semibold text-black  mb-3">Don’t just take our word for it</h3>
                <p className="text-[#475467] text-center text-sm">Hear from some of our amazing customers who are building faster.</p>
            </div>
            <div className="flex gap-x-4">
                <button className="bg-white shadow-md px-4 text-black text-sm max-h-12 py-2 rounded-md">Our customers</button>
                <button className="bg-primary px-4  text-white text-sm max-h-12 py-2 rounded-md">Create account</button>
            </div>
      </div>
      <div className="my-4 w-full">
        <Carousel />
      </div>
    </div>
  );
};

export default Testimonials;
