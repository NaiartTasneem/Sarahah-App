import React from 'react'
import axios from 'axios'
import style from './users.module.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Users() {
   
    let [allusers,setAllusers]=useState([]);
   async function getUserProfile(params) {
    let {data}= await axios.get(`http://localhost:3000/api/v1/auth/allusers`);
    setAllusers(data.users);
    }
  
    let navigate=useNavigate();
    function goToProfile(user_id){
   navigate({
    pathname:'/profile',
    search:`?user_id=${user_id}`//this mean this is an parameter in the url
   })
    } 
    useEffect( ()=>{ 
        getUserProfile();
     },[])
    return (
  
  <>
<div  className='container d-flex mt-5 align-items-center text-center justify-content-center'>
    <div className='row '>
      
       {allusers.map(
        (ele,index)=>
        <div className='col-md-3 mb-3 ms-5 bg-white flex-1 ' onClick={()=>goToProfile(ele._id)} key={index}>
            <i className={`pt-4 pb-3 fa-solid fa-person ${style.usericon }`}></i>
            <h5 className=' mb-3 text-capitalize'>{ele.userName}</h5>
          </div>
    
  
      )}
      </div>
    </div>
 
  
  </>
    )
  }
  

export default Users