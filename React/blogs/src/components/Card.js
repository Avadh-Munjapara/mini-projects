import React from 'react';

const Card = ({data}) => {
    return (
        <div>
            <h2>{data.title}</h2>
            <p>By <span>{data.author}</span> on {data.category}</p>
            <p>Posted on {data.date}</p>
            <p>{data.content}</p>
            {
                data.tags.map((tag, index) => <span key={index}> #{tag}</span>)
            }
        </div>
    );
}

export default Card;
