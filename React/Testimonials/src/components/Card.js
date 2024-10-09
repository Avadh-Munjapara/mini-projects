import React from 'react';
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

const Card = ({review}) => {
    return (
        <div className="p-16 pb-0">
            <div className="relative -left-6 -top-32">
            <img className="h-[140px] absolute w-[140px] z-10 rounded-full" src={review.image} />
            <div className="absolute left-3 -top-2 bg-[#8B5CF6] h-[140px] w-[140px] rounded-full"></div>
            </div>
            <div className="flex flex-col items-center gap-5">
                <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold tracking-wider">{review.name}</h2>
            <p className="uppercase text-sm text-[#A78BFA]">{review.job}</p> 
                </div>
            <FaQuoteLeft className="text-[#A78BFA]"/>
            <p className="text-center text-[#83878d]">{review.text}</p>
            <FaQuoteRight className="text-[#A78BFA]"/>
            </div>
       

        </div>
    );
}

export default Card;
