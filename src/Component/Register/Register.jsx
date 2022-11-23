import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Register() {
  let navigate = useNavigate();
  function goToLogin() {
    let path = "/login";
    navigate(path);
  }
  let[Error,setError]=useState();
  let [user, setUser] = useState({
    userName: "",
    password: "",
    cpassword: "",
    email: "",
  });

  let SubmitFormData = async (e) => {
    e.preventDefault();
    let { data } = await axios.post("http://localhost:3003/api/v1/auth/signup",user);
    console.log(data);
    if (data.message == "done") {
      console.log("ttt");
      goToLogin();
    }
   else{
    setError(data.message);
   }
  };


  let getFormData = (e) => {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  };
  return (
    <div className="container text-center my-5">
      {Error? <div className='alert alert-danger'>{Error}</div>: ' '}
      <div className="user my-3">
        <i className="fas fa-user-secret user-icon" />
        <h4 className="login">Register</h4>
      </div>
      <div className="card p-5 w-50 m-auto">
        <form onSubmit={SubmitFormData} method="POST" action="/handleLogin">
        <input
          onChange={getFormData}
            className="form-control "
            placeholder="Enter your name"
            type="text"
            name="userName"
          />
      
          <input
            onChange={getFormData}
            className="form-control my-4 "
            placeholder="Enter your Password"
            type="text"
            name="password"
          />
          <input
            onChange={getFormData}
            className="form-control my-4 "
            placeholder="confirm your Password"
            type="text"
            name="cpassword"
          />
          <input
          onChange={getFormData}
            className="form-control mt-4"
            placeholder="Enter your email"
            type="text"
            name="email"
          />
          <button type="submit" className="btn btn-default-outline my-4 w-100 rounded">
            Register
          </button>
          <p>
            <a className="text-muted forgot btn" >
              I Forgot My Password
            </a>
          </p>
          <Link className="btn btn-default-outline" to="/login">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;