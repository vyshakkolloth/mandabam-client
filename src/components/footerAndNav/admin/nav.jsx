import React from "react";
// import { VscSearch } from "@react-icons/all-files/vsc/VscSearch";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/admin";

const nav = () => {
  // const data = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    dispatch(logout());
    // window.location.reload();
    navigate("/admin/");
  };
 
  return (
  
    <div className="navbar bg-base-100 relative border-b-2 shadow-md">
       <div className="navbar-start">
       <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost  drawer-button">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>

       </label>
       
  </div>
 
  <div className="navbar-center">
  <Link to="/admin/home">  <div className="btn btn-ghost normal-case text-xl">Mandabam .com</div></Link>
  </div>
 
   <div className="navbar-end">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li onClick={handleLogout}>Log out</li>
      
      </ul>
    </div>
  </div>
</div>
  );
};

export default nav;
