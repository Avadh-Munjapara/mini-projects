import React from 'react';
import logo from "../assets/Logo.svg"

const Navbar = ({IsLoggedIn}) => {
    return (
        <div className='flex py-3 justify-evenly text-[#AFB2BF] items-center'>
            <div><img className='h-9' src={logo} alt="logo" /></div>
            <div className='flex gap-5'>
                <button>Home</button>   
                <button>About</button>
                <button>Contact</button>
            </div>
            {
                IsLoggedIn?(<div className='flex gap-5'>
                    <button className='bg-[#161D29] px-5 py-2 rounded-md border-[0.5px] border-[#2C333F]'>Logout</button>
                    <button className='bg-[#161D29] px-5 py-2 rounded-md border-[0.5px] border-[#2C333F]'>Dashboard</button>
               </div>):(  <div className='flex gap-5'>
                <button className='bg-[#161D29] px-5 py-2 rounded-md border-[0.5px] border-[#2C333F]'>Login</button>
                <button className='bg-[#161D29] px-5 py-2 rounded-md border-[0.5px] border-[#2C333F]'>Signup</button>
                
            </div>)
            }
          
        </div>
    );
}

export default Navbar;
