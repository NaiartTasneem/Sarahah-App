import axios from 'axios';
import React, { useState } from 'react'
import style from './ForgetPassword.module.css';

function ForgetPassword() {
    
  let [email,setemail]=useState('');
  let[msg,setmsg]=useState('');
  let [passmsg,setpassmsg]=useState('');
  let[newpass,setnwewpass]=useState({
 email:"",
 code:"",
 password:"",
  });


let sendcode = async (e)=>{
    e.preventDefault();
let {data}=await axios.patch("http://localhost:3000/api/v1/auth/sendCode",{email});
setmsg(data.message);
console.log(data);

}


let getemail=async (e)=>{
    setemail(e.target.value);
    console.log(email);
}


 let FormData=async (e)=>{
  let mynewpass={...newpass};
  mynewpass[e.target.name]=e.target.value;

  setnwewpass(mynewpass);

 }

 let forgetpassword=async (e)=>{
  e.preventDefault();
  console.log(newpass);
  let {data}=await axios.patch("http://localhost:3000/api/v1/auth/forgetpassword",newpass);
   setpassmsg(data.message);


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


  <p className={`${style.par}`}>chang your password:</p>

   <form   action="" onSubmit={forgetpassword} className='mt-3'>
    <label  className={`${style.emaillab}`}>Email</label>
   <input type="email" name='email' placeholder='your@gmail.com'  className={`  form-control ${style.email}`}   onChange={FormData}/>
   <label  className={`${style.emaillab}`} >Code</label>
   <input type="text" name='code' className={`  form-control ${style.email}`}   onChange={FormData}/>
   <label  className={`${style.emaillab}`}>New password</label>
   <input type="password" name='password' className={`  form-control ${style.email}`}   onChange={FormData}/>
   <div><button type='submit' className={`btn btn-default-outline mx-5 w-12 rounded  ${style.submit} `}>Send</button></div>
    

   </form>

   {passmsg? <div  className={` bg-light ${style.message}`}>{passmsg}</div> : ''}





    </div>
  )
}

export default ForgetPassword