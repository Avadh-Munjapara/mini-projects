import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { appContext } from '../context/AppContext';
import Spinner from '../components/Spinner';
import Header from '../components/Header';

const BlogPage = () => {
    let url=process.env.REACT_APP_BURL;
    const {loading,setLoading}=useContext(appContext);
    const [blog,setBlog]=useState(null);
    const [relatedBlogs,setRelatedBlogs]=useState([]);
    let location=useLocation();
    let blogId=location.pathname.split('/').at(-1);
    let navigation=useNavigate();
    async function fetchBlogs() {
        setLoading(true);
        try{
            const response=await fetch(`${url}?blogId=${blogId}`);
            const data=await response.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);

        }
        catch(error){
            console.log("api fetch me error aa gaya ji!!!");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }
    
    useEffect(()=>{
        if(blogId){
            fetchBlogs();
        }
    },[location.pathname]);
    return (
        <div>
            {
            loading?
            <div className='flex justify-center items-center min-h-[clac(100vh-75px)]'>
                <Spinner/>
            </div>
           :
            (blog?
                <div>
                    <Header/>
                    <div className='w-11/12 mt-[80px] max-w-[670px] mx-auto pb-5 flex flex-col gap-5'>
                    <button className='border-2 w-fit py-1 px-4 rounded-md' onClick={()=>navigation('/')}>Home</button>
                    <Card data={blog}></Card>
                    <h2 className='text-3xl font-bold'>Related Blogs</h2>
                    {
                        relatedBlogs.map((blog)=><Card key={blog.Id} data={blog}/>)
                    }

                </div>
                </div>
                :<p>no blog found</p>)
            
            }
        </div>
    );
}

export default BlogPage;
