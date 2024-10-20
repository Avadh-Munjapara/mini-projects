import React from "react";
import { IoCartSharp } from "react-icons/io5";
const Header = () => {
  return (
    <div className=" bg-[#0F172A] text-white py-3">
      <nav className="flex mx-auto justify-between max-w-[1152px]">
        <img className="w-44" src="../logo.png" alt="logo" />
        <div className="flex gap-5 items-center">
            
          <button>Home</button>
          <IoCartSharp className="w-7 h-7" />
        </div>
      </nav>
    </div>
  );
};

export default Header;
