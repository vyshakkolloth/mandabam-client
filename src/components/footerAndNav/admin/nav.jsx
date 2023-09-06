import React from "react";
import { VscSearch } from "@react-icons/all-files/vsc/VscSearch";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/admin";

const nav = () => {
  const data = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    dispatch(logout());
    // window.location.reload();
    navigate("/admin/");
  };
 
  return (
    <div className=" navbar w-auto bg-pink-700 text-white flex justify-around  ">
      <span className=" no-underline hover:underline texl-xl sm:text-xs">
        {" "}
        India Favaroite wedding Venue booking Paltform
      </span>
      <div>
        <input
          className="bg-white rounded-sm ml-10 pl-5"
          placeholder="search by location "
          type="text"
        />
        <VscSearch className="ml-2" />
      </div>
      {data.value.isUserAuth ? (
        <button
          onClick={handleLogout}
          className="bg-pink-200 stroke-slate-400 text-black px-5 rounded-2xl shadow-pink-950 ml-4"
        >
          {" "}
          Log out
        </button>
      ) : (
        <Link to="/admin">
          <button className="bg-pink-200 stroke-slate-400 text-black px-5 rounded-2xl shadow-pink-950 ml-4">
            {" "}
            Log in
          </button>
        </Link>
      )}
    </div>
  );
};

export default nav;
