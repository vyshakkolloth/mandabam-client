import React from "react";
import { VscSearch } from "@react-icons/all-files/vsc/VscSearch";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/user";
import { FaUserCircle } from "@react-icons/all-files/fa/FaUserCircle";

const Nav = () => {
  const navigate=useNavigate
  const dd = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    dispatch(logout());
    navigate("/")

  };
  return (
    // <div className=" navbar pt-5  bg-pink-700    text-white flex justify-around  z-30">
    //  <Link to="/"> <span className=" text-lg text-white  no-underline hover:underline  ">
    //     {" "}
    //     India Favaroite wedding Venue booking Paltform
    //   </span> </Link>
    
    //   {localStorage.getItem("userToken") ? (
    //     <div className="dropdown dropdown-hover ">
    //       <label tabIndex={0} className="btn btn-sm">
    //        user <span> <FaUserCircle/></span>
    //       </label>
    //       <ul
    //         tabIndex={0}
    //         className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-66"
    //       >
    //         <li>
    //         <Link to="/profile">
    //           Profile
    //           </Link>
    //         </li>
    //         <li  onClick={handleLogout}>
    //           <Link>
    //           log Out
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   ) : (
    //     // <button onClick={handleLogout
    //     // } className="bg-pink-200 stroke-slate-400 text-black px-5 rounded-2xl shadow-pink-950 ml-4">
    //     //   {" "}
    //     //   Log Out
    //     // </button>
    //     <Link to="/login">
    //       <button className="bg-pink-200 stroke-slate-400 text-black px-5 rounded-2xl shadow-pink-950 ml-4">
    //         {" "}
    //         Log in
    //       </button>
    //     </Link>
    //   )}
    // </div>
    <div data-aos="zoom-in" className="navbar  bg-pink-400   z-50   glass "> 
  <div className="flex-none">
  <Link to="/">
    {/* <span className=" normal-case text-xl"> */}
  <div className="ml-5 w-10 rounded-2xl shadow-md shadow-white hover:animate-pulse ">
    <img className="mask mask-squircle object-cover " src="images/Mandabam.png"/>
    </div>
    {/* </span> */}
    </Link>
  </div>
  <div className="flex-1 px-5">
  <Link to="/"> <span className=" text-lg text-white  no-underline hover:underline  ">
       {" "}
      India Favaroite wedding Venue booking Paltform
    </span> </Link>

  </div>


  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
    {localStorage.getItem("userToken") ?(<li>
        <details>
          <summary className="bg-base-100">
          Profile<FaUserCircle/>
          </summary>
          <ul className="p-2  bg-base-100 ">
            <li>
            <Link to="/profile"> 
             Profile
              </Link> </li>
            <li onClick={handleLogout}>
              <Link>
           log Out
             </Link></li>
          </ul>
        </details>
      </li>)
      :
       (<li className="bg-base-100 rounded-3xl"> <Link to="/login" >
        Log in

        </Link></li>)} 
      
    </ul>
  </div>
</div>
  );
};

export default Nav;
