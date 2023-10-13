import React from 'react'
import VnavBar from "../components/footerAndNav/vendor/VnavBar"
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Alert from '../components/alert/Alert'
const VendorLayouts = () => {
  return (
    <>
  
  <div className="drawer ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content "> 
  {/* //flex flex-col items-center justify-center */}
    <VnavBar/>
    {/* <Alert/> */}
  <div className='container mx-auto shadow-lg border-s-amber-100'>
  <Outlet/>
  </div>
    
  
  </div> 

  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      {/* <li><Link to="/venue/home">Home</Link></li> */}
      <li><Link to="/venue/information">Information</Link></li>
      <li><Link to="/venue/project"> Project </Link></li> 
      <li><Link to="/venue/Enquiries"> Enquiries</Link></li>
      <li><Link to="/venue/Chat"> Chat</Link></li>
     
    </ul>
  </div>


</div>

   
    </>
  )
}

export default VendorLayouts