import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Adminlogin} from "../../service/AdminApi";
import { toast,Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import {login} from"../../redux/admin"

const adminLogin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const dispatch= useDispatch()

  const handleAdmin = (e) => {
    e.preventDefault();
    if(email===""||password=="")
    {
      toast.error("Enter Valid Detail")
    }else{
      Adminlogin(email,password).then((res)=>{
        if(res.data.status==200){
          localStorage.setItem("adminToken",res.data.token)
          dispatch(login(res.data.result))
          navigate("/admin/home")
        }else{
          toast.error(res.data.message)
        }
      }).catch((err)=>{
        console.log(err);
      })
    }
   
    
  };

  return (
    <>
     <Toaster toastOptions={3000} />
      <section className="bg-gray-100 min-h-screen flex items-center justify-center">
        
        {/* login container */}
        <div className="bg-cyan-100 flex shadow-lg max-w-4xl">
          {/* image */}
          <div className="w-1/2 p-5 sm:block hidden">
            <img className="rounded-2xl" src="/images/vendor-auth.png" alt="" />
            {/* <img src="/images/vendor-auth.png" alt="" /> */}
          </div>
          {/* form */}
          <div className="sm:w-1/2 pt-16 px-5">
            <h2 className="font-bold text-2xl">Sign In/Sign Up</h2>
            <div className="flex flex-col gap-4">
              <input
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                className=" mt-8 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                type="text"
                name="email"
                id="cvcv"
                placeholder="Enter email or mobile*"
              />

              <input
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                className=" mt-8 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                type="password"
                name="password"
                id="cvb"
                placeholder="Enter password*"
              />

              <button onClick={handleAdmin} className="btn-primary">
                sign in
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default adminLogin;
