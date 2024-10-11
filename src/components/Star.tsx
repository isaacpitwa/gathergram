import React from 'react';
import { TiStarFullOutline } from "react-icons/ti";


interface StarRatingProps {
    rating: number;
}

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