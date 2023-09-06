import React, { useEffect, useState } from "react";
import { toast,Toaster } from "react-hot-toast";
import { showAlertSuccess } from "../../service/showAlert";
import{useDispatch} from "react-redux"

import {informationPost,getInformation} from"../../service/vendorApi"
const VendorInfo = () => {

  const dispatch = useDispatch();
const [email, setemail] = useState("")
const [Brand, setBrand] = useState("")
const [city, setCity] = useState("")
const [Contact, setContact] = useState("")
const [number, setnumber] = useState("")
const [information, setinformation] = useState("")
const [location, setlocation] = useState("")
const [gathering, setgathering] = useState("no")
const [parking, setparking] = useState("1")
const [type, settype] = useState("")
const [year, setyear] = useState("")
const [application, setapplication] = useState("")
const [veg, setveg] = useState("")
const [nonVeg, setnonVeg] = useState("")
const [typeFilter, settypeFilter] = useState([])
const [catering, setcatering] = useState("")
const [decor, setdecor] = useState("")
const [alcohol, setalcohol] = useState("")
const [dj, setdj] = useState("")
const gatheringHandle=(e)=>setgathering(e.target.value)
const parkkingHandle=(e)=>setparking(e.target.value);
const typeHandle=(e)=>settype(e.target.value)
const applicationHandle=(e)=>setapplication(e.target.value)
const caterinHandle=(e)=>setcatering(e.target.value) 
const decorHandle=(e)=>setdecor(e.target.value)
const alcholHandle=(e)=>setalcohol(e.target.value)
const djHandle=(e)=>setdj(e.target.value)

useEffect(() => {
  getInformation().then((res)=>{
    const value=res.data.data
    // console.log(value,"+++++1225")
    setemail(value.email)
    setBrand(value.name)
    setnumber(value.mobile??"")
    setContact(value?.contactPerson??"")
    setlocation(value?.location??"")
    setinformation(value.information??"")
    setgathering(value.gathering??"")
    setparking(value.parking??"")
    settype(value.type??"")
    setyear(value.year??"")
    setapplication(value.application??"")
    setveg(value.veg??"")
    setnonVeg(value.nonVeg??"")
    settypeFilter(value.typeFilter??[])
    setcatering(value.catering??"")
    setdecor(value.decor??"")
    setalcohol(value.alcohol??"")
    setdj(value.dj??"")

    showAlertSuccess(dispatch,"data Fetched")
   
    

  }).catch((err)=>{ toast.error("error 505 server not found"); console.log(err,"-----")
})

  
}, [])


const handleSubmit=()=>{

 
 if(email===""||Brand===""||city===""||Contact===""||number.trim().length<=10||information==="",gathering===""||parking===""||type===""||year===""||application===""||veg===""||nonVeg===""||typeFilter===""||catering===""||decor===""||alcohol===""||dj===""){
  toast.error("enter valid information")
 }else{
  

  const data={email,Brand,city,Contact,number,information,gathering,parking,type,year,application,veg,nonVeg,typeFilter,catering,decor,alcohol,dj}
  informationPost (data).then((res)=>{toast.success("sucess");console.log(res)}).catch((err)=>{toast.error("conection Failed");console.log(err)})
 
 
 }
  
}


const handleTypeFilter = (event) => {
  const value = event.target.value;
  if (typeFilter.includes(value)) {
    settypeFilter(typeFilter.filter(option => option !== value));
  } else {
    settypeFilter([...typeFilter, value]);
  }
};




  return (
    <div className="min-h-screen  bg-gray-400"> 
     <Toaster toastOptions={3000} />
      {/* <div className=" flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden ">
        <div class="flex items-center justify-center h-20 shadow-md">
          <h1 class="text-3xl uppercase text-indigo-500">Logo</h1>
        </div>
      </div> */}

      {/* inpu */}
      <div className="bg-white  pb-13 max-w-screen-2xl mx-auto pt-9">
        <div className=" w-4/5 xl:px-3 mx-auto outline-dotted shadow-stone-100 shadow-sm ">
          <label> personal information</label>

           <div className=" my-2 ">   {/* flex-0 gap-6 */}
            <label className=" text-gray-900 w-1/3 ">Login in Email Id</label>
            <input disabled
              type="text" onChange={(e)=>setemail(e.target.value)}
              className=" bg-white w-2/3 focus:outline-none focus:ring-2 rounded-sm p-1 border mx-1 "
              placeholder="Example@gmail.com"
              value={email}
            ></input>
          </div>
          <div className=" my-2 flex-0 gap-6">
            <label className=" text-gray-900 w-1/3 ">Brand name</label>
            <input disabled
              type="text"
              onChange={(e)=>setBrand(e.target.value)}
              value={Brand}
              className=" bg-white w-2/3 focus:outline-none focus:ring-2 rounded-sm p-1 border mx-1 "
              placeholder="Example"
            ></input>
          </div>
          <div className=" my-2 flex-0 gap-6">
            <label className=" text-gray-900 w-1/3 ">Contact Person name</label>
            <input
              type="text"
              value={Contact}
              onChange={(e)=>setContact(e.target.value)}
              className=" bg-white w-2/3 focus:outline-none focus:ring-2 rounded-sm p-1 border mx-1 "
              placeholder="Name"
            ></input>
          </div>
          <div className=" my-2 flex-0 gap-6">
            <label className=" text-gray-900 w-1/3 ">Contact Number</label>
            <input
              type="number"
              value={number}
              onChange={(e)=>setnumber(e.target.value)}
              className=" bg-white w-2/3 focus:outline-none focus:ring-2 rounded-sm p-1 border mx-1 "
              placeholder="Phone Number"
            ></input>
          </div>
          <div className=" my-2 flex-0 gap-6">
            <label className=" text-gray-900 w-1/3 ">
              adtional information
            </label>
            <input
              type="text"
              value={information}
              onChange={(e)=>setinformation(e.target.value)}
              className=" bg-white w-2/3 focus:outline-none focus:ring-2 rounded-sm p-1 border mx-1 "
              placeholder="enter your comapany name"
            ></input>
          </div>
          {/* <div className=" my-2 flex-0 gap-6">
            <label className=" text-gray-900 w-1/3 ">
              city*(chose your base city here)
            </label>
            <input
            value={city}
            onChange={(e)=>setCity(e.target.value)}
              type="text"
              className=" bg-white w-2/3 focus:outline-none focus:ring-2 rounded-sm p-1 border mx-1 "
              placeholder="enter your comapany name"
            ></input>
          </div> */}
          {/* <div className=" my-2 flex-0 gap-6">
            <label className=" text-gray-900 w-1/3 ">location</label>
            <input
              type="text"
              className=" bg-white w-2/3 focus:outline-none focus:ring-2 rounded-sm p-1 border mx-1 "
              placeholder="enter your comapany name"
            ></input>
          </div> */}
        </div>
        <div className=" w-4/5 mx-auto  ">
          <label className="pt-8 text-xl text-black inline-block bg-red-300 font-semibold">
            {" "}
            Addisional Detail
          </label>
          <div className="  border-b-2">
            <label htmlFor="gathering">
              {" "}
              Do you also allow small size gather in (&lt;50)?
            </label>
            <div className="flex align-middle border-b-1 p-5">
              {" "}
             
              <input
                type="radio"
                name="radio-3"
                onChange={gatheringHandle}
                value="yes"
                checked={gathering=== 'yes'}
                
                className="radio radio-secondary mx-1"
               
              />yes
              <input
                type="radio"
                name="radio-3"
                value="no"
                checked={gathering==="no"}

                onChange={gatheringHandle}
                className="radio radio-accent mx-2"
              /> no
            </div>
            <div className=" border-b-1 mb-1">
              <label>
                is parking available at the venue?
              </label>
              <div className="p-5 flex flex-col gap-px ">
               <span className="flex  align-middle "> <input  type="radio" name="parking" value="There is sufficient parking available" checked={parking==="There is sufficient parking available"} onChange={parkkingHandle}  className="radio mx-3" id="parking"/><label htmlFor="parking">There is sufficient parking available</label></span>
              <span className="flex align-middle">  <input   type="radio" name="parking" value="Parking is available near the venue"  onChange={parkkingHandle} className="radio mx-3" id="nearParking"/><label htmlFor="nearParking">Parking is available near the venue</label></span>
                <span className="flex align-middle"><input   type="radio" name="parking" value="No parking" onChange={parkkingHandle} className="radio mx-3" id="noParking" /><label htmlFor="noParking">No parking</label></span>
              </div>

            </div>
            <div className="border-b-1 p-3 mx-1">
              <label>Primary Venue Type </label>
            <div className="mt-5 ">
            <span className="flex align-middle gap-x-2"><input name="type" onChange={typeHandle} value="Farmhouse with indoor Banguet capacity" checked={type==="Farmhouse with indoor Banguet capacity"} type="radio" className="radio"/> <label> Farmhouse with indoor Banguet capacity</label></span>
            <span className="flex align-middle gap-x-2"><input name="type" onChange={typeHandle} value="Farmhouse with only outdoor area" checked={type==="Farmhouse with only outdoor area"} type="radio" className="radio"/> <label> Farmhouse with only outdoor area</label></span>
            <span className="flex align-middle gap-x-2"><input name="type" onChange={typeHandle} value="Hotel with indoor banquets & lawn" checked={type==="Hotel with indoor banquets & lawn"} type="radio" className="radio"/> <label> Hotel with indoor banquets & lawn</label></span>
            <span className="flex align-middle gap-x-2"><input name="type" onChange={typeHandle} value="Hotel with indoor banquets" checked={type==="Hotel with indoor banquets"} type="radio" className="radio"/> <label> Hotel with indoor banquets</label></span>
            <span className="flex align-middle gap-x-2"><input name="type" onChange={typeHandle} value=" Standalone Banquet hall" checked={type===" Standalone Banquet hall"} type="radio" className="radio"/> <label> Standalone Banquet hall</label></span>
            <span className="flex align-middle gap-x-2"><input name="type" onChange={typeHandle} value="Standalone Banquet hall with outdoor area" checked={type==="Standalone Banquet hall with outdoor area"} type="radio" className="radio"/> <label> Standalone Banquet hall with outdoor area</label></span>
            <span className="flex align-middle gap-x-2"><input name="type" onChange={typeHandle} value="Resort for destination wedding" checked={type==="Resort for destination wedding"} type="radio" className="radio"/> <label> Resort for destination wedding</label></span>
            <span className="flex align-middle gap-x-2"><input name="type" onChange={typeHandle} value="Restaurant / Lounge for Pre wedding events" checked={type==="Restaurant / Lounge for Pre wedding events"} type="radio" className="radio"/> <label> Restaurant / Lounge for Pre wedding events</label></span>

            </div>


            </div>
            <div className="border-b-1 m-1">
              <label>what year did Venue start operation ?.</label>
              <div className="my-3">
                <input type="date" name="since" value={year} onChange={(e)=>setyear(e.target.value)} className="border-gray-200 bg-white outline-0 shadow-xl"/>
              </div>
            </div>
            <div className="border-b-2">
            <label>Please set whatever isapplication for your venue </label>
            <div className="mt-5 ">
            <span className="flex align-middle gap-x-2"><input name="application" onChange={applicationHandle} type="radio" className="radio" value="Venue is Wheel chair friendly" checked={application==="Venue is Wheel chair friendly"} /> <label> Venue is Wheel chair friendly</label></span>
            <span className="flex align-middle gap-x-2"><input name="application" onChange={applicationHandle} type="radio" className="radio" value="Venue has sufficient parking available" checked={application==="Venue has sufficient parking available"} /> <label> Venue has sufficient parking available</label></span>
            <span className="flex align-middle gap-x-2"><input name="application" onChange={applicationHandle} type="radio" className="radio" value="Venue is veg only (does not serve non veg)" checked={application==="Venue is veg only (does not serve non veg)"} /> <label>  Venue is veg only (does not serve non veg)</label></span>
            <span className="flex align-middle gap-x-2"><input name="application" onChange={applicationHandle} type="radio" className="radio" value="Venue has a beach available" checked={application==="Venue has a beach available"} /> <label> Venue has a beach available</label></span>
            <span className="flex align-middle gap-x-2"><input name="application" onChange={applicationHandle} type="radio" className="radio" value=" Venue requires complete buyout of all rooms to host a wedding" checked={application===" Venue requires complete buyout of all rooms to host a wedding"} /> <label> Venue requires complete buyout of all rooms to host a wedding</label></span>
            <span className="flex align-middle gap-x-2"><input name="application" onChange={applicationHandle} type="radio" className="radio" value="Venue can host events for &lt;50 people" checked={application==="Venue can host events for &lt;50 people"} /> <label> Venue can host events for &lt;50 people</label></span>

            </div>
            </div>
            <div className="border-b-2">
              <label className="wx"> what is the starting price for vegeterian menu?(assume 250 pax and standard menu)</label>
              <div>
                <input type="text" value={veg} onChange={(e)=>setveg(e.target.value)} className="bg-white"/>
              </div>

            </div>
            <div className="border-b-2">
              <label className="wx">What is the starting price for a non-veg menu? (assume 250 pax and standard menu)</label>
              <div>
                <input type="text" value={nonVeg} onChange={(e)=>setnonVeg(e.target.value)} className="bg-white"/>
              </div>

            </div>
            <div className="border-b-1 p-2">
              <label> Venue Type filter</label>
              <div className="flex flex-col gap-2">
                <span className="flex gap-1"><input value="Indoor" onChange={handleTypeFilter} checked={typeFilter.includes("Indoor")} type="checkbox" className="checkbox "/><p>Indoor</p></span>
                <span className="flex gap-1"><input value="Outdoor" onChange={handleTypeFilter} checked={typeFilter.includes("Outdoor")} type="checkbox" className="checkbox "/><p>Outdoor</p></span>
                <span className="flex gap-1"><input value="Poolside" onChange={handleTypeFilter} checked={typeFilter.includes("Poolside")} type="checkbox" className="checkbox "/><p>Poolside</p></span>
                <span className="flex gap-1"><input value="Terrace" onChange={handleTypeFilter} checked={typeFilter.includes("Terrace")} type="checkbox" className="checkbox "/><p> Terrace</p></span>
              </div>
            </div>
            <div className="border-b-2">
            <label>What is your policy on catering? </label>
            <div className="mt-5 ">
            <span className="flex align-middle gap-x-2"><input name="catering" type="radio" className="radio" onChange={caterinHandle}  value="Inhouse catering, Outside vendors not permitted" checked={catering==="Inhouse catering, Outside vendors not permitted"} /> <label> Inhouse catering, Outside vendors not permitted</label></span>
            <span className="flex align-middle gap-x-2"><input name="catering" type="radio" className="radio" onChange={caterinHandle}  value="Inhouse catering, Outside vendors allowed" checked={catering==="Inhouse catering, Outside vendors allowed"} /> <label> Inhouse catering, Outside vendors allowed</label></span>
            <span className="flex align-middle gap-x-2"><input name="catering" type="radio" className="radio" onChange={caterinHandle}  value="No inhouse service, Outside vendors allowed from panel" checked={catering==="No inhouse service, Outside vendors allowed from panel"} /> <label> No inhouse service, Outside vendors allowed from panel</label></span>
            <span className="flex align-middle gap-x-2"><input name="catering" type="radio" className="radio" onChange={caterinHandle}  value=" No inhouse services, outside vendors allowed" checked={catering===" No inhouse services, outside vendors allowed"} /> <label> No inhouse services, outside vendors allowed</label></span>

            </div>
            </div>
            <div className="border-b-2">
            <label>What is your policy on decor? </label>
            <div className="mt-5 ">
            <span className="flex align-middle gap-x-2"><input name="decor" type="radio" onChange={decorHandle} className="radio" value="Decorators should be chosen only from enlisted Panel"  checked={decor==="Decorators should be chosen only from enlisted Panel"} /> <label> Decorators should be chosen only from enlisted Panel</label></span>
            <span className="flex align-middle gap-x-2"><input name="decor" type="radio" onChange={decorHandle} className="radio" value=" Outside decorators permitted"  checked={decor===" Outside decorators permitted"} /> <label> Outside decorators permitted</label></span>
            <span className="flex align-middle gap-x-2"><input name="decor" type="radio" onChange={decorHandle} className="radio" value="In-house décor"  checked={decor==="In-house décor"} /> <label> In-house décor</label></span>

            </div>
            </div>
            <div className="border-b-2">
            <label>What is your policy on alcohol? </label>
            <div className="mt-5 ">
            <span className="flex align-middle gap-x-2"><input name="alchol"  onChange={alcholHandle}  type="radio" className="radio" value=" In house alcohol available, Outside alcohol permitted" checked={alcohol===" In house alcohol available, Outside alcohol permitted"}/> <label> In house alcohol available, Outside alcohol permitted</label></span>
            <span className="flex align-middle gap-x-2"><input name="alchol"  onChange={alcholHandle}  type="radio" className="radio" value="In house alcohol available, Outside alcohol not permitted" checked={alcohol==="In house alcohol available, Outside alcohol not permitted"}/> <label> In house alcohol available, Outside alcohol not permitted</label></span>
            <span className="flex align-middle gap-x-2"><input name="alchol"  onChange={alcholHandle}  type="radio" className="radio" value="In house alcohol not available, Outside alcohol permitted" checked={alcohol==="In house alcohol not available, Outside alcohol permitted"}/> <label> In house alcohol not available, Outside alcohol permitted</label></span>
            <span className="flex align-middle gap-x-2"><input name="alchol"  onChange={alcholHandle}  type="radio" className="radio" value="In house alcohol not available, Outside alcohol not permitted" checked={alcohol==="In house alcohol not available, Outside alcohol not permitted"}/> <label> In house alcohol not available, Outside alcohol not permitted </label></span>

            </div>
            </div>
            <div className="border-b-2">
            <label>What is your policy on DJ's? </label>
            <div className="mt-5 ">
            <span className="flex align-middle gap-x-2"><input name="dj" type="radio" value="In house DJ available, Outside DJ permitted" checked={dj==="In house DJ available, Outside DJ permitted"} onChange={djHandle} className="radio"/> <label> In house DJ available, Outside DJ permitted</label></span>
            <span className="flex align-middle gap-x-2"><input name="dj" type="radio" value="In house DJ available, Outside DJ not permitted" checked={dj==="In house DJ available, Outside DJ not permitted"} onChange={djHandle} className="radio"/> <label> In house DJ available, Outside DJ not permitted</label></span>
            <span className="flex align-middle gap-x-2"><input name="dj" type="radio" value="In house DJ not available, Outside DJ permitted" checked={dj==="In house DJ not available, Outside DJ permitted"} onChange={djHandle} className="radio"/> <label> In house DJ not available, Outside DJ permitted</label></span>
            <span className="flex align-middle gap-x-2"><input name="dj" type="radio" value="In house DJ not available, Outside DJ not permitted" checked={dj==="In house DJ not available, Outside DJ not permitted"} onChange={djHandle} className="radio"/> <label> In house DJ not available, Outside DJ not permitted</label></span>

            </div>
            </div>
            <div className="shadow-md flex justify-end pt-5 ">
              <button onClick={handleSubmit} className="bg-pink-400 w-11 rounded-sm flex justify-center text-4 text-white px-20 py-3"> save </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorInfo;
