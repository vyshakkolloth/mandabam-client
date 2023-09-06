import React, { useEffect } from 'react'
import {   useNavigate } from "react-router-dom";

const adminHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem("adminToken")){ navigate("/admin")}
 
  }, [])
  
  return (
    <div className='bg-white h-full w-full'>
      
    </div>
  )
}

export default adminHome