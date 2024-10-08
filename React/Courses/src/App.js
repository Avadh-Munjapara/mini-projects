import Navbar from "./components/Navbar";
import Cards  from "./components/Cards";
import Spinner from "./components/Spinner";
import {useState,useEffect} from 'react';
import { apiUrl,filterData } from "./data";
import Filter from "./components/Filter";

  
function App() {

  const [courses,setCourses]=useState(null);
  const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title);

    async function getdata() {
      setLoading(true);
      try {
        let raw=await fetch(apiUrl);
        let data=await raw.json();
        let cat=data.data;
        setCourses(cat); 
        console.log(cat);
      } catch (error) {
        console.log("error occured");
      }
      setLoading(false);
    }

    useEffect(()=>{
      getdata();
    },[]);

  return (
   <div className="bg-[#4A4E69] min-h-screen">
    <Navbar>
      <div  className="flex justify-center gap-5 py-4 h-full">
      <Filter courses={courses} filterData={filterData} category={category} setCategory={setCategory}></Filter>
      </div>
    </Navbar>
    <div className="min-h-[50vh] flex flex-col justify-center items-center">
    {
      loading ? (<Spinner/>):(<Cards  courses={courses} category={category}  />)    
    }
    </div>
 
   </div>
  );
}

export default App;
