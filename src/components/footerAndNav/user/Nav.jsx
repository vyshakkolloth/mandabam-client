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
  
    <div className="navbar  bg-gradient-to-r from-pink-500/60 to-rose-400/60  z-50   glass  shadow-xl fixed shadow-pink-500/50 marginbottom-5"> 
  <div className="flex-none">
  <Link to="/">
   
  <div className="ml-5 w-10 rounded-2xl shadow-md shadow-white hover:animate-pulse ">
    <img className="mask mask-squircle object-cover " src="images/Mandabam.png"/>
    </div>
    </Link>
  </div>
  <div className="flex-1 px-5">
  <Link to="/"> <span className=" text-[1rem] md:text-[1.4rem] text-white  no-underline hover:underline  ">
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
       (<li className="bg-base-100 rounded-3xl  inset-ring-2 inset-ring-rose-400  text-black "> <Link to="/login" >
        Log in

        </Link></li>)} 
      
    </ul>
  </div>
</div>
  );
};

export default Nav;
