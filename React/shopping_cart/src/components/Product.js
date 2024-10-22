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
  return (
    <div>
      <h2>{data.title}</h2>
      {
        location.pathname.includes('cart') ? 
        <></> :
        <p>{description}</p>
      }
      <img className="w-10" src={data.image} alt="" />
      <div>
        <p>${data.price}</p>
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
          >
            add to cart 
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
