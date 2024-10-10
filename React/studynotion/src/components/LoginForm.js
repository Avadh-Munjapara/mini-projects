import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const LoginForm = ({setIsLoggedIn}) => {

    const [showPass, setshowPass] = useState(false);
    const navigate=useNavigate();
    function passHandler(){
        setshowPass(!showPass);
    }

    const [formData,setFormData]=useState({
        email: "",
        password:"",
    })

    function changeHandler(event){
        setFormData((prev)=>(
            {
                ...prev,
                [event.target.name]:event.target.value,
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        console.log(formData);
        toast.success('Logged in successfully');
        navigate("/dashboard")
    }

    return (
        <div>
            <form onSubmit={submitHandler} className='flex flex-col gap-4'>



            <div className='flex flex-col gap-1'>
            <label htmlFor="email">Email Address<span className='text-red-500 text-sm absolute'>*</span></label>
            <input onChange={changeHandler} value={formData.email} className='text-white rounded-md px-3 py-2 w-full outline-none bg-[#161D29]' type="email" required placeholder='Enter email address' name='email' id='email'/>
            </div>  

            <div className='flex flex-col gap-1 relative'>
            <label htmlFor="password">Password<span className='text-red-500 text-sm absolute'>*</span></label>
            <div className='flex items-center gap-1  bg-[#161D29] px-3 py-2'>
            <input onChange={changeHandler} value={formData.password} className='text-white rounded-md w-full outline-none bg-[#161D29]' type={showPass?("text"):("password")} required placeholder='Enter Password' name='password' id='password'/>
            <div onClick={passHandler} className='cursor-pointer'>
            {
                showPass?(<FaEyeSlash/>):(   <FaEye/>    )
            }
            </div>
            </div>
            <a href='#' className='absolute -bottom-5 right-0 text-[12px] text-[#47A5C5]'>Forgot Password</a>
            </div>
            <button className='w-full mt-5 py-2 bg-[#FFD60A] text-black rounded-md'>Sign In</button>

            </form>
        </div>
    );
}

export default LoginForm;
