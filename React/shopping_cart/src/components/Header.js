import React from "react";
import { IoCartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className=" bg-[#0F172A] text-white py-3">
      <nav className="flex mx-auto justify-between max-w-[1152px]">
        <img className="w-44" src="../logo.png" alt="logo" />
        <div className="flex gap-5 items-center">
          <Link to='/'>
          <button>Home</button>
          </Link>
          <Link to='/cart'>
          <IoCartSharp className="w-7 h-7" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
