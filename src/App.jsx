import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Navbar from './Component/Navbar/Navbar';
import Register from './Component/Register/Register';

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
    <Routes>
      <Route path='home' element={<Home/>} ></Route>
      <Route path='login' element={<Login />} ></Route>
      <Route path='register' element={<Register/>} ></Route>
    </Routes>
    </div>
    </>
  );
}

export default App;
