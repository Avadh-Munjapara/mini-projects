import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/slices/CartSlice";
import { useLocation } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
const Product = ({ data }) => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const location = useLocation();
  let description = data.description.split(" ").slice(0, 10).join(" ");
  let title = `${data.title
    .split(" ")
    .slice(0, 3)
    .join(" ")
    .substring(0, 14)}...`;
  return (
    <div>
      {location.pathname.includes("cart") ? (
        <div className="flex gap-3 max-w-[600px] border-b-2 border-black  py-6">
          <div className="min-w-[30%]">
            <img className="h-36" src={data.image} alt="" />
          </div>

          <div className="flex flex-col justify-between w-full">
            <h2 className="text-md font-semibold">{title}</h2>
            <p className="text-[12px] ">{description}...</p>
            <div className="flex justify-between">
              <p className="text-[#16A34A] font-bold">${data.price}</p>
              <button
                  onClick={() => {
                    dispatch(removeItem(data.id));
                    toast.error("Item Removed from Cart");
                  }}
                  className="uppercase text-[12px] bg-red-300 hover:bg-red-500 transition-all duration-500 hover:text-white
       text-[#1f1452] px-2 py-1 rounded-3xl border-[1.5px] font-semibold border-[#1f1452]"
                >
                  <MdDelete className="w-4 h-4" />
                </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="flex flex-col justify-around gap-8 px-4 py-3 h-[420px] border-[3px]
     rounded-xl border-black  hover:scale-110 transition-all duration-200 items-center shadow-xl"
        >
          <h2 className="text-md font-semibold">{title}</h2>

          <p className="text-[12px] text-center">{description}...</p>

          <img className="h-44" src={data.image} alt="" />
          <div className="flex justify-between w-full">
            <p className="text-[#16A34A] font-bold">${data.price}</p>
            {items.some((item) => item.id === data.id) ? (
              <button
              onClick={() => {
                dispatch(removeItem(data.id));
                toast.error("Item Removed from Cart");
              }}
                className="uppercase text-[12px] hover:bg-[#374151] transition-all duration-500 hover:text-white
          text-[#1f1452] px-2 py-1 rounded-3xl border-[1.5px] font-semibold border-[#1f1452]"
              >
                Remove from cart
              </button>
            ) : (
              <button
              onClick={() => {
                dispatch(addItem(data));
                toast.success("Item Added to Cart");
              }}
                className="uppercase text-[12px] hover:bg-[#374151] transition-all duration-500 hover:text-white
          text-[#1f1452] px-2 py-1 rounded-3xl border-[1.5px] font-semibold border-[#1f1452]"
              >
                add to cart
              </button>
            )}
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Product;
