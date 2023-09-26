import React, { useEffect, useState } from 'react'
import { ConfirmEnquire } from '../../service/vendorApi'

const ConfirmedEnquire = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        try {
            ConfirmEnquire().then((res)=>{
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
    <div className='container '>
        

  
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
        <th>payment_Id</th>
        <th>Advance amount </th>
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
             <td>{item?.paymentId}</td>
             <td>{item?.amount}</td>

           </tr>

        )})}
     
     
      
      
    </tbody>
  </table>
</div>
 

    </div>
  )
}

export default ConfirmedEnquire