import axios from 'axios';
import React, { useState } from 'react'
import style from './ForgetPassword.module.css';

function ForgetPassword() {
    
let sendcode = async (e)=>{
    e.preventDefault();
let {data}=await axios.patch("http://localhost:3000/api/v1/auth/sendCode",{email});
setmsg(data.message);
console.log(data);

}

let [email,setemail]=useState('');
let[msg,setmsg]=useState('');
let getemail=async (e)=>{
    setemail(e.target.value);
    console.log(email);
}

  return (
    <div>
    <p className={`${style.par}`}>please enter your email to send verfiy code:</p>
    
    <form action="" onSubmit={sendcode}>
    <label className={`${style.emaillab}`}>Email:</label>
    <input type={'email'} placeholder='your@gmail.com'  className={`  form-control ${style.email}`}   onChange={getemail}/>
   <div><button type='submit' className={`btn btn-default-outline mx-5 w-12 rounded  ${style.submit} `}>verfiy</button></div>
    </form>
    
    {msg? <div  className={` bg-light ${style.message}`}>{msg}</div> : ''}










    </div>
  )
}

export default ForgetPassword