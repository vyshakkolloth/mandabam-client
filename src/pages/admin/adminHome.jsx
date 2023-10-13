import React, { useEffect, useState } from 'react'
import {   useNavigate } from "react-router-dom";
import { AdminHome } from '../../service/AdminApi';
import Graph from '../../components/admin/Graph';


const adminHome = () => {
  const [data, setdata] = useState()
  const [graphData, setgraphData] = useState()
  const [venuegra, setvenuegra] = useState()
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem("adminToken")){ navigate("/admin")}
    fetch()
  }, [])


const fetch = ()=>{
  try {
    AdminHome().then((res)=>{
      // console.log(res.data)
      if(res.status===200){
        setdata(res.data)
        setvenuegra(res.data?.venuegraph)
        setgraphData(res?.data?.registrations)
      }

    }).catch((err)=>{
      console.log(err)
    })
    
  } catch (error) {
    console.log(error,"fetch")
  }
}
console.log(data,"dfdf")

  
  return (
    <div className='bg-white  h-screen w-full px-5'>
      <div className="stats mt-5 px-5 shadow w-full" >
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div className="stat-title">Total user</div>
    <div className="stat-value">{data?.usercount}</div>
    <div className="stat-desc">last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
    </div>
    <div className="stat-title">New venue registers</div>
    <div className="stat-value">{data?.venueCount}</div>
    {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2001/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div className="stat-title">Amount recived by booking</div>
    <div className="stat-value">{data?.BookingTotal[0]?.total}</div>
    {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
  </div>
  
</div>
<div className='flex'> 
    <Graph graphdata={graphData}  name={"user Registration"}/>
    <Graph graphdata={venuegra} name={"venue Registration"}  />
</div>
      
    </div>
  )
}

export default adminHome