import React from 'react'
 import { Link } from 'react-router-dom'
 
 
const Sidebar = () => {
  return (
  
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><Link to="/admin/home">AdminHome</Link></li>
      <li> <Link to="/admin/user">User Managment</Link></li>
      <li> <Link to="/admin/venueList">VendorManagment</Link></li>
      <li> <Link to="/admin/Payment">Payment Managment</Link></li>
      <li> <Link to="/admin/bannerManagemnt">Banner Managment</Link></li>

      
     
      
      
    </ul>
  
  </div>    


  )
}

export default Sidebar