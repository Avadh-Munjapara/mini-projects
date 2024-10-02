import { useState } from 'react'
import data from '../data'
import Card from './card'

export default function Tours(){
    const [tours,setTours]=useState(data);
    return(
        <div>
        <h1>Travel with Love</h1>
        <div>
        {
            tours.map((tour)=>{
                return <Card {...tour} ></Card>
            })
        }
        </div>
        </div>
    )
}