import React, { useEffect, useState } from 'react'
import { adminVenueVerification, aproveVender } from '../../service/AdminApi'
import { useNavigate } from 'react-router-dom';
import { toast,Toaster } from "react-hot-toast";
// import VendorDetailedModal from '../../components/admin/VendorDetailedModal';


const AdminVenuemanagemnt = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); 
  const navigate = useNavigate();

  useEffect(() => {
    fetch()
  }, [])

  const fetch=()=>{
    try {
      adminVenueVerification().then((res)=>{
        setdata(res.data.result)
        // console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
    } catch (error) {
      console.log(error)
      if(error.status===500){
        alert(error.message)
      }
    }
  }
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    const handelClick = (id) => {
      navigate("/details", { state: { query: id } });
    };

    const approveHandle=(id)=>{
     try {
      aproveVender(id).then((res=>{
        if(res.status===200){
          toast.success("approved")
          fetch()
        }
        console.log(res)
      })).catch((err)=>{
        console.log(err)
      })
     } catch (error) {
      console.log(error)
     }
    }



  return (
    <div className='pt-5'>
      <Toaster toastOptions={3000} />
    <div className="overflow-x-auto h-[56vh]">
      {currentItems.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Status</th>
               <th>Detais</th>
             
            </tr>
          </thead>
          <tbody>
{data.map((user, index) => (
  <tr key={index} className="hover capitalize" >
    <td>{index + 1}</td> {/* Display index + 1 */}
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>{user.mobile}</td>
    <td>{user.adminAproved ? "true" : "false"}</td>
    <td><button onClick={()=>handelClick(user._id)} >show Detailed </button></td>
    <td><button onClick={()=>approveHandle(user._id)} className='btn btn-ghost glass text-green-400'> approve</button> </td>
    
   
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

export default AdminVenuemanagemnt