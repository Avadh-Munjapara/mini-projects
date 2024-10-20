import React from 'react';

const Product = ({data}) => {
    let description	=data.description.split(" ").slice(0,10).join(" ");
    return (
        <div>
            <h2>{data.title}</h2>
            <p>{description}</p>
            <img className='w-10' src={data.image} alt="" />
            <div>
                <p>${data.price}</p>
                <button></button>
            </div>
        </div>
    );
}

export default Product;
