import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
const Home = () => {
  const url = process.env.REACT_APP_URL;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOnline,setIsOnline]=useState(navigator.onLine);

  async function getData() {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setProducts([]);
      console.log(error);
    } 
    setLoading(false);
  }
  useEffect(()=>{
   setIsOnline(navigator.onLine);
  },[navigator.onLine])
  useEffect(() => {
    getData();
  }, []);
  return (
    navigator.onLine?(<div>
      {loading ? (
        <div className="h-[calc(100vh-100px)] flex justify-center items-center">
        <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-4 max-w-[1152px] gap-x-3 gap-y-[19px] mt-10 mx-auto">
          {products.map((product) => (
            <Product data={product} />
          ))}
        </div>
      )}
    </div>):(<p>You are offline</p>)
  );
};

export default Home;
