import React, { useContext } from 'react';
import { appContext } from '../context/AppContext';
import Card from './Card';
import Spinner from './Spinner';

const Blogs = () => {
    const {posts,loading}=useContext(appContext)
    return (
        <div className='flex flex-col py-20 justify-center items-center '>
            <div>

           { 
             loading?(<Spinner></Spinner>):
             ( <div className='w-11/12 max-w-[670px] mx-auto flex flex-col gap-5'> 
                {
                    posts.map((post)=><Card key={post.id} data={post}></Card>)
                }
            </div>)
           }

            </div>

          

        </div>
     
    );
}

export default Blogs;
