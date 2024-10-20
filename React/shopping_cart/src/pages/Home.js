import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
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
        <div className='grid grid-cols-4 max-w-[1152px] mx-auto'>
            {
                products.map((product)=> <Product data={product}/>)
            }
        </div>
    );
}

export default Home;
