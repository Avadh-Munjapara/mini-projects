import React from "react";
import { useSelector } from "react-redux";
import Product from "../components/Product";
import { Link } from "react-router-dom";
const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  let totalAmount=items.reduce((total,item)=>{
    return total+item.price
  },0)
  console.log(items);
  return (
    <div>
      {items.length == 0 ? (
        <div>
          <p>Cart is empty</p>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      ) : (
        <div>
          {items.map((item) => (
            <Product data={item}></Product>
          ))}
          <h2>Your Cart</h2>
          <h3>Summary</h3>
          <p>Total items : {items.length}</p>
          <p>Total Amout : {totalAmount}</p>
          <button>CheckOut Now</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
