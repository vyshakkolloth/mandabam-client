import React, { useEffect } from 'react'
import { bookedVenue } from '../../service/UserApi'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BookedVenusList = () => {
    const [data, setdata] = useState([])
    const navigate=useNavigate()
    useEffect(() => {
    try{
        bookedVenue().then((res)=>{
            if(res.status===200){
                console.log(res.data.data)
                setdata(res.data.data)
            }
         })
    }catch(err){
        console.log(err,"try_catch")
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
      const handelClick = (id) => {
        console.log(id)
        navigate("/details", { state: { query: id } });
      };

  return (
    <div className='container mx-auto mt-10'>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Date</th>
        <th>Venue name</th>
        <th>Booking Amount</th>
        <th>Booking trancation id</th>
      </tr>
    </thead>
    <tbody>
      {data?.map((item,index)=>{return(
        <tr key={index} className="hover">
        <th>{index+1}</th>
        <td>{formatDate(item?.date)}</td>
       <td className='link' onClick={()=>handelClick(item?.venueId?._id)}>{item?.venueId?.name}</td>
        <td>{item?.amount}</td>
        <td>{item?.paymentId}</td>
      </tr>)
      })}
      
     
    </tbody>
  </table>
</div>
    </div>
  )
}

export default BookedVenusList