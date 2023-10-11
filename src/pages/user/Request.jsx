import React, { useEffect, useState } from 'react'
import { enquire } from '../../service/UserApi'
import { toast,Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PaymentModal from '../../components/user/PaymentModal';


const Request = () => {
  const navigate = useNavigate();
    const [data, setdata] = useState([])
    const [payment, setpayment] = useState([])
   useEffect(() => {
     
    enquire().then((res)=>{
      // console.log(res,"+555")
      if(res.status==200){
        setdata(res.data.data)
      }
      
      // setReloadData(!reloadData);
  }).catch((err)=>{
      console.log(err,"eeee")
      navigate("/500")
  })
     
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
    <>
    <div className="bg-white h-[75vh] p-5">
      <Toaster toastOptions={3000} />
      <div className="flex gap-4">
        {data?.length!==0?(data?.map((item, index) => (
          <>
        <div key={index} className={`card w-96   ${item?.status?"bg-success":"bg-warning"} text-neutral-content`}>
          <div className="card-body ">
            <h2 className="card-title">{formatDate(item?.date)}</h2>

            <p> Name: {item?.name} </p>
            <p>email: {item?.email}</p>
            <p>No. of guest:{item?.guest}</p>
            <p>Function Type: {item?.type}</p>
            <p>contact: {item?.Phone} </p>
            <p>Function Time:{item?.time}</p>
            <p>Status:{item?.status?(<a className='text-green-700 font-semibold'>Accept</a>):(<a>Pending</a>)}</p>
            {item?.status?(<p>Amount: {item.amount}</p>):null}




            <div className="card-actions justify-end">
              <button value="Proced" disabled={!item?.status} onClick={()=>{document.getElementById('my_modal_5').showModal(); setpayment(item)}} className="btn ">proceed</button>
              <PaymentModal item={payment}/>
              
            </div>
          </div>
        </div>
        </>
        ))):(  <div
          className="hero min-h-screen"
          style={{ backgroundImage: 'url("/images/ResultNotFound.jpg")' }}
        >
          <div className="hero-overlay bg-opacity-10"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl text-red-700 font-bold">
                No Result found
              </h1>
            </div>
          </div>
        </div>)}
     
      </div>
    </div>

    </>
  )
}

export default Request