import React from 'react';
import img2 from '../assets/signup.png';
import Template from '../components/Template';

const Signup = ({setIsLoggedIn}) => {
    return (
        <Template des1="Join the millions learning to code with StudyNotion for free" img={img2} type="signup"  setIsLoggedIn={setIsLoggedIn}  ></Template>
    );
}

export default Signup;
    