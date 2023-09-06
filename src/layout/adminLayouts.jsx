import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/footerAndNav/admin/nav'
import Sidebar from '../components/admin/Sidebar'


const adminLayouts = () => {
  return (
   <>
   <div className='bg-rose-600'>
    <Nav/>
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
  <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  <Outlet/>
    
  
  </div> 
  
  <Sidebar/>
   
  </div>
 
  
   
  </div>
  
  
   
   </>
  )
}

export default adminLayouts