import { toast } from 'react-toastify';
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import {useState} from 'react';
export default function Card({course}){
    const [ts,setts]=useState(true);
    function toastHandler(){
        setts(!ts);
        if(ts){
            toast.success("Course Liked!");
        }
        else{
            toast.warning("Liked Removed");
        }
    }
    let description;
    if(course.description.length>100){
         description=course.description.substr(0,100)+"...";
    }
    else{
         description=course.description;
    }
    return (
       <div className="flex flex-col w-72 bg-[#2A2B44]  gap-2 rounded-md relative">
        <img className=" w-full rounded-md" src={course.image.url} alt={course.image.alt} /> 
        <div className="absolute right-3 bg-white h-10 w-10 rounded-full
         flex justify-center items-center top-[135px] hover:cursor-pointer" onClick={toastHandler}>
            {
                ts?<FcLikePlaceholder className="w-7 h-7"/>:<FcLike className="w-7 h-7"/>
            }
            </div>   
        <div className="text-white flex flex-col gap-2 pb-3 px-3">
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p>{description}</p>
        </div>
       </div>
    )
}