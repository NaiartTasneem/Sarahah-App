import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from './userprofile.module.css';
function UserProfile() {

  
  async function getmessages(){
    let token=localStorage.getItem('token');
    let tariq='tariq__';
   let {data}=await axios.get(`http://localhost:3000/api/v1/message/`, { headers: {"Authorization" : `${tariq}${token}`} });
  setmessages(data.messageList);
   console.log(data.messageList);
  }
  let[messages,setmessages]=useState([]);

useEffect(()=>{getmessages()}
,[])

  return (
    <>
    <h2 className="text-center pt-5 pb-4 fs-3 ">WELCOME </h2>
    <p className={`${style.mes }`}>Your messages </p>
    {messages.map((mes,index)=>
      
    <div className='border d-flex pb-3'>{mes.text}
    <p className={`${style.delbtn } `}><a href='#' className='btn btn-danger color-light '>Delete</a></p>
    </div>



    )}
     


    </>
  )
}

export default UserProfile