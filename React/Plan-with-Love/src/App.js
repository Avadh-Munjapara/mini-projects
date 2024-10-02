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
          <div>
          <p>No Tours left</p>
          <button onClick={()=>setTours(data)}>Refresh</button>
          </div>
      )
  }
  return (
    <Tours tours={tours} onremove={removecard}></Tours> 
  );
}

export default App;
