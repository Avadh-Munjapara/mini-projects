import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Home from "./pages/Home";
import { useContext, useEffect } from "react";
import CategoryPage from "./pages/CategoryPage";
import BlogPage from "./pages/BlogPage";
import TagPage from './pages/TagPage';
import { appContext } from "./context/AppContext";
function App() {
  const {fetchData}=useContext(appContext);
  let location=useLocation();
  const [params,setParams]=useSearchParams();

  useEffect(()=>{
    const page=params.get("page")??1;
    if(location.pathname.includes('category')){
      fetchData(Number(page),null,location.pathname.split('/').at(-1).replaceAll('-',' '));
    }
    else if(location.pathname.includes('tag')){
      let tag=location.pathname.split('/').at(-1).replaceAll('-',' ');
      fetchData(Number(page),tag);
      console.log(tag);
    }
    else{
      fetchData(Number(page));
    }
  },[location.pathname,location.search])
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/category/:category" element={<CategoryPage/>}></Route>
      <Route path="/blog/:blogid" element={<BlogPage/>}></Route>
      <Route path="/tag/:tag" element={<TagPage/>}></Route>
    </Routes>
  )
}

export default App;
