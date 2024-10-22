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
    window.addEventListener('online',setIsOnline(true));
    window.addEventListener('offline',setIsOnline(false));
    return ()=>{
      window.removeEventListener('online',setIsOnline(true));
      window.removeEventListener('offline',setIsOnline(false));
    }
  })
  useEffect(() => {
    getData();
  }, []);
  return (
    isOnline?(<div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-4 max-w-[1152px] mx-auto">
          {products.map((product) => (
            <Product data={product} />
          ))}
        </div>
      )}
    </div>):(<p>You are offline</p>)
  );
};

export default Home;
