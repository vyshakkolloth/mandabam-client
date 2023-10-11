import React, {  useState } from "react";
import { toast, Toaster } from "react-hot-toast";

// import Googleauth from "../../components/user/googleauth";

import { IoPersonCircle } from "@react-icons/all-files/io5/IoPersonCircle";
import { IoCloseCircleSharp } from "@react-icons/all-files/io5/IoCloseCircleSharp";
import { ImSpinner } from "@react-icons/all-files/im/ImSpinner";

import {  Link, useNavigate } from "react-router-dom";

import { loginService } from "../../service/UserApi";
import { login } from "../../redux/user";
import { useDispatch } from "react-redux";
import ForgetPassword from "./ForgetPassword";

const userLogin = () => {
  const [email, setemail] = useState("");
 
  const [password, setpassword] = useState("");
  const [label, setlabel] = useState(false);
  const [active, setdisable] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const patternEmail = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;

  const checkEmail=()=>{
    const result = patternEmail.test(email);
    if (result) {
      setlabel(false);
      setdisable(false);
    } else {
      setdisable(true);
      setlabel(true);
    } }
  

  const handleAdmin = async (e) => {
    if (email === "" || password === "") {
      toast.error("Enter valid details");
      setLoading(false);

    } else {
      const data = { email, password };
      loginService(data, "email")
        .then((res) => {
          console.log(res.data);
          if (res.data.status === 200) {
            setLoading(false);
            localStorage.setItem("userToken", res.data.token);
            dispatch(login(res.data.result));
            
            navigate("/")

            toast.success("forwarding to Home page");
            
            
          } else if (res.data.status === 401) {
            setLoading(false);

            toast.error(res.data.message);
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }
    setLoading(true);
  };

  return (
    <>
      <section className="bg-gray-200 h-full min-w-min flex items-center justify-center ">
        {/* login container */}
        <div className="bg-cyan-100 h-3/5 flex shadow-lg max-w-2xl">
          {/* image */}
          <div className="w-1/2 p-5 sm:block hidden">
            <img className="rounded-2xl h-full object-cover" src="/images/01.jpg" alt="" />
          </div>

          {/* form */}
          <div className="sm:w-1/2 pt-16 px-5 ">
            <h2 className="font-bold text-2xl">Sign In</h2>
            <div className="flex flex-col  gap-4">
              <div className="border-slate-400 flex flex-row p-2 rounded-md bg-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">
                <span className="m-auto border-r px-1">
                  <IoPersonCircle color="pink" size={28} />
                </span>
                <Toaster toastOptions={3000} />
                <input
                  name="email"
                  onChange={(e) => {
                    setemail(e.target.value);
                    const result = patternEmail.test(email.trim());
    if (result) {
      setlabel(false);
      setdisable(false);
    } else {
      setdisable(true);
      setlabel(true);
    } 
                    
                  }}
                  placeholder="Enter your mobile number"
                  className="grow  pl-1 focus:outline-none bg-white py-1 "
                  type="text"
                  value={email}
                />
                <span
                  onClick={() => {
                    setemail("");
                    setlabel(false);
                    setdisable(true);
                    setLoading(false);
                  }}
                  className="m-auto px-1"
                >
                  <IoCloseCircleSharp color="pink" size={28} />
                </span>
              </div>
              {label ? (
                <label className="block text-red-600 text-sm">
                  Please enter a valid email .
                </label>
              ) : null}

              {!active ? (
                <input
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  className=" mt-8 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  type="password"
                  max="6"
                  name="otp"
                  id="cvb"
                  placeholder="Enter password"
                  value={password}
                />
              ) : null}

              <button
                onClick={handleAdmin}
                disabled={active}
                className="btn-accent rounded py-1 bg-pink-400 border-none flex justify-center gap-1 items-center text-white"
              >
                {loading ? (
                  <ImSpinner className="animate-spin"></ImSpinner>
                ) : null}
                <span>Sign In</span>
              </button>
              <label>
                Sign in Already ?{" "}
                <Link to={"/signUp"}>
                  <span className="mx-2 text-blue-700 font-bold link"> SIGN UP</span>
                </Link>
              </label>
              <label htmlFor="my_modal_5" className=" link">Forget Password?</label>


              <div id="sign-in-button"></div>

              {/* <hr className="w-auto my-4 border-t-2 border-l-amber-900800" /> */}
              <div className="divider">OR</div>

              <div className=" flex m-auto">
                {/* <Googleauth /> */}
              </div>
            </div>
            <div className=" m-2 flex ">
              <p className="text-sm"> Are you a vendor?</p>
              {/* <Link to="/venue"> */}
              <button
                onClick={() => {
                  navigate("/venue");
                }}
                className="btn bg-blue-500 rounded-xl text-white border-none ml-6 hover:"
              >
                Business Sign in
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </section>
      <ForgetPassword/>
    </>
  );
};

export default userLogin;
