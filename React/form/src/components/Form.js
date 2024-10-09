import React, { useState } from 'react';

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
        comments:true,
        candidates:false,
        offers:true,
        notifications:"",
    })

    return (
        <div>

            <fieldset>
                <legend>Basic Information</legend>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' value={formData.firstName} placeholder='Avadh' />
            <br />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName' value={formData.lastName}  placeholder='Munjapara' />
            <br />
            <label htmlFor="email">Email</label>
            <input type="text" id='email' value={formData.email} placeholder='avadhmunjapara369@gmail.com' />
            <br />
            <label htmlFor="">Country</label>
            <select name="country" value={formData.country} id="">
                <option value="India">India</option>
                <option value="Canada">Canada</option>
                <option value="United States">United States</option>
                <option value="Mexico">Mexico</option>
            </select>
            <br />
            <label htmlFor="streetAddress">Street Address</label>
            <input type="text" id='streetAddress' value={formData.streetAddress} placeholder='B-25C' />
            <br />
            <label htmlFor="city">City</label>
            <input type="text" id='city' value={formData.city}  placeholder='Talala(Gir)' />
            <br />
            <label htmlFor="state">State / Province</label>
            <input type="text" id='state' value={formData.state} placeholder='Gujarat' />
            <br />
            <label htmlFor="pincode">Postal Code</label>
            <input type="text" id='pincode' value={formData.pincode} placeholder='362150' />
            <br />


            </fieldset>

            <fieldset>
                <legend>By Email</legend>
                <div>
                    <input type="checkbox" name="comments" id="comments" checked={formData.comments} />
                    <label htmlFor="comments">Comments <br />Get notified when someones posts a comment on a posting.</label>
                </div>
                <div>
                    <input type="checkbox" name="candidates" id="candidates" checked={formData.candidates} />
                    <label htmlFor="candidates">Candidates <br />Get notified when a candidate applies for a job.</label>
                </div>
                <div>
                    <input type="checkbox" name="offers" id="offers" checked={formData.offers} />
                    <label htmlFor="offers">Offers <br />Get notified when a candidate accepts or rejects an offer.</label>
                </div>
            </fieldset>

            <fieldset>
                <legend>Push Notifications<br />These are delivered via SMS to your mobile phone.</legend>
                <input type="radio" name="notifications" id="everything" />
                <label htmlFor="everything">Everything</label>
                <br />
                <input type="radio" name="notifications" id="sameEmail" />
                <label htmlFor="sameEmail">Same as Email</label>
                <br />
                <input type="radio" name="notifications" id="noNoti" />
                <label htmlFor="noNoti">No Push Notifications</label>
            </fieldset>

            <button>Save</button>
        </div>
    );
}

export default Form;
