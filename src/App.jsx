import { Route, Routes ,Navigate} from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Navbar from './Component/Navbar/Navbar';
import Register from './Component/Register/Register';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import Users from './Component/Users/Users';
import Index from './Component/Index/Index.jsx';
import Profile from './Component/Profile/Profile';
import ProtectedRout from './Component/protectedrout/ProtectedRout'
import UserProfile from './Component/userprofile/UserProfile';
import ForgetPassword from './Component/Forget/ForgetPassword';
function App() {
  
  let[loginData,setloginData]=useState(null);

  function setUserData(){
    let token=localStorage.getItem('token');
    let decoded=jwtDecode(token);
    setloginData(decoded);
    console.log(loginData);
  }
  function logout(){
    localStorage.removeItem('token');
    setloginData(null);
    Navigate('/register');
  }
  useEffect(()=>{  
  if(localStorage.getItem('token')){
    setUserData();
  }
  
},[])



  return (
    <>
    <Navbar  loginData={loginData} logout={logout} />
    <div className="container">
    <Routes>

    <Route  element={<ProtectedRout loginData={loginData}/>}>
    <Route path='userprofile' element={<UserProfile loginData={loginData}/>}></Route>
    </Route>

      <Route path='/' element={<Index/>}></Route>
      <Route path='profile' element={<Profile/>}></Route>
      <Route path='users' element={<Users/>}></Route>
      <Route path='home' element={<Home/>} ></Route>
      <Route path='login' element={<Login  setUserData={setUserData}  />} ></Route>
      <Route path='register' element={<Register/>} ></Route>
      <Route path='forgetpassword'  element={<ForgetPassword/>}></Route>
    </Routes>
    </div>
    </>
  );
}

export default App;
