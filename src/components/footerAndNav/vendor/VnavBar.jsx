import React from 'react'
import { useNavigate } from 'react-router-dom';

const VnavBar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("venderToken");
    // dispatch(logout());
    // window.location.reload();
    navigate("/venue/");
  };
  return (
    <>
    <div className='w-full  p-1 px-5 bg-pink-800 '>
    India's Favourite Wedding Planning Platform
    </div>
    <div className='flex justify-between  w-full p-2 px-9  bg-pink-500 text-white'>

<div>icon</div>
<button  onClick={handleLogout} className="bg-pink-200 stroke-slate-400 text-black px-5 rounded-2xl shadow-pink-950 ml-4">
            {" "}
            Log out
          </button>
       </div>
    </>
  )
}

export default VnavBar