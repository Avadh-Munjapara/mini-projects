import React from "react";
import { IoCartSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const items = useSelector((state) => state.cart.items);
  return (
    <div className=" bg-[#0F172A] text-white py-3">
      <nav className="flex mx-auto justify-between max-w-[1152px]">
        <img className="w-44" src="../logo.png" alt="logo" />
        <div className="flex gap-5 items-center">
          <Link to="/">
            <button>Home</button>
          </Link>
          <div className="relative">
            <Link to="/cart">
              <span className="absolute bg-green-300 text-black">{items.length === 0 ? <></> : items.length}</span>
              <IoCartSharp className="w-7 h-7" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
