import React, { useEffect, useState } from "react";
import { showAlertError,showAlertSuccess } from "../../service/showAlert";
import { useDispatch } from "react-redux";

import { venueDetail,sentMessage} from "../../service/UserApi";
import Booking from "../../components/user/Booking";
// import ErrorBoundary from"../user/ErrorBoundary"
import { useLocation } from "react-router-dom";

import {   useNavigate } from "react-router-dom";
import Review from "./Review";


const VenueDetail = () => {
  const [data, setdata] = useState({});
    const dispatch=useDispatch()
    const navigate=useNavigate()

  const location = useLocation();
  const value = location?.state;
  const id = value?.query;

  useEffect(() => {
    venueDetail(id)
      .then((res) => {
        setdata(res.data.data);
       
      })
      .catch((err) => {
        console.log(err, "5555");
      });
    
  }, []);

const handleMessage=()=>{
  try {
    let id=data?._id
    sentMessage(id).then((res)=>{
      console.log(res);
      if(res.status===200){
navigate("/Chat")
      }else if(res.status===204){
showAlertError(dispatch,"user already in your list")
      }
    }).catch(
      (err)=>{
        console.log(err,"cath ERR");
      }
    )
  } catch (error) {
    console.log(err,"try catch");
  }
}




  return (
    <div className=" w-full pt-9">
      <div className="container p-10 border border-primary h-full mb-10 shadow-sm mx-auto ">
      {/* grid grid-cols-2 rounded */}
        <div className=" flex justify-center flex-wrap">
          <div className="   ">
            <div className="w-fit p-5 mb-5  rounded-md shadow-2xl">
              {data.image ? (
                <img
                  className=" object-none object-center max-w-2xl rounded-md drop-shadow-lg   "
                  src={data.image[0] ?? ""}
                ></img>
              ) : null}
              <div className="flex justify-center">
                <h1 className="text-2xl capitalize">{data.name}</h1>
              </div>
            </div>
            <div className=" flex flex-col gap-2">
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" checked />
                <div className="collapse-title text-xl font-medium">
                  Is parking available at the venue?
                </div>
                <div className="collapse-content">
                  <p>{data.parking}</p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  Primary Venue Type
                </div>
                <div className="collapse-content">
                  <p>{data.type}</p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  policy on catering
                </div>
                <div className="collapse-content">
                  <p>{data?.catering}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border shadow-sm p-2">
            <div tabIndex={0} className="collapse collapse-arrow  bg-white">
              <div className="collapse-title text-xl font-medium border-b-2">
                <p>Starting Price</p>
              </div>
              <div className="collapse-content">
                {/* <p className="flex justify-between">
                  
                </p> */}
                <div className=" ">
                  <div className="flex justify-between  border-b-2 m-2">
                    <p>&#8377; {data.veg} per plate(tax extra)</p>
                    <p>Veg Price</p>
                  </div>
                  <div className="flex justify-between border-b-2 m-1">
                    <p>&#8377; {data.nonVeg} per plate(tax extra)</p>
                    <p>Non Veg Price</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-pink-400 flex px-5 py-4 justify-between ">
              <button className="btn rounded-2xl" onClick={handleMessage}>Send message</button>
              <button className="btn  rounded-2xl">View contact</button>
            </div>
            <div>
              <Booking venueid={id} />
            </div>
          </div>
        </div>
        {/* <ErrorBoundary fallback={<p>Something went wrong</p>}> */}
         <Review venueid={id}/>
         {/* </ErrorBoundary> */}
        
      </div>
    </div>
  );
};

export default VenueDetail;
