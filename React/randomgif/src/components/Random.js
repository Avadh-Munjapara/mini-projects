import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`;

const Random = () => {
    const [gif, setGif] = useState('');
    const  [loading,setLoading]=useState(true);

    const fetchRandomGif = async () => {
        setLoading(true);
        try  { 
            const {data} = await axios.get(url);
            const imgSource=data.data.images.downsized_large.url;
            setGif(imgSource);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching random image:');
        }
        
    };
    
    function clickHandler(){
        fetchRandomGif();
    }
    useEffect(()=>{
        fetchRandomGif();
    },[]);

    return (
        <div className='flex flex-col justify-center gap-2 rounded-md w-[50vw] items-center p-3 bg-green-400'>
            <h2 className='text-2xl font-semibold'>A random GIF</h2>
            {
                loading?(<Spinner></Spinner>):(<img src={gif} alt="random img" />
                )
            }
            <button onClick={clickHandler} className='bg-yellow-300 w-full py-2 px-2 rounded-md'>Generate</button>
        </div>
    );
}

export default Random;                  
