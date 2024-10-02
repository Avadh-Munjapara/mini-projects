import Incriment from "./inc"
import Decrement from "./dec"
import  Text  from "./text"
import { useState } from "react"


export default function Card(){
    const [value,setValue]=useState(0);
    return(
        <div className="flex gap-5 items-center text-white bg-black p-5 rounded-xl">
            <Incriment valobj={{value,setValue}}></Incriment>
            <Text value={value}></Text>
            <Decrement valobj={{value,setValue}}></Decrement>
        </div>
    )
}