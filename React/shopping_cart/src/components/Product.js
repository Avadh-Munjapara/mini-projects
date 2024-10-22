import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../redux/slices/CartSlice';

const Product = ({data}) => {
    const items=useSelector((state)=>state.cart.items);
    const dispatch=useDispatch();
    let description	=data.description.split(" ").slice(0,10).join(" ");
    return (
        <div>
            <h2>{data.title}</h2>
            <p>{description}</p>
            <img className='w-10' src={data.image} alt="" />
            <div>   
                <p>${data.price}</p>
                {
                    items.some((item)=>item.id===data.id)?<button onClick={()=>dispatch(removeItem(data.id))}>Remove from cart</button>:
                    <button  onClick={()=>{dispatch(addItem(data))}}>add to dcart</button>
                }
            </div>
        </div>
    );
}

export default Product;
