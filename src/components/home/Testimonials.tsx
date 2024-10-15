import React from "react";
import Carousel from "../Carousel";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";

/**
 * Testimonials component renders a section with a title, description, buttons, and a carousel.
 * 
 * @returns {JSX.Element} The rendered Testimonials component.
 * 
 * @remarks
 * This component is styled with Tailwind CSS classes and includes a title, a description,
 * two buttons ("Our customers" and "Create account"), and a carousel component.
 * 
 * @example
 * ```tsx
 * import Testimonials from './Testimonials';
 * 
 * const App = () => (
 *   <div>
 *     <Testimonials />
 *   </div>
 * );
 * 
 * export default App;
 * ```
 */
const Testimonials = () => {
  
  return (
    <div className="py-16 items-center  sectionWrapper bg-[#FFF6FC]">
      <div className="flex   md:justify-between w-full  md:items-start items-center flex-col md:flex-row  gap-y-4">
            <div className="md:text-left text-center">
                <h3 className="text-xl font-semibold text-black  mb-3">Don’t just take our word for it</h3>
                <p className="text-[#475467] text-center text-sm">Hear from some of our amazing customers who are building faster.</p>
            </div>
            <div className="flex gap-x-4">
                <button className="bg-white shadow-md px-4 text-black text-sm max-h-12 py-2 rounded-md">Our customers</button>
                <Link  to={ROUTES.SIGNUP} className="bg-primary px-4  text-white text-sm max-h-12 py-2 rounded-md">Create account</Link>
            </div>
      </div>
      <div className="my-4 w-full">
        <Carousel />
      </div>
    </div>
  );
};

export default Testimonials;
