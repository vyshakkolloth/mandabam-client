import React from 'react'
import { getReports } from '../../service/AdminApi'
import { useEffect,useState } from 'react'
import ReportUserModal from '../../components/admin/ReportUserModal'


const ReportVenor = () => {
const [data, setdata] = useState()

  let fetch=()=>{
    try {

      getReports().then((res)=>{
        console.log(res)
        if(res.status===200){
          setdata(res.data.result)
        }
      }).catch((err)=>{
        console.log(err)
      })


    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
fetch()
    
  }, [])
  const [details, setdetail] = useState()

  const detail=(iet)=>{
    // console.log(iet,"jkkj")
    setdetail(iet)
    if(details){
      document.getElementById('my_modal_3').showModal()
    }
   
    
    
  }

  return (
    <div className='h-[75vh]'>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
           Index
          </label>
        </th>
        <th>Name</th>
        <th>contact</th>
        <th>type</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {data?.map((item,index)=>{return(
       <tr key={index}>
       <th>
         <label>
           {/* <input type="checkbox" className="checkbox" /> */}
           {index+1}
         </label>
       </th>
       <td>
         <div className="flex items-center space-x-3">
           <div className="avatar">
             <div className="mask mask-squircle w-12 h-12">
               <img src={item?.venueId?.image[0]} alt="Avatar Tailwind CSS Component" />
             </div>
           </div>
           <div>
             <div className="font-bold">{item?.venueId.name}</div>
             <div className="text-sm opacity-50">{item?.venueId?.location}</div>
           </div>
         </div>
       </td>
       <td>
        {item.venueId?.email}
         <br/>
         <span className="badge badge-ghost badge-sm">{item.venueId.mobile}</span>
       </td>
       <td>{item.venueId.type}</td>
       <th>
         <button onClick={()=>detail(item)} className="btn btn-ghost btn-xs">details</button>
       </th>
     </tr>
     )})}
    
    
      
     
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
</div>
<ReportUserModal data={details}/>
        
    </div>
  )
}

export default ReportVenor