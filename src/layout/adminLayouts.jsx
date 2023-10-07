import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/footerAndNav/admin/nav'
import Sidebar from '../components/admin/Sidebar'


const adminLayouts = () => {
  return (
   <>
   
    
    <div className="drawer ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content "> 
  {/* //flex flex-col items-center justify-center */}
  <Nav/>
  <div className='container mx-auto rounded-lg shadow-xl '>
  <Outlet/>
  </div>
  
  {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
   

 
  </div> 

    
  <Sidebar/>
 
  
 
   
  </div>
 
  
   
  
  
  
   
   </>
  )
}

export default adminLayouts