import React, { useState } from 'react';
import { IoMdInformationCircle,IoIosNotifications } from "react-icons/io";
import { MdEmail } from "react-icons/md";
const Form = () => {

    const [formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        country:"",
        streetAddress:"",
        city:"",
        state:"",
        pincode:"",
        comments:false,
        candidates:false,
        offers:false,
        notifications:"",
    })


    function clickHandler(event){
         let {name,type,value,checked}=event.target;
            setFormData(prev=>{
                return{
                    ...prev,
                    [name] : type==="checkbox"?checked:value,
                }
            })


    }

    function submitHandler(event){
        event.preventDefault();
        console.log("Finally printing all the values:");
        console.log(formData);
    }

    return (

        <form onSubmit={submitHandler} className='flex flex-col gap-5 w-1/2 pb-5'>
            <fieldset className='flex flex-col gap-1'>
            <legend className='flex items-center gap-1'><IoMdInformationCircle />Basic Information</legend>
            <label className='bg-[#E5E4E2] px-1' htmlFor="firstName">First Name</label>            <br />

            <input className='border-2 px-1 focus:outline-black focus:outline-none focus:border-1' onChange={clickHandler} name='firstName' type="text" id='firstName' value={formData.firstName} placeholder='Avadh' />
            <br /> 
            <label className='bg-[#E5E4E2] px-1' htmlFor="lastName">Last Name</label>            <br />

            <input className='border-2 px-1 focus:outline-black focus:outline-none focus:border-1'  onChange={clickHandler} name='lastName' type="text" id='lastName' value={formData.lastName}  placeholder='Munjapara' />
            <br />
            <label className='bg-[#E5E4E2] px-1' htmlFor="email">Email</label>            <br />

            <input className='border-2 px-1 focus:outline-black focus:outline-none focus:border-1'  onChange={clickHandler} name='email' type="text" id='email' value={formData.email} placeholder='avadhmunjapara369@gmail.com' />
            <br />
            <label className='bg-[#E5E4E2] px-1'>Country</label>            <br />

            <select onChange={clickHandler} name="country" value={formData.country} id="">
                <option value="India">India</option>
                <option value="Canada">Canada</option>
                <option value="United States">United States</option>
                <option value="Mexico">Mexico</option>
            </select>
            <br />
            <label className='bg-[#E5E4E2] px-1' htmlFor="streetAddress">Street Address</label>            <br />

            <input className='border-2 px-1 focus:outline-black focus:outline-none focus:border-1'  onChange={clickHandler} name='streetAddress' type="text" id='streetAddress' value={formData.streetAddress} placeholder='B-25C' />
            <br />
            <label className='bg-[#E5E4E2] px-1' htmlFor="city">City</label>            <br />

            <input className='border-2 px-1 focus:outline-black focus:outline-none focus:border-1'  onChange={clickHandler} name='city' type="text" id='city' value={formData.city}  placeholder='Talala(Gir)' />
            <br />
            <label className='bg-[#E5E4E2] px-1' htmlFor="state">State / Province</label>            <br />

            <input className='border-2 px-1 focus:outline-black focus:outline-none focus:border-1'  onChange={clickHandler} name='state' type="text" id='state' value={formData.state} placeholder='Gujarat' />
            <br />
            <label className='bg-[#E5E4E2] px-1'  htmlFor="pincode">Postal Code</label>            <br />

            <input className='border-2 px-1 focus:outline-black focus:outline-none focus:border-1' onChange={clickHandler} name='pincode' type="text" id='pincode' value={formData.pincode} placeholder='362150' />
            <br />


            </fieldset>

            <fieldset className='flex flex-col gap-2'>
                <legend className='flex items-center gap-1'><MdEmail />By Email</legend>
                <div>
                    <div className='flex gap-1'>
                    <input onChange={clickHandler} type="checkbox" name="comments" id="comments" checked={formData.comments} />
                    <label className='bg-[#E5E4E2] block w-32 px-1' htmlFor="comments">Comments</label>
                    </div>
                    <p>Get notified when someones posts a comment on a posting.</p>
                </div>
                <div>
                    <div className='flex gap-1'>
                    <input onChange={clickHandler} type="checkbox" name="candidates" id="candidates" checked={formData.candidates} />
                    <label className='bg-[#E5E4E2] block w-32 px-1' htmlFor="candidates">Candidates</label>
                    </div>
                    <p>Get notified when a candidate applies for a job.</p>
                </div>
                <div>
                    <div className='flex gap-1'>
                    <input onChange={clickHandler} type="checkbox" name="offers" id="offers" checked={formData.offers} />
                    <label className='bg-[#E5E4E2] block w-32 px-1' htmlFor="offers">Offers</label>
                    </div>
                    <p>Get notified when a candidate accepts or rejects an offer.</p>
                </div>
            </fieldset>

            <fieldset className='flex flex-col gap-2'>
                <legend className='flex items-center gap-1'> <IoIosNotifications className='text-2xl' />Push Notifications<br />These are delivered via SMS to your mobile phone.</legend>
                <div className='flex gap-1'>
                <input onChange={clickHandler} type="radio" name="notifications" checked={formData.notifications==="everything"} value="everything" id="everything" />
                <label className='bg-[#E5E4E2] block w-52 px-1' htmlFor="everything">Everything</label>
                </div>
                <div className='flex gap-1'>
                <input onChange={clickHandler} type="radio" name="notifications" checked={formData.notifications==="sameEmail"}   value="sameEmail" id="sameEmail" />
                <label className='bg-[#E5E4E2] block w-52 px-1' htmlFor="sameEmail">Same as Email</label>
                </div>

                <div className='flex gap-1'>
                <input onChange={clickHandler} type="radio" name="notifications" checked={formData.notifications==="noNoti"}   value="noNoti" id="noNoti" />
                <label className='bg-[#E5E4E2] block w-52 px-1' htmlFor="noNoti">No Push Notifications</label>
                </div>

            </fieldset>

            <button className='bg-[#E5E4E2] w-3/12 self-center py-2 rounded-md'>Save</button>
        </form>
    );
}

export default Form;
