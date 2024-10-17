import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({data}) => {
    return (
        <div className='flex flex-col gap-3'>
            

            <h2 className='text-xl font-bold'>{data.title}</h2>
            <div>
            <p>By <span className='italic'>{data.author}</span> on <NavLink to={`/category/${data.category}`}><span className='italic underline font-semibold'>{data.category}</span></NavLink></p>
            <p>Posted on {data.date}</p>
            </div>
            <p>{data.content}</p>
            <div>
            {
                data.tags.map((tag, index) => <NavLink key={index} to={`/tag/${tag.replaceAll(' ','-')}`}><span className='text-[#1D4ED8] font-semibold' key={index}> #{tag}</span></NavLink>)
            }
            </div>
        </div>
    );
}

export default Card;
