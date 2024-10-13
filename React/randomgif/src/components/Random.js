import React from 'react';
import Spinner from './Spinner';
import UseGIf from '../hooks/useGIf';

const Random = () => {
    const {gif,loading,fetchRandomGif}=UseGIf();

    return (
        <div className='flex flex-col justify-center gap-2 rounded-md w-[50vw] items-center p-3 bg-green-400'>
            <h2 className='text-2xl font-semibold'>A random GIF</h2>
            {
                loading?(<Spinner></Spinner>):(<img src={gif} alt="random img" />
                )
            }
            <button onClick={()=>fetchRandomGif()}
             className='bg-yellow-300 w-full py-2 px-2 rounded-md'>Generate</button>
        </div>
    );
}

export default Random;                  
