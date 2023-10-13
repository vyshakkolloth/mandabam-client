import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast,Toaster } from "react-hot-toast";
import { Venderlogin } from "../../service/vendorApi";
import { useDispatch } from "react-redux";
import { vlogin } from "../../redux/vendor";

const adminLogin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const vendorHandle = (e) => {
    e.preventDefault()
    if(email==""||password==""){
      toast.error("fill the field")
    }else if(!emailRegex.test(email)){
      toast.error("Enter a valid email")
    }else{
      Venderlogin(email,password).then((res)=>{
        
        if(res.data.status==200){
          localStorage.setItem("venderToken",res.data.token)
          dispatch(vlogin(res.data.result))
          navigate("/venue/information")
          console.log(res.data)
          
          
        }else{
          console.log(res)
          toast.error(res.data.message)
        }

      }).catch((err)=>{console.log(err)
      alert(err)}
      )
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
          </div>
          {/* form */}
          <div className="sm:w-1/2 pt-16 mx-5">
            <h2 className="font-bold text-2xl">Sign In/Sign Up</h2>
            <div className="flex flex-col gap-4">
              <input
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                className=" mt-8 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                type="email"
                name="email"
                
                placeholder="Enter email *"
              />

              <input
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                className=" mt-8 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                type="password"
                name="password"
                
                placeholder="Enter password*"
              />

              <button
                className="rounded bg-pink-600 text-white border-none"
                onClick={vendorHandle}
              >
                sign in
              </button>
              <label className="text-base">Registor as Vendor?<span onClick={()=>{navigate('/venue/loginVenue')}} className="text-indigo-400 hover:cursor-pointer">Sign Up</span></label>
            </div>
            <div className="outline-dashed bg-white flex mt-10 items-center py-2">
              <p>Are you a customer ?</p>
              <button onClick={()=>{navigate("/login") }} className="mx-1 bg-pink-600 text-white p-1">
                {" "}
                Customer Sign in
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default adminLogin;
