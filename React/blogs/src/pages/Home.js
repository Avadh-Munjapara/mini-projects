import React from 'react';
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
const Home = () => {
    return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
    );
}

export default Home;
