import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const Tag = () => {
    const [gif, setGif] = useState('');
    const  [loading,setLoading]=useState(true);
    const [tag,setTag]=useState('car');
    const fetchRandomGif = async () => {
        setLoading(true);
        try  { 
            const {data} = await axios.get(`${url}&tag=${tag}&rating=g`);
            const imgSource=data.data.images.downsized_large.url;
            setGif(imgSource);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching random image:');
        }
        
    };


    function changeHandler(event){
        setTag(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();
        fetchRandomGif();
    }
    useEffect(()=>{
        fetchRandomGif();
    },[]);

    return (
        <div>
            <h2>A random GIF</h2>
            {
                loading?(<Spinner></Spinner>):(<img src={gif} alt="random img" />
                )
            }

            <form onSubmit={submitHandler}>

            <label htmlFor="tag">Enter Tag</label>
            <input type="text" name='tag' id='tag' value={tag} onChange={changeHandler} />
            <button>Generate</button>

            </form>
        </div>
    );
}

export default Tag;
