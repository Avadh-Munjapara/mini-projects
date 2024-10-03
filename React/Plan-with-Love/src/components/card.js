import { useState } from "react";

export default function Card({id,name,image,info,price,onremove}){
    const description=`${info.substr(0,200)}...`;
    const[readmore,setreadmore]=useState(true);
    function readmoreHandler(){
        setreadmore(!readmore);
    }
    function removeHandler(){
        onremove(id);
    }
    return(
        <div className="rounded-lg h-max p-3 flex flex-col gap-3 shadow-[0px_3px_8px_rgba(0,0,0,0.24)] w-[400px]">
            <img className="w-[380px] aspect-square bg-cover" src={image}/>
            <div className="flex flex-col">
            <p className="text-xl font-bold text-green-600">&#8377;{price}</p>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-justify">{readmore?description:info}
                <span className="select-none cursor-pointer text-blue-500" 
                onClick={readmoreHandler}>{readmore?"Read More":"Show Less"}</span>
            </p>
            </div>
            <button className="bg-[#F5E0E1] hover:bg-[#FF0000] hover:text-white font-semibold transition-all duration-200 border border-red-500 py-2 rounded-xl w-2/3 self-center" onClick={removeHandler}>Not Interested</button>
        </div>
    )
}