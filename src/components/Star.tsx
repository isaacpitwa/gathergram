import React from 'react';
import { TiStarFullOutline } from "react-icons/ti";


interface StarRatingProps {
    rating: number;
}

/**
 * StarRating component renders a star rating based on the provided rating value.
 *
 * @param {StarRatingProps} props - The properties object.
 * @param {number} props.rating - The rating value to determine the number of highlighted stars.
 *
 * @returns {JSX.Element} A JSX element containing a row of star icons, with the number of highlighted stars
 *                        corresponding to the rating value.
 */
const StarRating: React.FC<StarRatingProps> = ({rating}) => {
    return (
        <div className='flex gap-x-1 my-2'>
            {
                Array.from({length: 5}, (_, index) => (
                    <TiStarFullOutline key={index} className={`${(index) < rating ? 'text-[#FF9529]' : 'text-gray'} text-lg`} />
                ))
            }
        </div>
    );
};

export default StarRating;