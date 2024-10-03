import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Cards  from "./components/Cards";
import { filterData } from "./data";

function getData(){
  const get=async ()=>{
    const response=await fetch('https://codehelp-apis.vercel.app/api/get-top-courses');
    const allcourses=response.json();
    console.log(allcourses);
  }
}

function App() {
  return (
   <div>
    <Navbar></Navbar>
    <Filter filterData={filterData}></Filter>
    <Cards getData="getData"></Cards>
   </div>
  );
}

export default App;
