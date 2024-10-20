import React, { useEffect, useState } from 'react';
const Home = () => {
    const url=process.env.REACT_APP_URL;
    const [products,setProducts]=useState([]);
    async function getData() {

        try {
            const response=await fetch(url);
            const data=await response.json();
            setProducts(data);
            console.log(data);

        } catch (error) {
            setProducts([]);
            console.log(error);
        }
      
    }
    useEffect(()=>{
        getData();
    },[])
    return (
        <div>
            
        </div>
    );
}

export default Home;
