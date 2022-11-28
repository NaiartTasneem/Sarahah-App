import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from './userprofile.module.css';
function UserProfile() {

  async function delmessages(msgId){
    console.log(msgId);
    let token=localStorage.getItem('token');
    let tariq='tariq__';
   let {data}=await axios.delete(`http://localhost:3000/api/v1/message/${msgId}`, { headers: {"Authorization" : `${tariq}${token}`} });
   console.log(data);
   getmessages();
  }
  
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
      
    <div className='border mb-2  bg-white d-flex pt-3 ps-1 pb-3'>{mes.text}
    <p className={`pe-3 ${style.delbtn } `}><a onClick={()=>delmessages(mes._id)} className='btn btn-danger color-light '>Delete</a></p>
    </div>



    )}
     


    </>
  )
}

export default UserProfile