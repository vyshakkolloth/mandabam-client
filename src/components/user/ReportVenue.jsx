import React from 'react'

const ReportVenue = (venueid) => {
  return (
    <>
     <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Report Inacurate Info!</h3>
    <textarea placeholder="if there is any error in the code please us know" 
    className="textarea textarea-bordered textarea-sm w-full max-w-xl" ></textarea>
    <button className='btn '> submit</button>
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

export default ReportVenue