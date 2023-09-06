import React from 'react'
 import { Link } from 'react-router-dom'
 
 
const Sidebar = () => {
  return (
  
  <div className="drawer-side bg-white">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a> <Link to="/admin/home">AdminHome</Link></a></li>
      <li><a> <Link to="/admin/user">User Managment</Link></a></li>
      <li><a> <Link to="/admin/vendor">VendorManagment</Link></a></li>
      <li><a> <Link to="/admin/chat">Chat</Link></a></li>
      <li><a> </a></li>
      
    </ul>
  
  </div>    


  )
}

export default Sidebar