import './App.css';
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';

function App() {

  const [IsLoggedIn, setIsLoggedIn] = useState(false);

  return (


    <div className='bg-[#000814]'>
      <Navbar IsLoggedIn={IsLoggedIn}></Navbar>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </div>




  );
}

export default App;
