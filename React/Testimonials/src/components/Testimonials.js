import Card from "./Card"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {useState} from 'react';

export default function Testimonials({reviews}){

    const[index,setIndex]= useState(0);

    function leftHandler (){
        if(index-1<0){
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index-1);
        }
    }

    function rightHandler(){
       if(index+1>reviews.length-1){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }

    function surpriseHandler(){
        setIndex(Math.floor(Math.random()*reviews.length));
    }


    return(
        <div className="bg-white w-[55%] mx-auto flex flex-col items-center gap-7 pb-12 shadow-xl rounded-md"> 
        <Card review={reviews[index]}></Card>
        <div>

    <div className="flex gap-5 mt-3 -mb-1">
        <button onClick={leftHandler}>
            <FiChevronLeft className="text-3xl hover:text-[#8B5CF6] text-[#A78BFA]"/>
        </button>
        <button onClick={rightHandler}>        
            <FiChevronRight className="text-3xl hover:text-[#8B5CF6] text-[#A78BFA]"/>
        </button> 
    </div>

        </div>
        <button onClick={surpriseHandler} className="bg-[#A78BFA] text-white font-bold px-9 py-2 rounded-md transition-colors duration-200 hover:bg-[#8B5CF6]">Surprise Me</button>
        </div>
    )
}