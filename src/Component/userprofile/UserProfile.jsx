import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import React, { useEffect, useState } from 'react';
import style from './userprofile.module.css';
function UserProfile({loginData}) {

  
  async function delmessages(msgId){
    let token=localStorage.getItem('token');
    let tariq='tariq__';
   let {data}=await axios.delete(`http://localhost:3000/api/v1/message/${msgId}`, { headers: {"Authorization" : `${tariq}${token}`} });
   console.log(data);
   getmessages();

  }
  
  async function getmessages(){
    let token=localStorage.getItem('token');
    let tariq='tariq__';
    console.log(token);
   let {data}=await axios.get(`http://localhost:3000/api/v1/message/`, { headers: {"Authorization" : `${tariq}${token}`} });
  setmessages(data.messageList);
   console.log(data.messageList);
  }
  let[messages,setmessages]=useState([]);
 
useEffect(()=>{getmessages()}
,[])

const submitdelete = (id) => {

  confirmAlert({
    title: 'Delete Message',
    message: 'confirm deleting this message .',
    buttons: [
      {
        label: 'Yes',
        onClick: () => delmessages(id)
      },
      {
        label: 'No',
        //onClick: () => alert('Click No')
      }
    ]
  });}
  return (
    <>
    
    <h2 className="text-center pt-5 pb-4 fs-3 ">WELCOME </h2>
   
<div className='mb-5'>
   {messages.length?<>{messages.map((mes,index)=>
    <div>
      <div className='border rounded shadow mb-2 align-items-center d-flex bg-white d-flex pt-3 ps-3 pb-3'>{mes.text}
      <p className={`pe-3 ${style.delbtn } `}><a onClick={()=>submitdelete(mes._id)} className='btn btn-danger color-light '>Delete</a></p>
      </div>
      <p className={style.msgtime}>{mes.createdAt}</p>

  </div>
      )}</>:<div className='justify-content-center d-flex'><img className='m-auto img-fluid' src="img/no-messages.webp" /></div>} 
     
   
    
     </div>
     


    </>
  )
}

export default UserProfile