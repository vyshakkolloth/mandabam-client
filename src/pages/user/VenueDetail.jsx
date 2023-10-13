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
navigate("/Chat")
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
    <div className=" ">
      <div className="container p-10 border  h-full mb-10 shadow-2xl mx-auto ">
     
        <div className=" flex justify-start flex-wrap  ">
          <div className="  ">
            <div className=" rounded-md shadow-2xl">
              {data.image ? (
                <img
                  className=" object-none object-center max-w-xl rounded-md drop-shadow-lg   "
                  src={data.image[0] ?? ""}
                ></img>
              ) : null}
              <div className="flex justify-center">
                <h1 className="text-2xl btn rounded-none  capitalize">{data.name}</h1>
              </div>
            </div>
            
          </div>
          <div className="flex-row flex-grow md:pl-5 ">
          <div tabIndex={0} className="collapse-open collapse-arrow  bg-white ">
              <div className="collapse-title text-xl font-medium border-b-2">
                <p>Starting Price</p>
              </div>
              <div className="collapse-content">
                {/* <p className="flex justify-between">
                  
                </p> */}
                <div className=" ">
                  <div className="flex justify-between  border-b-2 m-2">
                    <p>&#8377; {data?.veg} per plate(tax extra)</p>
                    <p>Veg Price</p>
                  </div>
                  <div className="flex justify-between border-b-2 m-1">
                    <p>&#8377; {data?.nonVeg} per plate(tax extra)</p>
                    <p>Non Veg Price</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white flex-col flex-grow px-5"> 
            <p className="font-bold"> FAQs</p>

            <p>1.{data?.decor}</p>
            <p>2.{data?.dj}</p>
            <p>3.{data?.parking}</p>
            <p>4.{data?.alcohol}</p>
            <p>5.{data?.catering}</p>

            </div>
            <div className="pl-5 mt-10 text-center">
              <label className="btn rounded-sm ">With Mandabam.com since {data?.year}</label>
            </div>
          </div>

          <div className="gradient-bg bg-gradient-to-b from-white to-pink-200 rounded-t-lg  bg-blur-sm glass shadow-sm p-2">
          
            <div className="bg-pink-400 flex px-5 py-4 justify-between ">
              <button className="btn rounded-2xl" onClick={handleMessage}>Send message</button>
              <button className="btn  rounded-2xl" onClick={()=>document.getElementById('my_modal_2').showModal()} >View contact</button>
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Contact Person:- {data?.contactPerson}</h3>
                  <p className="py-4">contact number: {data.mobile}</p>
                  <p className="py-2">contact email: {data?.email} </p>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
            <div className="flex-col justify-start pl-6 pt-5">
              <label htmlFor="" className="capitalize border-b-2"> About {data.name}</label>
              <p>{data.information}</p>



            </div>
            <div className="divider lg:divider-horizontal border-" > -</div> 

            <div className="pt-2 mx-5 ">
            <label htmlFor="" className="capitalize border-b-2"> Booking</label>
              
              <Booking venueid={id} />
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
        </div>
        {/* <ErrorBoundary fallback={<p>Something went wrong</p>}> */}
         <Review names={data} venueid={id}/>
         {/* </ErrorBoundary> */}
        
      </div>
    </div>
  );
};

export default VenueDetail;
