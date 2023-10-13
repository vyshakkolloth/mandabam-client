import React, { useEffect, useState } from "react";
import { State, City } from "country-state-city";
import Selector from "../../components/Vendor/Selector"; // Make sure this path is correct
import VerifyNoModal from "../../components/Vendor/VerifyNoModal";
import { toast,Toaster } from "react-hot-toast";
import{signUp} from "../../service/vendorApi"
import { useNavigate } from "react-router-dom";
import{useDispatch} from "react-redux"
import { showAlertError,showAlertSuccess } from '../../service/showAlert';
import Alert from "../../components/alert/Alert";




const VendorSignin = () => {
  const dispatch = useDispatch();
  const stateData = City.getCitiesOfState("IN", "KL"); // State.getStatesOfCountry("IN");
  const [state, setstate] = useState(stateData[0]); // Changed countryData to stateData
  const [Vname, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const [verify, setVerfify] = useState(false);
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
  const navigate = useNavigate();
  

 

  const handelsignup = () => {
    const phoneNumberPattern = /^\d{10}$/;
    if(phoneNumberPattern.test(phone)){
    const modalCheckbox = document.getElementById("my_modal_6");
    modalCheckbox.checked = true;}
    else{ 
      showAlertError(dispatch,"please type vallied phone no.")
    }
    
  };

  const handleSupmit=()=>{
    const data={Vname,state,email,phone,password}
    if(state===""||Vname.trim().length<4||email===""||phone===""||password===""){
     toast.error("enter valid information")
    }else if(!emailRegex.test(email)){
        toast.error("enter valid email")
    }else{
      
        signUp(data).then((res)=>{
            if(res.data.status==200){
              console.log(res.data);
                navigate("/venue/")
            }else if(res.data.status==400){
              toast.error(res.data.message)
              setVerfify(false)
              
            }
        }).catch((err)=>{
            setVerfify(false)
            toast.error("eror")
        })

    }

  }

  return (
    <>
    <Toaster toastOptions={3000} />
    <Alert/>
    
      <section className="bg-white min-h-screen flex items-center justify-center">
        <div className="flex shadow-2xl max-w-6xl">
          {/* 1st section */}
          <div className="w-1/2 sm:block hidden">
            <img className="rounded" src="/images/vendor-auth.png" alt="" />
          </div>
          {/* 2nd piece */}
          <div className="p-5 mt-2 flex flex-col w-1/2 sm:w-auto gap-3">
            <h2 className="font-bold text-2xl">
              Grow your Business with Mandabam.com
            </h2>
            <input
            title="Enter your company name"
              type="text"
              value={Vname}
              onChange={(e) => {
                setname(e.target.value);
              }}
              className="bg-white py-2 mt-5 border-b border-green-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
              placeholder="Brand Name*"
            />
            <div>
              <Selector
                data={stateData}
                selected={state}
                setSelected={setstate}
                className="bg-white mt-5"
              />
            </div>
            <input
              type="email"
              value={email}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              onChange={(e) => {
                setemail(e.target.value);
              }}
              className="bg-white py-2 mt-5 border-b border-green-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
              placeholder="Enter your email"
            />
            <input
              type="number"
              value={phone}
              onChange={(e) => {
                setphone(e.target.value);
              }}
              pattern="[789][0-9]{9}"
              className="bg-white py-2 mt-5 border-b border-green-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
              placeholder="Enter your phone no."
            />
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              className="bg-white py-2 mt-5 border-b border-green-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
              placeholder="Enter password"
            />
            {!verify?(<button
              type="submit"
              onClick={handelsignup}
              className="btn bg-blue-500 outline-none font-semibold text-white"
            >
              {" "}
              Verify your Detail{" "}
            </button>):(
                <button
                type="submit"
                onClick={handleSupmit}
                className="btn bg-blue-500 outline-none font-semibold text-white"
              >
                {" "}
                submit{" "}
              </button>
            )}
            <div className="flex font-serif text-lg text-blue-300 justify-center items-center ">
              Go to login page<span onClick={()=>{navigate("/venue")}} className="text-blue-700 font-bold m-4 hover:text-blue-950 hover:cursor-pointer"> LOG IN</span>
            </div>
          </div>
          <VerifyNoModal mobile={setVerfify} phoneno={phone} />
        </div>
      </section>
    </>
  );
};

export default VendorSignin;
