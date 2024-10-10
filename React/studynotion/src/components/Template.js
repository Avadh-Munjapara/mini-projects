import React from 'react';
import frame from '../assets/frame.png'
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import {FcGoogle} from "react-icons/fc"

const Template = ({des1,type,img,setIsLoggedIn}) => {
    return (
        <div className='min-h-[calc(100vh-65.33px)] py-14 text-white w-[85vw] mx-auto flex justify-between'>
        <div className='flex flex-col gap-4 w-[40%]'>
            <div>
            <p className='text-3xl font-semibold'>{des1}</p>
            <p className='text-[#9FA2AF] text-lg'>Build skills for today, tomorrow, and beyond.</p>
            <p className='text-[#47A5C5] italic text-lg'>Education to future-proof your career.</p>
            </div>
           

            {
                type==='signup'?(<SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>
                ):(<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>)
            }
            <div className='flex items-center gap-2'>
            <div className='w-[calc(50%)] h-[0.7px] bg-white'></div>
            <p className='w-fit'>OR</p>
            <div className='w-[calc(50%)] h-[0.7px] bg-white'></div>
            </div>
            
            <button className='flex w-full border-2 justify-center py-2 items-center gap-1'><FcGoogle/> Sign with Google</   button>
        </div>
        <div className='self-center'>
            <div className="relative"> 
            <img className='h-[351px] w-[390px] absolute right-5 bottom-5' src={img} alt="" />
            <img className='h-[351px] w-[390px]' src={frame} alt="" />
            </div>
          
        </div>

        </div>
    );
}

export default Template;
