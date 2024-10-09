import React from 'react';
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

const Card = ({review}) => {
    return (
        <div className="">
            <img src={review.image} />
           <h2>{review.name}</h2>
            <p>{review.job}</p>
            <FaQuoteLeft/>
            <p>{review.text}</p>
            <FaQuoteRight/>

        </div>
    );
}

export default Card;
