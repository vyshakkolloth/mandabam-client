import React, { useState } from 'react'
import VerifyNoModal from"../../components/Vendor/VerifyNoModal"
import { changePassword, forgotPassword } from '../../service/UserApi'
import { toast,Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { showAlertError, showAlertSuccess, } from "../../service/showAlert";


const ForgetPassword = () => {
    const dispatch = useDispatch();

    const [phone, setphone] = useState("")
    const [user, setuser] = useState("")
    const [verify, setverify] = useState(false)
    const formik=useFormik({
        initialValues:{
         
          newPassword:"",
          reenterNewPassword:""
        },onSubmit:(values,{resetForm})=>{
            const data={user:user,values}
          changePassword(data).then((res)=>{
            if(res.status==200){
                showAlertSuccess(dispatch,"password changed")
                setuser("")
                setphone("")
                setverify(false)
                toast.success("password Changed")
                handeler()
            }
            console.log(res.data);
          }).catch((err)=>{
            showAlertError(dispatch,"axios error")
            console.log(err);
            showAlertError(dispatch,"axios error")
          })
    
        },validationSchema:Yup.object({
          newPassword: Yup
        .string()
        .required('New password is required')
        .min(6, 'New password must be at least 6 characters long'),
        reenterNewPassword: Yup
        .string()
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
        .required('Please re-enter the new password'),
    
        })
      })

    const handle=()=>{
        
    const modalCheckbox = document.getElementById("my_modal_6");
    modalCheckbox.checked = true;}
  const handeler=()=>{
    const modalCheckbox = document.getElementById("my_modal_5");
    modalCheckbox.checked = false;
    const mmodalCheckbox = document.getElementById("my_modal_6");
    mmodalCheckbox.checked = false;
  }
    const handleSubmit=()=>{
        forgotPassword(phone).then((res)=>{
            console.log(res.data)
            if(res.status==200){
                setuser(res.data.user)
                toast.success("uses found")
                handle()
            }else{
                toast.error("user not found")
            }

        })
        .catch((err)=>{
            console.log(err);
        })
    }    



  return (
    <>
     <Toaster toastOptions={3000} />
    {/* The button to open modal */}
{/* <label htmlFor="my_modal_5" className="btn">open modal</label> */}

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Enter your phone no.</h3>
   
    
        {!verify?(
            <div className="flex items-center justify-center">
            <div className='grid  gap-8 p-3'>
    <input type="number" onChange={(e)=>{setphone(e.target.value)}} placeholder="Enter your Phone no." className="input input-bordered w-full max-w-xs" />
    <button onClick={handleSubmit} className="btn btn-wide">Verify</button>
  </div>
</div>
        ):(
        <div className="flex items-center justify-center">
            <form onSubmit={formik.handleSubmit} >
            <div className='grid  gap-8 p-3'>
                 
        <input type="password"  name="newPassword"  onBlur={formik.handleBlur} value={formik.values.newPassword} onChange={formik.handleChange} placeholder="Enter Password" className="input input-bordered w-full max-w-xs" />
        {formik.errors.newPassword && formik.touched.newPassword ? (
                <label className="text-red-600">{formik.errors.newPassword}</label>
              ) : null}
        <input type="password" name="reenterNewPassword"  onBlur={formik.handleBlur}  value={formik.values.reenterNewPassword} onChange={formik.handleChange} placeholder="Re enter your Password." className="input input-bordered w-full max-w-xs" />
        {formik.errors.reenterNewPassword && formik.touched.reenterNewPassword ? (
                <label className="text-red-600">{formik.errors.reenterNewPassword}</label>
              ) : null}
        <button  type="submit" className="btn btn-wide">Verify</button>
      </div>
      </form>
    </div>
    )}
  





    <div className="modal-action">
      <label onClick={()=>{
        setphone("")
        setuser("")
      }} htmlFor="my_modal_5" className="btn">Close!</label>
    </div>
  </div>
</div>
    <VerifyNoModal mobile={setverify} phoneno={phone}  />
    </>
  )
}

export default ForgetPassword