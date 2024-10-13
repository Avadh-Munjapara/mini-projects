import React, { useContext } from 'react';
import { appContext } from '../context/AppContext';
import Card from './Card';

const Blogs = () => {
    const {posts}=useContext(appContext)

    return (
        <div>
            {
                posts.map((post)=><Card key={post.id} data={post}></Card>)
            }
        </div>
    );
}

export default Blogs;
