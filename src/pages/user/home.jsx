import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
// import { useSelector } from 'react-redux';
import {  City } from "country-state-city";
import Selector from "../../components/Vendor/Selector"; // Make sure this path is correct
import { FaStore } from '@react-icons/all-files/fa/FaStore';
import { FaSearchLocation } from '@react-icons/all-files/fa/FaSearchLocation';
const home = () => {
  const navigate = useNavigate()
  // const dd = useSelector((state) => state.user);
  // console.log(dd.value.isUserAuth);
  const stateData = City.getCitiesOfState("IN", "KL"); // State.getStatesOfCountry("IN");
  const [state, setstate] = useState(stateData[0]);
  
  const handleClick = ()=>{
    console.log(state.name)
    navigate("/SearchResult", {state : {'query':state.name}} );


    // <Link to={`/expert/myappointments/${ele?._id}`}>
  }

  return (
    <div className='bg-white'>
      
 
 

<div className="hero min-h-screen" style={{backgroundImage: 'url("/images/Banner.png")'}}>
  <div className="hero-overlay bg-opacity-10"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Plan your wedding with Us</h1>
      <p className="mb-5">Mandabam.com is an Indian Wedding Planning Website  where you can find the best wedding 
      venues, with prices and reviews at the click of a button. Whether you are looking to hire wedding planners in India,
      </p>
      
      <div className="flex  ">
    <div className=" mx-auto  p-4  bg-red rounded flex border-none">
      <div className='bg-rose-500 p-4'><FaStore/></div>
      {/* <input
        type="text"
        placeholder="Search "
        className="w-full py-2 px-3 bg-white"
      /> */}
      <Selector
                data={stateData}
                selected={state}
                setSelected={setstate}
                className="bg-white w-28 shadow-none"
              />
       {/* <div onClick={handleClick} className='bg-rose-500 py-4 px-6'><FaSearchLocation/></div> */}
    </div>
  </div>
  <button onClick={handleClick} className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
</div> 

  )
}

export default home