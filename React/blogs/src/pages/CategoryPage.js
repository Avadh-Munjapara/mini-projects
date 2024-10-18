import React from 'react';
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import { useNavigate } from 'react-router-dom';

const CategoryPage = () => {
    let navigate=useNavigate();

    return (
        <div>
            <Header/>
            <div className='mt-[80px] mx-auto w-11/12 max-w-[670px] pl-7'>
            <button className='border-2 py-1  px-4 rounded-md' onClick={()=>{navigate(-1)}}>Back</button>
            </div>
            <Blogs/>
            <Pagination/>
        </div>
    );
}

export default CategoryPage;
