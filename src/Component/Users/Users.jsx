import React from 'react'
import axios from 'axios'
import style from './users.module.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


function Users() {
    const[searchTerm,setSearchTerm]=useState('');
    let[targetUser,setTargetUser]=useState([]);
   console.log(searchTerm);
    let [allusers,setAllusers]=useState([]);
   async function getUserProfile(params) {
    let {data}= await axios.get(`http://localhost:3000/api/v1/auth/allusers`);
    setAllusers(data.users);
    }
  
    let navigate=useNavigate();
    useEffect( ()=>{ 
        getUserProfile();
     },[])
     useEffect(()=>{
      const targetUser=allusers?.filter((item)=> item?.userName.toLowerCase().includes(searchTerm?.toLowerCase()));
      setTargetUser(targetUser);
     },[allusers,searchTerm]);
    return (
  
  <>
<div  className='container d-flex mt-5 align-items-center flex-column text-center justify-content-center'>
  
  <input id='searchInput' className="form-control px-3 mb-5" placeholder="search..." type="text" 
   onChange={e =>{setSearchTerm(e.target.value)}} />
    <div className='row '>
      
       {targetUser?.map(
        (ele,index)=>
        <div className={`ms-5 me-5 mb-3 bg-white ${style.mydiv }`} onClick={()=> navigate("../profile", { state:{user_id:ele._id,userName:ele.userName}})} key={index}>
            <i className={`pt-4 pb-3 fa-solid fa-person ${style.usericon }`}></i>
            <h5 className=' mb-3 text-capitalize'>{ele.userName}</h5>
            <h6 className=' mb-3 '>{ele.email}</h6>
          </div>
    
  
      )}
      </div>
    </div>
 
  
  </>
    )
  }
  

export default Users