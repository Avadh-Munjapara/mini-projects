import React, {  useState } from 'react';
import Spinner from './Spinner';
import UseGIf from '../hooks/useGIf';

const Tag = () => {

    const [tag,setTag]=useState('car');
    const {gif,loading,fetchRandomGif}=UseGIf(tag);

    return (
        <div className='flex flex-col justify-center gap-2 rounded-md w-[50vw] items-center p-3 bg-blue-400'>
            <h2 className='text-2xl font-semibold'>A random {tag} GIF</h2>
            {
                loading?(<Spinner></Spinner>):(<img src={gif} alt="random img" />
                )
            }

            <form className='flex flex-col items-center px-3 gap-3 w-[50vw]' onSubmit={(event)=>{
                event.preventDefault();
                fetchRandomGif(tag);
            }}>
            <div className='flex gap-2'> 
            <label htmlFor="tag">Enter Tag</label>
            <input className='px-2' type="text" name='tag' id='tag' value={tag} onChange={(event)=>setTag(event.target.value)} />
            </div>
            <button className='bg-yellow-300 w-full py-2 px-2 rounded-md'>Generate</button>

            </form>
        </div>
    );
}

export default Tag;
