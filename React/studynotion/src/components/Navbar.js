import React from 'react';
import logo from "../assets/Logo.svg"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Navbar = ({IsLoggedIn}) => {
    const navigate=useNavigate();
    return (
        <div className='flex py-3 justify-between text-[#AFB2BF] w-[90vw] mx-auto items-center'>
            <div><img className='h-9' src={logo} alt="logo" /></div>
            <div className='flex gap-5'>
                <Link to="/home">                <button>Home</button>   
                </Link>
                <button>About</button>
                <button>Contact</button>
            </div>
            {
                IsLoggedIn?(<div className='flex gap-5'>
                    <button className='bg-[#161D29] px-5 py-2 rounded-md border-[0.5px] border-[#2C333F]'>Logout</button>
                    <button className='bg-[#161D29] px-5 py-2 rounded-md border-[0.5px] border-[#2C333F]'>Dashboard</button>
               </div>):(  <div className='flex gap-5'>
                <button className='bg-[#161D29] px-5 py-2 rounded-md border-[0.5px] border-[#2C333F]'
                onClick={()=>{
                    navigate('/login')
                }}>Login</button>
                <button className='bg-[#161D29] px-5 py-2 rounded-md border-[0.5px] border-[#2C333F]'
                onClick={()=>{
                    navigate('/signup')
                }}>Signup</button>
                
            </div>)
            }
          
        </div>
    );
}

export default Navbar;
