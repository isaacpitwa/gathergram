import React, { useState } from "react";
import Slide1 from "../assets/images/slide1.png";
import Slide2 from "../assets/images/slide2.png";
import Slide3 from "../assets/images/slide3.png";
import Slide4 from "../assets/images/slide4.png";
import Slide5 from "../assets/images/slide5.png";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import StarRating from "./Star";

interface CarouselProps {
  imagesPerSlide?: number;
}
const slides = [
   {
      img: Slide1,
      comment: "“We’ve really sped up our workflow using GatherGram.”",
      user: "Alisa Hester",
      role: "PM, Hourglass",
      category: "Web Design Agency",
      rating: 4,
    },
    {
      img: Slide2,
      comment: "“We’ve really sped up our workflow using GatherGram.”",
      user: "Rich Wilson",
      role: "COO, Command+R ",
      category: "Web Design Agency",
      rating: 5,
    },
    {
      img: Slide3,
      comment: "“We’ve really sped up our workflow using GatherGram.”",
      user: "Annie Stanley",
      role: "Designer, Catalog ",
      category: "UX Agency",
      rating: 3,
    },
    {
      img: Slide4,
      comment: "“We’ve really sped up our workflow using GatherGram.”",
      user: "Johnny Bell",
      role: "PM, Sisyphus",
      category: "Machine Learning",
      rating: 4,
    },
    {
      img: Slide5,
      comment: "“We’ve really sped up our workflow using GatherGram.”",
      user: "Mia Ward",
      role: "Fullstack Dev, Quotient",
      category: "Performance Marketing",
      rating: 5,
    },
];

/**
 * Carousel component that displays a set of images in a sliding carousel format.
 * 
 * @component
 * @param {CarouselProps} props - The properties for the Carousel component.
 * @param {number} [props.imagesPerSlide=4] - The number of images to display per slide.
 * 
 * @returns {JSX.Element} The rendered Carousel component.
 * 
 * @example
 * <Carousel imagesPerSlide={3} />
 * 
 * @remarks
 * This component uses a sliding mechanism to transition between different sets of images.
 * It includes navigation buttons to move to the previous or next set of images.
 * 
 * @function
 * @name Carousel
 * 
 * @typedef {Object} CarouselProps
 * @property {number} [imagesPerSlide=4] - The number of images to display per slide.
 */
const Carousel: React.FC<CarouselProps> = ({ imagesPerSlide = 4 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Slide1, Slide2, Slide3, Slide4, Slide5];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? Math.ceil(images.length / imagesPerSlide) - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide =
      currentIndex === Math.ceil(images.length / imagesPerSlide) - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full my-12">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / imagesPerSlide)}%)`,
          }}
        >
          {slides.map((review, index) => (
            <div
              className="w-1/4 flex-shrink-0 mr-4 p-4 rounded  flex items-end"
              id={`slide${index + 1}`}
              style={{ width: `${(100 / imagesPerSlide)-1}%`, height: "380px" }}
            >
              <div className="backdrop-blur-md  p-4 border border-white rounded">
                <p className="text-sm text-white">{review.comment}</p>
                <StarRating  rating={review.rating}/>
                <h6 className="text-lg font-semibold text-white my-2">{review.user}</h6>
                <p className="text-sm font-semibold text-white ">{review.role}</p>
                <p className="text-xs  text-white ">{review.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-x-8 my-8 mt-16">
        <button
          onClick={prevSlide}
          className=" transform -translate-y-1/2 bg-white text-white p-2 rounded-full shadow h-14 w-14 flex items-center justify-center"
        >
          <HiOutlineArrowLeft className="text-[#667085] text-xl" />
        </button>
        <button
          onClick={nextSlide}
          className="transform -translate-y-1/2 bg-white text-white p-2 rounded-full shadow h-14 w-14  flex items-center justify-center"
        >
          <HiOutlineArrowRight className="text-[#667085] text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
