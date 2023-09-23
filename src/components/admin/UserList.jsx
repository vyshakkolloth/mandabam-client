import React, { useEffect, useState } from "react";
import { userData ,blockUser} from "../../service/AdminApi";
import {   useNavigate } from "react-router-dom";

const UserList = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); 


  const navigate = useNavigate();

  useEffect(() => {
   if(localStorage.getItem("adminToken")){
    userData()
    .then((res) => {
      setdata(res.data.data);
      
     
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
   }else{
   navigate("/admin")
   }
  }, [loading]);

  const handleBlock=(id)=>{
    blockUser(id).then((res=>{
      setloading(!loading)
      console.log(res.data)}))
      .catch((err)=>console.log(err))
  }
// Calculate the indexes of the items to display on the current page
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="overflow-x-auto h-[50vh]  ">
        {data.length > 0 ? (
          <table className="table ">
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
              {currentItems?.map((user, index) => (
                <tr key={index} className="hover">
                  {/* <th>{user._id}</th> */}
                  <d>{index+1}</d>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.phone}</td>
                  <td>{user?.blocked ? "true" : "false"}</td>
                  <th>
                    <button onClick={()=>handleBlock(user._id)} className="btn  glass btn-xs">button</button>
                  </th>
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
  );
};

export default UserList;
