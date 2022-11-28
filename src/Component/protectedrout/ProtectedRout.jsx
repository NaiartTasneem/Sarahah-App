import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRout({loginData}) {
  return (
  <>
  

  {loginData ? <Outlet />: <Navigate to='login'/> 
  
}
  </>


)
}

export default ProtectedRout