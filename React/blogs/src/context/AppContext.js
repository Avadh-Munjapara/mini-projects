import React, { Children, createContext, useEffect, useState } from 'react';

export const appContext=createContext();

export default function AppContextProvider ({children})  {

    const [page, setPage] = useState(1);
    const [posts,setPosts]=useState([]);
    const [loading,setLoading]=useState(false);
    const [totalPages,setTotalPages]=useState(null);

    const url='https://codehelp-apis.vercel.app/api/get-blogs';

    async function fetchData(page) {
        try {
            setLoading(true);
            const response=await fetch(url);
            const data=await response.json();
            console.log(data);
            setPosts(data.posts);
            setTotalPages(data.totalPages);

        } catch (error) {       
            console.log("trouble while fetchinhg the data");
        }
        setLoading(false);
    }


    useEffect(()=>{
        fetchData(page);
    },[]);

    const value={
        page,setPage,posts,setPosts,loading,setLoading,totalPages,setTotalPages
    }
    return <appContext.Provider value={value}>
        {children}
    </appContext.Provider>
}

