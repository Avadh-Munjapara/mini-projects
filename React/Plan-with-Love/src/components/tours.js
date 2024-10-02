import { useState } from 'react'
import Card from './card'

export default function Tours({tours,onremove}){
    
    return(
        <div>
        <h1>Travel with Love</h1>
        <div>
        {
            tours.map((tour)=>{
                return <Card {...tour} onremove={onremove} ></Card>
            })
        }
        </div>
        </div>
    )
}