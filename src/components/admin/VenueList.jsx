import React, { useEffect, useState } from 'react'
import {   useNavigate } from "react-router-dom";

import {  venueData,blockVendor } from '../../service/AdminApi';

const venueList = () => {
   const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true)
  const navigate = useNavigate();
  
  useEffect(() => {
    if(localStorage.getItem("adminToken")){
  venueData().then((res)=>{
    setdata(res.data.data)
    console.log(res.data.data[0]);
  }) 
}else{
    navigate("/admin")
    }
   
  }, [loading])
 
  const handleBlock=(id)=>{
    blockVendor(id).then((res=>{
      setloading(!loading)
      console.log(res.data)})).catch((err)=>console.log(err))}


  return (
     <div>
      <div className="overflow-x-auto">
        {data.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>index</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>status</th>
                <th>option</th>
              </tr>
            </thead>
            <tbody>
  {data.map((user, index) => (
    <tr key={index} className="hover" >
      <td>{index + 1}</td> {/* Display index + 1 */}
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.mobile}</td>
      <td>{user.isBanned ? "true" : "false"}</td>
      <td>
        <button onClick={() => handleBlock(user._id)} className="btn btn-ghost btn-xs">button</button>
      </td>
    </tr>
  ))}
</tbody>
          </table>
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  )
}

export default venueList