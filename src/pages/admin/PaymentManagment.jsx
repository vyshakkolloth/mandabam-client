import React, { useEffect } from 'react'
import { bookinManagment } from '../../service/AdminApi'
import { useState } from 'react'
import PaymentDetailModal from '../../components/admin/PaymentDetailModal'

const PaymentManagment = () => {
    const [data, setdata] = useState([])

useEffect(() => {
fetch()

}, [])

const fetch=()=>{
    try {
        bookinManagment().then((res)=>{
           
            if(res.status==200){
                setdata(res?.data?.booking)
                //  console.log(res.data.booking)
            }

        }).catch((err)=>{
            console.log(err.data)
        })


    } catch (error) {
        console.log(error,"try catch")
    }
    // console.log(data,"666")
}
const [ids, setid] = useState()
    const detailHandel=(id)=>{
        setid(id)
        document.getElementById('my_modal_5').showModal()
    }


  return (
    <div className='h-[80vh]' >
   <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>contact</th>
        <th>Total bookings</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {data?.map((item,index)=>(
         <tr>
         <th>
           <label>
             <input type="checkbox" className="checkbox" />
           </label>
         </th>
         <td>
           <div className="flex items-center space-x-3">
             <div className="avatar">
               <div className="mask mask-squircle w-12 h-12">
                 <img src={item?.venueData?.image[0]} alt="Avatar Tailwind CSS Component" />
               </div>
             </div>
             <div>
               <div className="font-bold">{item?.venueData?.name}</div>
               <div className="text-sm opacity-50">{item?.venueData?.location}</div>
             </div>
           </div>
         </td>
         <td>
         {item?.venueData?.email}
           <br/>
           <span className="badge badge-ghost badge-sm">{item?.venueData?.mobile}</span>
         </td>
         <td>{item.count}</td>
         <th>
           <button className="btn btn-ghost btn-xs" onClick={()=>detailHandel(item._id)}>details</button>
         </th>
       </tr>
     ))}
    
    
      
    </tbody>
    {/* foot */}
    {/* <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot> */}
    
  </table>
<PaymentDetailModal id={ids} />
</div> 
</div>
  )
}

export default PaymentManagment