import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import { ReportVenues } from "../../service/UserApi";
import { toast, Toaster } from "react-hot-toast";
const ReportVenue = (venueid) => {
    const navigate=useNavigate()
    
    const formik= useFormik({
        initialValues:{
            text:"",
            venueid:venueid?.venueId
        },
        onSubmit:(values,{resetForm})=>{
            resetForm();

            try {
                ReportVenues(values).then((res)=>{

                    if(res.status===200){
                        toast.success("Report Posted")
                      }

                    console.log(res.data)

                }).catch((err)=>{
                    if(err?.response?.status===401){
                        toast.error("Please Log in")
                      }
                  
                    console.log(err)
                })
            } catch (error) {
                
            }


        },validationSchema:Yup.object({
            text: Yup.string("must be letters")
            .min(10, "must be 15 char or more")
            .required("required")
        })
    })

  return (
    <>
      <Toaster toastOptions={3000} />
     <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Report Inacurate Info!</h3>
    <form onSubmit={formik.handleSubmit}>
    <textarea 
       name="text"
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     value={formik.values.text}
    placeholder="if there is any error in the code please us know" 
    className="textarea textarea-bordered textarea-sm w-full max-w-xl" ></textarea>
    {formik.touched.text && formik.errors.text ? (
              <div className="text-red-500">{formik.errors.text}</div>
            ) : null}
    <button type="submit" className='btn '> submit</button>
    </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button   className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </>
  )
}

export default ReportVenue