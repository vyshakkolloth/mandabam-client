import React, { useEffect, useState } from 'react'
import {   useNavigate } from "react-router-dom";

import {  venueData,blockVendor } from '../../service/AdminApi';

const venueList = () => {
   const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); 
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

      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
      
        const paginate = (pageNumber) => {
          setCurrentPage(pageNumber);
        };

  return (
     <div className='pt-5'>
      <div className="overflow-x-auto h-[56vh]">
        {currentItems.length > 0 ? (
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
      <div className=" flex justify-center">
    <div className="pagination flex">
          {data.length > itemsPerPage &&
            Array(Math.ceil(data.length / itemsPerPage))
              .fill()
              .map((_, index) => (
               
                  <button
                  key={index}
                  className={`join-item btn  ${
                    currentPage === index + 1 ? "btn-active" : ""
                  }`}
                    onClick={() => paginate(index + 1)}
                  
                  >
                    {index + 1}
                  </button>
              ))}
        </div>
    </div>
    </div>
  )
}

export default venueList