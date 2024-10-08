import { toast } from 'react-toastify';
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
export default function Card({course,setLikedCourses,likedCourses}){
    function toastHandler(){
        if(likedCourses.includes(course.id)){
            setLikedCourses((prev)=>{
                    return [...prev].filter((id)=>id!==course.id);
            })
            toast.warning("Liked Removed!");
        }
        else if(likedCourses.length==0){
            setLikedCourses(course.id);
            toast.success("Course Liked!");
        }
        else{
            setLikedCourses((prev)=>{
                return [...prev,course.id];
            })
            toast.success("Course Liked!");
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
                !likedCourses.includes(course.id)?<FcLikePlaceholder className="w-7 h-7"/>:<FcLike className="w-7 h-7"/>
            }
            </div>   
        <div className="text-white flex flex-col gap-2 pb-3 px-3">
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p>{description}</p>
        </div>
       </div>
    )
}