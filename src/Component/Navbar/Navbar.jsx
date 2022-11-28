import React from 'react'
import { Link } from "react-router-dom";

function Navbar({loginData,logout}) {
  return (

<nav className="navbar navbar-expand-lg bg-custom navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand" href="index.html"><img src="img/logo300.png" width={54} /> </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      Menu <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
      <li className="nav-item">
      <Link className="nav-link" to="users">
        Users
      </Link>
    </li>
            {loginData?
            <>
           <li className="nav-item">
           <Link className="nav-link" to="userprofile">
            User Profile
           </Link>
         </li>
        
         <li className="nav-item" >
           <Link className="nav-link"  onClick={logout} to="register" >
            Logout
           </Link>
         </li>
         </>:
         <>
<li className="nav-item">
      <Link className="nav-link" to="login">
        Login
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="register">
        Register
      </Link>
    </li>
    </> 
          }
           
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar