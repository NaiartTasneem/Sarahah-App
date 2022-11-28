import axios from 'axios'
import React, { useEffect } from 'react'

function UserProfile() {

  
  async function getmessages(){
    let token=localStorage.getItem('token');
    let tariq='tariq__';
    //alert(`Bearer ${tariq}${token}`);
   let {data}=await axios.get(`http://localhost:3000/api/v1/message/`, { headers: {"Authorization" : `${tariq}${token}`} });
  
   console.log(data);
  }

useEffect(()=>{getmessages()}
,[])

  return (
    <>
    <h2 className="text-center">Welcome </h2>
     


    </>
  )
}

export default UserProfile