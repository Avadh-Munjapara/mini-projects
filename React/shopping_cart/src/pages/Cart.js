import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../components/Product';

const Cart = () => {
    const items=useSelector((state)=>state.cart.items);
    console.log(items);
    return (
        <div>
            {
                items.length==0? <p>Cart is empty</p> :items.map((item)=> <Product data={item}></Product>)
            }
        </div>
    );
}

export default Cart;
