import React, { useEffect, useState } from 'react'
import {   useNavigate } from "react-router-dom";

import {  venueData,blockVendor } from '../../service/AdminApi';

const venueList = () => {
   const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); 
  const [searchQuery, setSearchQuery] = useState(""); 
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

      const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
      };
    
      // Function to filter data based on the search query
      const filteredData = data.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

      useEffect(() => {
        setCurrentPage(1);
      }, [searchQuery]);
      
      
        const paginate = (pageNumber) => {
          setCurrentPage(pageNumber);
        };

  return (
     <div className=''>
         <div className="flex p-5">
        <input className="input-sm " placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchInputChange} ></input>
        {/* <FaMagnifyingGlass/> */}


      </div>
      <div className="overflow-x-auto h-[56vh]">
        {filteredData?.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Index</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Status</th>
                <th>Verified </th>
                <th>option</th>
              </tr>
            </thead>
            <tbody>
  {filteredData?.map((user, index) => (
    <tr key={index} className="hover" >
      <td>{index + 1}</td> {/* Display index + 1 */}
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.mobile}</td>
      <td>{user.isBanned ? "Banned" : "Not Banned"}</td>
      <td>{user.adminAproved ? "Aprroved" : "Not Approved"}</td>
      <td>
        <button onClick={() => handleBlock(user._id)} className="btn btn-info btn-xs">Click</button>
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