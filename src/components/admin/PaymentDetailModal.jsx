import React, { useEffect, useState } from 'react'
import { VenueBookingDetail } from '../../service/AdminApi'

const PaymentDetailModal = ({id}) => {
    const [data, setdata] = useState([])
    useEffect(() => {

        if(id){
            try {
             VenueBookingDetail(id).then((res)=>{
                 console.log(res)
                 if(res.status===200){
                     setdata(res?.data?.result)
                 }
     
             }).catch((err)=>{
                 console.log(err)
             })
            } catch (error) {
             console.log(error)
            }
         }
   
    }, [id])

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

    // console.log(data,"4545")

  //pagniation
  const [currentPage, setcurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage !== 1) {
      setcurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== npage) {
      setcurrentPage(currentPage + 1);
    }
  };

  return (
    <>
    {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box w-11/12 max-w-5xl">
   
   <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>index</th>
        <th>payment id</th>
        <th>Advance Amount</th>
        <th>Date of function</th>
      </tr>
    </thead>
    <tbody>
    {records?.map((item,index)=>(
 <tr>
 <th>{index+1}</th>
 <td>{item.paymentId}</td>
 <td>{item.amount}</td>
 <td>{formatDate(item.date)}</td>
</tr>
    ))}
     
    
      
    </tbody>
  </table>

   </div>
  { data!=="undefined"?(
<div className="flex justify-center">
<div className="join mx-auto">
  <button className="join-item btn" onClick={prePage}>
    «
  </button>
  <button className="join-item btn">Page {currentPage}</button>
  <button className="join-item btn" onClick={nextPage}>
    »
  </button>
</div>
</div>
  ):null}
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </>
  )
}

export default PaymentDetailModal