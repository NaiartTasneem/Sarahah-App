import React from 'react'
import  axios  from 'axios';
import { useSearchParams ,useLocation} from "react-router-dom";
import { useState, useEffect } from "react";

function Profile() {
  //   const [searchParams, setSearchParams] = useSearchParams();
  // let user_id = searchParams.get("user_id");
  const {state}=useLocation();
  const {user_id,userName}=state;
console.log(userName);
console.log(user_id);
  let [text, setText] = useState({
    text:' '
  });
  let[sendDone,setSendDone]=useState('')
  let[Notsend,setNotsend]=useState('')

  let SubmitFormData = async (e) => {
    e.preventDefault();
    let { data } = await axios.post(`http://localhost:3000/api/v1/message/${user_id}`,{text});
    console.log(data);
    if (data.message == "Dnoe ") {
        setSendDone('Message sent successfully !.');
      
      }else{
        setNotsend("Message Does not sent !.")
      }
 
  };
  let getFormData = (e) => {
    let mytext= { ...text };
    mytext = e.target.value;
    console.log(mytext);
    setText(mytext);
    if(sendDone){
      e.target.value=" ";
    }
  };
  return (
    <div>

    <div className="container text-center py-5 my-5 text-center">
   
    {sendDone? <div className='alert alert-success mb-5'>{sendDone}</div>:''}
    {Notsend?<div className='alert alert-danger mb-5'>{Notsend}</div>:''}
    <div className='pb-1'></div>
      <div className="card py-5 mb-5 mt-5" >
        <a  data-toggle="modal" data-target="#profile">
          <img src="img/avatar.png" className="avatar " />
        </a>
        <h3 class="py-2">{userName}</h3>
        <div className="container w-50 m-auto">
          <form onSubmit={SubmitFormData}  method="post">
            <textarea   onChange={getFormData} type='text' className=" mt-5 form-control" cols={10} rows={9} placeholder="type what you want .....  :)" defaultValue={""} />
            <button type='submit' className="btn btn-outline-info mt-3"><i className="far fa-paper-plane" /> Send</button>
          </form>
        </div>
      </div>
      <button data-toggle="modal" data-target="#share" className="btn btn-default-outline share "><i className="fas fa-share-alt" />  Share Profile</button>
    </div>
    <div className="modal fade" id="share" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Share Profile</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">??</span>
            </button>
          </div>
          <div className="modal-body">
            <p>host/messages/id</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Profile