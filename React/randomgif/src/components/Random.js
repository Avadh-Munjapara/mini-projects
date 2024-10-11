import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';

    const url=`https://api.giphy.com/v1/gifs/random?api_key=hDuxjSn3i3wv3ACMWupS8X0H7DHXYes5`;

const Random = () => {

    const [gif, setGif] = useState('');
    const  [loading,setLoading]=useState(true);
    async function getData() {
        setLoading(true);
        const {data}=await axios.get(url);
        const imgSource=data.data.images.downsized_large.url;
        setLoading(false);
        setGif(imgSource);
    }
    useEffect(()=>{
        getData();
    },[]);

    function clickHandler(){
        getData();
    }

    return (
        <div>
            <h2>A random GIF</h2>
            {
                loading?(<Spinner></Spinner>):(<img src={gif} alt="random gif" />
                )
            }
            <button onClick={clickHandler}>Generate</button>
        </div>
    );
}

export default Random;
