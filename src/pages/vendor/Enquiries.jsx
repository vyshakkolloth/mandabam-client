import React, { useEffect, useState } from "react";
import { booking,changeBooking,acceptEnquire } from "../../service/vendorApi";
import { toast,Toaster } from "react-hot-toast";
import PreviousEnquires from "../../components/Vendor/PreviousEnquires";
import ConfirmedEnquire from "../../components/Vendor/ConfirmedEnquire";

const Enquiries = () => {
  const [data, setdata] = useState([]);
  const [reloadData, setReloadData] = useState(false); 
  const [amount, setamount] = useState("")
  useEffect(() => {
    booking()
      .then((res) => {
        const data = res.data.data;
        setdata(data??[]);
        setReloadData(!reloadData);

      })
      .catch((error) => {
        console.log(error);
      });
  }, [reloadData]);
  const clickeHandle=(id)=>{
    setReloadData(!reloadData);
    changeBooking(id).then((res)=>{
        // console.log(res.data.message)
        toast.success(res.data?.message)
    }).catch((error)=>{
        console.log(error)
        toast.error(error)
    })

  }
  const handlesubmit=(id)=>{
    if(amount===""||amount<0){
      alert()
      toast.error("enter a valid booking amount")
    }else{
      const data={id:id,amount:amount}
    try {
      acceptEnquire(data).then((res)=>{
        if(res.status===200){
          toast.success(res?.data?.message)
          setamount("")
          modal()
        }else{
          toast.error("axios error",res.data?.message)
        }
      
      }).catch((err)=>{
        console.log(err,"submit error")
      })
    } catch (error) {
      console.log(error,"submit try catch")
    }
  }
  }
const modal=()=>{
  const modalCheckbox = document.getElementById("my_modal_5");
  if(modalCheckbox){
  modalCheckbox.close()
  }
}

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
    <div className="bg-white h-full p-5">
      <div className="bg-rose-100 p-5 flex justify-between rounded-sm my-5">
        <div className="link-hover btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>Previous Enquiries</div>
        <div className="link-hover btn" onClick={()=>document.getElementById('my_modal_8').showModal()} >Confirmed </div>
      </div>
      <Toaster toastOptions={3000} />
      <div className="flex gap-4">
      {data?.map((item, index) => (
        <div key={index} className="card w-96 bg-pink-500  ">
          <div className="card-body ">
            <h2 className="card-title">{formatDate(item?.date)}</h2>

            <p > Name: {item?.name} </p>
            <p>email: {item?.email}</p>
            <p>No. of guest:{item?.guest}</p>
            <p>Function Type: {item?.type}</p>
            <p>contact: {item?.Phone} </p>
            <p>Function Time:{item?.time}</p>
            <p>Status:{item?.status?(<a>True</a>):(<a>False</a>)}</p>




            <div className="card-actions justify-end">
              <button value="Accept" disabled={item?.status} onClick={()=>document.getElementById('my_modal_5').showModal()}className="btn btn-alert">Accept</button>
              <button value="deny" disabled={!item?.status} onClick={(e)=>{clickeHandle(item?._id)}}  className="btn btn-ghost">Deny</button>
              {}
            </div>
            {/*  */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
                {/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box">
                    <div className="flex justify-center items-center">
                      <p className="text font-bold text-primary">Enter the advance</p>
                      <input placeholder="Type here" className="input input-bordered w-full max-w-xs" value={amount} onChange={(e)=>setamount(e.target.value)} type="number"></input>
                      
                    </div>
                    <div className="flex justify-center my-2">
                       <button onClick={()=>handlesubmit(item?._id)} className="btn btn-neutral">Accept</button>
                       </div>
                    
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
            {/*  */}
            
          </div>
        </div>
        ))}
      </div>
      <PreviousEnquires/>
      <ConfirmedEnquire/>
    </div>
  );
};

export default Enquiries;
