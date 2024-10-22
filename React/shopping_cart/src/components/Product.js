import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/slices/CartSlice";
import { useLocation } from "react-router-dom";
import { MdDelete } from "react-icons/md";
const Product = ({ data }) => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const location = useLocation();
  let description = data.description.split(" ").slice(0, 10).join(" ");
  let title=`${data.title.split(" ").slice(0,3).join(" ").substring(0,14)}...`
  return (
    <div className="flex flex-col gap-8 px-4 py-3 border-2 hover:scale-110 transition-all duration-200 items-center">
      <h2 className="text-md font-semibold">{title}</h2>
      {
        location.pathname.includes('cart') ? 
        <></> :
        <p className="text-[12px] text-center">{description}...</p>
      }
      <img className="h-44" src={data.image} alt="" />
      <div className="flex justify-between w-full">
        <p className="text-[#16A34A] font-bold">${data.price}</p>
        {items.some((item) => item.id === data.id)? (
          <button onClick={() => dispatch(removeItem(data.id))}>
            {
           location.pathname.includes('cart')?<MdDelete />: 'Remove from cart'
            }
          </button>

        ) : (
          <button
            onClick={() => {
              dispatch(addItem(data));
            }}
         className="uppercase text-[12px] text-[#1f1452] px-2 py-1 rounded-3xl border-[1.5px] font-semibold border-[#1f1452]" >
            add to cart 
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
