import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const UseGIf = (tag) => {
    const [gif, setGif] = useState('');
    const  [loading,setLoading]=useState(true);
    const fetchRandomGif = async () => {
    setLoading(true);
    try  { 
        const {data} = await axios.get(tag===''?`${url}`:`${url}&tag=${tag}&rating=g`);
        const imgSource=data.data.images.downsized_large.url;
        setGif(imgSource);
        setLoading(false);
    } catch (error) {
        console.error('Error fetching random image:',error);
    }
    
};

useEffect(()=>{
    fetchRandomGif();
},[]);

    return ({
        gif,loading,fetchRandomGif
    });
}

export default UseGIf;
