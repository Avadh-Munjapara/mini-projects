import React from 'react';
import img1 from '../assets/login.png';
import Template from '../components/Template';
const Login = ({setIsLoggedIn}) => {
    return (
     <Template des1="Welcome Back" img={img1} type="login" setIsLoggedIn={setIsLoggedIn}  ></Template>
    );
}

export default Login;
