import React, { useEffect, useState } from 'react'
import { PreviousEnquire } from '../../service/vendorApi'

const PreviousEnquires = () => {
    const [data, setdata] = useState([])

    useEffect(() => {
     try {
        PreviousEnquire().then((res)=>{
            // alert("yea")
            console.log(res.data.data)
            setdata(res.data.data)
        }).catch((err)=>{
            console.log(err,"err")
        })
     } catch (error) {
        
     }
    }, [])
   const formatDate = (receivedDate) => {
        if (!receivedDate) {
          return "";
        }
        const date = new Date(receivedDate);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${month}/${day}/${year}`;
      };
    
    


  return (
    <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" >open modal</button> */}
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
  <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>index</th>
        <th>Date</th>
        <th>Name</th>
        <th>Contact</th>
        <th>Type</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
        {data?.map((item,index)=>{return(
             <tr className="hover">
             <th>{index+1}</th>
             <td>{formatDate(item?.date)}</td>
             <td>{item?.name}</td>
             <td>{item?.Phone}</td>
             <td>{item?.type}</td>
             <td>{item?.time}</td>
           </tr>

        )})}
     
     
      
      
    </tbody>
  </table>
</div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  )
}

export default PreviousEnquires