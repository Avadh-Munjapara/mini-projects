import React from "react";
import { useSelector } from "react-redux";
import Product from "../components/Product";
import { Link } from "react-router-dom";
const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  console.log(items);
  return (
    <div>
      {items.length == 0 ? (
        <div>
          <p>Cart is empty</p>
          <Link to='/'>
          <button>Home</button>
          </Link>
        </div>  
      ) : (
        items.map((item) => <Product data={item}></Product>)
      )}
    </div>
  );
};

export default Cart;
