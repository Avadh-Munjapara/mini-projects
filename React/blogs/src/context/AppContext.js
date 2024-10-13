import React, { Children, createContext, useEffect, useState } from 'react';
export const appContext=createContext();

const url=process.env.REACT_APP_URL;

export default function AppContextProvider ({children})  {

    const [page, setPage] = useState(1);
    const [posts,setPosts]=useState([]);
    const [loading,setLoading]=useState(false);
    const [totalPages,setTotalPages]=useState(null);


    async function fetchData(page) {
        try {
            setLoading(true);
            const response=await fetch(`${url}?page=${page}`);
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
        fetchData(page);
    }

    useEffect(()=>{
        fetchData(page);
    },[]);

    const value={
        page,setPage,posts,setPosts,loading,setLoading,totalPages,setTotalPages,changePage
    }
    return <appContext.Provider value={value}>
        {children}
    </appContext.Provider>
}

