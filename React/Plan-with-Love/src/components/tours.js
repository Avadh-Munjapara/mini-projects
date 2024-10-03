import { useState } from 'react'
import Card from './card'

export default function Tours({tours,onremove}){
    
    return(
        <div className='h-[100vh] overflow-x-hidden flex flex-col items-center'>
        <div className='w-2/3'> 
        <h1 className='text-6xl font-semibold text-center'>Travel with Love</h1>
        <div className='flex gap-6 flex-wrap justify-center'>
        {
            tours.map((tour)=>{
                return <Card {...tour} key={tour.id} onremove={onremove} ></Card>
            })
        }   
        </div>
            </div>
        </div>
    )
}