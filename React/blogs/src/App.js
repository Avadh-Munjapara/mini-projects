import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";

function App() {
  return (
    <div className="flex flex-col gap-5 pb-6">
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  );  
}

export default App;
