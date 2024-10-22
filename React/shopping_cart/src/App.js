import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className=' font-Montserrat'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
