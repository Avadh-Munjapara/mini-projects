import "./App.css";
import Tours from "./components/tours";
import data from './data'
import { useState } from "react";
function App() {
  const [tours,setTours]=useState(data);
    function removecard(id){
        let newTours=tours.filter(tour=>tour.id!=id);
        setTours(newTours);
    }
  if(tours.length==0){
      return (
          <div className="flex h-[100vh] flex-col justify-center items-center gap-5">
          <p className="font-bold text-3xl">No Tours left</p>
          <button className="bg-[#F5E0E1] hover:bg-[#FF0000] hover:text-white font-semibold transition-all duration-200 border border-red-500 py-2 rounded-xl px-5 self-center"
           onClick={()=>setTours(data)}>Refresh</button>
          </div>
      )
  }
  return (
    <Tours tours={tours} onremove={removecard}></Tours> 
  );
}

export default App;
