import React, { Children, createContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
export const appContext=createContext();

let baseUrl=process.env.REACT_APP_URL;
export default function AppContextProvider ({children})  {

    const [page, setPage] = useState(1);
    const [posts,setPosts]=useState([]);
    const [loading,setLoading]=useState(false);
    const [totalPages,setTotalPages]=useState(null);
    let navigate=useNavigate();
    let location=useLocation();
    async function fetchData(page=1,tag=null,category) {  
        let url=`${baseUrl}?page=${page}`;
        console.log(page);
        if(tag){
            url+=`&${tag}`;
        }
        else if(category){
            url+=`&category=${category}`;
        }
        try {
            setLoading(true);
            const response=await fetch(url);
            const data=await response.json();
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);

        } catch (error) {       
            console.log("trouble while fetchinhg the data");
        }
        setLoading(false);
    }

    function changePage(page){
        console.log(location.search);
        setPage(page);
        navigate({search:`?page=${page}`})
    }

    const value={
        fetchData,page,setPage,posts,setPosts,loading,setLoading,totalPages,setTotalPages,changePage
    }
    return <appContext.Provider value={value}>
        {children}
    </appContext.Provider>
}

