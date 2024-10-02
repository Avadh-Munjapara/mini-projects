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
        <div>
            <img src={image} />
            <div>
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{readmore?description:info}<span className="select-none cursor-pointer" onClick={readmoreHandler}>{readmore?"readmore":"showless"}</span>
            </p>
            </div>
            <button onClick={removeHandler}>Not Interested</button>
        </div>
    )
}