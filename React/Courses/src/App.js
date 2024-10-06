import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Cards  from "./components/Cards";
import Spinner from "./components/Spinner";
import {useState,useEffect} from 'react';
import { apiUrl,filterData } from "./data";

  





function App() {

  const [courses,setCourses]=useState(null);
  const [loading,setLoading]=useState(true);
    


    async function getdata(params) {
      setLoading(true);
      try {
        let raw=await fetch(apiUrl);
        let data=await raw.json();
        let cat=data.data;
        setCourses(cat); 
      } catch (error) {
        console.log("error occured");
      }
      setLoading(false);
    }

    useEffect(()=>{
      getdata();
    },[]);

  return (
   <div>
    <Navbar></Navbar>
    <Filter filterData={filterData}></Filter>
    {
      loading ? (<Spinner/>):(<Cards  courses={courses}/>)
    }
   </div>
  );
}

export default App;
