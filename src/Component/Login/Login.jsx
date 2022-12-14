import React from 'react';
import axios from 'axios';
import ForgetPassword from '../Forget/ForgetPassword';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

function Login({setUserData}) {

  let navegate=useNavigate();
  function  goToHome(){
    let path='/userprofile';
    navegate(path);
  }
let [cmassge,seyCmassge]=useState("");
  let SubmitFormData= async (e)=>{

    e.preventDefault();
    let{data}=await axios.post("http://localhost:3000/api/v1/auth/signin",user);
    seyCmassge(data.messge);
   if (data.message=='login')
   {localStorage.setItem('token',data.loginToken);
   setUserData();
   goToHome();

   }
   else{
    setError(data.message);
   }
  }
  
  let[Error,setError]=useState();
  let [user,setuser]=useState({
    email:"",
    password:"",
  
  }
    
    );
  
    let DataForm= (e)=>{
     let myuser={...user};
      myuser[e.target.name]=e.target.value;
      setuser(myuser);
    }
  
  
  




  return (
 <div className="container text-center my-5">
  {Error? <div className='alert alert-danger'>{Error}</div>: ' '}
  {cmassge? <div className='alert alert-danger'>{cmassge}</div>: ' '}
  <div className="user my-3">
    <i className="fas fa-user-secret user-icon" />
    <h4 className="login">Login</h4>
  </div>
  <div className="card p-5 w-50 m-auto">
    <form   onSubmit={SubmitFormData}  method="POST" action="/handleLogin">
      <input className="form-control" placeholder="Enter your email" type="text" name="email" onChange={DataForm} />
      <input className="form-control my-4 " placeholder="Enter your Password" type="text" name="password" onChange={DataForm}/>
      <button  type="submit" className="btn btn-default-outline my-4 w-100 rounded">Login</button>
      <p><Link className="text-muted forgot btn" to='/forgetpassword'>I Forgot My Password</Link></p>
      <Link className="btn btn-default-outline" to="/register">Register</Link>
    </form>
  </div>
</div>

  )
}

export default Login