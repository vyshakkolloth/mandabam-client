import axios from "axios";
import { userAxiosInstance } from "../axios/instance";

const loginService=(data,type)=>{
    return userAxiosInstance.post("/login",{data,type})
}
const signUpUser=(data)=>{
   
    return userAxiosInstance.post("/signup",{data})
}
const venueDetail=(id)=>{
    
 return userAxiosInstance.get(`/venueDetail/${id}`)
}
const booking=(data,venueId,userId)=>{
    
    return userAxiosInstance.post("/booking",{data,venueId,userId})
}
const authUser=()=>{
     
     return userAxiosInstance.get("/authUser")
    }
const profile=()=>userAxiosInstance.get("/profile")
const enquire=()=>userAxiosInstance.get("/enquire")
const search=(id)=>userAxiosInstance.get(`/search/${id}`)
const password=(data)=>userAxiosInstance.post("/password",{data})
const changePassword=(data)=>userAxiosInstance.post("/changePassword",{data})
const datePicker=(data)=>userAxiosInstance.post("/datePicker",{data})
const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
const changeDp=(data)=>{ 
  return userAxiosInstance.post("/changeDp",data,config)}
const forgotPassword=(data)=>userAxiosInstance.post("/forgotPassword",{data})
const   sentMessage=(data)=>userAxiosInstance.post("/sentMessage",{data})
const userList=()=>userAxiosInstance.get("/userList")
const getUserMessage=(data)=>userAxiosInstance.post("/getMessage",{data})
const PostuserMessage=(data)=>userAxiosInstance.post("/postuserMessage",{data})
const paymentCreate=(data)=>userAxiosInstance.post("/paymentCreate",{data})
const paymentVerify=(data,id)=>userAxiosInstance.post("/paymentVerify",{data,id})
const bookedVenue=()=>userAxiosInstance.get("/bookedVenue")

const postReview=(data)=>userAxiosInstance.post("/postReview",{data})
const getReview=(id)=>userAxiosInstance.get(`/getReview/${id}`)
const ReportVenues=(data)=>userAxiosInstance.post("/ReportVenue",{data})
const venueList=()=>userAxiosInstance.get("/venueList")
export{
    loginService,sentMessage,getUserMessage,bookedVenue,postReview,getReview,venueList,
    signUpUser,PostuserMessage,paymentCreate,paymentVerify,datePicker,ReportVenues,
    venueDetail,booking,enquire,profile,search,password,authUser,changeDp,forgotPassword,changePassword,userList,
}
