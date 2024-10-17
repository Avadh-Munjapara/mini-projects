import React from 'react';
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const CategoryPage = () => {
    return (
        <div>
            <Header/>
            <Blogs/>
            <Pagination/>
        </div>
    );
}

export default CategoryPage;
