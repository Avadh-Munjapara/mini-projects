import React, { useContext } from 'react';
import { appContext } from '../context/AppContext';
import Card from './Card';
import Spinner from './Spinner';

const Blogs = () => {
    const {posts,loading}=useContext(appContext)

    return (
        <div className='flex justify-center items-center '>

           { 
             loading?(<Spinner></Spinner>):
             ( <div className='w-1/2 mx-auto flex flex-col gap-5'> 
                {
                    posts.map((post)=><Card key={post.id} data={post}></Card>)
                }
            </div>)
           }

          

        </div>
     
    );
}

export default Blogs;
