import React, { useState } from 'react'
import { toast,Toaster } from "react-hot-toast";
import { signUpUser } from '../../service/UserApi';
import {  Link, useNavigate } from "react-router-dom";
import { showAlertError,showAlertSuccess } from '../../service/showAlert';

import{useDispatch} from "react-redux"
import VerifyNoModal from '../../components/Vendor/VerifyNoModal';

const UserSIgnin = () => {
  const dispatch = useDispatch();
const [name, setname] = useState("")
const [email, setemail] = useState("")
const [phone, setphone] = useState("")
const [password, setpassword] = useState()
const navigate = useNavigate();
const [verify, setVerfify] = useState(false);

const handleSubmit=()=>{
  if(name==""||email==""||phone==""||password=="")
  {
    toast.error("fill the field")
  }
  else{
    const data={name,email,password,phone}
    signUpUser(data).then((res)=>{
      console.log(res.data.message);
      const message=res.data.message
      if(res.data.status==200){
        // console.log("sucess");
        showAlertSuccess(dispatch,"created sucessfull")
        //  navigate("/login")
        setname("")
        setemail("")
        setpassword("")
        setphone("")
        setVerfify(false)

      }else{
        showAlertError(dispatch,message)
        toast.error("enter valid details")
      }

    }).catch((err)=>{
      console.log(err.message)
      toast.error("error")
      
    })
  }
}
const handelsignup = () => {
  const phoneNumberPattern = /^\d{10}$/;
  if(phoneNumberPattern.test(phone)){
  const modalCheckbox = document.getElementById("my_modal_6");
  modalCheckbox.checked = true;}
  else{ 
    showAlertError(dispatch,"please type vallied phone no.")
  }
  
};

  return (
    <>
    <Toaster toastOptions={3000} />
    <div id="sign-in-button"></div>
      <section className="bg-white min-h-screen flex items-center justify-center">
        <div className="flex shadow-2xl max-w-6xl">
          {/* 1st section */}
          <div className="w-1/2 sm:block hidden">
            <img className="rounded" src="/images/vendor-auth.png" alt="" />
          </div>
          {/* 2nd piece */}
          <div className="p-5 mt-2 flex flex-col w-1/2 sm:w-auto gap-3">
            <h2 className="font-bold text-2xl">
              Plan your wedding with <span className='text-pink-600'>Mandabam.com</span>
            </h2>
          <div className='mt-5  grid'>
            <label >User name*</label>
          <input
              type="text"
              value={name}
              onChange={(e)=>{setname(e.target.value)}}
              className="bg-white py-2  border-b border-green-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
              placeholder="please write your Name"
            />
          </div>
          <div className='mt-5  grid'>
            <label >Email*</label>
          <input
              type="email"
              value={email}
              onChange={(e)=>{setemail(e.target.value)}}
              className="bg-white py-2  border-b border-green-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
              placeholder="please write your gmail"
            />
          </div>
          <div className='mt-5  grid'>
            <label >Mobile*</label>
          <input
              type="number"
              disabled={verify}
              value={phone}
              onChange={(e)=>{setphone(e.target.value)}}
              className="bg-white py-2  border-b border-green-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
              placeholder="please write your phone No"
            />
          </div>
          <div className='mt-5  grid'>
            <label >password*</label>
          <input
          onChange={(e)=>{setpassword(e.target.value)}}
              type="Password"
              value={password}
              className="bg-white py-2  border-b border-green-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
              placeholder="please write your password"
            />
          </div>
            
            {!verify?( <button
                type="submit"
                onClick={handelsignup}
                className=" rounded justify-center p-5 bg-blue-500 outline-none font-semibold text-white"
              >
                {" "}
                veriify you phone{" "}
              </button>):( <button
                type="submit"
                onClick={handleSubmit}
                className=" rounded justify-center p-5 bg-blue-500 outline-none font-semibold text-white"
              >
                {" "}
                submit{" "}
              </button>
)}
               
              <label> Already have an account<Link to={"/login"}> <span  className='font-bold text-pink-600'> log in </span> </Link></label>
              <VerifyNoModal mobile={setVerfify} phoneno={phone} />
          </div>
        </div>
      </section>
    </>
  )
}

export default UserSIgnin