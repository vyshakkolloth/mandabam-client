import React, { useEffect, useState } from "react";
import { userData ,blockUser} from "../../service/AdminApi";
import {   useNavigate } from "react-router-dom";
// import {FaMagnifyingGlass} from '@react-icons/all-files';

const UserList = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); 
  const [searchQuery, setSearchQuery] = useState(""); 

  const navigate = useNavigate();

  useEffect(() => {
   if(localStorage.getItem("adminToken")){
    fetch()
   }else{
   navigate("/admin")
   }
  }, [loading]);

  const fetch=()=>{
    userData()
    .then((res) => {
      setdata(res.data.data);
      
     
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
  }

  const handleBlock=(id)=>{
    blockUser(id).then((res=>{
      setloading(!loading)
      console.log(res.data)}))
      .catch((err)=>console.log(err))
  }
    // Function to handle search input change
    const handleSearchInputChange = (e) => {
      setSearchQuery(e.target.value);
    };
  
    // Function to filter data based on the search query
    const filteredData = data.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
// Calculate the indexes of the items to display on the current page
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);


useEffect(() => {
  setCurrentPage(1);
}, [searchQuery]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="flex justify-between p-5">
        <input className="input-sm " placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchInputChange} ></input>
        {/* <FaMagnifyingGlass/> */}

    <img onClick={()=>fetch()} className=" glass rounded-xl btn btn-sm" src="/svg/refresh.svg"></img> 

      </div>
      <div className="overflow-x-auto h-[50vh]  ">
        {filteredData.length > 0 ? (
          <table className="table ">
            <thead>
              <tr className="bg-rose-400 rounded rounded-t-2xl text-black">
                <th>Sl No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Status</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              {currentItems?.map((user, index) => (
                <tr key={index} className="hover hover:to-blue-400">
                  {/* <th>{user._id}</th> */}
                  <td>{index+1}</td>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.phone}</td>
                  <td className="btn btn-link">{user?.blocked ? "Blocked" : "Not blocked"}</td>
                  <th>
                    <button onClick={()=>handleBlock(user._id)} className="btn btn-info btn-xs">Click</button>
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
