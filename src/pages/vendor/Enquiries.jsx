import React, { useEffect, useState } from "react";
import { booking,changeBooking } from "../../service/vendorApi";
import { toast,Toaster } from "react-hot-toast";

const Enquiries = () => {
  const [data, setdata] = useState([]);
  const [reloadData, setReloadData] = useState(false); 
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
        console.log(res.data.message)
        toast.success(res.data?.message)
    }).catch((error)=>{
        console.log(error)
        toast.error(error)
    })

  }

  return (
    <div className="bg-white h-full p-5">
      <Toaster toastOptions={3000} />
      <div className="flex gap-4">
      {data?.map((item, index) => (
        <div key={index} className="card w-96 bg-primary text-neutral-content">
          <div className="card-body ">
            <h2 className="card-title">{item?.date}</h2>

            <p> Name: {item?.name} </p>
            <p>email: {item?.email}</p>
            <p>No. of guest:{item?.guest}</p>
            <p>Function Type: {item?.type}</p>
            <p>contact: {item?.Phone} </p>
            <p>Function Time:{item?.time}</p>
            <p>Status:{item?.status?(<a>True</a>):(<a>False</a>)}</p>




            <div className="card-actions justify-end">
              <button value="Accept" disabled={item?.status} onClick={(e)=>{clickeHandle(item?._id)}} className="btn btn-secondary">Accept</button>
              <button value="deny" disabled={!item?.status} onClick={(e)=>{clickeHandle(item?._id)}}  className="btn btn-ghost">Deny</button>
              {}
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Enquiries;
