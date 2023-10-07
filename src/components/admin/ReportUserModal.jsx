import React from 'react'
import { useState } from 'react'

const ReportUserModal = ({data}) => {

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
    <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
   
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>complaint</th>
        <th>date</th>
      </tr>
    </thead>
    <tbody>
   
    {data?.Report?.map((item,index)=>(
        <tr>
        <th>{index+1}</th>
        <td>{item?.userid?.email}</td>
        <td>{item?.text}</td>
        <td>{formatDate(item?.timestamp)}</td>
      </tr>

    ))}
      
    </tbody>
  </table>
</div>
  </div>
</dialog>
    </>
  )
}

export default ReportUserModal
