import React from "react";
import { VscSearch } from "@react-icons/all-files/vsc/VscSearch";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/user";
import { FaUserCircle } from "@react-icons/all-files/fa/FaUserCircle";

const Nav = () => {
  const dd = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    dispatch(logout());
  };
  return (
    <div className=" navbar   bg-pink-700   w- text-white flex justify-around  z-30">
     <Link to="/"> <span className=" text-lg no-underline hover:underline  ">
        {" "}
        India Favaroite wedding Venue booking Paltform
      </span> </Link>
      {/* dd.value.isUserAuth */}
      {/* <div>
     
        <input
          className="bg-white rounded-sm ml-10 pl-5"
          placeholder="search by location "
          type="text"
        ></input>
        <VscSearch className="ml-2" />
      </div> */}
      {localStorage.getItem("userToken") ? (
        <div className="dropdown dropdown-hover ">
          <label tabIndex={0} className="btn btn-md">
           user <span> <FaUserCircle/></span>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-66"
          >
            <li>
            <Link to="/profile">
              Profile
              </Link>
            </li>
            <li onClick={handleLogout}>
              log Out
            </li>
          </ul>
        </div>
      ) : (
        // <button onClick={handleLogout
        // } className="bg-pink-200 stroke-slate-400 text-black px-5 rounded-2xl shadow-pink-950 ml-4">
        //   {" "}
        //   Log Out
        // </button>
        <Link to="/login">
          <button className="bg-pink-200 stroke-slate-400 text-black px-5 rounded-2xl shadow-pink-950 ml-4">
            {" "}
            Log in
          </button>
        </Link>
      )}
    </div>
  );
};

export default Nav;
