import React from "react";
import toast from 'react-hot-toast';
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; 
import {useState} from 'react';

const SignupForm = ({setIsLoggedIn}) => {

    const [user, setUser] = useState("student");
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
        toast.success('Logged in successfully');
        navigate("/dashboard")
    }

    function userHandler(){
        user==='student'?setUser('instructor'):setUser('student');
    }

  return (
    <div>
        <div className="bg-[#161D29] w-fit flex gap-1 p-1 rounded-3xl">
            <button onClick={userHandler} className={`${user==='student'?'bg-[#000814]':'bg-[#161D29]'} rounded-3xl px-4 py-2`}>Student</button>
            <button onClick={userHandler} className={`${user==='instructor'?'bg-[#000814]':'bg-[#161D29]'} rounded-3xl px-4 py-2`}>Instructor</button>
        </div>
      <form onSubmit={submitHandler} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email Address</label>
          <input
            onChange={changeHandler}
            value={formData.email}
            className="text-white rounded-md px-3 py-2 w-full outline-none bg-[#161D29]"
            type="email"
            required
            placeholder="Enter email address"
            name="email"
            id="email"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <div className="flex items-center gap-1  bg-[#161D29] px-3 py-2">
            <input
              onChange={changeHandler}
              value={formData.password}
              className="text-white rounded-md w-full outline-none bg-[#161D29]"
              type={showPass ? "text" : "password"}
              required
              placeholder="Enter Password"
              name="password"
              id="password"
            />
            <div onClick={passHandler} className="cursor-pointer">
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </div>
        <button className="w-full py-2 bg-[#FFD60A] text-black rounded-md">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
