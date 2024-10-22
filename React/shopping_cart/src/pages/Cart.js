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
    <div className={`w-[1152px] mx-auto ${items.length===0?'flex justify-center items-center h-screen':
      ''
    }`}>
      {items.length == 0 ? (
        <div className="flex flex-col gap-3 items-center">
          <p className="font-semibold text-xl">Cart is empty</p>
          <Link to="/">
            <button className="bg-green-400 px-8 py-2 text-xl rounded-xl">Home</button>
          </Link>
        </div>
      ) : (
        <div className="flex gap-10 my-10">
          <div className="">
          {items.map((item) => (
            <Product data={item}></Product>
          ))}
          </div>

          <div className="flex flex-col justify-between pt-16">
            <div className="">
            <h2 className="uppercase text-[#16A34A]">Your Cart</h2>
          <h3 className="uppercase text-4xl">Summary</h3>
          <p className="font-semibold">Total items : {items.length}</p>
            </div>
         <div>
         <p>Total Amout : <span className="font-bold">${totalAmount}</span></p>
         <button className="text-white bg-green-700 px-10 py-2">CheckOut Now</button>
         </div>
          
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Cart;
