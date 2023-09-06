import React, { useEffect, useState } from "react";
import { profile,password } from "../../service/UserApi";
import { useDispatch } from "react-redux";
import { FaPenFancy } from '@react-icons/all-files/fa/FaPenFancy';
import { showAlertError, showAlertSuccess, showAlertWarning } from "../../service/showAlert";
import { useFormik } from "formik";
import * as Yup from "yup";
import Filemodal from "../../components/user/Filemodal";

const Profile = () => {
  const dispatch = useDispatch();
  const [data, setdata] = useState([]);
  useEffect(() => {
    profile()
      .then((res) => {
        // console.log(res.data.data);
        setdata(res.data.data);
        // setdata[res]
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const formik=useFormik({
    initialValues:{
      password:""
      ,newPassword:"",
      reenterNewPassword:""
    },onSubmit:(values,{resetForm})=>{
      password(values).then((res)=>{
        // console.log(res.data)
        if(res.data.auth){
          showAlertSuccess(dispatch,"password changed")
          resetForm()

        }else{
          showAlertWarning(dispatch,res.data.message)
        }
        
      }).catch((err)=>{
        console.log(err)
        // showAlertWarning(dispatch,err)
      })

    },validationSchema:Yup.object({
      password:Yup.string("must be filled").max(10,"max 10 character").required('Active password is required').min(6, 'Active password must be at least 6 characters long'),
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
  // console.log(formik.errors)
  const filehandle=()=>{
    const modalCheckbox = document.getElementById("my_modal_6");
  modalCheckbox.checked = true;
  }

  return (
    <div className="py-5 container mx-auto">
      <div className="flex justify-center ">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={data?.image}/>
          </div>
        </div>
      </div>
      <div  className="flex justify-center p-3 gap-3 hover:text-2xl hover:text-blue-500 text-sm">
        {" "}
        <label htmlFor="my_modal_6" className="btn">Change Photo <FaPenFancy/> </label>
      </div>
      <div className="flex justify-center p-3 text-sm">
        {" "}
        NAME:<span className="mx-1">{data?.name}</span>
      </div>
      <div className="flex justify-center p-3 text-sm">
        {" "}
        EMAIL:<span className="mx-1">{data?.email}</span>
      </div>
      <div className="flex justify-center p-3 text-sm">
        {" "}
        PHONE:<span className="mx-1">{data?.phone}</span>
      </div>



      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" defaultChecked/>
        <div className="collapse-title text-xl font-medium">
         Password change
        </div>
       
        <div className="collapse-content  ">
        <form onSubmit={formik.handleSubmit} className="flex items-center flex-col gap-3 w-75grow-0">
       
          <input type="password" className="input"  value={formik.values.password} onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="password" placeholder="Active password"/>
                 {formik.errors.password && formik.touched.password ? (
                <label className="text-red-600">{formik.errors.password}</label>
              ) : null}
          <input type="text" className="input" value={formik.values.newPassword} onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="newPassword" placeholder="New password"/>
                 {formik.errors.newPassword && formik.touched.newPassword ? (
                <label className="text-red-600">{formik.errors.newPassword}</label>
              ) : null}
          <input type="password" className="input"  value={formik.values.reenterNewPassword} onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="reenterNewPassword" placeholder="Re enter New  password"/>
                 {formik.errors.reenterNewPassword && formik.touched.reenterNewPassword ? (
                <label className="text-red-600">{formik.errors.reenterNewPassword}</label>
              ) : null}
          <input type="submit" className=" btn "/>
          
        </form>
        </div>
      </div>
      <div className="collapse bg-base-200 mt-2">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          Email change
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
 <Filemodal/>


    </div>
  );
};

export default Profile;
