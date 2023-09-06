import React, { useEffect, useState } from "react";
import { userData ,blockUser} from "../../service/AdminApi";
import {   useNavigate } from "react-router-dom";

const UserList = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true)
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
      console.log(res.data)})).catch((err)=>console.log(err))
  }
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
                <tr key={index} className="hover">
                  {/* <th>{user._id}</th> */}
                  <d>{index+1}</d>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.blocked ? "true" : "false"}</td>
                  <th>
                    <button onClick={()=>handleBlock(user._id)} className="btn btn-ghost btn-xs">button</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
};

export default UserList;
